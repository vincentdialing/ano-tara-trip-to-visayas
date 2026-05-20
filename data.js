/**
 * Itinerary and Travel Data for Bacolod-Iloilo-Guimaras Trip
 * Student-Friendly Budget Edition (June 21-26)
 * 4 Pax, Highly Optimized for Student Budgets
 */

const ITINERARY_DATA = [
  {
    day: 1,
    date: "June 21",
    title: "Arrival in Iloilo & Evening Check-in",
    description: "Land in Iloilo via the evening flight from Davao. Transfer to the city using cheap public transit, check in at your budget hostel, and rest for an early start tomorrow.",
    accommodation: {
      name: "Ong Bun Pension House or Bed & Bath Serviced Suites",
      type: "Budget Quad Room / Hostel",
      location: "Iloilo City Proper (near Valeria St. or City Proper)",
      estimatedCost: 1400
    },
    activities: [
      {
        time: "08:30 PM",
        title: "Touchdown at Iloilo International Airport",
        desc: "Arrive via night flight. The airport is in Cabatuan, 19km from the city center.",
        cost: 400, // ₱100/pax for the shared airport shuttle van
        notable: "Skip taxis. Take the shared airport shuttle van (₱100/pax) directly to SM City Iloilo, then a local jeepney (₱15/pax) to your hostel."
      },
      {
        time: "09:45 PM",
        title: "Hostel Check-in & Late Carenderia Supper",
        desc: "Check in at your budget pension house and grab a quick, cheap late dinner at a nearby local 24/7 convenience shop or street food carenderia.",
        cost: 400, // Budget supper for 4 pax
        notable: "Prepare your Student IDs tonight! You'll need them for discounts tomorrow."
      }
    ],
    tips: "Ensure you book your ferry tickets to Bacolod in advance online if possible, or arrive early at the port tomorrow."
  },
  {
    day: 2,
    date: "June 22",
    title: "Crossing to Bacolod & Silay Heritage Tour",
    description: "Take the morning fastcraft to Bacolod using your student discount. Explore Silay City's sugar-baron heritage houses on a self-guided walking tour, then feast on street-level Bacolod chicken inasal.",
    accommodation: {
      name: "Saltimboca Tourist Inn or Royal Amigo Central",
      type: "Budget Inn / Quad Room",
      location: "Lacson Street, Bacolod City",
      estimatedCost: 1200
    },
    activities: [
      {
        time: "06:00 AM",
        title: "Ferry to Bacolod City (Student Rate)",
        desc: "Head to the Iloilo Fastcraft Terminal. Board an OceanJet or Weesam Express vessel bound for Bacolod (1-hour travel time).",
        cost: 1720, // 4 Student Tickets (₱400 each) + Terminal Fees (₱30 each)
        notable: "Bring your Student ID! Fastcraft operators give a 20% discount on regular tickets."
      },
      {
        time: "08:30 AM",
        title: "Bacolod Check-in & Jeepney to Silay",
        desc: "Drop bags at your Bacolod inn. Walk to the main road and hop on a Silay-bound jeepney (40 mins away).",
        cost: 400, // Jeepney fares for the group + port transfer
        notable: "Jeepneys to Silay are cheap (₱30/pax) and run frequently. A great way to travel like a local!"
      },
      {
        time: "10:00 AM",
        title: "Balay Negrense & Hofileña Houses (Student Discount)",
        desc: "Step inside these living museums. See how sugar barons lived in the late 19th century, featuring hand-carved hardwood, antique pianos, and classical paintings.",
        cost: 200, // Student Entry fees: ~₱50/pax for both houses
        notable: "Show your student IDs at the ticket booths to get a 50% discount on entrance fees!"
      },
      {
        time: "12:30 PM",
        title: "Lunch at El Ideal Bakery & Cafe (Shared Pastries)",
        desc: "Dine at Silay's oldest bakery (established in the 1920s). Share fresh lumpia and try their famous Guapple Pie.",
        cost: 600, // Budget lunch for 4 pax (meal-sharing)
        notable: "You don't need to order individual pies—split a few slices to keep costs low."
      },
      {
        time: "03:30 PM",
        title: "San Sebastian Cathedral & Public Plaza",
        desc: "Head back to Bacolod via jeepney. Visit the late 19th-century cathedral made of coral stone from Guimaras.",
        cost: 0,
        notable: "Directly opposite is the Bacolod Public Plaza, the center of the world-famous MassKara Festival. Completely free to visit."
      },
      {
        time: "06:30 PM",
        title: "Dinner at Manokan Country (Aida's or Nena's)",
        desc: "Feast on authentic Bacolod Chicken Inasal. Savor chicken basted with annatto oil, paired with garlic rice, and dipped in local 'sinamak' (spiced coconut vinegar) and calamansi.",
        cost: 500, // Budget feast for 4 pax
        notable: "Inasal is incredibly cheap here. Order standard pieces with garlic rice for a highly satisfying ₱125/pax meal."
      },
      {
        time: "08:30 PM",
        title: "Dessert at Calea Cakes (Shared Slices)",
        desc: "End the night at the ultimate dessert haven on Lacson Street. Indulge in their famous Mud Pie or White Chocolate Cheesecake.",
        cost: 350, // 3 Slices to share for 4 pax
        notable: "Calea is famous for premium taste at very pocket-friendly prices (around ₱110 per slice). Split slices to try different flavors!"
      }
    ],
    tips: "Tricycles in Bacolod charge per passenger (regular routes) but can be rented out flat-rate ('pakyaw') for tourist excursions."
  },
  {
    day: 3,
    date: "June 23",
    title: "The Ruins & Crossing back to Iloilo",
    description: "Visit the iconic ruins in Talisay in the morning using student entry rates. In the afternoon, ferry back to Iloilo and walk through the historic Calle Real and Esplanade.",
    accommodation: {
      name: "Ong Bun Pension House or Bed & Bath Suites",
      type: "Budget Quad Room / Hostel",
      location: "Iloilo City Proper",
      estimatedCost: 1400
    },
    activities: [
      {
        time: "08:00 AM",
        title: "Morning Tour of 'The Ruins' (Student Discount)",
        desc: "Take a Bata-bound jeepney, then a quick tricycle ride to the gate. Explore the iconic concrete skeleton of this early 1900s mansion.",
        cost: 560, // Student Entry (₱100/pax) + roundtrip jeepney/trike (₱160 total)
        notable: "Ruins entry offers a discount for students (₱100 instead of ₱150). Don't forget your ID!"
      },
      {
        time: "11:00 AM",
        title: "Bacolod Souvenir Run & Cheap Lunch",
        desc: "Buy local Piaya from street stalls (much cheaper than big souvenir houses!). Grab a quick carenderia lunch before heading to the port.",
        cost: 1100, // Lunch (₱500) + budget souvenirs (₱600)
        notable: "Freshly made Piaya on the street costs only ₱40-50 per pack and tastes even better warm!"
      },
      {
        time: "02:00 PM",
        title: "Ferry Back to Iloilo City (Student Rate)",
        desc: "Board the fastcraft back to Iloilo port. Check in at your Iloilo hostel and freshen up.",
        cost: 1810, // 4 Student Tickets (₱400 each) + Terminal Fees (₱40 each) + jeepney to hostel (₱50)
        notable: "Rest during the 1-hour ferry ride."
      },
      {
        time: "05:00 PM",
        title: "Heritage Walk: Calle Real & Esplanade",
        desc: "Explore Calle Real, a designated heritage zone with restored Art Deco and neoclassical buildings from the early 1900s. Afterwards, stroll along the scenic Iloilo Esplanade.",
        cost: 0,
        notable: "Iloilo Esplanade is a masterclass in urban river rehabilitation—clean, green, and completely free to enjoy."
      },
      {
        time: "07:00 PM",
        title: "Dinner: Authentic La Paz Batchoy inside Market",
        desc: "Dine at a local stall inside La Paz Market. Try the authentic batchoy: fresh egg noodles, pork offal, crushed chicharon, and hot bone broth.",
        cost: 400, // Dinner for 4 pax (₱100 each)
        notable: "Dining inside the local market stalls is much cheaper than in malls or air-conditioned restaurants, and it's the most authentic batchoy experience!"
      }
    ],
    tips: "Keep your bags packed lightly, as you'll be crossing to Guimaras tomorrow morning. You can leave heavy luggage at your Iloilo hotel if returning on Day 5!"
  },
  {
    day: 4,
    date: "June 24",
    title: "Escape to Guimaras & Land Heritage Tour",
    description: "Take a 15-minute boat ride to Guimaras. Charter a shared tricycle to tour the island's historical ruins, monasteries, wind farms, and beach camp in a basic fan room by Alubihod beach.",
    accommodation: {
      name: "Raymen Beach Resort or nearby beach houses",
      type: "Basic Quad Fan Room (Budget/Backpacker)",
      location: "Alubihod Beach, Nueva Valencia, Guimaras",
      estimatedCost: 1800
    },
    activities: [
      {
        time: "07:30 AM",
        title: "Pumpboat to Guimaras Island",
        desc: "Take a local jeepney to Parola Wharf. Catch a quick pumpboat ride to Jordan Port, Guimaras.",
        cost: 260, // Jeepney (₱60) + Boat fares (₱50/pax = ₱200)
        notable: "Public pumpboats run constantly and cost only ₱50 per passenger."
      },
      {
        time: "08:15 AM",
        title: "Charter Tricycle Land Tour (Split Cost)",
        desc: "Meet your tour driver at Jordan Port. Load your bags and start the 8-hour land tour in a passenger tricycle.",
        cost: 1500, // Negotiated group rate for student budget
        notable: "This covers up to 4 pax, making it very cheap (₱375/pax) when split among your group."
      },
      {
        time: "09:00 AM",
        title: "Smallest Plaza & Mango Giant",
        desc: "Quick photo stops at the Smallest Plaza and the Giant Mango monument.",
        cost: 0,
        notable: "Great spots for group photos without spending a single peso."
      },
      {
        time: "10:00 AM",
        title: "Trappist Monastery Grounds",
        desc: "Visit the quiet grounds of the Trappist monastery. Shop for budget mango snacks made by the monks.",
        cost: 300, // Budget snacks/cookies
        notable: "Entry is free. Buy small packs of Trappist mango cookies (₱50-80) to support their community."
      },
      {
        time: "11:30 AM",
        title: "San Lorenzo Wind Farm",
        desc: "Get up close to the towering wind turbines spinning on the rolling green hills.",
        cost: 0,
        notable: "No entry fee. Walk around the viewpoints for amazing panoramic views."
      },
      {
        time: "12:30 PM",
        title: "Lunch at The Pitstop (Shared Mango Pizza)",
        desc: "Try their famous Mango Pizza (sweet mango slices, cheese, bell pepper) and local rice meals.",
        cost: 700, // Pizza to share + basic meals
        notable: "Order one medium mango pizza (₱300) to share, and pair it with basic budget rice meals."
      },
      {
        time: "02:30 PM",
        title: "Guisi Lighthouse & Ruins (Student Discount)",
        desc: "Explore the 18th-century Spanish colonial lighthouse ruins covered in roots overlooking the golden beach.",
        cost: 100, // Student Entrance fee (₱25/pax)
        notable: "Present your student ID for a 50% discount on the preservation fee!"
      },
      {
        time: "04:30 PM",
        title: "Resort Check-in at Alubihod Beach",
        desc: "Arrive at Alubihod Beach. Check into your basic quad fan room. Enjoy the powdery cream sand and calm waters.",
        cost: 0,
        notable: "Choosing a fan room instead of aircon saves you over ₱1,400 per night!"
      },
      {
        time: "07:00 PM",
        title: "Local Carenderia Seafood Dinner",
        desc: "Have a relaxed seafood dinner at a local carenderia near the beachfront entrance rather than the resort restaurant.",
        cost: 800, // Dinner for 4 pax
        notable: "Local diners right outside the resort gates serve fresh grilled fish and oysters for a fraction of resort prices."
      }
    ],
    tips: "Guimaras is primarily cash-only! There are very few ATMs on the island, mostly in Jordan. Withdraw cash in Iloilo before boarding the boat."
  },
  {
    day: 5,
    date: "June 25",
    title: "Island Hopping & Iloilo Culinary Heritage",
    description: "Enjoy a shortened 2-hour morning island-hopping tour in Guimaras. Return to Iloilo City in the afternoon and visit local heritage churches using cheap public jeepneys.",
    accommodation: {
      name: "Ong Bun Pension House or Bed & Bath Suites",
      type: "Budget Quad Room / Hostel",
      location: "Iloilo City Proper",
      estimatedCost: 1400
    },
    activities: [
      {
        time: "07:30 AM",
        title: "Guimaras Island Hopping (2-Hour Boat)",
        desc: "Board a motorized outrigger from Alubihod Beach. Visit Ave Maria Island (sandbar) and Baras Cave.",
        cost: 1100, // 2-Hour Boat Rent (₱750) + Island docking fees (₱350 total)
        notable: "Opt for a 2-hour tour instead of 3 hours to save on boat charter costs. It's plenty of time to see the main spots!"
      },
      {
        time: "11:30 AM",
        title: "Check Out & Public Boat to Iloilo",
        desc: "Freshen up, check out, and take a local jeepney back to Jordan Port, then the pumpboat back to Iloilo.",
        cost: 600, // Jeepney to Jordan (₱300) + Boat (₱200) + Jeepney to hostel (₱100)
        notable: "Avoid taxis; public transport in Guimaras is regular and highly budget-friendly."
      },
      {
        time: "02:30 PM",
        title: "Jaro Cathedral & Belfry via Jeepney",
        desc: "Check in at your hostel. Take a CPU-bound jeepney to Jaro Plaza. Visit the Romanesque cathedral featuring a unique outdoor belfry across the street.",
        cost: 60, // Jeepney fares for 4 pax
        notable: "Jeepneys in Iloilo are legendary and cost only ₱15 per ride!"
      },
      {
        time: "04:00 PM",
        title: "Molo Mansion & Molo Church",
        desc: "Take a Jaro-Molo jeepney to Molo Plaza. Visit the Gothic-Renaissance Molo Church. Cross the plaza to Molo Mansion to enjoy cheap local Molo Soup.",
        cost: 200, // Local soup snacks
        notable: "Molo Soup at the mansion's garden stalls is cheap, warm, and highly comforting."
      },
      {
        time: "07:00 PM",
        title: "Dinner: Tatoy's or local Arevalo Seafood",
        desc: "Head to Villa Arevalo coastline via jeepney. Dine at Tatoy's Manokan. Share a small native chicken, baked oysters, and grilled fish.",
        cost: 1200, // Shared group dinner (₱300/pax)
        notable: "Oysters are incredibly cheap in Iloilo (~₱150 per large plate). Order oysters and garlic rice for a highly affordable seafood feast!"
      }
    ],
    tips: "Modernized and traditional jeepneys are the lifeblood of Iloilo. Routes are labeled clearly (e.g., 'Jaro CPU', 'Molo Mandurriao'). Try riding one for the local experience!"
  },
  {
    day: 6,
    date: "June 26",
    title: "Heritage Living, Souvenirs & Flight Home",
    description: "Spend your last day enjoying Pancit Molo and thick hot chocolate at a heritage house, buy affordable local treats, and take a shared airport van for your flight back to Davao.",
    accommodation: null, // Flight home tonight
    activities: [
      {
        time: "09:00 AM",
        title: "Camiña Balay nga Bato Tour",
        desc: "Visit a beautifully preserved 1865 ancestral stone house. Learn about Spanish-colonial lifestyle, loom weaving, and local artifacts.",
        cost: 1000, // ₱250/pax (includes guided house tour + hot batirol chocolate + Pancit Molo)
        notable: "This is a worthwhile student experience: the entry fee includes a rich cup of hot chocolate batirol and a bowl of Pancit Molo!"
      },
      {
        time: "11:30 AM",
        title: "Biscocho Haus Souvenir Run (Budget packs)",
        desc: "Head to Jaro to buy your pasalubong: Biscocho and Butterscotch packs. Opt for small budget pack sizes.",
        cost: 800, // Group souvenir budget
        notable: "Buy small snack sizes (₱40-60 per pack) to distribute to friends without breaking the bank."
      },
      {
        time: "01:00 PM",
        title: "Lunch at Roberto's (Calle Real)",
        desc: "Dine at a legendary local Chinese-Filipino eatery. Try their famous King/Jumbo Siopao or shared Pancit Canton.",
        cost: 500, // Budget lunch for 4 pax
        notable: "Roberto's Jumbo Siopao (₱110) is huge, incredibly filling, and needs no sauce!"
      },
      {
        time: "03:00 PM",
        title: "Museum of Philippine Economic History",
        desc: "Visit this highly interactive, air-conditioned museum housed in the historic Elizalde building. Learn how the sugar, weaving, and shipping industries shaped the country.",
        cost: 0, // Free admission!
        notable: "Free entry for everyone! A great way to spend a hot afternoon in a fully air-conditioned heritage building."
      },
      {
        time: "06:30 PM",
        title: "Final Dinner & Shared Airport Shuttle",
        desc: "Have a final budget dinner in the city. Retrieve your luggage and take a shared shuttle van to the airport.",
        cost: 1000, // Van fare ₱400 (₱100/pax) + light carenderia supper ₱600
        notable: "Skip taxis to the airport (which charge ₱600+). Take the public airport shuttle van from SM City Iloilo transport hub for only ₱100 per person!"
      },
      {
        time: "09:30 PM",
        title: "Flight Back to Davao",
        desc: "Check-in at Iloilo International Airport and fly back to Davao, bringing home unforgettable heritage memories.",
        cost: 0,
        notable: "Ensure all delicacies are packed properly. Note that Guimaras mangoes can be brought out, but no external mangoes can enter Guimaras."
      }
    ],
    tips: "Ensure all delicacies like Napoleones from Bacolod or fresh mangoes from Guimaras are packed properly. Note that Guimaras mangoes can be brought out, but no external mangoes can enter Guimaras."
  }
];

