/**
 * Itinerary and Travel Data for Bacolod-Iloilo-Guimaras Trip
 * Dates: June 21-26
 * 4 Pax, Budget-friendly, Heritage & Experience-focused
 */

const ITINERARY_DATA = [
  {
    day: 1,
    date: "June 21",
    title: "Arrival in Iloilo & Evening Check-in",
    description: "Land in Iloilo via the evening flight from Davao. Transfer to the city, check in at your budget hotel, and get a good night's rest for an early start tomorrow.",
    accommodation: {
      name: "Go Hotels Iloilo or GT Hotel Iloilo",
      type: "Budget Inn / Hotel (Family Room or 2 Double Rooms)",
      location: "Iloilo City Center (near Robinsons or City Proper)",
      estimatedCost: 2200
    },
    activities: [
      {
        time: "08:30 PM",
        title: "Touchdown at Iloilo International Airport",
        desc: "Arrive via night flight from Davao. The airport is located in Cabatuan, about 30-40 minutes from the city center.",
        cost: 0,
        notable: "Take a taxi/Grab (₱500 total) or a shared van (₱100/pax) to go directly to your hotel."
      },
      {
        time: "09:30 PM",
        title: "Hotel Check-in & Late Supper",
        desc: "Check in and have a light dinner at a nearby 24/7 convenience store or local diner. Rest early to prepare for the 6:00 AM ferry tomorrow.",
        cost: 600, // Light supper for 4 pax
        notable: "Keep your ferry tickets and IDs handy for tomorrow morning."
      }
    ],
    tips: "Ensure you book your ferry tickets to Bacolod in advance online if possible, or arrive early at the port tomorrow."
  },
  {
    day: 2,
    date: "June 22",
    title: "Crossing to Bacolod & Silay Heritage Tour",
    description: "Take the morning fastcraft to Bacolod. Explore Silay City, the 'Paris of Negros,' filled with preserved Spanish-American era sugar baron mansions—a heritage experience completely unique to this region.",
    accommodation: {
      name: "Saltimboca Tourist Inn or Royal Amigo Central",
      type: "Heritage-style Budget Inn / Hotel (Quad Room)",
      location: "Lacson Street, Bacolod City",
      estimatedCost: 1800
    },
    activities: [
      {
        time: "06:00 AM",
        title: "Ferry to Bacolod City",
        desc: "Head to the Iloilo Fastcraft Terminal. Board an OceanJet or Weesam Express vessel bound for Bacolod (1-hour travel time).",
        cost: 2120, // 4 Tickets (₱500 each) + Terminal Fees (₱30 each)
        notable: "Enjoy the scenic morning sea view crossing the Guimaras Strait."
      },
      {
        time: "08:30 AM",
        title: "Bacolod Check-in & Travel to Silay",
        desc: "Drop bags at your Bacolod inn. Hire a tricycle (₱800 for 4 pax, half-day) or take a jeepney north to Silay City (40 mins away).",
        cost: 950, // Tricycle rent + Bacolod port transfer
        notable: "Silay has over 30 declared ancestral homes, standing as a testament to the golden era of the sugar industry."
      },
      {
        time: "10:00 AM",
        title: "Balay Negrense & Hofileña Heritage Houses",
        desc: "Step inside these living museums. See how sugar barons lived in the late 19th century, featuring hand-carved hardwood, antique pianos, and classical paintings.",
        cost: 400, // Entry fees: ~₱100/pax for both houses
        notable: "The Hofileña house features works by national artists including Juan Luna and Jose Rizal!"
      },
      {
        time: "12:30 PM",
        title: "Lunch at El Ideal Bakery & Cafe",
        desc: "Dine at Silay's oldest bakery (established in the 1920s). Try their famous Guapple Pie and fresh lumpia.",
        cost: 1000, // Lunch for 4 pax
        notable: "This heritage bakery is located in the Cesar Lacson Locsin Ancestral House."
      },
      {
        time: "03:30 PM",
        title: "San Sebastian Cathedral & Plaza",
        desc: "Head back to Bacolod. Visit the late 19th-century cathedral made of coral stone from Guimaras and lime from Silay.",
        cost: 0,
        notable: "Directly opposite is the Bacolod Public Plaza, the center of the world-famous MassKara Festival."
      },
      {
        time: "06:30 PM",
        title: "Dinner at Manokan Country",
        desc: "Feast on authentic Bacolod Chicken Inasal. Savor chicken basted with annatto oil, paired with garlic rice, and dipped in local 'sinamak' (spiced coconut vinegar) and calamansi.",
        cost: 800, // Huge feast for 4 pax
        notable: "Unlike Davao inasal, authentic Bacolod inasal uses 'batwan' fruit as a souring agent, cooked over open-flame charcoal."
      },
      {
        time: "08:30 PM",
        title: "Dessert at Calea Cakes",
        desc: "End the night at the ultimate dessert haven on Lacson Street. Indulge in their famous Mud Pie, Imported Chocolate Cake, or White Chocolate Cheesecake.",
        cost: 600, // Slices & drinks for 4
        notable: "Remarkably premium taste at incredibly pocket-friendly prices (around ₱110-₱140 per slice)."
      }
    ],
    tips: "Tricycles in Bacolod charge per passenger (regular routes) but can be rented out flat-rate ('pakyaw') for tourist excursions."
  },
  {
    day: 3,
    date: "June 23",
    title: "The Ruins & Crossing back to Iloilo",
    description: "Visit the iconic Taj Mahal of Negros—The Ruins in Talisay—in the morning. In the afternoon, ferry back to Iloilo to start exploring its vibrant heritage streets and night life.",
    accommodation: {
      name: "Go Hotels Iloilo or GT Hotel Iloilo",
      type: "Budget Inn / Hotel (Family Room or 2 Double Rooms)",
      location: "Iloilo City Proper",
      estimatedCost: 2200
    },
    activities: [
      {
        time: "08:00 AM",
        title: "Morning Tour of 'The Ruins'",
        desc: "Take a Grab/tricycle to Talisay. Walk through the majestic skeleton of an early 1900s Italianate mansion built by a sugar baron for his Portuguese wife, burned in WWII.",
        cost: 900, // Entry (₱150/pax) + roundtrip tricycle/Grab (₱300)
        notable: "The concrete structure was poured with egg whites, giving it a smooth, marble-like texture that glows at sunrise and sunset."
      },
      {
        time: "11:00 AM",
        title: "Bacolod Souvenir Run & Lunch",
        desc: "Buy Piaya, Barquillos, and Napoleones at BongBong's or Merci. Have a quick lunch before heading to the port.",
        cost: 1600, // Lunch (₱800) + basic souvenirs (₱800)
        notable: "Napoleones (layered puff pastry with custard and glaze) must be eaten fresh!"
      },
      {
        time: "02:00 PM",
        title: "Ferry Back to Iloilo City",
        desc: "Board the fastcraft back to Iloilo port. Check in at your Iloilo hotel and freshen up.",
        cost: 2310, // 4 Tickets (₱500 each) + Terminal Fees (₱40 each) + taxi to hotel (₱150)
        notable: "Rest during the 1-hour ferry ride."
      },
      {
        time: "05:00 PM",
        title: "Heritage Walk: Calle Real & Esplanade",
        desc: "Explore Calle Real, a designated heritage zone with restored Art Deco and neoclassical buildings from the early 1900s. Afterwards, stroll along the scenic Iloilo Esplanade.",
        cost: 0,
        notable: "Iloilo Esplanade is a masterclass in urban river rehabilitation—clean, green, and completely pedestrian-friendly."
      },
      {
        time: "07:00 PM",
        title: "Dinner: Authentic La Paz Batchoy",
        desc: "Dine at Ted's Oldtimer Lapaz Batchoy or Deco's inside La Paz Market. Try the authentic batchoy: fresh egg noodles, pork offal, crushed chicharon, toasted garlic, and hot bone marrow broth.",
        cost: 600, // Dinner for 4 pax
        notable: "Unlike instant versions, true La Paz Batchoy has a complex umami broth sweetened by guinamos (local shrimp paste)."
      }
    ],
    tips: "Keep your bags packed lightly, as you'll be crossing to Guimaras tomorrow morning. You can leave heavy luggage at your Iloilo hotel if returning on Day 5!"
  },
  {
    day: 4,
    date: "June 24",
    title: "Escape to Guimaras & Land Heritage Tour",
    description: "Take a 15-minute boat ride to Guimaras. Charter a tricycle to tour the island's historical ruins, monastics, wind farms, and checkout the sweet mangoes, then stay overnight at an affordable beachfront resort.",
    accommodation: {
      name: "Raymen Beach Resort",
      type: "Beachfront Resort (Standard Quad Aircon Room)",
      location: "Alubihod Beach, Nueva Valencia, Guimaras",
      estimatedCost: 3200
    },
    activities: [
      {
        time: "07:30 AM",
        title: "Pumpboat to Guimaras Island",
        desc: "Walk/ride to Parola Wharf. Take a quick pumpboat ride to Jordan Port, Guimaras (15 mins).",
        cost: 350, // Hotel to Parola taxi (₱150) + Boat fares (₱50/pax = ₱200)
        notable: "Guimaras is so close to Iloilo you can see it from the city proper."
      },
      {
        time: "08:15 AM",
        title: "Charter Tricycle Land Tour",
        desc: "Meet your tour driver at Jordan Port. Load your bags and start the 8-hour land tour in a custom passenger tricycle.",
        cost: 1800, // Flat rate pakyaw for 4 pax
        notable: "This is the most cost-effective and fun way to see the island. Drivers are accredited guides."
      },
      {
        time: "09:00 AM",
        title: "Smallest Plaza & Mango Giant",
        desc: "Quick photo stops at the Smallest Plaza (once in the Guinness Book) and the Giant Mango monument.",
        cost: 0,
        notable: "Guimaras mangoes are famous for being served in the White House and Buckingham Palace!"
      },
      {
        time: "10:00 AM",
        title: "Trappist Monastery",
        desc: "Visit the quiet grounds of the only Trappist monastery in the Philippines. Shop for mango jams, cookies, and religious items made by the monks.",
        cost: 500, // Souvenirs and donations
        notable: "The peaceful, tree-lined sanctuary offers a quiet contrast to busy city itineraries."
      },
      {
        time: "11:30 AM",
        title: "San Lorenzo Wind Farm",
        desc: "Get up close to the towering 54-megawatt wind turbines spinning on the rolling hills.",
        cost: 0,
        notable: "Unlike the windmills in Ilocos, these are scattered across green agricultural hills, offering a unique inland landscape."
      },
      {
        time: "12:30 PM",
        title: "Lunch at The Pitstop Restaurant",
        desc: "Try their famous Mango Pizza (sweet mango slices, cheese, bell pepper) and Mango Bulalo.",
        cost: 1200, // Lunch for 4 pax
        notable: "A weird-sounding but delicious sweet-and-savory combination that you cannot find in Davao."
      },
      {
        time: "02:30 PM",
        title: "Guisi Lighthouse & Ruins",
        desc: "Explore the 18th-century Spanish colonial lighthouse ruins. Walk through the ancient stone walls covered in banyan roots overlooking the golden beach.",
        cost: 200, // Entrance fee (₱50/pax)
        notable: "Guisi is the second-oldest lighthouse in the country. The rusted iron tower and stone ruins feel like an Indiana Jones set."
      },
      {
        time: "04:30 PM",
        title: "Resort Check-in at Alubihod Beach",
        desc: "Arrive at Raymen Beach Resort in Nueva Valencia. Check in, change into swimwear, and enjoy the powdery cream sand and calm waters.",
        cost: 0,
        notable: "Alubihod is the jump-off point for island hopping tomorrow."
      },
      {
        time: "07:00 PM",
        title: "Beachfront Seafood Dinner",
        desc: "Have a relaxed, budget-friendly dinner at the resort's restaurant or a nearby local eatery right by the sand.",
        cost: 1000, // Dinner for 4 pax
        notable: "Listen to the gentle waves while eating fresh grilled fish."
      }
    ],
    tips: "Guimaras is primarily cash-only! There are very few ATMs on the island, mostly in Jordan. Withdraw cash in Iloilo before boarding the boat."
  },
  {
    day: 5,
    date: "June 25",
    title: "Island Hopping & Iloilo Culinary Heritage",
    description: "Enjoy a morning island-hopping tour in Guimaras. Return to Iloilo City in the afternoon for a deep-dive into colonial churches and a feast of fresh Visayan seafood.",
    accommodation: {
      name: "Go Hotels Iloilo or GT Hotel Iloilo",
      type: "Budget Inn / Hotel (Family Room or 2 Double Rooms)",
      location: "Iloilo City Proper",
      estimatedCost: 2200
    },
    activities: [
      {
        time: "07:30 AM",
        title: "Guimaras Island Hopping",
        desc: "Board your motorized outrigger from Alubihod Beach. Visit SEAFDEC (Marine Research Sanctuary), Ave Maria Island (sandbar), and Baras Cave.",
        cost: 1400, // 3-Hour Boat Rent (₱600 1st hr + ₱150/hr after = ₱900) + SEAFDEC entry & island fees (₱500 total)
        notable: "At SEAFDEC, you can see massive breeding milkfish, sea bass, and giant groupers in floating cages."
      },
      {
        time: "11:30 AM",
        title: "Check Out & Back to Iloilo",
        desc: "Frescening up, checkout, and catch a tricycle back to Jordan Port, then the boat back to Iloilo.",
        cost: 900, // Tricycle to Jordan (₱350) + Boat (₱200) + Taxi to Iloilo Hotel (₱150) + Port snacks (₱200)
        notable: "Grab a quick snack of fresh Guimaras mangoes at the port before crossing."
      },
      {
        time: "02:30 PM",
        title: "Jaro Cathedral & Belfry",
        desc: "Check in at your Iloilo hotel. Take a jeepney/Grab to Jaro. Visit the Romanesque cathedral featuring a unique outdoor belfry across the street and the stone stairs leading to the miraculous Candelaria shrine.",
        cost: 100, // Jeepney / Grab fares
        notable: "Jaro is known as the 'masculine' church because all the statues of saints lining the pillars inside are male."
      },
      {
        time: "04:00 PM",
        title: "Molo Mansion & Molo Church",
        desc: "Cross over to Molo. Visit the Gothic-Renaissance Molo Church built of coral stone. Afterwards, cross the plaza to the restored Molo Mansion for souvenirs and local Molo Soup.",
        cost: 400, // Molo soup & snacks for 4
        notable: "Molo is the 'feminine' church (all-female saints inside). The Molo Mansion across the street is a majestic heritage villa."
      },
      {
        time: "07:00 PM",
        title: "Dinner at Breakthrough or Tatoy's",
        desc: "Head to Villa Arevalo coastline. Dine at Breakthrough Restaurant or Tatoy's Manokan. Eat baked oysters, buttered scallops, native lechon manok, and fresh grilled red snapper (Mangagat).",
        cost: 2000, // Rich seafood feast for 4
        notable: "Coastal dining with fresh seafood right off the pan. Baked oysters are incredibly cheap here (~₱150 per plate)!"
      }
    ],
    tips: "Modernized and traditional jeepneys are the lifeblood of Iloilo. Routes are labeled clearly (e.g., 'Jaro CPU', 'Molo Mandurriao'). Try riding one for the local experience!"
  },
  {
    day: 6,
    date: "June 26",
    title: "Heritage Living, Souvenirs & Flight Home",
    description: "Spend your last day experiencing authentic Spanish-colonial lifestyle at a heritage house, buy famous Ilonggo treats, and head to the airport for your night flight back to Davao.",
    accommodation: null, // Flight home tonight
    activities: [
      {
        time: "09:00 AM",
        title: "Camiña Balay nga Bato Tour",
        desc: "Visit a beautifully preserved 1865 ancestral stone house. Learn about Spanish-colonial lifestyle, loom weaving, and local artifacts.",
        cost: 1000, // ₱250/pax (includes guided house tour + hot batirol chocolate + Pancit Molo)
        notable: "The highlight is sitting in their grand 'sala' sipping thick, rich chocolate made by hand in a wooden batirol."
      },
      {
        time: "11:30 AM",
        title: "Biscocho Haus Souvenir Run",
        desc: "Head to Jaro to buy your pasalubong: Biscocho (toasted sweet bread), Butterscotch (chewy & rich), and Barquillos.",
        cost: 2000, // Pasalubong budget for the group
        notable: "Iloilo's butterscotch and biscocho are widely considered the best in the country due to local dairy and baking traditions."
      },
      {
        time: "01:00 PM",
        title: "Lunch at Roberto's (Calle Real)",
        desc: "Dine at a legendary local Chinese-Filipino eatery. Try their famous 'Queen Siopao' (stuffed with bacon, Chinese sausage, chicken, pork, and salted egg) or their classic pancit canton.",
        cost: 800, // Lunch for 4 pax
        notable: "Roberto's Siopao is a local legend; no sauce is needed because it's naturally moist and flavor-packed."
      },
      {
        time: "03:00 PM",
        title: "Relax at Museum of Philippine Economic History",
        desc: "Visit this highly interactive, air-conditioned museum housed in the historic Elizalde building. Learn how the sugar, weaving, and shipping industries shaped the country.",
        cost: 0, // Free admission!
        notable: "A great way to spend a hot afternoon; very informative and visually stunning."
      },
      {
        time: "06:30 PM",
        title: "Final Dinner & Airport Transfer",
        desc: "Have a final light dinner in the city. Retrieve your luggage from the hotel, and take a Grab/taxi to the airport for your night flight back to Davao.",
        cost: 1400, // Grab taxi to airport (₱600) + dinner/snacks (₱800)
        notable: "Allow 45 mins to 1 hour travel time to the airport, as it is 19km outside the city center."
      },
      {
        time: "09:30 PM",
        title: "Flight Back to Davao",
        desc: "Check-in at Iloilo International Airport and fly back to Davao, bringing home unforgettable heritage memories.",
        cost: 0,
        notable: "Make sure you pack liquid souvenirs (like sinamak vinegar or syrup) in your checked baggage!"
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
    // Accommodation
    { category: "accommodation", name: "Day 1: Iloilo Hotel (GT Hotel/Go Hotels)", cost: 2200, isPerPerson: false, notes: "Shared Family Room / 2 Double Rooms for 4 Pax" },
    { category: "accommodation", name: "Day 2: Bacolod Hotel (Saltimboca Inn)", cost: 1800, isPerPerson: false, notes: "Heritage style Quad Room" },
    { category: "accommodation", name: "Day 3: Iloilo Hotel (GT Hotel/Go Hotels)", cost: 2200, isPerPerson: false, notes: "Shared Family Room" },
    { category: "accommodation", name: "Day 4: Guimaras Beach Resort (Raymen)", cost: 3200, isPerPerson: false, notes: "Alubihod Beachfront Quad Aircon Room" },
    { category: "accommodation", name: "Day 5: Iloilo Hotel (GT Hotel/Go Hotels)", cost: 2200, isPerPerson: false, notes: "Shared Family Room" },
    
    // Transportation
    { category: "transportation", name: "Iloilo Airport to City Center Taxi (Day 1)", cost: 500, isPerPerson: false, notes: "Grab/Taxi for 4 Pax" },
    { category: "transportation", name: "Iloilo Hotel to Port + Terminal Fee (Day 2)", cost: 270, isPerPerson: false, notes: "Taxi (₱150) + Terminal fees (₱30/pax × 4 = ₱120)" },
    { category: "transportation", name: "Iloilo to Bacolod Ferry Tickets (Day 2)", cost: 2000, isPerPerson: false, notes: "Fastcraft (OceanJet/Weesam) - ₱500/pax × 4" },
    { category: "transportation", name: "Bacolod Port to Hotel (Day 2)", cost: 150, isPerPerson: false, notes: "Tricycle/Grab transfer" },
    { category: "transportation", name: "Silay Heritage Tour Tricycle Rental (Day 2)", cost: 800, isPerPerson: false, notes: "Flat-rate 'pakyaw' for 4 Pax" },
    { category: "transportation", name: "The Ruins Roundtrip Transfer (Day 3)", cost: 300, isPerPerson: false, notes: "Grab or rented tricycle" },
    { category: "transportation", name: "Bacolod Hotel to Port Transfer (Day 3)", cost: 150, isPerPerson: false, notes: "Tricycle transfer" },
    { category: "transportation", name: "Bacolod to Iloilo Ferry Tickets (Day 3)", cost: 2000, isPerPerson: false, notes: "Fastcraft - ₱500/pax × 4" },
    { category: "transportation", name: "Bacolod Port Terminal Fee (Day 3)", cost: 160, isPerPerson: false, notes: "₱40/pax terminal fee × 4" },
    { category: "transportation", name: "Iloilo Port to Hotel Transfer (Day 3)", cost: 150, isPerPerson: false, notes: "Taxi/Grab" },
    { category: "transportation", name: "Iloilo Hotel to Parola Wharf (Day 4)", cost: 150, isPerPerson: false, notes: "Taxi/Grab" },
    { category: "transportation", name: "Iloilo to Guimaras Pumpboat (Day 4)", cost: 200, isPerPerson: false, notes: "₱50/pax pumpboat fare × 4" },
    { category: "transportation", name: "Guimaras Tricycle Land Tour Rent (Day 4)", cost: 1800, isPerPerson: false, notes: "8-Hour chartered tricycle for 4 Pax" },
    { category: "transportation", name: "Guimaras Island Hopping Boat (Day 5)", cost: 900, isPerPerson: false, notes: "3-Hour private boat charter (₱600 1st hr, ₱150/hr after)" },
    { category: "transportation", name: "Guimaras Resort to Jordan Port (Day 5)", cost: 350, isPerPerson: false, notes: "Tricycle flat rate for luggage & passengers" },
    { category: "transportation", name: "Guimaras to Iloilo Pumpboat (Day 5)", cost: 200, isPerPerson: false, notes: "₱50/pax pumpboat fare × 4" },
    { category: "transportation", name: "Parola Wharf to Iloilo Hotel (Day 5)", cost: 150, isPerPerson: false, notes: "Taxi/Grab" },
    { category: "transportation", name: "Iloilo City Jeepney/Taxi Tours (Day 5 & 6)", cost: 700, isPerPerson: false, notes: "Experiencing traditional double-back Iloilo jeepneys + Grab" },
    { category: "transportation", name: "Iloilo Hotel to Airport Transfer (Day 6)", cost: 600, isPerPerson: false, notes: "Grab/Taxi to Cabatuan Airport" },

    // Food
    { category: "food", name: "Day 1 Suppers (Iloilo)", cost: 600, isPerPerson: false, notes: "Light meals upon arrival" },
    { category: "food", name: "Day 2 Lunch: El Ideal Bakery (Silay)", cost: 1000, isPerPerson: false, notes: "Heritage pastries, meals, guapple pie" },
    { category: "food", name: "Day 2 Dinner: Manokan Country Inasal", cost: 800, isPerPerson: false, notes: "Chicken inasal, garlic rice, drinks" },
    { category: "food", name: "Day 2 Dessert: Calea Cakes (Bacolod)", cost: 600, isPerPerson: false, notes: "Famous cakes and coffee" },
    { category: "food", name: "Day 3 Lunch: Bacolod Local Diner", cost: 800, isPerPerson: false, notes: "Casual Bacolod food before ferry" },
    { category: "food", name: "Day 3 Dinner: Ted's/Deco's La Paz Batchoy", cost: 600, isPerPerson: false, notes: "Authentic Batchoy bowls + puto" },
    { category: "food", name: "Day 4 Lunch: Pitstop Mango Pizza (Guimaras)", cost: 1200, isPerPerson: false, notes: "Famous mango pizza & local dishes" },
    { category: "food", name: "Day 4 Dinner: Alubihod Beach Seafood", cost: 1000, isPerPerson: false, notes: "Fresh beachfront dinner" },
    { category: "food", name: "Day 5 Lunch & Mango buying (Guimaras)", cost: 900, isPerPerson: false, notes: "Quick meals + fresh mango snack at port" },
    { category: "food", name: "Day 5 Dinner: Breakthrough / Tatoy's", cost: 2000, isPerPerson: false, notes: "Baked oysters, scallops, baked fish, native chicken" },
    { category: "food", name: "Day 6 Lunch: Roberto's Siopao (Calle Real)", cost: 800, isPerPerson: false, notes: "Legendary giant Queen Siopao & Noodles" },
    { category: "food", name: "Day 6 Dinners & Snacks (Airport run)", cost: 1200, isPerPerson: false, notes: "Final meal in Iloilo + travel snacks" },

    // Activities & Entrances
    { category: "activities", name: "Silay Heritage Houses Fees", cost: 400, isPerPerson: false, notes: "Entry fee for Balay Negrense & Hofileña (₱100/pax × 4)" },
    { category: "activities", name: "The Ruins Entrance Fee (Talisay)", cost: 600, isPerPerson: false, notes: "₱150/pax entry × 4" },
    { category: "activities", name: "Guisi Lighthouse & Ruins Entry Fee", cost: 200, isPerPerson: false, notes: "₱50/pax maintenance fee × 4" },
    { category: "activities", name: "Guimaras Island Hopping Environmental Fees", cost: 500, isPerPerson: false, notes: "SEAFDEC entry + sanctuary & island docking fees" },
    { category: "activities", name: "Camiña Balay nga Bato House Tour & Snack", cost: 1000, isPerPerson: false, notes: "₱250/pax entry (includes guided tour + hot chocolate batirol + pancit molo)" },

    // Misc / Souvenirs
    { category: "misc", name: "Pasalubong: BongBong's / Merci (Bacolod)", cost: 1000, isPerPerson: false, notes: "Napoleones, Piaya, barquillos" },
    { category: "misc", name: "Pasalubong: Biscocho Haus (Iloilo)", cost: 1500, isPerPerson: false, notes: "Biscocho, butterscotch packs" },
    { category: "misc", name: "Emergency / Incidentals Fund", cost: 2500, isPerPerson: false, notes: "Buffer fund for unforeseen trike/taxi/medical needs" }
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
  { id: "pack-docs", text: "Flight Boarding Passes & IDs", category: "essential", checked: false },
  { id: "pack-cash", text: "Cash in PHP (Crucial for Guimaras & Bacolod trikes)", category: "essential", checked: false },
  { id: "pack-ferry", text: "Pre-booked Ferry Tickets (Iloilo <-> Bacolod)", category: "essential", checked: false },
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
    { operator: "OceanJet", route: "Iloilo to Bacolod", schedule: "Daily: 6:00 AM, 8:50 AM, 11:30 AM, 2:10 PM, 4:50 PM", duration: "1 Hour", contact: "oceanjet.net" },
    { operator: "Weesam Express", route: "Iloilo to Bacolod", schedule: "Daily: 6:30 AM, 9:30 AM, 12:30 PM, 3:30 PM", duration: "1 Hour", contact: "facebook.com/weesamexpress" },
    { operator: "Jordan Pumpboat", route: "Iloilo (Parola) to Guimaras (Jordan)", schedule: "Every 15-30 minutes (6:00 AM - 6:00 PM)", duration: "15 Minutes", contact: "No pre-booking needed, pay at wharf" }
  ],
  localContacts: [
    { name: "Guimaras Tricycle Land Tour Association", role: "Tricycle Tours from Jordan Port", contact: "Standard Rates: ₱1,500 - ₱1,800. Walk-in at Jordan Port Tourist Center." },
    { name: "Alubihod Boat Association", role: "Island Hopping from Alubihod Beach", contact: "Direct booking at Raymen Resort or Alubihod Beach station. Standardized rates." },
    { name: "Grab Car Iloilo & Bacolod", role: "City Transportation", contact: "Use Grab App in Bacolod and Iloilo City. (Note: No Grab in Guimaras!)" }
  ],
  culturalDoDonts: [
    { title: "Mango Protection in Guimaras", content: "DO NOT bring any outside mangoes into Guimaras. This is strictly illegal to protect their crops from the Mango Pulp Weevil. Bags are inspected at the port." },
    { title: "Speaking Hiligaynon/Ilonggo", content: "People in Panay and Negros speak Hiligaynon (Ilonggo), which sounds very gentle and musical. Davao speaks Bisaya/Cebuano. Many words are similar, but the intonation is softer. 'Salamat' is 'Salamat gid' (Thank you very much)." },
    { title: "Cash Reserves", content: "Always keep cash (bills of ₱20, ₱50, ₱100, ₱500) because smaller shops, tricycles, and ferry terminals do not accept GCash or cards." }
  ]
};
