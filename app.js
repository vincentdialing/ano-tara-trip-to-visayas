/**
 * Visayan Heritage Itinerary - App Controller
 * Handles tabs, timeline filters, dynamic budget calculations, and checklist state.
 */

// Global State
let state = {
  activeTab: "itinerary",
  activeDay: 1,
  paxCount: 4,
  foodBudgetPerDay: 600, // standard PHP per day per person
  budgetDisplayMode: "person", // "person" or "group"
  activeBudgetFilter: "all",
  checklist: [],
  completedActivities: {}
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initItinerary();
  initBudget();
  initHeritage();
  initTips();
  initChecklist();

  // Dismiss Splash Screen
  const splash = document.getElementById("splash-screen");
  if (splash) {
    setTimeout(() => {
      splash.style.opacity = "0";
      setTimeout(() => {
        splash.style.display = "none";
      }, 600); // Wait for the 0.6s opacity transition to complete
    }, 2500); // Keep visible for 2.5s for a clean intro
  }
});

/* ==========================================================================
   1. TAB NAVIGATION
   ========================================================================== */
function initTabs() {
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  // Update state
  state.activeTab = tabId;

  // Update Nav Buttons
  document.querySelectorAll(".nav-btn").forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update Tab Content View
  document.querySelectorAll(".tab-content").forEach(content => {
    content.classList.remove("active");
  });
  
  const activeTabContent = document.getElementById(`tab-${tabId}`);
  if (activeTabContent) {
    activeTabContent.classList.add("active");
    // Scroll to top of main container when switching tabs
    document.querySelector(".app-main").scrollTop = 0;
  }
}

/* ==========================================================================
   2. ITINERARY CONTROLLER
   ========================================================================== */
function initItinerary() {
  const daySelector = document.getElementById("day-selector");
  daySelector.innerHTML = "";

  // Load completed activities from localStorage
  const savedActivities = localStorage.getItem("visayan_completed_activities");
  if (savedActivities) {
    state.completedActivities = JSON.parse(savedActivities);
  } else {
    state.completedActivities = {};
  }

  // Render Day Buttons
  ITINERARY_DATA.forEach(dayData => {
    const btn = document.createElement("button");
    btn.className = `day-btn ${state.activeDay === dayData.day ? 'active' : ''}`;
    btn.innerText = `Day ${dayData.day}`;
    btn.addEventListener("click", () => {
      // Update Day Button States
      document.querySelectorAll(".day-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      state.activeDay = dayData.day;
      renderTimelineForDay(dayData.day);
    });
    daySelector.appendChild(btn);
  });

  // Render Initial Day (Day 1)
  renderTimelineForDay(state.activeDay);
  
  // Render overall progress
  updateItineraryProgress();
}

function renderTimelineForDay(dayNumber) {
  const container = document.getElementById("itinerary-cards-container");
  container.innerHTML = "";

  const dayData = ITINERARY_DATA.find(d => d.day === dayNumber);
  if (!dayData) return;

  // 1. Render Day Summary Card
  const summaryCard = document.createElement("div");
  summaryCard.className = "day-summary-card";
  
  let accommodationText = "";
  if (dayData.accommodation) {
    accommodationText = `🏡 Stay: ${dayData.accommodation.name} (${dayData.accommodation.type}) - ${dayData.accommodation.location}`;
  } else {
    accommodationText = "✈ Flight back to Davao tonight";
  }

  summaryCard.innerHTML = `
    <h3>${dayData.date} • ${dayData.title}</h3>
    <p>${dayData.description}</p>
    <div class="day-meta-pill">
      <span>${accommodationText}</span>
    </div>
  `;
  container.appendChild(summaryCard);

  // 2. Timeline Wrapper
  const timelineWrapper = document.createElement("div");
  timelineWrapper.className = "timeline-container";

  // 3. Render Activities
  dayData.activities.forEach((act, actIndex) => {
    const actCard = document.createElement("div");
    
    // Check if this activity is marked completed
    const key = `${dayNumber}_${actIndex}`;
    const isCompleted = !!state.completedActivities[key];
    
    actCard.className = `activity-card ${isCompleted ? 'completed' : ''}`;

    // Format cost based on global scale (default 4 pax reference)
    let displayCostText = "";
    if (act.cost === 0) {
      displayCostText = "FREE";
    } else {
      // Dynamically estimate cost based on paxCount
      const estimatedCost = calculateDynamicItemCost(act.title, act.cost, act.desc);
      if (state.budgetDisplayMode === "person") {
        displayCostText = `₱${Math.round(estimatedCost / state.paxCount).toLocaleString()}/pax`;
      } else {
        displayCostText = `₱${Math.round(estimatedCost).toLocaleString()} total`;
      }
    }

    actCard.innerHTML = `
      <div class="activity-node"></div>
      <button class="activity-toggle-btn" aria-label="Mark as done">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
        </svg>
      </button>
      <span class="activity-time-badge">${act.time}</span>
      <h4>${act.title}</h4>
      <p class="activity-desc">${act.desc}</p>
      <div class="activity-footer">
        <span class="activity-cost">${displayCostText}</span>
        <span class="activity-note-pill" title="${act.notable}">${act.notable}</span>
      </div>
    `;
    
    // Bind toggle button click event
    const toggleBtn = actCard.querySelector(".activity-toggle-btn");
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      state.completedActivities[key] = !state.completedActivities[key];
      
      if (state.completedActivities[key]) {
        actCard.classList.add("completed");
      } else {
        actCard.classList.remove("completed");
      }
      
      localStorage.setItem("visayan_completed_activities", JSON.stringify(state.completedActivities));
      updateItineraryProgress();
    });

    timelineWrapper.appendChild(actCard);
  });

  container.appendChild(timelineWrapper);

  // 4. Render Day Tips
  if (dayData.tips) {
    const tipDiv = document.createElement("div");
    tipDiv.className = "timeline-day-tips";
    tipDiv.innerHTML = `<strong>Day Tip:</strong> ${dayData.tips}`;
    container.appendChild(tipDiv);
  }
}