const BUDGET_BREAKDOWN = {
  categories: [
    { id: "accommodation", name: "Accommodation", icon: "hotel", color: "#0f4c5c" },
    { id: "transportation", name: "Transportation", icon: "bus", color: "#e36414" },
    { id: "food", name: "Food & Dining", icon: "food", color: "#fb8b24" },
    { id: "activities", name: "Activities & Entrances", icon: "ticket", color: "#2ec4b6" },
    { id: "misc", name: "Souvenirs & Emergency", icon: "wallet", color: "#6c757d" }
  ],
  items: [
    // Accommodation (Student Hostels/Budget Pension Houses)
    { category: "accommodation", name: "Day 1: Iloilo Budget Hostel (Ong Bun)", cost: 1400, isPerPerson: false, notes: "Shared Quad Room for 4 Pax" },
    { category: "accommodation", name: "Day 2: Bacolod Budget Hostel (Saltimboca)", cost: 1200, isPerPerson: false, notes: "Shared Budget Quad Room" },
    { category: "accommodation", name: "Day 3: Iloilo Budget Hostel (Ong Bun)", cost: 1400, isPerPerson: false, notes: "Shared Quad Room" },
    { category: "accommodation", name: "Day 4: Guimaras Beach Resort Fan Room (Raymen)", cost: 1800, isPerPerson: false, notes: "Alubihod Beachfront Quad Fan Room" },
    { category: "accommodation", name: "Day 5: Iloilo Budget Hostel (Ong Bun)", cost: 1400, isPerPerson: false, notes: "Shared Quad Room" },
    
    // Transportation (Jeepneys, Shuttle Vans & Student Ferry Vouchers)
    { category: "transportation", name: "Airport to City Shared Van (Day 1)", cost: 400, isPerPerson: false, notes: "Shared Shuttle Van - ₱100/pax × 4" },
    { category: "transportation", name: "Iloilo Hotel to Port + Terminal Fee (Day 2)", cost: 180, isPerPerson: false, notes: "Jeepney (₱60) + Terminal fees (₱30/pax × 4 = ₱120)" },
    { category: "transportation", name: "Iloilo to Bacolod Ferry Student Tickets (Day 2)", cost: 1600, isPerPerson: false, notes: "OceanJet Student Rate (Bring ID!) - ₱400/pax × 4" },
    { category: "transportation", name: "Bacolod Port to Hostel Jeepney (Day 2)", cost: 60, isPerPerson: false, notes: "Local jeepney - ₱15/pax × 4" },
    { category: "transportation", name: "Silay Heritage Tour DIY Jeepney (Day 2)", cost: 160, isPerPerson: false, notes: "Jeepney roundtrip to Silay City - ₱40/pax × 4" },
    { category: "transportation", name: "The Ruins Jeepney/Trike Transfer (Day 3)", cost: 160, isPerPerson: false, notes: "Jeepney to Bata + Shared Trike roundtrip" },
    { category: "transportation", name: "Bacolod Hostel to Port Jeepney (Day 3)", cost: 60, isPerPerson: false, notes: "Local jeepney transfer" },
    { category: "transportation", name: "Bacolod to Iloilo Ferry Student Tickets (Day 3)", cost: 1600, isPerPerson: false, notes: "OceanJet Student Rate (Bring ID!) - ₱400/pax × 4" },
    { category: "transportation", name: "Bacolod Port Terminal Fee (Day 3)", cost: 160, isPerPerson: false, notes: "₱40/pax terminal fee × 4" },
    { category: "transportation", name: "Iloilo Port to Hostel Jeepney (Day 3)", cost: 60, isPerPerson: false, notes: "Local jeepney" },
    { category: "transportation", name: "Iloilo Hostel to Parola Wharf Jeepney (Day 4)", cost: 60, isPerPerson: false, notes: "Local jeepney" },
    { category: "transportation", name: "Iloilo to Guimaras Pumpboat (Day 4)", cost: 200, isPerPerson: false, notes: "Public pumpboat - ₱50/pax × 4" },
    { category: "transportation", name: "Guimaras Tricycle Land Tour Rent (Day 4)", cost: 1500, isPerPerson: false, notes: "8-Hour chartered tricycle for 4 Pax (Student deal)" },
    { category: "transportation", name: "Guimaras Island Hopping Boat 2-Hr (Day 5)", cost: 750, isPerPerson: false, notes: "2-Hour private boat charter (split 4 ways)" },
    { category: "transportation", name: "Guimaras Resort to Jordan Port Jeepney/Trike (Day 5)", cost: 250, isPerPerson: false, notes: "Public jeepney/shared trike for luggage & pax" },
    { category: "transportation", name: "Guimaras to Iloilo Pumpboat (Day 5)", cost: 200, isPerPerson: false, notes: "Public pumpboat - ₱50/pax × 4" },
    { category: "transportation", name: "Parola Wharf to Iloilo Hotel Jeepney (Day 5)", cost: 60, isPerPerson: false, notes: "Local jeepney" },
    { category: "transportation", name: "Iloilo City Jeepney Tours (Day 5 & 6)", cost: 300, isPerPerson: false, notes: "Experiencing traditional public jeepneys" },
    { category: "transportation", name: "Iloilo Hostel to Airport Shared Van (Day 6)", cost: 400, isPerPerson: false, notes: "Shared Shuttle Van from SM City Hub - ₱100/pax × 4" },

    // Food (Carenderias, Street Food & Shared Platters)
    { category: "food", name: "Day 1 Suppers (Local Carenderia)", cost: 400, isPerPerson: false, notes: "Light local carenderia meals" },
    { category: "food", name: "Day 2 Lunch: El Ideal Bakery (Shared pastries)", cost: 600, isPerPerson: false, notes: "Shared pastries and fresh lumpia" },
    { category: "food", name: "Day 2 Dinner: Manokan Country Inasal", cost: 500, isPerPerson: false, notes: "Inasal breast/thigh + garlic rice" },
    { category: "food", name: "Day 2 Dessert: Calea Cakes (Shared slices)", cost: 350, isPerPerson: false, notes: "3 slices to split among 4 pax" },
    { category: "food", name: "Day 3 Lunch: Bacolod Local Carenderia", cost: 500, isPerPerson: false, notes: "Budget turo-turo lunch" },
    { category: "food", name: "Day 3 Dinner: La Paz Market Batchoy", cost: 400, isPerPerson: false, notes: "Authentic Batchoy bowls inside local market" },
    { category: "food", name: "Day 4 Lunch: Pitstop Mango Pizza (Shared)", cost: 700, isPerPerson: false, notes: "Mango pizza + budget local dishes" },
    { category: "food", name: "Day 4 Dinner: Alubihod Beach local carenderia", cost: 800, isPerPerson: false, notes: "Fresh grilled fish/seafood outside resort gates" },
    { category: "food", name: "Day 5 Lunch & local snacks (Guimaras)", cost: 600, isPerPerson: false, notes: "Carenderia meal + fresh mango snack at port" },
    { category: "food", name: "Day 5 Dinner: Tatoy's (Shared set meal)", cost: 1200, isPerPerson: false, notes: "Baked oysters, native chicken, grilled fish (shared)" },
    { category: "food", name: "Day 6 Lunch: Roberto's Siopao & Noodles", cost: 500, isPerPerson: false, notes: "Jumbo Siopao (₱110 each) + shared pansit" },
    { category: "food", name: "Day 6 Dinners & Snacks (Travel meals)", cost: 600, isPerPerson: false, notes: "Final meal in city proper + travel snacks" },

    // Activities & Entrances (Student ID Discounts Applied)
    { category: "activities", name: "Silay Heritage Houses Student Entry", cost: 200, isPerPerson: false, notes: "Student ID rate: ₱50/pax × 4" },
    { category: "activities", name: "The Ruins Student Entry (Talisay)", cost: 400, isPerPerson: false, notes: "Student ID rate: ₱100/pax × 4" },
    { category: "activities", name: "Guisi Lighthouse Student Entry", cost: 100, isPerPerson: false, notes: "Student ID rate: ₱25/pax × 4" },
    { category: "activities", name: "Guimaras Island Hopping Environmental Fees", cost: 350, isPerPerson: false, notes: "SEAFDEC entry + environmental & docking fees" },
    { category: "activities", name: "Camiña Balay nga Bato House Tour & Snack", cost: 1000, isPerPerson: false, notes: "₱250/pax entry (includes guided tour + hot chocolate batirol + pancit molo)" },

    // Misc / Souvenirs
    { category: "misc", name: "Pasalubong: BongBong's / Merci (Bacolod)", cost: 600, isPerPerson: false, notes: "Street piaya and barquillos packs" },
    { category: "misc", name: "Pasalubong: Biscocho Haus (Iloilo)", cost: 800, isPerPerson: false, notes: "Biscocho, butterscotch small packs" },
    { category: "misc", name: "Student Incidentals / Emergency Fund", cost: 1200, isPerPerson: false, notes: "Group emergency buffer" }
  ]
};

