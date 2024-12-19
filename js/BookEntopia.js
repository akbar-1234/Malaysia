// BookKLTower`.html
document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    english: {
      // Navbar //

      navbar_1_title: "Cities in Malaysia",
      navbar_1_1: "Kuala Lumpur",
      navbar_1_2: "Johor Bahru",
      navbar_1_3: "Langkawi",
      navbar_1_4: "Melaka",
      navbar_1_5: "Penang",
      navbar_2_title: "Attractions",
      navbar_2_1: "Aquaria KLCC",
      navbar_2_2: "Check availability",
      navbar_2_3: "Genting Awana SkyWay",
      navbar_2_4: "KL Tower",
      navbar_2_5: "Petronas Twin Towers",
      navbar_2_6: "Entopia Penang",
      navbar_2_7: "Langkawi Underwater World",
      navbar_2_8: "3D Trick Art Museum",
      navbar_2_9: "The Habitat Penang Hill",
      navbar_2_10: "Dark Mansion Museum",
      navbar_2_11: "Wonderfood Museum",
      navbar_2_12: "Langkawi SkyCab Cable Car",
      navbar_2_13: "Batu Caves",
      navbar_2_14: "Melaka Zoo",
      navbar_2_15: "LEGOLAND Malaysia",
      navbar_2_16: "Sunway Lagoon Theme Park",
      navbar_2_17: "Escape Theme Park",
      navbar_2_18: "Lost World of Tambun",
      navbar_2_29: "Crocodile Adventureland Langkawi",
      navbar_2_20: "KidZania Kuala Lumpur",
      navbar_2_21: "Ripley's Adventureland",
      navbar_2_22: "Desaru Coast Adventure Waterpark",
      navbar_2_23: "KL Tower Mini Zoo",
      navbar_2_24: "Genting Skyworlds Theme Park",
      navbar_2_25: "Genting Skytropolis Theme Park",

      // Navbar //

      // Home_tickets //

      home_title_1: "Top Attractions In Malaysia",
      ticket_1: "Sunway Lagoon Theme Park",
      ticket_2: "Menara Kuala Lumpur Tower Tickets (KL Tower)",
      ticket_3: "Aquaria KLCC",
      ticket_4: "Gamuda Cove",
      ticket_5: "petronas twin towers",
      ticket_6: "Genting Skyworlds Theme Park",
      ticket_7: "A'famosa Water Park",
      ticket_8: "The Top Penang",
      ticket_9: "Check availability",
      ticket_10: "Wet World Water Park",
      ticket_11: "Genting Skytropolis Theme Park",
      ticket_12: "Lost World of Tambun Amusement Park",
      ticket_13: "Mari Mari Cultural Village",
      ticket_14: "atmosphere 360",
      ticket_15: "Genting Awana SkyWay",
      ticket_16: "Langkawi SkyCab Cable Car",
      ticket_17: "Batu Caves",
      ticket_18: "Upside Down House",
      ticket_19: "The Habitat Penang Hill",
      ticket_20: "Fireflies in Kuala Selangor",
      ticket_21: "Sky Mirror",
      ticket_22: "Taming Sari Melaka",
      ticket_23: "The Shore Sky Tower",
      ticket_24: "KL City Tours",
      ticket_25: "Blue Tears Tour in Kuala Selangor",
      ticket_26: "Colmar Tropicale",
      ticket_27: "Langkawi Tours",
      ticket_28: "Eagle-feeding Kuala Selangor",
      ticket_29: "Petrosains, The Discovery Centre",
      home_title_2: "Find out all the top attractions and the",
      home_title_3: "best theme parks in Malaysia",
      home_title_4: "Nature & Wildlife in Malaysia",
      ticket_30: "Zoo Negara",
      ticket_31: "KL Bird Park",
      ticket_32: "Melaka Zoo",
      ticket_33: "KL Tower Mini Zoo",
      ticket_34: "Crocodile Adventureland Langkawi",
      ticket_35: "Farm in the City",
      ticket_36: "Bentong Farm",
      ticket_37: "Langkawi Underwater World",
      ticket_38: "Entopia by Penang Butterfly Farm",
      ticket_39: "Taman Buaya & Rekreasi Melaka",
      home_title_5: "Best Theme Parks & Water Parks in Malaysia",
      ticket_40: "Berjaya Times Square Theme Park",
      ticket_41: "LEGOLAND Malaysia",
      ticket_42: "Bayou Lagoon Water Park",
      ticket_43: "99 Wonderland Park",
      ticket_44: "KidZania Kuala Lumpur Tickets",
      ticket_45: "VR Universal",
      ticket_46: "Escape Theme Park",
      ticket_47: "Desaru Coast Adventure Waterpark",
      ticket_48: "Bukit Merah Water Park",
      ticket_49: "Ehsan Waterpark",
      ticket_50: "I-City Theme Park",
      ticket_51: "Splash Out Langkawi",
      home_title_6: "Museums in Malaysia",
      ticket_52: "Wonderfood Museum",
      ticket_53: "Illusion 3D Art Museum",
      ticket_54: "Penang 3D Trick Art Museum",
      ticket_55: "Dark Mansion Museum",
      ticket_56: "Tech Dome Penang",
      ticket_57: "Ghost Museum Melaka",
      ticket_58: "Ripley's Adventureland",
      ticket_59: "Ghost Museum Penang",
      home_title_7: "Popular Activities in Malaysia",
      ticket_60: "Kiulu White Water Rafting",
      ticket_61: "xtreme park langkawi",
      ticket_62: "Jump Street Asia",
      ticket_63: "ATV Langkawi",
      ticket_64: "Langkawi Island Hopping",
      home_title_8: "Malaysia Cruises",
      ticket_65: "Dickson Dragon Cruise",
      ticket_66: "Putrajaya Tour & Cruise",
      home_title_9: "Transportation Services",
      ticket_67: "KLIA Express Tickets",
      ticket_68: "Langkawi Ferry Tickets & Transfers",
      ticket_69: "Malaysia Airport Transfers",

      // Home_tickets //

      // Footer //

      footer_1: "Download the Headout app",
      footer_2: "Get Help 24/7",
      footer_3: "Chat with Us",
      footer_4: "Call Us",
      footer_5: "Email Us",
      footer_6: "Headout",
      footer_7: "Company Details",
      footer_8: "Privacy Policy",
      footer_9: "Terms of Usage",
      footer_10: "We Accept",
      footer_11: "© Headout Inc, 82 Nassau St #60351 New York, NY 10038",

      // Footer //

      // SunwayLagoon.html //

      bookCityMalasian: "Book Entopia By Penang Butterfly Farm Tickets",
      show_inclusions: "Check availability",
      bookbird_ticket_check_availability: "Check availability",
      bookbird_ticket_next_available: "Next available: Today",
      bookbird_ticket_Mobile_ticket: "Mobile ticket",
      bookbird_ticket_Flexible_Duration: "Flexible Duration",
      bookbird_ticket_Meals_Included: "Meals Included",
      bookbird_title: "Book KL Bird Park Tickets in Kuala Lumpur",
      bookbird_rating: "(6.5K Ratings)",
      bookbird_header_p:
        "Headout is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction. This is not the venue's website.",
      new: "NEW",

      combos: "Combos",
      zooMelaka: "Entopia Penang Tickets: Butterfly Farm",
      comboTwelve: "Habitat Penang Hill Tickets",
      comboSixTeen:
        "Combo (Save 16%): KL Tower Observation Deck + KLIA Ekspress Tickets",
      comboSevn: "Combo (Save 17%):KL Tower + Petronas Twin Towers Tickets",

      getrr:
        "Get ready for a wild night in Sunway Lagoon Night Park, where you'll get to experience the Old American West with thrilling cowboy-themed attractions and activities!",
      enjoyy:
        "Enjoy spectacular fire performances and stunning visuals as you get into the spirit of the Wild West",
      testtt:
        "Test your courage and skills on the Rodeo Bull ride and enjoy the Grand Canyon River Rapid.",
      expp: "Experience the Wild West Mingle show with live performances and entertainment, and end the day with the night's finale, the spectacular fire performance",

      bookbird_ticket_1_title: "Crocodile Adventureland Langwaki Tickets",
      bookbird_ticket_1_description_1:
        "Surpass the long queues and head straight to Kuala Lumpur’s Aquaria KLCC, listed among one of Asia’s top five aquariums.",
      bookbird_ticket_1_description_2:
        "Swing by up to 90 rides and attractions, including the Vuvuzela, one of the world's highest water rides, the topsy-turvy Tomahawk, and more.",
      bookbird_ticket_1_description_3:
        "Their state-of-the-art aquarium truly makes this a remarkable experience for adults and children alike.",
      bookbird_ticket_1_description_4:
        "Enjoy complimentary access to the Night Park, featuring attractions, activities in an Old American West-themed setting, and fire performances.",
      bookbird_ticket_1_description_5:
        "Enhance your experience with optional priority access to 21 rides, or choose a 2-day pass with meals, camping, and a discount on pay-per-rides.",
      bookbird_ticket_1_skidka: "6% off",

      bookbird_from: "from",
      bookbird_check: "Check availability",
      next_available: "Next available: Today",
      mobile_ticket: "Mobile ticket",
      flexible_duration: "Flexible Duration",
      meals_included: "Meals Included",
      kuala_lumpur: "Kuala Lumpur",
      petronas_twin: "Petronas Twin Towers Ticket",
      top_things: "Top things to do in Kuala Lumpur",
      kl_tower: "KL Tower Tickets",
      petronas_twin: "Petronas Twin Towers Tickets",
      aquaria_KLCC: "Aquaria KLCC Tickets",
      grnting_skyworlds: "Genting SkyWorlds Tickets",
      genting_skytropolis: "Genting Skytropolis Tickets",
      genting_highlands: "Genting Highlands Tickets",
      genting_awana: "Genting Awana Cable Car Tickets",
      berjaya_times: "Berjaya Times Square Tickets",
      kuala_lumpur2: "Kuala Lumpur Bird Park",
      kidzana_kuala: "Kidzania Kuala Lumpur Tickets",
      kl_tower2: "KL Tower Mini Zoo",
      visiting_petronas:
        "Visiting Petronas Twin Towers | Tickets and tours explained",
      smack_in:
        "Smack in the heart of Kuala Lumpur, the Petronas Twin Towers stand tall as a symbol of modern architecture. This tower, home to 88 floors, a SkyBridge and an Observation Deck, are an absolute visit for any visitor wanting to get a glorious view of Kuala Lumpur’s vast and beautiful skyline. With your tickets, you’ll get to visit the attractions within the towers, like Petrosains, the Discovery Center and Aquaria KLCC. Read along to find out why you must get Petronas Twin Towers’ Tickets on your visit to Kuala Lumpur!",
      skip_the: "Skip-The-Line entry tickets",
      breeze_through:
        "Breeze through queues and get fast track access to the glorious Petronas Twin Towers, soaring high above Kuala Lampur’s skyline",
      ewalk_across:
        "EWalk across the famous glass SkyBridge on the 41st and 42nd floors, the world's highest 2-story bridge.",
      take_an:
        "Take an elevator to the 86th floor’s Observation Deck and gaze at the city’s breathtaking vistas.",
      enange_with:
        "Engage with multiple digital displays and exhibits spread throughout the vast expanse of the twin towers.",
      recommended_E:
        "Recommended Experience: <br> Standard Entry Tickets to Petronas Twin Towers",
      combo_tickets: "Combo tickets",
      get_a_holi:
        "Get a holistic tour of Kuala Lumpur’s exciting attractions by combining offers and attractions in one ticket!",
      get_up:
        "Get up to 12% off on your tickets with certain attractions like the KLIA Ekspres, and make the most of your money and time during your trip to Malaysia. Avail further discounts on tickets for senior citizens and children.",
      visit_landmarks:
        "Visit landmarks in Malaysia like the Batu Caves, KLIA Ekspres and more, and opt for private guided tours or a hop-on, hop-off tour with your combo tickets.                              Recommended Experience: <br> Combo (Save 12%): Petronas Twin Towers + KLIA Ekspres Tickets                            KL Tower Observation Deck + Sky Deck + Sky Box + Tower Walk 100 + Skip-the-Line Tickets to Petronas Twin Towers",
      what_youll: "What you’ll see at the Petronas Twin Towers",
      theres_lots:
        "There’s lots of things for you to do while visiting the Petronas Twin Towers! Look out for the world-famous Skybridge, one of the highest observation decks in Malaysia, and the renowned Aquaria KLCC and Petrosains!",
      observation_deck: "Observation deck",
      if_its:
        "If it's your first time visiting the Petronas Twin Towers, the Observation Deck on Level 83 is the place to be! Standing in awe of the iconic Petronas Towers, visitors are treated to an unparalleled experience as they take in the stunning cityscape with its modern architecture.",
      skybridge: "Skybridge",
      connecting_the:
        "Connecting the two iconic towers on the 41st and 42nd floors, this double-decked bridge allows you to take in breathtaking panoramic views of the city. You'll also get a glorious view of the bustling city below, with its impressive skyline spreading out before you.",
      observation_deck2: "Observatory Deck Gift Shop",
      grab_a_postcard:
        "Grab a postcard, keychain, t-shirt, or other mementos to capture the essence of this famous landmark. The Observation Deck Gift Shop is a treasure, allowing you to bring home memories of your visit to the Petronas Twin Towers.",
      petrosains_the: "Petrosains, the Discovery Center",
      petrosains_is:
        "Petrosains is a must-visit destination for those seeking an interactive and educational experience. Discover outer space, dive into the depths of the ocean, and engage with a range of exhibits that make learning about science fun and engaging.",
      aquaria_KLCC2: "Aquaria KLCC",
      aquaria_KLCC3:
        "Aquaria KLCC is a world-class aquarium about 60,000 square feet in size and home to over 5,000 aquatic and marine organisms. Various displays such as the Living Ocean, the Stream, the Coastal, and the Deep Sea allow visitors to immerse themselves in the underwater environment.",
      fine_dining: "Fine-Dining restaurants",
      choose_from:
        "Choose from an array of fine-dining restaurants at the Petronas Twin Towers, on the 51st and 52nd floor. The floor is home to restaurants from countries like Japan, China, a range of Malaysian fine-dining and exquisite European cuisine like Italian and Portuguese. You’ll get to experience an exorbitant variety of cuisines alongside the glorious skyline and views.",
      plan_your_visit: "Plan your visit to the Petronas Twin Towers",
      learn_everything:
        "Learn everything you’ll need to know on your visit to the Petronas Twin Towers in this section! From timings, restaurants within the towers, rules and guidelines – plan the perfect trip to the towers",
      timings: "Timings",
      getting_there: "Getting There",
      facilities: "Facilities",
      nearby: "Nearby",
      when_are:
        "When are the Petronas Twin Towers open?                                                The Petronas Twin Towers' opening hours are from 10 AM to 6 PM. The towers are closed on Mondays. (Except on Public Holidays or Replacement Public Holiday for holidays that fall on Monday)",
      best_time:
        "Best time to visit: The best time to visit the towers is in the evenings, between 5 to 6 PM, as you might catch a fountain and light display during this time. Additionally, every night from 8 PM to 10 PM, Lake Symphony at KLCC hosts a symphony and light performance",
      weekdays_vs_weekends:
        "Weekdays vs Weekends: We’d recommend visiting the Petronas Towers on weekdays, as weekends may get quite crowded",
      address: "Address",
      sunway_lagoon:
        "Sunway Lagoon, Sunway Pyramid, 3, Bandar                                            Sunway, Jalan PJS 11/11, 46150 Petaling Jaya, Selangor, Malaysia.",
      by_car: "By Car:",
      with_fast:
        "With fast expressways, Sunway Lagoon is a                                                short 15-minute drive from Kuala Lumpur. You can simply put in the                                                location of the park and the navigation will take you to your                                                destination",
      by_train: "By Train:",
      take_the:
        "Take the KTM Komuter train to Subang Jaya                                                Station or the Putra LRT train to Kelana Jaya station, then the                                                Sunway Pyramid feeder bus to the park. Alternatively, you can take a                                                train from Kelana Jaya Station and board a feeder bus to the Pyramid                                                stop.",
      by_bus: "By Bus:",
      sunway_pyramid:
        "Sunway Pyramid stop is the closest bus stop                                                to the park and is only a 4-minute walk away.",
      by_shuttle: "By Shuttle Service:",
      free_shuttle:
        "Free shuttle service is                                                provided by Sunway around the city every 25 minutes. It operates                                                between 7 AM and 9:30 PM from Monday to Friday, and between 9 AM and                                                9:30 PM on weekends and public holidays.",
      WiFi: "WiFi:",
      there_is_free: "There is free WiFi available at Sunway Lagoon",
      wheelchair: "Wheelchair accessibility:",
      the_park:
        "The park is mostly                                                wheelchair accessible. They also have accessible toilets.",
      parking: "Parking:",
      parking_is:
        "Parking is available at Sunway Pyramid                                                Shopping Mall &amp; Sunway Resort Hotel &amp; Spa.",
      Lockers: "Lockers:",
      you_can_store:
        "You can store your belongings in lockers                                                while visiting the park. You can get a locker for specific time                                                slots",
      Washrooms: "Washrooms:",
      there_are_washrooms:
        "There are washrooms where you can change                                                after the water pool ride.",
      First_Aid: "First Aid:",
      there_is_a_private:
        "There is a private hospital located near                                                the park for any medical emergencies.",
      Park_Map: "Park Map:",
      there_is_a_map:
        "There is a map of the park available to                                                make sure that you don’t get lost in the park. Download the map                                                here.",
      sunway_pyramid_shopping: "Sunway Pyramid Shopping Mall",
      while_there:
        "While there are no gift shops present within the park itself, there is a                                            shopping mall located right next to the park where you can buy whatever                                            you may need",
      Address2: "Address:",
      Jalan:
        "3, Jalan PJS 11/15, Bandar Sunway, 47500                                            Petaling Jaya, Selangor, Malaysia",
      there_is_also:
        "There is also an online store by Sunway Lagoon where you can find park                                            essentials along with some souvenirs.",
      you_need:
        "You need more energy when you're having a good time! The eateries dotted                                            throughout the theme park can satisfy your cravings for a thirst                                            quencher, a snack, something light, or a full-fledged meal.",
      Hydration_Zone: "Hydration Zone:",
      stay_hydrated:
        "Stay hydrated on your visit and quench                                            your thirst with an assortment of refreshing beverages available at the                                            Hydration Zone.",
      Take_5: "Take 5:",
      take_5_and:
        "Take 5 and rejuvenate yourself with some fresh                                            watermelon juice at Take 5. You can also eat some light snacks like                                            popcorn, soft drinks and delicious hot dogs.",
      hot_roll: "Hot &amp; Roll:",
      with_a_variety:
        "With a variety of sweet and savory                                            wraps, Hot &amp; Roll includes a delectable range of rolls and wraps                                            that come in a range of breads like chapattis, parathas or even pitas.",
      you_can_stay:
        "You can stay at some of the hotels near the park while you visit Sunway                                            Lagoon as well.",
      Budget: "Budget:",
      Sunway_Pyramid_Hotel: "Sunway Pyramid Hotel&nbsp;",
      Mid_Range: "Mid-Range:",
      sunway_Clio: "Sunway Clio Hotel, Sunway Pyramid Mall&nbsp;",
      Luxury: "Luxury:",
      luxury_resort: "Luxury Resort Suites, Sunway City",
      legoland: "Legoland Malaysia",
      if_youre:
        "If you’re still                                            in the mood for theme parks, Legoland Malaysia is another great place to                                            just let loose and have fun. With more than eight themed sections with                                            over 40 activities and attractions, Legoland Malaysia is definitely a                                            must-visit",
      habitat: "Habitat Penang Hill",
      deep_dive:
        "Deep dive into nature’s lap at the Habitat Penang Hill, a magnificent                                            rainforest discovery center, which serves as a perfect place for all                                            nature enthusiasts.",
      entopia: "Entopia by Penang Butterfly Farm",
      get_closer:
        "Get closer to nature with a classroom made of nature at Entopia. With more than 300 species of flora and fauna, indulge in learning activities and interact with animals to learn more about wonderful nature.",

      // SunwayLagoon.html //
    },
    indonesian: {
      navbar_1_title: "Kota-kota di Malaysia",
      navbar_1_1: "Kuala Lumpur",
      navbar_1_2: "Johor Bahru",
      navbar_1_3: "Langkawi",
      navbar_1_4: "Malaka",
      navbar_1_5: "Pulau Pinang",
      navbar_2_title: "Atraksi",
      navbar_2_1: "Akuarium KLCC",
      navbar_2_2: "Cek Ketersediaan",
      navbar_2_3: "Genting Awana SkyWay",
      navbar_2_4: "Menara KL",
      navbar_2_5: "Menara Kembar Petronas",
      navbar_2_6: "Entopia Penang",
      navbar_2_7: "Dunia Bawah Laut Langkawi",
      navbar_2_8: "Museum Seni Trik 3D",
      navbar_2_9: "Habitat Bukit Penang",
      navbar_2_10: "Museum Rumah Gelap",
      navbar_2_11: "Museum Makanan Ajaib",
      navbar_2_12: "Kereta Gantung Langkawi SkyCab",
      navbar_2_13: "Gua Batu",
      navbar_2_14: "Kebun Binatang Melaka",
      navbar_2_15: "LEGOLAND Malaysia",
      navbar_2_16: "Sunway Lagoon Theme Park",
      navbar_2_17: "Taman Hiburan Escape",
      navbar_2_18: "Dunia Tambun yang Hilang",
      navbar_2_29: "Petualangan Buaya Langkawi",
      navbar_2_20: "KidZania Kuala Lumpur",
      navbar_2_21: "KidZania Kuala Lumpur",
      navbar_2_22: "Taman Air Petualangan Pantai Desaru",
      navbar_2_23: "Kebun Binatang Mini Menara KL",
      navbar_2_24: "Taman Hiburan Genting Skyworlds",
      navbar_2_25: "Taman Hiburan Genting Skytropolis",
      home_title_1: "Atraksi Teratas Di Malaysia",
      ticket_1: "Taman Hiburan Sunway Lagoon",
      ticket_2: "Tiket Menara Kuala Lumpur (Menara KL)",
      ticket_3: "Akuarium KLCC",
      ticket_4: "Teluk Gamuda",
      ticket_5: "menara kembar petronas",
      ticket_6: "Taman Hiburan Genting Skyworlds",
      ticket_7: "Taman Air A'famosa",
      ticket_8: "Penang Teratas",
      ticket_9: "Cek Ketersediaan",
      ticket_10: "Taman Air Dunia Basah",
      ticket_11: "Taman Hiburan Genting Skytropolis",
      ticket_12: "Taman Hiburan Dunia Hilang Tambun",
      ticket_13: "Desa Budaya Mari Mari",
      ticket_14: "suasana 360",
      ticket_15: "Genting Awana SkyWay",
      ticket_16: "Kereta Gantung Langkawi SkyCab",
      ticket_17: "Gua Batu",
      ticket_18: "Rumah Terbalik",
      ticket_19: "Habitat Bukit Penang",
      ticket_20: "Kunang-kunang di Kuala Selangor",
      ticket_21: "Cermin Langit",
      ticket_22: "Menjinakkan Sari Melaka",
      ticket_23: "Menara Langit Pantai",
      ticket_24: "Tur Kota KL",
      ticket_25: "Tur Air Mata Biru di Kuala Selangor",
      ticket_26: "Colmar Tropis",
      ticket_27: "Tur Langkawi",
      ticket_28: "Kuala Selangor yang memberi makan elang",
      ticket_29: "Petrosains, Pusat Penemuan",
      home_title_2: "Cari tahu semua atraksi utama dan",
      home_title_3: "taman hiburan terbaik di Malaysia",
      home_title_4: "Alam & Hidupan Liar di Malaysia",
      ticket_30: "Kebun Binatang Negara",
      ticket_31: "Taman Burung KL",
      ticket_32: "Kebun Binatang Melaka",
      ticket_33: "Kebun Binatang Mini Menara KL",
      ticket_34: "Petualangan Buaya Langkawi",
      ticket_35: "Pertanian di Kota",
      ticket_36: "Peternakan Bentong",
      ticket_37: "Dunia Bawah Laut Langkawi",
      ticket_38: "Entopia oleh Peternakan Kupu-Kupu Penang",
      ticket_39: "Taman Buaya & Rekreasi Melaka",
      home_title_5: "Taman Hiburan & Taman Air Terbaik di Malaysia",
      ticket_40: "Taman Hiburan Berjaya Times Square",
      ticket_41: "LEGOLAND Malaysia",
      ticket_42: "Taman Air Laguna Bayou",
      ticket_43: "99 Taman Negeri Ajaib",
      ticket_44: "Tiket KidZania Kuala Lumpur",
      ticket_45: "VR Universal",
      ticket_46: "Taman Hiburan Escape",
      ticket_47: "Taman Air Petualangan Pantai Desaru",
      ticket_48: "Taman Air Bukit Merah",
      ticket_49: "Taman Air Ehsan",
      ticket_50: "Taman Hiburan I-City",
      ticket_51: "Keluarkan Langkawi",
      home_title_6: "Museum di Malaysia",
      ticket_52: "Museum Makanan Ajaib",
      ticket_53: "Museum Seni 3D Ilusi",
      ticket_54: "Museum Seni Trik 3D Penang",
      ticket_55: "Museum Rumah Gelap",
      ticket_56: "Kubah Teknologi Penang",
      ticket_57: "Museum Hantu Melaka",
      ticket_58: "Negeri Petualangan Ripley",
      ticket_59: "Museum Hantu Penang",
      home_title_7: "Aktivitas Populer di Malaysia",
      ticket_60: "Arung Jeram Kiulu",
      ticket_61: "taman xtreme langkawi",
      ticket_62: "Lompat Jalan Asia",
      ticket_63: "ATV Langkawi",
      ticket_64: "Jelajah Pulau Langkawi",
      home_title_8: "Kapal Pesiar Malaysia",
      ticket_65: "Pelayaran Naga Dickson",
      ticket_66: "Tur & Pelayaran Putrajaya",
      home_title_9: "Layanan transportasi",
      ticket_67: "Tiket KLIA Ekspres",
      ticket_68: "Tiket & Transfer Feri Langkawi",
      ticket_69: "Transfer Bandara Malaysia",

      bookCityMalasian: "Beli Tiket Langkawi Underwater World",
      show_inclusions: "Tampilkan Inklusi dan Informasi Penting",
      bookbird_ticket_check_availability: "Cek Ketersediaan",
      bookbird_ticket_next_available: "Próximo tersedia: Hoy",
      bookbird_ticket_Mobile_ticket: "Billete móvil",
      bookbird_ticket_Flexible_Duration: "Durasi fleksibel",
      bookbird_ticket_Meals_Included: "Comidas termasuk",
      bookbird_title: "Pesan tiket masuk untuk KL Bird Park di Kuala Lumpur",
      bookbird_rating: "(6.5K calificaciones)",
      bookbird_header_p:
        "Headout adalah sebuah sosio autorizado dan dapat dipercaya dari suatu tempat dan menawarkan pengalaman yang dipilih untuk menemukan atraksi ini. Ini bukan situs web dari tempat tersebut.",
      new: "NUEVA",

      bookbird_ticket_1_title: "Tiket Buaya Adventureland Langwaki",
      bookbird_ticket_1_description_1:
        "Lewati hingga 90 wahana dan atraksi, termasuk Vuvuzela, salah satu wahana air tertinggi di dunia, Tomahawk yang berkelok-kelok, dan masih banyak lagi.",
      bookbird_ticket_1_description_2:
        "Akuarium canggih mereka benar-benar menjadikan pengalaman ini luar biasa bagi orang dewasa dan anak-anak.",
      bookbird_ticket_1_description_3:
        "Su acuario de última generación realmente hace de esta una experiencia extraordinaria tanto para adultos como para niños.",
      bookbird_ticket_1_description_4:
        "Nikmati tiket masuk gratis ke Night Park, yang menampilkan wahana, aktivitas dalam suasana bertema Old West, dan pertunjukan api.",
      bookbird_ticket_1_description_5:
        "Tingkatkan pengalaman Anda dengan akses prioritas opsional ke 21 objek wisata atau pilih tiket masuk 2 hari dengan makan, berkemah, dan diskon bayar per perjalanan.",
      bookbird_ticket_1_skidka: "diskon 6%",

      combos: "Kombo",
      zooMelaka: "Tiket Dunia Bawah Air Langkawi",
      comboTwelve: "Tiket Habitat Penang Hill",
      comboSixTeen:
        "Combo (Hemat 16%): KL Tower Observation Deck + Tiket KLIA Ekspress",
      comboSevn: "Combo (Hemat 17%):Tiket Menara KL + Menara Kembar Petronas",

      getrr:
        "Bersiaplah untuk malam yang liar di Sunway Lagoon Night Park, di mana Anda akan merasakan Old American West dengan atraksi dan aktivitas bertema koboi yang mendebarkan!",
      enjoyy:
        "Nikmati pertunjukan api spektakuler dan visual menakjubkan saat Anda memasuki semangat Wild West",
      testtt:
        "Uji keberanian dan keterampilan Anda dalam perjalanan Rodeo Bull dan nikmati Grand Canyon River Rapid.",
      expp: "Nikmati pertunjukan Wild West Mingle dengan pertunjukan live dan hiburan, dan akhiri hari dengan penutup malam itu, pertunjukan api yang spektakuler",

      bookbird_from: "dari",
      bookbird_check: "Cek Ketersediaan",
      next_available: "Berikutnya tersedia: Hari ini",
      mobile_ticket: "Tiket seluler",
      flexible_duration: "Durasi fleksibel",
      meals_included: "Termasuk makanan",
      kuala_lumpur: "Kuala Lumpur",
      petronas_twin: "Tiket ke Menara Kembar Petronas",
      top_things: "Hal terbaik untuk dilakukan di Kuala Lumpur",
      kl_tower: "Tiket Menara KL",
      petronas_twin: "Tiket masuk Menara Kembar Petronas",
      aquaria_KLCC: "Tiket Akuarium KLCC",
      grnting_skyworlds: "Tiket Genting SkyWorlds",
      genting_skytropolis: "Tiket Genting Skytropolis",
      genting_highlands: "Tiket masuk ke Genting Highlands",
      genting_awana: "Tiket Kereta Gantung Genting Awana",
      berjaya_times: "Tiket Berjaya Times Square",

      kuala_lumpur2: "Taman Burung Kuala Lumpur",

      kidzana_kuala: "Tiket Kidzania Kuala Lumpur",

      kl_tower2: "Kebun Binatang Mini Menara KL",

      visiting_petronas:
        "Kunjungi Menara Kembar Petronas | Penjelasan Tiket dan Tour",

      smack_in:
        "Tepat di jantung kota Kuala Lumpur, Menara Kembar Petronas berdiri sebagai simbol arsitektur modern. Dengan 88 lantai, SkyBridge, dan dek observasi, menara ini wajib dikunjungi oleh setiap pengunjung yang ingin menikmatinya pemandangan indah cakrawala Kuala Lumpur yang luas dan indah Dengan tiket Anda, Anda akan dapat mengunjungi tempat-tempat wisata di dalam menara, seperti Petrosains, Discovery Centre, dan Aquaria KLCC. Baca terus untuk mengetahui mengapa Anda harus mengunjungi Menara Kembar Petronas tiket. .pada kunjungan Anda ke Kuala Lumpur",

      skip_the: "Tiket masuk Lewati Antrean",

      breeze_through:
        "Lewati antrean dan dapatkan akses cepat ke Menara Kembar Petronas yang megah, menjulang di atas cakrawala Kuala Lampur",
      ewalk_across:
        "Berjalanlah melintasi SkyBridge kaca yang terkenal di lantai 41 dan 42, jembatan 2 lantai tertinggi di dunia",
      take_an:
        "Naik lift ke dek observasi lantai 86 dan nikmati pemandangan kota yang menakjubkan.",
      enange_with:
        "Berinteraksi dengan berbagai layar dan pameran digital yang tersebar di hamparan luas menara kembar.",
      recommended_E:
        "Pengalaman yang direkomendasikan: <br> Tiket Masuk Standar Menara Kembar Petronas",
      combo_tickets: "Tiket gabungan",
      get_a_holi:
        "Dapatkan tur holistik ke tempat-tempat menarik di Kuala Lumpur dengan menggabungkan penawaran dan atraksi dalam satu tiket!",
      get_up:
        "Dapatkan diskon hingga 12% untuk tiket Anda ke objek wisata tertentu seperti KLIA Ekspres, dan manfaatkan uang dan waktu Anda selama perjalanan ke Malaysia. Manfaatkan lebih banyak diskon untuk tiket ke porang tua dan anak-anak.",
      visit_landmarks:
        "Kunjungi landmark ikonik Malaysia seperti Batu Caves, KLIA Ekspres, dan masih banyak lagi, dan pilih tur berpemandu pribadi atau tur bus hop-on hop-off dengan tiket kombo Anda. Pengalaman yang direkomendasikan: <br> Combo (Hemat 12%): Towers Menara Kembar Petronas + Tiket KLIA Ekspres Dek Observasi Menara KL + Sky Deck + Sky Box + Tower Walk 100 + Tiket Lewati Antrean Menara Kembar Petronas",
      what_youll: "Apa yang akan Anda lihat di Menara Kembar Petronas",
      theres_lots:
        "Ada banyak hal yang dapat Anda lakukan saat mengunjungi Menara Kembar Petronas! Nantikan Skybridge yang terkenal di dunia, salah satu platform observasi tertinggi di Malaysia, serta Aquaria KLCC dan Petrosains yang terkenal!",
      observation_deck: "Dek observasi",
      if_its:
        "Jika ini pertama kalinya Anda mengunjungi Menara Kembar Petronas, dek observasi di lantai 83 adalah tempat yang ideal! Mengagumi Menara Kembar Petronas yang ikonik, pengunjung menikmati pengalaman tak tertandingi sambil menikmati pemandangan perkotaan yang menakjubkan dengan arsitektur modernnya.",
      skybridge: "jembatan udara",
      connecting_the:
        "Menghubungkan dua menara ikonik di lantai 41 dan 42, jembatan bertingkat ini memungkinkan Anda menikmati pemandangan kota yang menakjubkan. Anda juga akan mendapatkan pemandangan indah kota yang ramai di bawahnya, dengan cakrawalanya yang menakjubkan. terbentang di hadapanmu.",
      observation_deck2: "Toko Hadiah Dek Observatorium",
      grab_a_postcard:
        "Ambil kartu pos, gantungan kunci, kaos atau suvenir lainnya untuk menangkap esensi dari monumen terkenal ini. Toko suvenir di dek observasi adalah gudang harta karun yang memungkinkan Anda membawa pulang oleh-oleh dari kunjungan Anda ke Menara Kembar Petronas",
      petrosains_the: "Petrosains, Pusat Penemuan",
      petrosains_is:
        "Petrosains adalah destinasi yang wajib dikunjungi bagi mereka yang mencari pengalaman interaktif dan mendidik. Temukan luar angkasa, selami kedalaman lautan, dan berpartisipasi dalam berbagai pameran yang menjadikan pembelajaran sains menyenangkan dan menarik.",
      aquaria_KLCC2: "Akuarium KLCC",
      aquaria_KLCC3:
        "Aquaria KLCC adalah akuarium kelas dunia berukuran sekitar 60.000 kaki persegi dan rumah bagi lebih dari 5.000 organisme air dan laut. Berbagai pameran seperti Lautan Hidup, Aliran Sungai, Pesisir, dan Laut Dalam memungkinkan pengunjung untuk menyelami bawah air lingkungan",
      fine_dining: "Restoran mewah",
      choose_from:
        "Pilih dari berbagai restoran mewah di Menara Kembar Petronas, di lantai 51 dan 52. Lantai ini menampung restoran dari negara-negara seperti Jepang, Tiongkok, berbagai masakan Malaysia yang lezat, dan masakan Eropa yang lezat seperti Italia dan Portugis, Anda akan dapat merasakan beragam masakan yang luar biasa bersama dengan cakrawala dan pemandangan yang indah.",
      plan_your_visit: "Rencanakan kunjungan Anda ke Menara Kembar Petronas",
      learn_everything:
        "Pelajari segala hal yang perlu Anda ketahui saat mengunjungi Menara Kembar Petronas di bagian ini! Mulai dari jam buka, restoran di dalam menara, peraturan dan pedoman - rencanakan perjalanan yang sempurna ke menara",
      timings: "Waktu",
      getting_there: "Cara menuju ke sana",
      facilities: "Fasilitas",
      nearby: "Terdekat",
      when_are:
        "Kapan Menara Kembar Petronas dibuka? Jam buka Menara Kembar Petronas adalah pukul 10.00 hingga 18.00. Menara tutup pada hari Senin. (Kecuali hari libur nasional atau hari libur pengganti hari libur nasional yang jatuh pada hari Senin)",
      best_time:
        "Waktu terbaik untuk berkunjung: Waktu terbaik untuk mengunjungi menara ini adalah pada malam hari, antara pukul 17.00 dan 18.00, karena Anda mungkin akan melihat air mancur dan pertunjukan cahaya pada waktu tersebut. Selain itu, setiap malam, mulai pukul 20.00 hingga 22.00. , Lake Symphony di KLCC menyuguhkan pertunjukan yang simfoni dan ringan",
      weekdays_vs_weekends:
        "Hari kerja vs. akhir pekan: Kami merekomendasikan mengunjungi Menara Petronas pada hari kerja, karena akhir pekan bisa jadi cukup ramai",
      address: "Alamat",
      sunway_lagoon:
        "Sunway Lagoon, Sunway Pyramid, 3, Bandar Sunway, Jalan PJS 11/11, 46150 Petaling Jaya, Selangor, Malaysia.",
      by_car: "Dengan mobil:",
      with_fast:
        "Dengan jalan raya yang cepat, Sunway Lagoon hanya berjarak 15 menit berkendara dari Kuala Lumpur. Cukup masukkan lokasi taman dan navigasi akan membawa Anda ke tujuan Anda",
      by_train: "Dengan kereta api:",
      take_the:
        "Naik kereta KTM Komuter ke stasiun Subang Jaya atau kereta Putra LRT ke stasiun Kelana Jaya, lalu feeder bus Sunway Pyramid ke taman. Alternatifnya, Anda bisa naik kereta api dari Stasiun Kelana Jaya dan naik bus pengumpan menuju Halte Piramida.",
      by_bus: "Dengan bus:",
      sunway_pyramid:
        "Halte Sunway Pyramid adalah halte bus terdekat ke taman dan hanya berjarak 4 menit berjalan kaki",
      by_shuttle: "Dengan layanan antar-jemput:",
      free_shuttle:
        "Sunway menawarkan layanan antar-jemput gratis keliling kota setiap 25 menit. Layanan ini beroperasi antara pukul 07.00 dan 21.30 pada hari Senin hingga Jumat, dan antara pukul 09.00 hingga 21.30 pada akhir pekan dan hari libur.",
      WiFi: "Wi-Fi:",
      there_is_free: "Wi-Fi gratis tersedia di Sunway Lagoon",
      wheelchair: "Aksesibilitas kursi roda:",
      the_park:
        "Taman ini sebagian besar dapat diakses oleh kursi roda. Terdapat juga kamar mandi yang dapat diakses oleh penyandang disabilitas.",
      parking: "Parkir:",
      parking_is:
        "Parkir tersedia di Pusat Perbelanjaan Sunway Pyramid dan Sunway Resort Hotel & Spa.",
      Lockers: "Loker:",
      you_can_store:
        "Anda dapat menyimpan barang-barang Anda di loker saat mengunjungi taman. Anda bisa mendapatkan loker untuk waktu-waktu tertentu",
      Washrooms: "Kamar mandi:",
      there_are_washrooms:
        "Ada rumah sakit swasta yang terletak di dekat taman untuk keadaan darurat medis.",
      First_Aid: "Pertolongan Pertama:",
      there_is_a_private:
        "Ada rumah sakit swasta yang terletak di dekat taman untuk keadaan darurat medis.",
      Park_Map: "Peta taman:",
      there_is_a_map:
        "Ada peta taman yang tersedia untuk memastikan Anda tidak tersesat di taman. Unduh petanya di sini.",
      sunway_pyramid_shopping: "Pusat Perbelanjaan Sunway Pyramid",
      while_there:
        "Meskipun tidak ada toko oleh-oleh di dalam taman itu sendiri, ada pusat perbelanjaan yang terletak tepat di sebelah taman di mana kamu dapat membeli apa pun yang kamu butuhkan",
      Address2: "Alamat:",
      Jalan:
        "3, Jalan PJS 11/15, Bandar Sunway, 47500 Petaling Jaya, Selangor, Malaysia",
      there_is_also:
        "Ada juga toko online di sebelah Sunway Lagoon di mana Anda dapat menemukan perlengkapan taman dan beberapa suvenir.",
      you_need:
        "Anda membutuhkan lebih banyak energi saat bersenang-senang! Restoran-restoran yang tersebar di seluruh taman hiburan dapat memuaskan hasrat Anda akan pelepas dahaga, camilan, sesuatu yang ringan, atau makanan lengkap.",
      Hydration_Zone: "Zona hidrasi:",
      stay_hydrated:
        "Tetap terhidrasi selama berkunjung dan hilangkan dahaga Anda dengan berbagai minuman menyegarkan yang tersedia di Hydration Zone.",
      Take_5: "Ambil 5:",
      take_5_and:
        "Ambil 5 dan segarkan diri Anda dengan jus semangka segar di Take 5. Anda juga dapat menikmati makanan ringan seperti popcorn, soda, dan hot dog yang lezat.",
      hot_roll: "Panas & Gulung:",
      with_a_variety:
        "Dengan variasi bungkus manis dan gurih, Hot &amp; Roll menyertakan variasi roti gulung dan bungkus lezat yang disajikan dalam berbagai roti seperti chapatti, paratha, atau bahkan pitas.",
      you_can_stay:
        "Anda juga dapat menginap di beberapa hotel dekat taman saat mengunjungi Sunway Lagoon.",
      Budget: "Anggaran:",
      Sunway_Pyramid_Hotel: "Hotel Sunway Pyramid &nbsp;",
      Mid_Range: "Rentang Menengah:",
      sunway_Clio:
        "Sunway Clio Hotel, Pusat Perbelanjaan Sunway Pyramid &nbsp;",
      Luxury: "Kemewahan:",
      luxury_resort: "Suite Resor Mewah, Sunway City",
      legoland: "Legoland Malasia",
      if_youre:
        "Jika Anda masih berminat untuk mengunjungi taman hiburan, Legoland Malaysia adalah tempat bagus lainnya untuk melepaskan diri dan bersenang-senang. Dengan lebih dari delapan bagian bertema dengan lebih dari 40 aktivitas dan atraksi, Legoland Malaysia jelas merupakan tempat yang wajib dikunjungi",
      habitat: "Habitat Bukit Penang",
      deep_dive:
        "Menyelamlah ke dalam pangkuan alam di Habitat Penang Hill, pusat penemuan hutan hujan yang menakjubkan, yang menjadi tempat sempurna bagi semua pecinta alam.",
      entopia: "Entopia Peternakan Kupu-Kupu Penang",
      get_closer:
        "Lebih dekat dengan alam dengan kelas alam di Entopia. Dengan lebih dari 300 spesies flora dan fauna, nikmati aktivitas belajar dan berinteraksi dengan hewan untuk mempelajari lebih lanjut tentang alam yang indah.",

      footer_1: "Unduh aplikasi Headout",
      footer_2: "Dapatkan Bantuan 24/7",
      footer_3: "Berbincanglah dengan kami",
      footer_4: "Hubungi Kami",
      footer_5: "Email Kami",
      footer_6: "Kepala keluar",
      footer_7: "Detail Perusahaan",
      footer_8: "Kebijakan pribadi",
      footer_9: "Ketentuan Penggunaan",
      footer_10: "We Accept",
      footer_11: "© Headout Inc, 82 Nassau St #60351 New York, NY 10038",
    },
    malasia: {
      navbar_1_title: "Malayziyadagi shaharlar",
      navbar_1_1: "Kuala Lumpur",
      navbar_1_2: "Johor Bahru",
      navbar_1_3: "Langkawi",
      navbar_1_4: "Melaka",
      navbar_1_5: "Penang",
      navbar_2_title: "Attraksionlar",
      navbar_2_1: "Aquaria KLCC",
      navbar_2_2: "Mavjudlikni tekshirish",
      navbar_2_3: "Genting Awana SkyWay",
      navbar_2_4: "KL Tower",
      navbar_2_5: "Petronas Ikki Qavatlı Binosi",
      navbar_2_6: "Entopia Penang",
      navbar_2_7: "Langkawi Suv osti Dunyosi",
      navbar_2_8: "3D Aldamchi San'at Muzeyi",
      navbar_2_9: "The Habitat Penang Hill",
      navbar_2_10: "Dark Mansion Muzeyi",
      navbar_2_11: "Wonderfood Muzeyi",
      navbar_2_12: "Langkawi SkyCab Kabel Avtomobili",
      navbar_2_13: "Batu Caves",
      navbar_2_14: "Melaka Zoo",
      navbar_2_15: "LEGOLAND Malayziya",
      navbar_2_16: "Sunway Lagoon Mavzu Parki",
      navbar_2_17: "Escape Mavzu Parki",
      navbar_2_18: "Lost World of Tambun",
      navbar_2_29: "Langkawi Krokodil Qiziqarli Dunyosi",
      navbar_2_20: "KidZania Kuala Lumpur",
      navbar_2_21: "Ripley's Adventureland",
      navbar_2_22: "Desaru Coast Adventure Waterpark",
      navbar_2_23: "KL Tower Mini Zoo",
      navbar_2_24: "Genting Skyworlds Mavzu Parki",
      navbar_2_25: "Genting Skytropolis Mavzu Parki",

      home_title_1: "Malayziyaning eng mashhur attraksionlari",
      ticket_1: "Sunway Lagoon Mavzu Parki",
      ticket_2: "Menara Kuala Lumpur Tower Chipta (KL Tower)",
      ticket_3: "Aquaria KLCC",
      ticket_4: "Gamuda Cove",
      ticket_5: "petronas ikki qavatlí binosi",
      ticket_6: "Genting Skyworlds Mavzu Parki",
      ticket_7: "A'famosa Suv Parki",
      ticket_8: "The Top Penang",
      ticket_9: "Mavjudlikni tekshirish",
      ticket_10: "Wet World Suv Parki",
      ticket_11: "Genting Skytropolis Mavzu Parki",
      ticket_12: "Lost World of Tambun Mavzu Parki",
      ticket_13: "Mari Mari Madaniy Qishloq",
      ticket_14: "atmosphere 360",
      ticket_15: "Genting Awana SkyWay",
      ticket_16: "Langkawi SkyCab Kabel Avtomobili",
      ticket_17: "Batu Caves",
      ticket_18: "Teskari Uy",
      ticket_19: "The Habitat Penang Hill",
      ticket_20: "Kuala Selangorning Qirqoqlari",
      ticket_21: "Osmon Oynasi",
      ticket_22: "Taming Sari Melaka",
      ticket_23: "The Shore Sky Tower",
      ticket_24: "KL Shahar Sayohatlari",
      ticket_25: "Kuala Selangor'dagi Kok Yoqaolgan Sayr",
      ticket_26: "Colmar Tropicale",
      ticket_27: "Langkawi Sayohatlari",
      ticket_28: "Kuala Selangor'dagi Burgut Ovqatlanishi",
      ticket_29: "Petrosains, The Discovery Centre",
      home_title_2: "Malayziyaning eng mashhur attraksionlari va",
      home_title_3: "eng yaxshi mavzu parklarini topib oling",
      home_title_4: "Malayziyadagi Tabiat va Yovvoyi Hayvonlar",
      ticket_30: "Zoo Negara",
      ticket_31: "KL Qush Parki",
      ticket_32: "Melaka Zoo",
      ticket_33: "KL Tower Mini Zoo",
      ticket_34: "Langkawi Krokodil Qiziqarli Dunyosi",
      ticket_35: "Shahar Fabrikasi",
      ticket_36: "Bentong Ferma",
      ticket_37: "Langkawi Suv osti Dunyosi",
      ticket_38: "Entopia by Penang Butterfly Farm",
      ticket_39: "Taman Buaya & Rekreasi Melaka",
      home_title_5: "Malayziyaning eng yaxshi mavzu va suv parklari",
      ticket_40: "Berjaya Times Square Mavzu Parki",
      ticket_41: "LEGOLAND Malayziya",
      ticket_42: "Bayou Lagoon Suv Parki",
      ticket_43: "99 Wonderland Park",
      ticket_44: "KidZania Kuala Lumpur Chiptalar",
      ticket_45: "VR Universal",
      ticket_46: "Escape Mavzu Parki",
      ticket_47: "Desaru Coast Adventure Waterpark",
      ticket_48: "Bukit Merah Suv Parki",
      ticket_49: "Ehsan Waterpark",
      ticket_50: "I-City Mavzu Parki",
      ticket_51: "Splash Out Langkawi",
      home_title_6: "Malayziyaning Muzeylari",
      ticket_52: "Wonderfood Muzeyi",
      ticket_53: "Illusion 3D San'at Muzeyi",
      ticket_54: "Penang 3D Aldamchi San'at Muzeyi",
      ticket_55: "Dark Mansion Muzeyi",
      ticket_56: "Tech Dome Penang",
      ticket_57: "Hayolot Muzeyi Melaka",
      ticket_58: "Ripley's Adventureland",
      ticket_59: "Hayolot Muzeyi Penang",
      home_title_7: "Malayziyada Mashhur bo'lgan Faoliyatlar",
      ticket_60: "Kiulu Oq Suv Sayohat",
      ticket_61: "xtreme park langkawi",
      ticket_62: "Jump Street Asia",
      ticket_63: "ATV Langkawi",
      ticket_64: "Langkawi Orol Sayohati",
      home_title_8: "Malayziya Kruizlari",
      ticket_65: "Dickson Dragon Kruizi",
      ticket_66: "Putrajaya Sayohat va Kruiz",
      home_title_9: "Transporttaion Xizmatlari",
      ticket_67: "KLIA Ekspress Chipta",
      ticket_68: "Langkawi Paromda Chipta va Transferlar",
      ticket_69: "Malayziya Aeroporti Transferlari",


      footer_1: "Muat turun aplikasi Headout",
footer_2: "Dapatkan Bantuan 24/7",
footer_3: "Bincang dengan Kami",
footer_4: "Hubungi Kami",
footer_5: "E-mel Kami",
footer_6: "Headout",
footer_7: "Butiran Syarikat",
footer_8: "Dasar Privasi",
footer_9: "Terma Penggunaan",
footer_10: "Kami Menerima",
footer_11: "© Headout Inc, 82 Nassau St #60351 New York, NY 10038",

bookCityMalasian: "Tempah Tiket Entopia By Penang Butterfly Farm",
show_inclusions: "Semak ketersediaan",
bookbird_ticket_check_availability: "Semak ketersediaan",
bookbird_ticket_next_available: "Seterusnya tersedia: Hari ini",
bookbird_ticket_Mobile_ticket: "Tiket mudah alih",
bookbird_ticket_Flexible_Duration: "Tempoh fleksibel",
bookbird_ticket_Meals_Included: "Makanan disediakan",
bookbird_title: "Tempah Tiket Taman Burung KL di Kuala Lumpur",
bookbird_rating: "(6.5K Penarafan)",
bookbird_header_p:
"Headout adalah rakan kongsi disahkan dan dipercayai oleh tempat acara, menawarkan pengalaman terpilih untuk menikmati tarikan ini. Ini bukan laman web tempat acara tersebut.",
new: "BAHARU",
combos: "Kombo",
  zooMelaka: "Tiket Entopia Penang: Taman Kupu-kupu",
  comboTwelve: "Tiket Habitat Penang Hill",
  comboSixTeen:
    "Kombo (Jimat 16%): Tiket Menara KL + Tiket KLIA Ekspress",
  comboSevn: "Kombo (Jimat 17%): Tiket Menara KL + Tiket Petronas Twin Towers",

  getrr:
    "Bersiap sedia untuk malam yang menyeronokkan di Sunway Lagoon Night Park, di mana anda akan dapat menikmati Barat Amerika Lama dengan tarikan dan aktiviti bersemangat tema koboi!",
  enjoyy:
    "Nikmati persembahan api yang menakjubkan dan visual yang menakjubkan sambil menikmati semangat Barat Lama",
  testtt:
    "Uji keberanian dan kemahiran anda di atas tunggangan Rodeo Bull dan nikmati Grand Canyon River Rapid.",
  expp: "Alami pertunjukan Mingle Wild West dengan persembahan langsung dan hiburan, dan akhiri hari dengan kemuncak malam, persembahan api yang memukau",

  bookbird_ticket_1_title: "Tiket Crocodile Adventureland Langkawi",
  bookbird_ticket_1_description_1:
    "Lepasi barisan panjang dan terus ke Akuaria KLCC Kuala Lumpur, yang tersenarai sebagai salah satu akuarium teratas di Asia.",
  bookbird_ticket_1_description_2:
    "Jelajahi sehingga 90 pergi dan tarikan, termasuk Vuvuzela, salah satu air terjun tertinggi di dunia, Tomahawk yang meletup ke atas dan bawah, dan banyak lagi.",
  bookbird_ticket_1_description_3:
    "Akuarium maju mereka benar-benar menjadikan pengalaman ini luar biasa untuk orang dewasa dan kanak-kanak.",
  bookbird_ticket_1_description_4:
    "Nikmati akses percuma ke Night Park, dengan tarikan, aktiviti dalam tetapan tema Barat Amerika Lama, dan persembahan api.",
  bookbird_ticket_1_description_5:
    "Tingkatkan pengalaman anda dengan pilihan akses prioriti ke 21 pergi, atau pilih pas 2 hari dengan hidangan, kemping, dan diskaun untuk pergi bayar-per-naik.",
  bookbird_ticket_1_skidka: "Diskaun 6%",
  bookbird_from: "from",
bookbird_check: "Check availability",
next_available: "Next available: Today",
mobile_ticket: "Mobile ticket",
flexible_duration: "Flexible Duration",
meals_included: "Meals Included",
kuala_lumpur: "Kuala Lumpur",
petronas_twin: "Petronas Twin Towers Ticket",
top_things: "Top things to do in Kuala Lumpur",
kl_tower: "KL Tower Tickets",
petronas_twin: "Petronas Twin Towers Tickets",
aquaria_KLCC: "Aquaria KLCC Tickets",
grnting_skyworlds: "Genting SkyWorlds Tickets",
genting_skytropolis: "Genting Skytropolis Tickets",
genting_highlands: "Genting Highlands Tickets",
genting_awana: "Genting Awana Cable Car Tickets",
berjaya_times: "Berjaya Times Square Tickets",
kuala_lumpur2: "Kuala Lumpur Bird Park",
kidzana_kuala: "Kidzania Kuala Lumpur Tickets",
kl_tower2: "KL Tower Mini Zoo",
visiting_petronas:
  "Visiting Petronas Twin Towers | Tickets and tours explained",
smack_in:
  "Smack in the heart of Kuala Lumpur, the Petronas Twin Towers stand tall as a symbol of modern architecture. This tower, home to 88 floors, a SkyBridge and an Observation Deck, are an absolute visit for any visitor wanting to get a glorious view of Kuala Lumpur's vast and beautiful skyline. With your tickets, you'll get to visit the attractions within the towers, like Petrosains, the Discovery Center and Aquaria KLCC. Read along to find out why you must get Petronas Twin Towers' Tickets on your visit to Kuala Lumpur!",
skip_the:
  "Skip-The-Line entry tickets",
breeze_through:
  "Breeze through queues and get fast track access to the glorious Petronas Twin Towers, soaring high above Kuala Lampur's skyline",
ewalk_across:
  "EWalk across the famous glass SkyBridge on the 41st and 42nd floors, the world's highest 2-story bridge.",
take_an:
  "Take an elevator to the 86th floor's Observation Deck and gaze at the city's breathtaking vistas.",
enange_with:
  "Engage with multiple digital displays and exhibits spread throughout the vast expanse of the twin towers.",
recommended_E:
  "Recommended Experience: <br> Standard Entry Tickets to Petronas Twin Towers",
combo_tickets:
  "Combo tickets",
get_a_holi: "Dapatkan lawatan holistik ke tarikan menarik Kuala Lumpur dengan menggabungkan tawaran dan tarikan dalam satu tiket!"
,
get_up: "Dapatkan diskaun sehingga 12% untuk tiket anda dengan tarikan tertentu seperti KLIA Ekspres, dan manfaatkan wang serta masa anda semasa perjalanan anda ke Malaysia. Nikmati diskaun tambahan untuk warga emas dan kanak-kanak."
,
visit_landmarks: "Lawati mercu tanda di Malaysia seperti Batu Caves, KLIA Ekspres dan banyak lagi, dan pilih lawatan berpandu persendirian atau lawatan hop-on, hop-off dengan tiket kombo anda.  Pengalaman Disyorkan: <br> Kombo (Jimat 12%): Tiket Menara Petronas + KLIA Ekspres <br> Dek Pemerhatian Menara KL + Sky Deck + Sky Box + Tower Walk 100 + Tiket Lain-Pantas ke Menara Petronas",

what_youll:
"Apa yang anda akan lihat di Menara Petronas"
,
theres_lots:
"Ada banyak perkara yang boleh anda lakukan semasa melawat Menara Petronas! Cari Skybridge yang terkenal di dunia, salah satu dek pemerhatian tertinggi di Malaysia, dan Aquaria KLCC serta Petrosains yang terkenal!"
,
observation_deck:
"Dek Pemerhatian"
,
if_its:
"Jika ini kali pertama anda melawat Menara Petronas, Dek Pemerhatian di Tingkat 83 adalah tempat yang tepat untuk anda! Berdiri dalam kekaguman terhadap Menara Petronas yang ikonik, pengunjung akan disajikan pengalaman yang tiada tandingan ketika menikmati pemandangan kota yang menakjubkan dengan seni bina moden."
,
skybridge:
"Skybridge"
,
connecting_the:
"Menghubungkan dua menara ikonik pada tingkat 41 dan 42, jambatan dua tingkat ini membolehkan anda menikmati pemandangan panoramik yang menakjubkan di bandar. Anda juga akan mendapat pemandangan yang indah dari bandar yang sibuk di bawah, dengan panorama skyline yang mengagumkan di hadapan anda."
,
observation_deck2:
"Kedai Hadiah Dek Pemerhatian"
,
grab_a_postcard:
"Ambil poskad, gantungan kunci, t-shirt, atau cenderamata lain untuk merakamkan intipati mercu tanda terkenal ini. Kedai Hadiah Dek Pemerhatian adalah tempat yang menarik, membolehkan anda membawa pulang kenangan dari lawatan anda ke Menara Petronas."
,
petrosains_the:
"Petrosains, Pusat Penemuan"
,
petrosains_is:
"Petrosains adalah destinasi wajib untuk mereka yang mencari pengalaman interaktif dan pendidikan. Temui ruang angkasa, terjun ke dasar lautan, dan terlibat dengan pelbagai pameran yang menjadikan pembelajaran tentang sains menyeronokkan dan menarik."
,
aquaria_KLCC2:
"Aquaria KLCC"
,
aquaria_KLCC3:
"Aquaria KLCC adalah akuarium bertaraf dunia yang seluas kira-kira 60,000 kaki persegi dan menempatkan lebih daripada 5,000 organisma akuatik dan marin. Pelbagai paparan seperti Lautan Hidup, Alur, Pesisir Pantai, dan Laut Dalam membolehkan pengunjung terbenam dalam persekitaran bawah air."
,
fine_dining:
"Restoran Mewah"
,
choose_from:
"Pilih dari pelbagai restoran mewah di Menara Petronas, di tingkat 51 dan 52. Tingkat ini menempatkan restoran dari negara seperti Jepun, China, pelbagai masakan Malaysia, dan masakan Eropah yang mewah seperti Itali dan Portugis. Anda akan dapat merasai pelbagai jenis masakan sambil menikmati pemandangan dan panorama yang menakjubkan."
,
plan_your_visit:
"Rancang lawatan anda ke Menara Petronas"
,
timings:
"Waktu Operasi"
,
getting_there:
"Cara Ke Sana"
,
facilities:
"Kemudahan"
,
nearby:
"Sekitar"
,
when_are:
"Bilakah Menara Petronas dibuka?Waktu operasi Menara Petronas adalah dari 10 pagi hingga 6 petang. Menara ini ditutup pada hari Isnin. (Kecuali pada Hari Kelepasan Umum atau Cuti Umum Pengganti untuk cuti yang jatuh pada hari Isnin)**"
,
best_time:
"Masa Terbaik untuk Melawat: Masa terbaik untuk melawat menara adalah pada waktu petang, antara 5 hingga 6 petang, kerana anda mungkin akan menyaksikan paparan air pancut dan lampu pada masa ini. Selain itu, setiap malam dari 8 malam hingga 10 malam, Lake Symphony di KLCC mengadakan persembahan simfoni dan lampu**"
,
weekdays_vs_weekends:
"Hari Bekerja vs Huujung Minggu: Kami mengesyorkan melawat Menara Petronas pada hari bekerja, kerana hujung minggu mungkin akan agak sesak**"
,
address:
"Alamat"
,
sunway_lagoon:
"Sunway Lagoon, Sunway Pyramid, 3, Bandar Sunway, Jalan PJS 11/11, 46150 Petaling Jaya, Selangor, Malaysia."
,
by_car:
"Dengan Kereta: Dengan lebuh raya yang cepat, Sunway Lagoon hanya 15 minit pemanduan dari Kuala Lumpur. Anda hanya perlu memasukkan lokasi taman dan navigasi akan membawa anda ke destinasi anda**"
,
by_train:
"Dengan Kereta Api: Naik kereta api KTM Komuter ke Stesen Subang Jaya atau kereta api Putra LRT ke stesen Kelana Jaya, kemudian naik bas penghubung Sunway Pyramid ke taman. Alternatifnya, anda boleh naik kereta api dari Stesen Kelana Jaya dan naik bas penghubung ke hentian Pyramid**"
,
by_bus:
"Dengan Bas: Hentian bas Sunway Pyramid adalah hentian bas terdekat ke taman dan hanya 4 minit berjalan kaki**"
,
by_shuttle:
"Dengan Perkhidmatan Pengangkutan: Perkhidmatan pengangkutan percuma disediakan oleh Sunway di sekitar bandar setiap 25 minit. Ia beroperasi antara 7 pagi hingga 9:30 malam dari Isnin hingga Jumaat, dan antara 9 pagi hingga 9:30 malam pada hujung minggu dan hari cuti umum**"
,
WiFi:
"WiFi: Terdapat WiFi percuma yang disediakan di Sunway Lagoon**"
,
wheelchair:
"Aksesibiliti Kerusi Roda: Taman ini kebanyakannya boleh diakses oleh kerusi roda. Mereka juga mempunyai tandas yang boleh diakses**"
,
parking:
"Tempat Letak Kereta: Tempat letak kereta tersedia di Sunway Pyramid Shopping Mall & Sunway Resort Hotel & Spa**"
,
Lockers:
"Petak Simpanan: Anda boleh menyimpan barang-barang anda di petak simpanan semasa melawat taman. Anda boleh mendapatkan petak simpanan untuk slot masa tertentu**"
,
Washrooms:
"Tandas: Terdapat tandas di mana anda boleh menukar pakaian selepas menaiki kolam air**"
,
First_Aid:
"Pertolongan Cemas: Terdapat hospital swasta berhampiran taman untuk sebarang kecemasan perubatan**"
,
Park_Map:
"Peta Taman: Terdapat peta taman yang tersedia untuk memastikan anda tidak tersesat di taman. Muat turun peta di sini**"
,
sunway_pyramid_shopping:
"Sunway Pyramid Shopping Mall"
,
while_there:
"Walaupun tiada kedai cenderamata di dalam taman itu sendiri, terdapat sebuah pusat membeli-belah yang terletak betul-betul di sebelah taman di mana anda boleh membeli apa sahaja yang anda perlukan"
,
Address2:
"Alamat: 3, Jalan PJS 11/15, Bandar Sunway, 47500 Petaling Jaya, Selangor, Malaysia**"
,
there_is_also:
"Terdapat juga kedai dalam talian oleh Sunway Lagoon di mana anda boleh mencari keperluan taman bersama beberapa cenderamata"
,
you_need:
"Anda memerlukan lebih banyak tenaga semasa berseronok! Gerai makan yang tersebar di seluruh taman tema boleh memuaskan keinginan anda untuk minuman, snek, sesuatu yang ringan, atau hidangan lengkap"
,
Hydration_Zone:
"Zona Penghidratan: Kekal terhidrasi semasa lawatan anda dan hilangkan dahaga dengan pelbagai minuman menyegarkan yang tersedia di Zon Penghidratan**"
,
Take_5:
"Take 5: Rehat dan segarkan diri anda dengan jus tembikai segar di Take 5. Anda juga boleh makan snek ringan seperti popcorn, minuman ringan dan hot dog yang lazat**"
,
hot_roll:
"Hot & Roll: Dengan pelbagai gulungan manis dan gurih, Hot & Roll termasuk pelbagai gulungan dan wrap yang datang dalam pelbagai jenis roti seperti chapattis, parathas atau pita**"
,
you_can_stay:
"Anda boleh menginap di beberapa hotel berhampiran taman semasa anda melawat Sunway Lagoon"
,
Budget:
"Bajet:"
,
Sunway_Pyramid_Hotel:
"Sunway Pyramid Hotel"
,
Mid_Range:
"Julat Pertengahan:"
,
sunway_Clio:
"Sunway Clio Hotel, Sunway Pyramid Mall"
,
Luxury:
"Kemewahan:"
,
luxury_resort:
"Luxury Resort Suites, Sunway City"
,
legoland:
"Legoland Malaysia"
,
if_youre:
"Jika anda masih berminat dengan taman tema, Legoland Malaysia adalah tempat hebat lain untuk berseronok. Dengan lebih daripada lapan bahagian bertema dengan lebih 40 aktiviti dan tarikan, Legoland Malaysia adalah destinasi yang pasti dikunjungi"
,
habitat:
"Habitat Penang Hill"
,
deep_dive:
"Mendalami alam semula jadi di Habitat Penang Hill, sebuah pusat penemuan hutan hujan yang menakjubkan, yang merupakan tempat yang sempurna untuk semua pencinta alam"
,
entopia:
"Entopia oleh Penang Butterfly Farm"
,
get_closer:
"Dekatkan diri dengan alam semula jadi dengan bilik darjah yang dibuat daripada alam di Entopia. Dengan lebih daripada 300 spesies flora dan fauna, nikmati aktiviti pembelajaran dan berinteraksi dengan haiwan untuk mempelajari lebih lanjut mengenai alam semula jadi yang menakjubkan"
,    },
  };

  function translatePage(lang) {
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    sessionStorage.setItem("selectedLanguage", lang);
  }

  document.querySelectorAll(".nav_langu_for_bot a").forEach((element) => {
    element.addEventListener("click", () => {
      const lang = element.getAttribute("data-lang");
      translatePage(lang);
    });
  });

  const savedLanguage = sessionStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    translatePage(savedLanguage);
  } else {
    const defaultLanguage = "eng"; // Default tilni belgilash
    translatePage(defaultLanguage);
  }
});

// BookMelaka.html