/**
 * Calculates and updates the overall progress bar for activities across all 6 days.
 */
function updateItineraryProgress() {
  let totalActivities = 0;
  let completedCount = 0;

  ITINERARY_DATA.forEach(day => {
    day.activities.forEach((act, actIndex) => {
      totalActivities++;
      const key = `${day.day}_${actIndex}`;
      if (state.completedActivities[key]) {
        completedCount++;
      }
    });
  });

  const percentage = totalActivities === 0 ? 0 : Math.round((completedCount / totalActivities) * 100);
  
  const progressBar = document.getElementById("itinerary-progress-bar");
  const progressText = document.getElementById("itinerary-progress-text");
  
  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }
  if (progressText) {
    progressText.innerText = `${percentage}% Completed (${completedCount} of ${totalActivities} visited)`;
  }
}

/* ==========================================================================
   3. BUDGET PLANNER ENGINE
   ========================================================================== */
function initBudget() {
  // Stepper Listeners
  document.getElementById("pax-minus").addEventListener("click", () => {
    if (state.paxCount > 1) {
      state.paxCount--;
      updatePaxUI();
    }
  });

  document.getElementById("pax-plus").addEventListener("click", () => {
    if (state.paxCount < 10) {
      state.paxCount++;
      updatePaxUI();
    }
  });

  // Food Slider Listener
  const foodSlider = document.getElementById("food-slider");
  const foodSliderVal = document.getElementById("food-slider-val");
  foodSlider.addEventListener("input", (e) => {
    state.foodBudgetPerDay = parseInt(e.target.value);
    foodSliderVal.innerText = `₱${state.foodBudgetPerDay}`;
    recalculateBudget();
  });

  // Toggle Display Mode Buttons (Per Person vs Group)
  const btnPerPerson = document.getElementById("btn-per-person");
  const btnTotalGroup = document.getElementById("btn-total-group");

  btnPerPerson.addEventListener("click", () => {
    btnPerPerson.classList.add("active");
    btnTotalGroup.classList.remove("active");
    state.budgetDisplayMode = "person";
    recalculateBudget();
    renderTimelineForDay(state.activeDay); // Update prices in itinerary too
  });

  btnTotalGroup.addEventListener("click", () => {
    btnTotalGroup.classList.add("active");
    btnPerPerson.classList.remove("active");
    state.budgetDisplayMode = "group";
    recalculateBudget();
    renderTimelineForDay(state.activeDay); // Update prices in itinerary too
  });

  // Render Category Filters
  renderCategoryFilters();

  // Initial Calculation
  recalculateBudget();
}

function updatePaxUI() {
  document.getElementById("pax-count").value = state.paxCount;
  document.getElementById("budget-calc-basis").innerText = `Based on ${state.paxCount} pax (excl. flights)`;
  recalculateBudget();
  renderTimelineForDay(state.activeDay); // Update prices in itinerary too
}