const HERITAGE_FEATURES = [
  {
    title: "Silay Ancestral Houses vs. Davao Heritage",
    location: "Silay City, Negros Occidental",
    contrast: "Davao is a relatively young, modern metropolis with minimal Spanish-era colonial layout. In contrast, Silay boasts over 30 perfectly preserved late 19th-century sugar baron mansions within walking distance of each other.",
    highlight: "Balay Negrense & Hofileña House",
    details: "Built during the sugar boom, these houses feature massive wooden pillars made of local hardwood (like tindalo and ipil), grand double staircases, and French-inspired glass windows. Walking through Silay feels like traveling back to 1890.",
    imageText: "Old colonial house facade with massive capiz-shell windows and wooden structures"
  },
  {
    title: "The Ruins (Taj Mahal of Negros)",
    location: "Talisay City, Negros Occidental",
    contrast: "Unlike modern ruins or standard concrete buildings, The Ruins is an Italianate architectural marvel built as a symbol of eternal love, then set ablaze in WWII so Japanese forces couldn't use it. There is nothing like its glowing, egg-white concrete skeleton in Mindanao.",
    highlight: "The Shell-infused Concrete",
    details: "Built by Don Mariano Ledesma Lacson for his Portuguese wife, Maria Braga. He instructed that egg whites be mixed into the concrete to give it a smooth, marble-like finish that catches the light beautifully at dawn and dusk.",
    imageText: "Glowing neo-classical concrete structure with empty window arches surrounded by a green lawn"
  },
  {
    title: "Iloilo Coral Stone Churches",
    location: "Molo & Jaro Districts, Iloilo City",
    contrast: "Mindanao churches are mostly modern concrete. Iloilo features centuries-old Spanish colonial churches built of unique materials like red coral stone (Molo) and featuring standalone brick belfries (Jaro).",
    highlight: "Molo (Feminine) vs. Jaro (Masculine)",
    details: "Molo Church (St. Anne Parish) is Gothic-Renaissance, made of red coral stones held together by egg whites, and features 16 statues of female saints. Jaro Cathedral, across town, has a Romanesque design with all-male saints and its belfry standing separate across the street.",
    imageText: "Red coral stone church with twin spires and gothic architecture details"
  },
  {
    title: "Guimaras Sweeter-than-Sweet Mangoes",
    location: "Jordan & Nueva Valencia, Guimaras",
    contrast: "While Davao grows great durian and pomelo, Guimaras grows mangoes that are scientifically certified as the sweetest in the world. They are so protected that you cannot bring any foreign mangoes onto the island to prevent pest contamination.",
    highlight: "The Mango Pizza & Monastic Delicacies",
    details: "Taste Mango Pizza at The Pitstop (a sweet-and-savory cheese and mango combination). Visit the Trappist Monastery where monks make mango jams, dried mangoes, and mango barquillos that make perfect unique souvenirs.",
    imageText: "Golden yellow sweet mangoes sliced into half-grids next to a rustic mango pizza"
  },
  {
    title: "Guisi Spanish Lighthouse & Ruins",
    location: "Nueva Valencia, Guimaras",
    contrast: "Davao has beautiful modern beaches, but Guisi features the second-oldest Spanish lighthouse in the Philippines (built 1894), with decaying brick barracks covered in roots, standing on a cliff overlooking the sea.",
    highlight: "1894 Spanish Outpost",
    details: "You can walk through the roofless brick ruins of the Spanish outpost, which feel like a jungle ruin, and look at the rusted metal lighthouse structure which guided ships entering the Panay Gulf.",
    imageText: "Ancient brick walls covered in tree roots with a rusted iron lighthouse tower overlooking a turquoise sea"
  },
  {
    title: "The Batchoy & Batirol Chocolate Experience",
    location: "La Paz & Villa Arevalo, Iloilo City",
    contrast: "Unlike Davao's soups (like Balbacua or Hinalang), Iloilo has La Paz Batchoy, a noodle soup flavored with local shrimp paste (guinamos), pork offal, and crushed chicharon. Plus, the Camiña Balay nga Bato serves authentic thick chocolate whisked in a wooden batirol.",
    highlight: "Tsokolate de Batirol & Pancit Molo",
    details: "At Camiña Balay nga Bato, sit in the cool stone ground floor and then climb up to the grand wooden living room to drink hot chocolate so thick it coats the spoon, paired with Pancit Molo (dumpling soup in a rich chicken broth).",
    imageText: "A wooden table holding a traditional metal chocolate jug, a wooden batirol frother, and a cup of thick dark chocolate next to a bowl of noodle soup"
  }
];

