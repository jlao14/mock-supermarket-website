const products = [
  
    {
        id: "apple",
        name: "Fresh Apples",
        price: 8.99,
        image: "Fresh Produce/apples.png",
        unit: "1 kg"
    },
    {
        id: "banana",
        name: "Organic Bananas",
        price: 4.75,
        image: "Fresh Produce/banana.png",
        unit: "1 kg"
    },
    {
        id: "potatoes",
        name: "Fresh Potatoes",
        price: 3.25,
        image: "Fresh Produce/potatoes.png",
        unit: "1 kg"
    },
    {
        id: "carrots",
        name: "Fresh Carrots",
        price: 4.15,
        image: "Fresh Produce/carrots.png",
        unit: "1 kg"
    },
    {
        id: "chickenbreast",
        name: "Raw Chicken Breast",
        price: 27.50,
        image: "Meat Poultry/chickenbreast.png",
        unit: "500g"
    },
    {
        id: "steak",
        name: "Raw Steak",
        price: 29.50,
        image: "Meat Poultry/steak.png",
        unit: "500g"
    },
    {
        id: "ariel_detergent_liquid", 
        name: "Ariel Detergent",
        price: 52.99,
        image: "Household Items/ariel_detergent.png",
        unit: "1.8L"
    },
    {
        id: "dove_soap",
        name: "Dove Soap",
        price: 7.99,
        image: "Personal Care/dove_soap.png",
        unit: "1 Piece"
    },

    // Fresh produce products
    {
        id: "avocado",
        name: "Fresh Avocados",
        price: 8.59,
        image: "Fresh Produce/Avocado.jpeg",
        unit: "600 g"
    },
    {
        id: "blueberry_prepack",
        name: "Organic Blueberry Prepack",
        price: 6.95,
        image: "Fresh Produce/Blueberry.jpeg",
        unit: "125 g"
    },
    {
        id: "cauliflower",
        name: "Fresh Cauliflower",
        price: 3.40,
        image: "Fresh Produce/Cauliflower.jpeg",
        unit: "500 g"
    },
    {
        id: "eggplant",
        name: "Premium Eggplant",
        price: 4.95,
        image: "Fresh Produce/Eggplant.jpeg",
        unit: "500 g"
    },
    {
        id: "cucumber",
        name: "Premium Cucumber",
        price: 1.95,
        image: "Fresh Produce/Cucumber.jpeg",
        unit: "500 g"
    },
    {
        id: "ginger",
        name: "Ginger",
        price: 2.25,
        image: "Fresh Produce/Ginger.jpeg",
        unit: "300 g"
    },
    {
        id: "green_zucchini",
        name: "Green Zucchini",
        price: 19.89,
        image: "Fresh Produce/Green Zucchini.jpeg",
        unit: "1 kg"
    },
    {
        id: "lemons",
        name: "Fresh Lemons",
        price: 16.69,
        image: "Fresh Produce/Lemons.jpeg",
        unit: "2 kg"
    },
    {
        id: "white_mushrooms",
        name: "White Mushrooms",
        price: 4.59,
        image: "Fresh Produce/Mushroom.jpeg",
        unit: "250 g"
    },
    {
        id: "mixed_capsicums",
        name: "Mixed Capsicums",
        price: 5.79,
        image: "Fresh Produce/Peppers.jpeg",
        unit: "400 g"
    },

    // Meat and Poultry
    {
        id: "fresh_seabass",
        name: "Fresh Seabass",
        price: 25.00,
        image: "Meat Poultry/fresh_seabass.jpg",
        unit: "500g"
    },
    {
        id: "fresh_shrimp",
        name: "Fresh Shrimp",
        price: 15.00,
        image: "Meat Poultry/fresh_shrimp.jpg",
        unit: "500g"
    },
    {
        id: "australian_lamb_shank",
        name: "Lamb Shank",
        price: 25.75,
        image: "Meat Poultry/Australian Lamb Shank.jpeg",
        unit: "500g"
    },
    {
        id: "nile_perch_fillet",
        name: "Perch Fillet",
        price: 23.50,
        image: "Meat Poultry/Fresh Nile Perch Fillet.jpeg",
        unit: "500g"
    },
    {
        id: "beef_cubes",
        name: "Beef Cubes",
        price: 10.50,
        image: "Meat Poultry/Beef Cubes.jpeg",
        unit: "500g"
    },
    {
        id: "norwegian_salmon_fillet",
        name: "Fresh Salmon Fillet",
        price: 45.00,
        image: "Meat Poultry/Norwegian Salmon Fillet.jpeg",
        unit: "500g"
    },
    {
        id: "brazilian_beef_mince",
        name: "Beef Mince (Brazil)",
        price: 10.50,
        image: "Meat Poultry/Brazilian Low Fat Beef Mince.jpeg",
        unit: "500g"
    },
    {
        id: "fresh_whole_chicken",
        name: "Whole Chicken",
        price: 29.90,
        image: "Meat Poultry/Fresh Whole Chicken.jpeg",
        unit: "1.1 kg" 
    },
    {
        id: "sultan_ibrahim_fish",
        name: "Sultan Ibrahim Fish",
        price: 8.15,
        image: "Meat Poultry/Sultan Ibrahim Fish.jpeg",
        unit: "500g"
    },
    {
        id: "pakistani_beef_mince",
        name: "Beef Mince (Pakistan)",
        price: 18.15,
        image: "Meat Poultry/Pakistani Beef Mince.jpeg",
        unit: "500g"
    },
    {
        id: "hamour_fish",
        name: "Hamour Fish",
        price: 78.29,
        image: "Meat Poultry/Hamour.jpeg",
        unit: "500g"
    },
    {
        id: "sultan_hedi_fish",
        name: "Sultan Hedi Fish",
        price: 12.65,
        image: "Meat Poultry/Fresh Sultan Hedi.jpeg",
        unit: "500g"
    },

    // Household items
    {
        id: "dettol_antiseptic",
        name: "Dettol Antiseptic Disinfectant",
        price: 42.99,
        image: "Household Items/dettol.jpg",
        unit: "1L"
    },
    {
        id: "fine_facial_tissue",
        name: "Fine Facial Tissue",
        price: 29.49,
        image: "Household Items/fine_tissue.jpg",
        unit: "Pack of 10"
    },
    {
        id: "comfort_fabric_softener",
        name: "Comfort Fabric Softener",
        price: 31.49,
        image: "Household Items/comfort_softener.jpg",
        unit: "4L"
    },
    {
        id: "ariel_detergent_powder",
        name: "Ariel Detergent Powder",
        price: 119.79,
        image: "Household Items/Ariel Detergent Powder.jpg",
        unit: "9 kg"
    },
    {
        id: "dac_toilet_rim_block",
        name: "DAC Toilet Rim Block",
        price: 24.49,
        image: "Household Items/DAC Toilet Rim Block.jpg",
        unit: "50gx3"
    },
    {
        id: "fairy_dishwashing",
        name: "Fairy Dishwashing",
        price: 23.99,
        image: "Household Items/Fairy DIshwashing.jpg",
        unit: "600mlx3"
    },
    {
        id: "dettol_floor_cleaner",
        name: "Dettol Floor Cleaner",
        price: 33.79,
        image: "Household Items/Dettol Floor Cleaner.jpg",
        unit: "1.8L"
    },
    {
        id: "fun_vinyl_gloves",
        name: "Fun Vinyl Gloves",
        price: 20.99,
        image: "Household Items/Fun Vinyl Gloves.jpg",
        unit: "1 Pair" 
    },
    {
        id: "dettol_wipes",
        name: "Dettol Wipes",
        price: 16.49,
        image: "Household Items/Dettol WIpes.jpg",
        unit: "1 Pack" 
    },
    {
        id: "falcon_cling_film",
        name: "Falcon Cling Film",
        price: 27.99,
        image: "Household Items/Falcon Cling Film.jpg",
        unit: "3000x30cm"
    },
    {
        id: "kleenex_tissue",
        name: "Kleenex Tissue",
        price: 26.49,
        image: "Household Items/Kleenex Dry Soft.jpg",
        unit: "12 Rolls"
    },
    {
        id: "sturdy_garbage_bag",
        name: "Sturdy Garbage Bag",
        price: 4.99,
        image: "Household Items/Sturdy Garbage Bag.jpg",
        unit: "30 Pieces"
    },
    {
        id: "jif_cleaner",
        name: "JIF Cleaner",
        price: 14.99,
        image: "Household Items/JIF Cleaner.jpg",
        unit: "750 ml"
    },

    // Beauty and Personal Care
    {
        id: "head_and_shoulders_shampoo",
        name: "Head & Shoulders Shampoo",
        price: 13.29,
        image: "Personal Care/headandshoulders.jpg",
        unit: "200 ml"
    },
    {
        id: "dove_deodorant_stick",
        name: "Dove Deodorant Stick",
        price: 20.99,
        image: "Personal Care/dove_stick.jpg",
        unit: "40 ml"
    },
    {
        id: "colgate_toothpaste",
        name: "Colgate Toothpaste",
        price: 13.49,
        image: "Personal Care/colgate_white.jpg",
        unit: "125 ml"
    },
    {
        id: "himani_foot_therapy",
        name: "Himani Foot Therapy",
        price: 18.49,
        image: "Personal Care/Emami Boro Plus Healthy Skin Intensive Therapy Foot Cream.jpeg",
        unit: "100 ml"
    },
    {
        id: "fresh_shower_gel",
        name: "Fresh Shower Gel",
        price: 11.99,
        image: "Personal Care/Fresh 3-in-1 Shower Gel for Men.jpeg",
        unit: "300 ml"
    },
    {
        id: "garnier_hair_mask",
        name: "Garnier Hair Mask",
        price: 35.79,
        image: "Personal Care/Garnier Ultra Doux Nourishing Banana 3-In-1 Hair Food Yellow.jpeg",
        unit: "390 ml"
    },
    {
        id: "48hour_deodorant_spray",
        name: "48-Hour Deodorant Spray",
        price: 12.79,
        image: "Personal Care/Invisible 48 Anti-perspirant Deodorant Spray for Men.jpeg",
        unit: "150 ml"
    },
    {
        id: "johnsons_body_wash",
        name: "Johnson's Body Wash",
        price: 17.99,
        image: "Personal Care/Johnson's Body Wash.jpeg",
        unit: "400 ml"
    },
    {
        id: "loreal_casting_cream_gloss",
        name: "L'Oreal Casting Cream Gloss",
        price: 41.99,
        image: "Personal Care/L'Oreal Paris Casting Creme Gloss Hair Colour 100 Black Licorice.jpeg",
        unit: "180 ml"
    },
    {
        id: "lux_perfumed_body_wash",
        name: "Lux Perfumed Body Wash",
        price: 49.49,
        image: "Personal Care/Lux Botanicals Perfumed Body Wash For Skin Renewal With Fig Extract And Geranium Oil.jpeg",
        unit: "700 ml"
    },
    {
        id: "makeup_remover_pad",
        name: "Make-Up Remover Pad",
        price: 17.49,
        image: "Personal Care/Make-Up Remover Pads White 70 Pads Pack of 3.jpeg",
        unit: "70x3"
    },
    {
        id: "pantene_shampoo",
        name: "Pantene Shampoo",
        price: 40.79,
        image: "Personal Care/Pantene Pro-V Anti HairFall Shampoo.jpeg",
        unit: "1 L"
    },
    {
        id: "private_natural_cotton_pads",
        name: "Private Natural Cotton Pads",
        price: 10.55,
        image: "Personal Care/Private Natural Cotton Feel.jpeg",
        unit: "30 pieces"
    }
];