function renderCategoryFilters() {
  const container = document.getElementById("budget-cat-filters");
  container.innerHTML = "";

  // Add "All" filter
  const allBubble = document.createElement("div");
  allBubble.className = `cat-bubble active`;
  allBubble.innerHTML = `All`;
  allBubble.addEventListener("click", () => {
    document.querySelectorAll(".cat-bubble").forEach(b => b.classList.remove("active"));
    allBubble.classList.add("active");
    state.activeBudgetFilter = "all";
    renderBudgetItemList();
  });
  container.appendChild(allBubble);

  // Add category specific filters
  BUDGET_BREAKDOWN.categories.forEach(cat => {
    const bubble = document.createElement("div");
    bubble.className = "cat-bubble";
    bubble.style.setProperty("--active-color", cat.color);
    bubble.innerHTML = `${cat.name}`;
    bubble.addEventListener("click", () => {
      document.querySelectorAll(".cat-bubble").forEach(b => b.classList.remove("active"));
      bubble.classList.add("active");
      bubble.style.backgroundColor = cat.color;
      bubble.style.borderColor = cat.color;
      bubble.style.color = "#ffffff";
      
      // Reset color styling on non-active bubbles
      document.querySelectorAll(".cat-bubble").forEach(b => {
        if (b !== bubble) {
          b.style.backgroundColor = "";
          b.style.borderColor = "";
          b.style.color = "";
        }
      });

      state.activeBudgetFilter = cat.id;
      renderBudgetItemList();
    });
    container.appendChild(bubble);
  });
}

/**
 * Highly customized cost calculation helper:
 * Adapts costs based on paxCount and food sliders.
 * Caters for flat rates (e.g. taxi, room) vs variable rates (e.g. ferry ticket, meal)
 */
function calculateDynamicItemCost(name, originalCost, notes = "") {
  // Let's check name and notes to categorize
  const lowerName = name.toLowerCase();
  const lowerNotes = notes.toLowerCase();

  // 1. Food Scaling
  // Standard daily food budget is 600 PHP (which was used as baseline for 4 pax in data.js)
  // If item is in food, scale it dynamically with custom slider input
  if (lowerName.includes("lunch") || lowerName.includes("dinner") || lowerName.includes("supper") || lowerName.includes("dessert") || lowerName.includes("food") || lowerNotes.includes("meals") || lowerNotes.includes("feast")) {
    const baseCostPerPerson = originalCost / 4;
    const foodRatio = state.foodBudgetPerDay / 600;
    return baseCostPerPerson * state.paxCount * foodRatio;
  }

  // 2. Accommodation Scaling (based on Quad Rooms - max 4 per room)
  // If pax increases, we need multiple rooms.
  if (lowerName.includes("hotel") || lowerName.includes("resort") || lowerName.includes("inn") || lowerNotes.includes("room")) {
    const roomsNeeded = Math.ceil(state.paxCount / 4);
    // Base cost in data.js is for 1 room supporting 4 pax
    return originalCost * roomsNeeded;
  }

  // 3. Transportation Scaling
  if (lowerNotes.includes("ferry") || lowerName.includes("ferry") || lowerNotes.includes("ticket") || lowerNotes.includes("/pax") || lowerName.includes("boat fare") || lowerName.includes("pumpboat")) {
    // Variable ticket per person
    const baseCostPerPerson = originalCost / 4;
    return baseCostPerPerson * state.paxCount;
  }

  if (lowerNotes.includes("charter") || lowerNotes.includes("pakyaw") || lowerNotes.includes("taxi for 4") || lowerNotes.includes("rent") || lowerName.includes("grab") || lowerName.includes("taxi")) {
    // Flat rate charter. Max 4 pax per car/tricycle.
    const vehiclesNeeded = Math.ceil(state.paxCount / 4);
    return originalCost * vehiclesNeeded;
  }

  // 4. Activities / Entrance Fees
  if (lowerNotes.includes("fee") || lowerNotes.includes("entry") || lowerName.includes("entrance") || lowerNotes.includes("/pax")) {
    const baseCostPerPerson = originalCost / 4;
    return baseCostPerPerson * state.paxCount;
  }

  // Default: Linear scale for others if per person, else flat
  if (lowerNotes.includes("per person") || lowerNotes.includes("pax")) {
    const baseCostPerPerson = originalCost / 4;
    return baseCostPerPerson * state.paxCount;
  }

  // Fallback default scaling
  return originalCost;
}