const PACKING_CHECKLIST = [
  { id: "pack-docs", text: "Flight Boarding Passes & IDs (Bring Student ID!)", category: "essential", checked: false },
  { id: "pack-cash", text: "Cash in PHP (Crucial for local jeepneys & trikes)", category: "essential", checked: false },
  { id: "pack-ferry", text: "Pre-booked Ferry Tickets (or check student counter)", category: "essential", checked: false },
  { id: "pack-sun", text: "Sunscreen & Sunglasses (For Guimaras beach)", category: "clothing", checked: false },
  { id: "pack-swim", text: "Swimwear & Rashguards (For Alubihod island hopping)", category: "clothing", checked: false },
  { id: "pack-shoes", text: "Comfortable walking shoes (For Silay & Calle Real walks)", category: "clothing", checked: false },
  { id: "pack-meds", text: "Personal medicines & motion sickness pills (For ferries)", category: "health", checked: false },
  { id: "pack-dry", text: "Dry bag (Protect phones/cameras during island hopping)", category: "gear", checked: false },
  { id: "pack-power", text: "Powerbank & charging cables (Long tour days)", category: "gear", checked: false },
  { id: "pack-repel", text: "Insect repellent (For Guisi ruins and forest areas)", category: "health", checked: false }
];

const TRAVEL_GUIDE_TIPS = {
  ferryInfo: [
    { operator: "OceanJet", route: "Iloilo to Bacolod", schedule: "Daily: 6:00 AM, 8:50 AM, 11:30 AM, 2:10 PM, 4:50 PM", duration: "1 Hour", contact: "oceanjet.net (Ask for Student Discount at window)" },
    { operator: "Weesam Express", route: "Iloilo to Bacolod", schedule: "Daily: 6:30 AM, 9:30 AM, 12:30 PM, 3:30 PM", duration: "1 Hour", contact: "facebook.com/weesamexpress (Ask for Student Discount)" },
    { operator: "Jordan Pumpboat", route: "Iloilo (Parola) to Guimaras (Jordan)", schedule: "Every 15-30 minutes (6:00 AM - 6:00 PM)", duration: "15 Minutes", contact: "No pre-booking needed, pay at wharf" }
  ],
  localContacts: [
    { name: "Guimaras Tricycle Land Tour Association", role: "Tricycle Tours from Jordan Port", contact: "Standard Rates: ₱1,500 - ₱1,800. Walk-in at Jordan Port Tourist Center." },
    { name: "Alubihod Boat Association", role: "Island Hopping from Alubihod Beach", contact: "Direct booking at Raymen Resort or Alubihod Beach station. Standardized rates." },
    { name: "Public Jeepneys Iloilo & Bacolod", role: "City Transportation", contact: "Use standard routes like 'Jaro CPU' or 'Molo Mandurriao' for only ₱15/pax." }
  ],
  culturalDoDonts: [
    { title: "Mango Protection in Guimaras", content: "DO NOT bring any outside mangoes into Guimaras. This is strictly illegal to protect their crops from the Mango Pulp Weevil. Bags are inspected at the port." },
    { title: "Speaking Hiligaynon/Ilonggo", content: "People in Panay and Negros speak Hiligaynon (Ilonggo), which sounds very gentle and musical. Davao speaks Bisaya/Cebuano. Many words are similar, but the intonation is softer. 'Salamat' is 'Salamat gid' (Thank you very much)." },
    { title: "Cash Reserves", content: "Always keep cash (bills of ₱20, ₱50, ₱100, ₱500) because smaller shops, tricycles, and ferry terminals do not accept GCash or cards." }
  ]
};