function recalculateBudget() {
  let totals = {
    accommodation: 0,
    transportation: 0,
    food: 0,
    activities: 0,
    misc: 0
  };

  let grandTotal = 0;

  // Process all raw items
  BUDGET_BREAKDOWN.items.forEach(item => {
    const dynamicCost = calculateDynamicItemCost(item.name, item.cost, item.notes);
    totals[item.category] += dynamicCost;
    grandTotal += dynamicCost;
  });

  // Render totals in summary cards
  const isGroup = state.budgetDisplayMode === "group";
  const divisor = isGroup ? 1 : state.paxCount;

  document.getElementById("budget-grand-total").innerText = `₱${Math.round(grandTotal / divisor).toLocaleString()}`;
  document.getElementById("budget-cat-accommodation").innerText = `₱${Math.round(totals.accommodation / divisor).toLocaleString()}`;
  document.getElementById("budget-cat-transportation").innerText = `₱${Math.round(totals.transportation / divisor).toLocaleString()}`;
  document.getElementById("budget-cat-food").innerText = `₱${Math.round(totals.food / divisor).toLocaleString()}`;

  // Render the items list
  renderBudgetItemList();
}

function renderBudgetItemList() {
  const container = document.getElementById("budget-items-list");
  container.innerHTML = "";

  const isGroup = state.budgetDisplayMode === "group";
  const divisor = isGroup ? 1 : state.paxCount;

  // Filter items
  const filteredItems = BUDGET_BREAKDOWN.items.filter(item => {
    return state.activeBudgetFilter === "all" || item.category === state.activeBudgetFilter;
  });

  if (filteredItems.length === 0) {
    container.innerHTML = `<p class="panel-desc" style="text-align:center; padding: 20px;">No items match this category filter.</p>`;
    return;
  }

  filteredItems.forEach(item => {
    const categoryInfo = BUDGET_BREAKDOWN.categories.find(c => c.id === item.category);
    const dynamicCost = calculateDynamicItemCost(item.name, item.cost, item.notes);
    const displayCost = Math.round(dynamicCost / divisor);

    const row = document.createElement("div");
    row.className = "budget-item-row";

    row.innerHTML = `
      <div class="budget-item-info">
        <span class="budget-item-title">${item.name}</span>
        <span class="budget-item-note">${item.notes}</span>
      </div>
      <div class="budget-item-right">
        <span class="budget-item-cost">₱${displayCost.toLocaleString()}</span>
        <br>
        <span class="budget-item-tag" style="background-color: ${categoryInfo.color}15; color: ${categoryInfo.color};">
          ${categoryInfo.name}
        </span>
      </div>
    `;
    container.appendChild(row);
  });

  // Update filter title badge text
  const filterText = state.activeBudgetFilter === "all" ? "All Items" : BUDGET_BREAKDOWN.categories.find(c => c.id === state.activeBudgetFilter).name;
  document.getElementById("budget-filter-text").innerText = filterText;
}

/* ==========================================================================
   4. HERITAGE & EXPERIENCE RENDERER
   ========================================================================== */
function initHeritage() {
  const container = document.getElementById("heritage-container");
  container.innerHTML = "";

  HERITAGE_FEATURES.forEach((feature, idx) => {
    const card = document.createElement("div");
    card.className = "heritage-card";

    // Since we generate webp images, let's map index to filenames
    const imageNames = [
      "silay_heritage.png",
      "the_ruins.png",
      "iloilo_churches.png",
      "guimaras_mangoes.png",
      "guisi_lighthouse.png",
      "batchoy_experience.png"
    ];
    const imagePath = `images/${imageNames[idx]}`;

    card.innerHTML = `
      <div class="heritage-img-container">
        <img class="heritage-img" src="${imagePath}" alt="${feature.title}">
        <span class="heritage-img-overlay">${feature.location}</span>
      </div>
      <div class="heritage-content">
        <h3>${feature.title}</h3>
        <p class="heritage-contrast"><strong>Unique vs. Davao:</strong> ${feature.contrast}</p>
        <p class="heritage-details">${feature.details}</p>
        <div class="heritage-highlight-box">
          <strong>Key Experience:</strong> ${feature.highlight}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

/* ==========================================================================
   5. TRAVEL TIPS RENDERER
   ========================================================================== */
function initTips() {
  // Render Ferries
  const ferryContainer = document.getElementById("ferry-schedule-list");
  ferryContainer.innerHTML = "";
  TRAVEL_GUIDE_TIPS.ferryInfo.forEach(f => {
    const div = document.createElement("div");
    div.className = "ferry-item";
    div.innerHTML = `
      <div class="ferry-header-row">
        <span class="ferry-operator">${f.operator}</span>
        <span class="ferry-duration">${f.duration}</span>
      </div>
      <div class="ferry-route">${f.route}</div>
      <div class="ferry-schedule">⏰ ${f.schedule}</div>
      <div class="ferry-contact">ℹ Contact: ${f.contact}</div>
    `;
    ferryContainer.appendChild(div);
  });

  // Render Contacts
  const contactsContainer = document.getElementById("local-contacts-list");
  contactsContainer.innerHTML = "";
  TRAVEL_GUIDE_TIPS.localContacts.forEach(c => {
    const div = document.createElement("div");
    div.className = "contact-item";
    div.innerHTML = `
      <span class="contact-name">${c.name}</span>
      <span class="contact-role">${c.role}</span>
      <span class="contact-details">${c.contact}</span>
    `;
    contactsContainer.appendChild(div);
  });

  // Render Guidelines
  const rulesContainer = document.getElementById("regional-rules-list");
  rulesContainer.innerHTML = "";
  TRAVEL_GUIDE_TIPS.culturalDoDonts.forEach(r => {
    const div = document.createElement("div");
    div.className = "rule-item";
    div.innerHTML = `
      <span class="rule-title">⚠️ ${r.title}</span>
      <span class="rule-content">${r.content}</span>
    `;
    rulesContainer.appendChild(div);
  });
}

/* ==========================================================================
   6. CHECKLIST LOGIC
   ========================================================================== */
function initChecklist() {
  // Load Checklist from Local Storage or fallback to default
  const savedChecklist = localStorage.getItem("visayan_checklist");
  if (savedChecklist) {
    state.checklist = JSON.parse(savedChecklist);
  } else {
    state.checklist = [...PACKING_CHECKLIST];
  }

  // Reset Checklist Button
  document.getElementById("btn-reset-checklist").addEventListener("click", () => {
    state.checklist.forEach(item => item.checked = false);
    saveChecklist();
    renderChecklist();
  });

  renderChecklist();
}

function saveChecklist() {
  localStorage.setItem("visayan_checklist", JSON.stringify(state.checklist));
  updateChecklistProgress();
}

function updateChecklistProgress() {
  const total = state.checklist.length;
  const checked = state.checklist.filter(item => item.checked).length;
  const percentage = total === 0 ? 0 : Math.round((checked / total) * 100);

  // Update UI Elements
  document.getElementById("checklist-progress-bar").style.width = `${percentage}%`;
  document.getElementById("checklist-progress-text").innerText = `${percentage}% Packed (${checked} of ${total} items)`;
}

function renderChecklist() {
  const container = document.getElementById("checklist-container");
  container.innerHTML = "";

  // Group items by category
  const categories = ["essential", "clothing", "health", "gear"];
  
  categories.forEach(cat => {
    const catItems = state.checklist.filter(item => item.category === cat);
    if (catItems.length === 0) return;

    const catCard = document.createElement("div");
    catCard.className = "checklist-category-card";

    catCard.innerHTML = `
      <h3>${cat}</h3>
      <div class="checklist-items-group" id="checklist-group-${cat}"></div>
    `;
    container.appendChild(catCard);

    const groupContainer = document.getElementById(`checklist-group-${cat}`);
    
    catItems.forEach(item => {
      const row = document.createElement("label");
      row.className = "checklist-row";

      const checkContainer = document.createElement("div");
      checkContainer.className = "checklist-checkbox-container";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = item.checked;
      
      // Update label class on initial render if checked
      const labelSpan = document.createElement("span");
      labelSpan.className = "checklist-label";
      if (item.checked) {
        labelSpan.style.color = "var(--text-muted)";
        labelSpan.style.textDecoration = "line-through";
      }
      labelSpan.innerText = item.text;

      checkbox.addEventListener("change", (e) => {
        item.checked = e.target.checked;
        if (item.checked) {
          labelSpan.style.color = "var(--text-muted)";
          labelSpan.style.textDecoration = "line-through";
        } else {
          labelSpan.style.color = "";
          labelSpan.style.textDecoration = "";
        }
        saveChecklist();
      });

      const checkmark = document.createElement("span");
      checkmark.className = "checklist-checkmark";

      checkContainer.appendChild(checkbox);
      checkContainer.appendChild(checkmark);
      
      row.appendChild(checkContainer);
      row.appendChild(labelSpan);

      groupContainer.appendChild(row);
    });
  });

  updateChecklistProgress();
}
