// /lib/foodDatabase.js
// Fit Couple Club food database v3.
// Large clean ingredient database for recipes, EN/NL translations, macros, goals,
// grocery generation, and future AH/Jumbo/Lidl/Aldi/Open Food Facts matching.
// Macro values are practical average estimates per 100g/ml.
// Use Open Food Facts later to enrich real brand products, barcodes, images and exact labels.

export const FOOD_CATEGORIES = {
  protein: { en: "Protein", nl: "Eiwitten" },
  carbs: { en: "Carbs", nl: "Koolhydraten" },
  fats: { en: "Fats", nl: "Vetten" },
  vegetables: { en: "Vegetables", nl: "Groenten" },
  fruit: { en: "Fruit", nl: "Fruit" },
  dairy: { en: "Dairy", nl: "Zuivel" },
  drinks: { en: "Drinks", nl: "Drinken" },
  condiments: { en: "Condiments", nl: "Sauzen & smaakmakers" },
  snacks: { en: "Snacks", nl: "Snacks" },
};

export const FOOD_GOALS = {
  fat_loss: { en: "Fat Loss", nl: "Vetverlies" },
  build_muscle: { en: "Build Muscle", nl: "Spieropbouw" },
  maintenance: { en: "Maintenance", nl: "Onderhoud" },
  performance: { en: "Performance", nl: "Prestatie" },
};

export const foods = [
  {
    "id": "chicken_breast",
    "name": {
      "en": "Chicken breast",
      "nl": "Kipfilet"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 110,
      "protein": 23,
      "carbs": 0,
      "fats": 2
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "kipfilet",
        "chicken breast"
      ],
      "jumbo": [
        "kipfilet",
        "chicken breast"
      ],
      "lidl": [
        "kipfilet",
        "chicken breast"
      ],
      "aldi": [
        "kipfilet",
        "chicken breast"
      ],
      "openFoodFacts": [
        "kipfilet",
        "chicken breast"
      ]
    }
  },
  {
    "id": "chicken_thigh",
    "name": {
      "en": "Chicken thigh",
      "nl": "Kippendijfilet"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 160,
      "protein": 19,
      "carbs": 0,
      "fats": 9
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "kippendijfilet",
        "chicken thigh"
      ],
      "jumbo": [
        "kippendijfilet",
        "chicken thigh"
      ],
      "lidl": [
        "kippendijfilet",
        "chicken thigh"
      ],
      "aldi": [
        "kippendijfilet",
        "chicken thigh"
      ],
      "openFoodFacts": [
        "kippendijfilet",
        "chicken thigh"
      ]
    }
  },
  {
    "id": "chicken_minced",
    "name": {
      "en": "Minced chicken",
      "nl": "Kipgehakt"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 150,
      "protein": 20,
      "carbs": 0,
      "fats": 8
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "kipgehakt",
        "minced chicken",
        "chicken minced"
      ],
      "jumbo": [
        "kipgehakt",
        "minced chicken",
        "chicken minced"
      ],
      "lidl": [
        "kipgehakt",
        "minced chicken",
        "chicken minced"
      ],
      "aldi": [
        "kipgehakt",
        "minced chicken",
        "chicken minced"
      ],
      "openFoodFacts": [
        "kipgehakt",
        "minced chicken",
        "chicken minced"
      ]
    }
  },
  {
    "id": "turkey_breast",
    "name": {
      "en": "Turkey breast",
      "nl": "Kalkoenfilet"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 105,
      "protein": 23,
      "carbs": 0,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "kalkoenfilet",
        "turkey breast"
      ],
      "jumbo": [
        "kalkoenfilet",
        "turkey breast"
      ],
      "lidl": [
        "kalkoenfilet",
        "turkey breast"
      ],
      "aldi": [
        "kalkoenfilet",
        "turkey breast"
      ],
      "openFoodFacts": [
        "kalkoenfilet",
        "turkey breast"
      ]
    }
  },
  {
    "id": "turkey_minced",
    "name": {
      "en": "Minced turkey",
      "nl": "Kalkoengehakt"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 140,
      "protein": 21,
      "carbs": 0,
      "fats": 6
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "kalkoengehakt",
        "minced turkey",
        "turkey minced"
      ],
      "jumbo": [
        "kalkoengehakt",
        "minced turkey",
        "turkey minced"
      ],
      "lidl": [
        "kalkoengehakt",
        "minced turkey",
        "turkey minced"
      ],
      "aldi": [
        "kalkoengehakt",
        "minced turkey",
        "turkey minced"
      ],
      "openFoodFacts": [
        "kalkoengehakt",
        "minced turkey",
        "turkey minced"
      ]
    }
  },
  {
    "id": "lean_minced_beef",
    "name": {
      "en": "Lean minced beef",
      "nl": "Mager rundergehakt"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 135,
      "protein": 21,
      "carbs": 0,
      "fats": 5
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "mager rundergehakt",
        "lean minced beef"
      ],
      "jumbo": [
        "mager rundergehakt",
        "lean minced beef"
      ],
      "lidl": [
        "mager rundergehakt",
        "lean minced beef"
      ],
      "aldi": [
        "mager rundergehakt",
        "lean minced beef"
      ],
      "openFoodFacts": [
        "mager rundergehakt",
        "lean minced beef"
      ]
    }
  },
  {
    "id": "beef_steak",
    "name": {
      "en": "Beef steak",
      "nl": "Biefstuk"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 150,
      "protein": 22,
      "carbs": 0,
      "fats": 6
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "biefstuk",
        "beef steak"
      ],
      "jumbo": [
        "biefstuk",
        "beef steak"
      ],
      "lidl": [
        "biefstuk",
        "beef steak"
      ],
      "aldi": [
        "biefstuk",
        "beef steak"
      ],
      "openFoodFacts": [
        "biefstuk",
        "beef steak"
      ]
    }
  },
  {
    "id": "beef_strips",
    "name": {
      "en": "Beef strips",
      "nl": "Biefstukreepjes"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 155,
      "protein": 22,
      "carbs": 0,
      "fats": 7
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "biefstukreepjes",
        "beef strips"
      ],
      "jumbo": [
        "biefstukreepjes",
        "beef strips"
      ],
      "lidl": [
        "biefstukreepjes",
        "beef strips"
      ],
      "aldi": [
        "biefstukreepjes",
        "beef strips"
      ],
      "openFoodFacts": [
        "biefstukreepjes",
        "beef strips"
      ]
    }
  },
  {
    "id": "pork_tenderloin",
    "name": {
      "en": "Pork tenderloin",
      "nl": "Varkenshaas"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 120,
      "protein": 22,
      "carbs": 0,
      "fats": 3
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "varkenshaas",
        "pork tenderloin"
      ],
      "jumbo": [
        "varkenshaas",
        "pork tenderloin"
      ],
      "lidl": [
        "varkenshaas",
        "pork tenderloin"
      ],
      "aldi": [
        "varkenshaas",
        "pork tenderloin"
      ],
      "openFoodFacts": [
        "varkenshaas",
        "pork tenderloin"
      ]
    }
  },
  {
    "id": "ham_slices",
    "name": {
      "en": "Lean ham slices",
      "nl": "Magere ham"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 110,
      "protein": 20,
      "carbs": 1,
      "fats": 3
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "magere ham",
        "lean ham slices",
        "ham slices"
      ],
      "jumbo": [
        "magere ham",
        "lean ham slices",
        "ham slices"
      ],
      "lidl": [
        "magere ham",
        "lean ham slices",
        "ham slices"
      ],
      "aldi": [
        "magere ham",
        "lean ham slices",
        "ham slices"
      ],
      "openFoodFacts": [
        "magere ham",
        "lean ham slices",
        "ham slices"
      ]
    }
  },
  {
    "id": "smoked_chicken",
    "name": {
      "en": "Smoked chicken slices",
      "nl": "Gerookte kipfilet"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 115,
      "protein": 22,
      "carbs": 1,
      "fats": 2
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "gerookte kipfilet",
        "smoked chicken slices",
        "smoked chicken"
      ],
      "jumbo": [
        "gerookte kipfilet",
        "smoked chicken slices",
        "smoked chicken"
      ],
      "lidl": [
        "gerookte kipfilet",
        "smoked chicken slices",
        "smoked chicken"
      ],
      "aldi": [
        "gerookte kipfilet",
        "smoked chicken slices",
        "smoked chicken"
      ],
      "openFoodFacts": [
        "gerookte kipfilet",
        "smoked chicken slices",
        "smoked chicken"
      ]
    }
  },
  {
    "id": "roast_beef_slices",
    "name": {
      "en": "Roast beef slices",
      "nl": "Rosbief plakjes"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 120,
      "protein": 23,
      "carbs": 0,
      "fats": 3
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "rosbief plakjes",
        "roast beef slices"
      ],
      "jumbo": [
        "rosbief plakjes",
        "roast beef slices"
      ],
      "lidl": [
        "rosbief plakjes",
        "roast beef slices"
      ],
      "aldi": [
        "rosbief plakjes",
        "roast beef slices"
      ],
      "openFoodFacts": [
        "rosbief plakjes",
        "roast beef slices"
      ]
    }
  },
  {
    "id": "salmon",
    "name": {
      "en": "Salmon",
      "nl": "Zalm"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 208,
      "protein": 20,
      "carbs": 0,
      "fats": 13
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "zalm",
        "salmon"
      ],
      "jumbo": [
        "zalm",
        "salmon"
      ],
      "lidl": [
        "zalm",
        "salmon"
      ],
      "aldi": [
        "zalm",
        "salmon"
      ],
      "openFoodFacts": [
        "zalm",
        "salmon"
      ]
    }
  },
  {
    "id": "smoked_salmon",
    "name": {
      "en": "Smoked salmon",
      "nl": "Gerookte zalm"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 180,
      "protein": 22,
      "carbs": 0,
      "fats": 10
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "gerookte zalm",
        "smoked salmon"
      ],
      "jumbo": [
        "gerookte zalm",
        "smoked salmon"
      ],
      "lidl": [
        "gerookte zalm",
        "smoked salmon"
      ],
      "aldi": [
        "gerookte zalm",
        "smoked salmon"
      ],
      "openFoodFacts": [
        "gerookte zalm",
        "smoked salmon"
      ]
    }
  },
  {
    "id": "tuna_water",
    "name": {
      "en": "Tuna in water",
      "nl": "Tonijn in water"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 110,
      "protein": 25,
      "carbs": 0,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "tonijn in water",
        "tuna in water",
        "tuna water"
      ],
      "jumbo": [
        "tonijn in water",
        "tuna in water",
        "tuna water"
      ],
      "lidl": [
        "tonijn in water",
        "tuna in water",
        "tuna water"
      ],
      "aldi": [
        "tonijn in water",
        "tuna in water",
        "tuna water"
      ],
      "openFoodFacts": [
        "tonijn in water",
        "tuna in water",
        "tuna water"
      ]
    }
  },
  {
    "id": "tuna_oil",
    "name": {
      "en": "Tuna in oil",
      "nl": "Tonijn in olie"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 190,
      "protein": 24,
      "carbs": 0,
      "fats": 10
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "tonijn in olie",
        "tuna in oil",
        "tuna oil"
      ],
      "jumbo": [
        "tonijn in olie",
        "tuna in oil",
        "tuna oil"
      ],
      "lidl": [
        "tonijn in olie",
        "tuna in oil",
        "tuna oil"
      ],
      "aldi": [
        "tonijn in olie",
        "tuna in oil",
        "tuna oil"
      ],
      "openFoodFacts": [
        "tonijn in olie",
        "tuna in oil",
        "tuna oil"
      ]
    }
  },
  {
    "id": "white_fish",
    "name": {
      "en": "White fish",
      "nl": "Witte vis"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 85,
      "protein": 18,
      "carbs": 0,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "witte vis",
        "white fish"
      ],
      "jumbo": [
        "witte vis",
        "white fish"
      ],
      "lidl": [
        "witte vis",
        "white fish"
      ],
      "aldi": [
        "witte vis",
        "white fish"
      ],
      "openFoodFacts": [
        "witte vis",
        "white fish"
      ]
    }
  },
  {
    "id": "cod",
    "name": {
      "en": "Cod",
      "nl": "Kabeljauw"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 82,
      "protein": 18,
      "carbs": 0,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "kabeljauw",
        "cod"
      ],
      "jumbo": [
        "kabeljauw",
        "cod"
      ],
      "lidl": [
        "kabeljauw",
        "cod"
      ],
      "aldi": [
        "kabeljauw",
        "cod"
      ],
      "openFoodFacts": [
        "kabeljauw",
        "cod"
      ]
    }
  },
  {
    "id": "tilapia",
    "name": {
      "en": "Tilapia",
      "nl": "Tilapia"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 96,
      "protein": 20,
      "carbs": 0,
      "fats": 2
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "tilapia"
      ],
      "jumbo": [
        "tilapia"
      ],
      "lidl": [
        "tilapia"
      ],
      "aldi": [
        "tilapia"
      ],
      "openFoodFacts": [
        "tilapia"
      ]
    }
  },
  {
    "id": "mackerel",
    "name": {
      "en": "Mackerel",
      "nl": "Makreel"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 230,
      "protein": 20,
      "carbs": 0,
      "fats": 16
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "makreel",
        "mackerel"
      ],
      "jumbo": [
        "makreel",
        "mackerel"
      ],
      "lidl": [
        "makreel",
        "mackerel"
      ],
      "aldi": [
        "makreel",
        "mackerel"
      ],
      "openFoodFacts": [
        "makreel",
        "mackerel"
      ]
    }
  },
  {
    "id": "sardines",
    "name": {
      "en": "Sardines",
      "nl": "Sardines"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 208,
      "protein": 25,
      "carbs": 0,
      "fats": 11
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "sardines"
      ],
      "jumbo": [
        "sardines"
      ],
      "lidl": [
        "sardines"
      ],
      "aldi": [
        "sardines"
      ],
      "openFoodFacts": [
        "sardines"
      ]
    }
  },
  {
    "id": "shrimp",
    "name": {
      "en": "Shrimp",
      "nl": "Garnalen"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 95,
      "protein": 20,
      "carbs": 1,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "garnalen",
        "shrimp"
      ],
      "jumbo": [
        "garnalen",
        "shrimp"
      ],
      "lidl": [
        "garnalen",
        "shrimp"
      ],
      "aldi": [
        "garnalen",
        "shrimp"
      ],
      "openFoodFacts": [
        "garnalen",
        "shrimp"
      ]
    }
  },
  {
    "id": "mussels",
    "name": {
      "en": "Mussels",
      "nl": "Mosselen"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 86,
      "protein": 12,
      "carbs": 4,
      "fats": 2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "mosselen",
        "mussels"
      ],
      "jumbo": [
        "mosselen",
        "mussels"
      ],
      "lidl": [
        "mosselen",
        "mussels"
      ],
      "aldi": [
        "mosselen",
        "mussels"
      ],
      "openFoodFacts": [
        "mosselen",
        "mussels"
      ]
    }
  },
  {
    "id": "eggs",
    "name": {
      "en": "Eggs",
      "nl": "Eieren"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 143,
      "protein": 13,
      "carbs": 1,
      "fats": 10
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "eieren",
        "eggs"
      ],
      "jumbo": [
        "eieren",
        "eggs"
      ],
      "lidl": [
        "eieren",
        "eggs"
      ],
      "aldi": [
        "eieren",
        "eggs"
      ],
      "openFoodFacts": [
        "eieren",
        "eggs"
      ]
    }
  },
  {
    "id": "egg_whites",
    "name": {
      "en": "Egg whites",
      "nl": "Eiwitten"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 52,
      "protein": 11,
      "carbs": 1,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "eiwitten",
        "egg whites"
      ],
      "jumbo": [
        "eiwitten",
        "egg whites"
      ],
      "lidl": [
        "eiwitten",
        "egg whites"
      ],
      "aldi": [
        "eiwitten",
        "egg whites"
      ],
      "openFoodFacts": [
        "eiwitten",
        "egg whites"
      ]
    }
  },
  {
    "id": "tofu",
    "name": {
      "en": "Tofu",
      "nl": "Tofu"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 120,
      "protein": 12,
      "carbs": 2,
      "fats": 7
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "tofu"
      ],
      "jumbo": [
        "tofu"
      ],
      "lidl": [
        "tofu"
      ],
      "aldi": [
        "tofu"
      ],
      "openFoodFacts": [
        "tofu"
      ]
    }
  },
  {
    "id": "tempeh",
    "name": {
      "en": "Tempeh",
      "nl": "Tempeh"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 190,
      "protein": 20,
      "carbs": 9,
      "fats": 8
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "tempeh"
      ],
      "jumbo": [
        "tempeh"
      ],
      "lidl": [
        "tempeh"
      ],
      "aldi": [
        "tempeh"
      ],
      "openFoodFacts": [
        "tempeh"
      ]
    }
  },
  {
    "id": "seitan",
    "name": {
      "en": "Seitan",
      "nl": "Seitan"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 140,
      "protein": 25,
      "carbs": 6,
      "fats": 2
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "seitan"
      ],
      "jumbo": [
        "seitan"
      ],
      "lidl": [
        "seitan"
      ],
      "aldi": [
        "seitan"
      ],
      "openFoodFacts": [
        "seitan"
      ]
    }
  },
  {
    "id": "vegetarian_chicken",
    "name": {
      "en": "Vegetarian chicken pieces",
      "nl": "Vegetarische kipstukjes"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 160,
      "protein": 20,
      "carbs": 6,
      "fats": 6
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "vegetarische kipstukjes",
        "vegetarian chicken pieces",
        "vegetarian chicken"
      ],
      "jumbo": [
        "vegetarische kipstukjes",
        "vegetarian chicken pieces",
        "vegetarian chicken"
      ],
      "lidl": [
        "vegetarische kipstukjes",
        "vegetarian chicken pieces",
        "vegetarian chicken"
      ],
      "aldi": [
        "vegetarische kipstukjes",
        "vegetarian chicken pieces",
        "vegetarian chicken"
      ],
      "openFoodFacts": [
        "vegetarische kipstukjes",
        "vegetarian chicken pieces",
        "vegetarian chicken"
      ]
    }
  },
  {
    "id": "vegetarian_minced",
    "name": {
      "en": "Vegetarian minced meat",
      "nl": "Vegetarisch gehakt"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 170,
      "protein": 18,
      "carbs": 7,
      "fats": 8
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "vegetarisch gehakt",
        "vegetarian minced meat",
        "vegetarian minced"
      ],
      "jumbo": [
        "vegetarisch gehakt",
        "vegetarian minced meat",
        "vegetarian minced"
      ],
      "lidl": [
        "vegetarisch gehakt",
        "vegetarian minced meat",
        "vegetarian minced"
      ],
      "aldi": [
        "vegetarisch gehakt",
        "vegetarian minced meat",
        "vegetarian minced"
      ],
      "openFoodFacts": [
        "vegetarisch gehakt",
        "vegetarian minced meat",
        "vegetarian minced"
      ]
    }
  },
  {
    "id": "lentils",
    "name": {
      "en": "Lentils",
      "nl": "Linzen"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 116,
      "protein": 9,
      "carbs": 20,
      "fats": 0.4
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "linzen",
        "lentils"
      ],
      "jumbo": [
        "linzen",
        "lentils"
      ],
      "lidl": [
        "linzen",
        "lentils"
      ],
      "aldi": [
        "linzen",
        "lentils"
      ],
      "openFoodFacts": [
        "linzen",
        "lentils"
      ]
    }
  },
  {
    "id": "black_beans",
    "name": {
      "en": "Black beans",
      "nl": "Zwarte bonen"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 132,
      "protein": 9,
      "carbs": 24,
      "fats": 0.5
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "zwarte bonen",
        "black beans"
      ],
      "jumbo": [
        "zwarte bonen",
        "black beans"
      ],
      "lidl": [
        "zwarte bonen",
        "black beans"
      ],
      "aldi": [
        "zwarte bonen",
        "black beans"
      ],
      "openFoodFacts": [
        "zwarte bonen",
        "black beans"
      ]
    }
  },
  {
    "id": "kidney_beans",
    "name": {
      "en": "Kidney beans",
      "nl": "Kidneybonen"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 127,
      "protein": 9,
      "carbs": 23,
      "fats": 0.5
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "kidneybonen",
        "kidney beans"
      ],
      "jumbo": [
        "kidneybonen",
        "kidney beans"
      ],
      "lidl": [
        "kidneybonen",
        "kidney beans"
      ],
      "aldi": [
        "kidneybonen",
        "kidney beans"
      ],
      "openFoodFacts": [
        "kidneybonen",
        "kidney beans"
      ]
    }
  },
  {
    "id": "chickpeas",
    "name": {
      "en": "Chickpeas",
      "nl": "Kikkererwten"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 164,
      "protein": 9,
      "carbs": 27,
      "fats": 3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "kikkererwten",
        "chickpeas"
      ],
      "jumbo": [
        "kikkererwten",
        "chickpeas"
      ],
      "lidl": [
        "kikkererwten",
        "chickpeas"
      ],
      "aldi": [
        "kikkererwten",
        "chickpeas"
      ],
      "openFoodFacts": [
        "kikkererwten",
        "chickpeas"
      ]
    }
  },
  {
    "id": "edamame",
    "name": {
      "en": "Edamame",
      "nl": "Edamame"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 121,
      "protein": 11,
      "carbs": 9,
      "fats": 5
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "edamame"
      ],
      "jumbo": [
        "edamame"
      ],
      "lidl": [
        "edamame"
      ],
      "aldi": [
        "edamame"
      ],
      "openFoodFacts": [
        "edamame"
      ]
    }
  },
  {
    "id": "whey_protein",
    "name": {
      "en": "Whey protein",
      "nl": "Whey eiwit"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 390,
      "protein": 78,
      "carbs": 8,
      "fats": 6
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "whey eiwit",
        "whey protein"
      ],
      "jumbo": [
        "whey eiwit",
        "whey protein"
      ],
      "lidl": [
        "whey eiwit",
        "whey protein"
      ],
      "aldi": [
        "whey eiwit",
        "whey protein"
      ],
      "openFoodFacts": [
        "whey eiwit",
        "whey protein"
      ]
    }
  },
  {
    "id": "casein_protein",
    "name": {
      "en": "Casein protein",
      "nl": "Caseïne eiwit"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 370,
      "protein": 75,
      "carbs": 8,
      "fats": 5
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "caseïne eiwit",
        "casein protein"
      ],
      "jumbo": [
        "caseïne eiwit",
        "casein protein"
      ],
      "lidl": [
        "caseïne eiwit",
        "casein protein"
      ],
      "aldi": [
        "caseïne eiwit",
        "casein protein"
      ],
      "openFoodFacts": [
        "caseïne eiwit",
        "casein protein"
      ]
    }
  },
  {
    "id": "vegan_protein",
    "name": {
      "en": "Vegan protein powder",
      "nl": "Vegan eiwitpoeder"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 380,
      "protein": 75,
      "carbs": 10,
      "fats": 6
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "vegan eiwitpoeder",
        "vegan protein powder",
        "vegan protein"
      ],
      "jumbo": [
        "vegan eiwitpoeder",
        "vegan protein powder",
        "vegan protein"
      ],
      "lidl": [
        "vegan eiwitpoeder",
        "vegan protein powder",
        "vegan protein"
      ],
      "aldi": [
        "vegan eiwitpoeder",
        "vegan protein powder",
        "vegan protein"
      ],
      "openFoodFacts": [
        "vegan eiwitpoeder",
        "vegan protein powder",
        "vegan protein"
      ]
    }
  },
  {
    "id": "low_fat_quark",
    "name": {
      "en": "Low-fat quark",
      "nl": "Magere kwark"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 55,
      "protein": 10,
      "carbs": 4,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie"
    ],
    "supermarketKeywords": {
      "ah": [
        "magere kwark",
        "low-fat quark",
        "low fat quark"
      ],
      "jumbo": [
        "magere kwark",
        "low-fat quark",
        "low fat quark"
      ],
      "lidl": [
        "magere kwark",
        "low-fat quark",
        "low fat quark"
      ],
      "aldi": [
        "magere kwark",
        "low-fat quark",
        "low fat quark"
      ],
      "openFoodFacts": [
        "magere kwark",
        "low-fat quark",
        "low fat quark"
      ]
    }
  },
  {
    "id": "full_fat_quark",
    "name": {
      "en": "Full-fat quark",
      "nl": "Volle kwark"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 120,
      "protein": 8,
      "carbs": 4,
      "fats": 7
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket"
    ],
    "supermarketKeywords": {
      "ah": [
        "volle kwark",
        "full-fat quark",
        "full fat quark"
      ],
      "jumbo": [
        "volle kwark",
        "full-fat quark",
        "full fat quark"
      ],
      "lidl": [
        "volle kwark",
        "full-fat quark",
        "full fat quark"
      ],
      "aldi": [
        "volle kwark",
        "full-fat quark",
        "full fat quark"
      ],
      "openFoodFacts": [
        "volle kwark",
        "full-fat quark",
        "full fat quark"
      ]
    }
  },
  {
    "id": "greek_yogurt_0",
    "name": {
      "en": "Greek yogurt 0%",
      "nl": "Griekse yoghurt 0%"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 60,
      "protein": 10,
      "carbs": 4,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie"
    ],
    "supermarketKeywords": {
      "ah": [
        "griekse yoghurt 0%",
        "greek yogurt 0%",
        "greek yogurt 0"
      ],
      "jumbo": [
        "griekse yoghurt 0%",
        "greek yogurt 0%",
        "greek yogurt 0"
      ],
      "lidl": [
        "griekse yoghurt 0%",
        "greek yogurt 0%",
        "greek yogurt 0"
      ],
      "aldi": [
        "griekse yoghurt 0%",
        "greek yogurt 0%",
        "greek yogurt 0"
      ],
      "openFoodFacts": [
        "griekse yoghurt 0%",
        "greek yogurt 0%",
        "greek yogurt 0"
      ]
    }
  },
  {
    "id": "greek_yogurt_full",
    "name": {
      "en": "Full-fat Greek yogurt",
      "nl": "Volle Griekse yoghurt"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 120,
      "protein": 7,
      "carbs": 4,
      "fats": 8
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket"
    ],
    "supermarketKeywords": {
      "ah": [
        "volle griekse yoghurt",
        "full-fat greek yogurt",
        "greek yogurt full"
      ],
      "jumbo": [
        "volle griekse yoghurt",
        "full-fat greek yogurt",
        "greek yogurt full"
      ],
      "lidl": [
        "volle griekse yoghurt",
        "full-fat greek yogurt",
        "greek yogurt full"
      ],
      "aldi": [
        "volle griekse yoghurt",
        "full-fat greek yogurt",
        "greek yogurt full"
      ],
      "openFoodFacts": [
        "volle griekse yoghurt",
        "full-fat greek yogurt",
        "greek yogurt full"
      ]
    }
  },
  {
    "id": "skyr_natural",
    "name": {
      "en": "Natural skyr",
      "nl": "Naturel skyr"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 62,
      "protein": 11,
      "carbs": 4,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie"
    ],
    "supermarketKeywords": {
      "ah": [
        "naturel skyr",
        "natural skyr",
        "skyr natural"
      ],
      "jumbo": [
        "naturel skyr",
        "natural skyr",
        "skyr natural"
      ],
      "lidl": [
        "naturel skyr",
        "natural skyr",
        "skyr natural"
      ],
      "aldi": [
        "naturel skyr",
        "natural skyr",
        "skyr natural"
      ],
      "openFoodFacts": [
        "naturel skyr",
        "natural skyr",
        "skyr natural"
      ]
    }
  },
  {
    "id": "protein_yogurt",
    "name": {
      "en": "Protein yogurt",
      "nl": "Eiwityoghurt"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 70,
      "protein": 10,
      "carbs": 6,
      "fats": 0.5
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie"
    ],
    "supermarketKeywords": {
      "ah": [
        "eiwityoghurt",
        "protein yogurt"
      ],
      "jumbo": [
        "eiwityoghurt",
        "protein yogurt"
      ],
      "lidl": [
        "eiwityoghurt",
        "protein yogurt"
      ],
      "aldi": [
        "eiwityoghurt",
        "protein yogurt"
      ],
      "openFoodFacts": [
        "eiwityoghurt",
        "protein yogurt"
      ]
    }
  },
  {
    "id": "cottage_cheese",
    "name": {
      "en": "Cottage cheese",
      "nl": "Hüttenkäse"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 90,
      "protein": 12,
      "carbs": 3,
      "fats": 3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket"
    ],
    "supermarketKeywords": {
      "ah": [
        "hüttenkäse",
        "cottage cheese"
      ],
      "jumbo": [
        "hüttenkäse",
        "cottage cheese"
      ],
      "lidl": [
        "hüttenkäse",
        "cottage cheese"
      ],
      "aldi": [
        "hüttenkäse",
        "cottage cheese"
      ],
      "openFoodFacts": [
        "hüttenkäse",
        "cottage cheese"
      ]
    }
  },
  {
    "id": "cream_cheese_light",
    "name": {
      "en": "Light cream cheese",
      "nl": "Light roomkaas"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 150,
      "protein": 8,
      "carbs": 5,
      "fats": 10
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket"
    ],
    "supermarketKeywords": {
      "ah": [
        "light roomkaas",
        "light cream cheese",
        "cream cheese light"
      ],
      "jumbo": [
        "light roomkaas",
        "light cream cheese",
        "cream cheese light"
      ],
      "lidl": [
        "light roomkaas",
        "light cream cheese",
        "cream cheese light"
      ],
      "aldi": [
        "light roomkaas",
        "light cream cheese",
        "cream cheese light"
      ],
      "openFoodFacts": [
        "light roomkaas",
        "light cream cheese",
        "cream cheese light"
      ]
    }
  },
  {
    "id": "mozzarella_light",
    "name": {
      "en": "Light mozzarella",
      "nl": "Light mozzarella"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 170,
      "protein": 22,
      "carbs": 2,
      "fats": 8
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein"
    ],
    "supermarketKeywords": {
      "ah": [
        "light mozzarella",
        "mozzarella light"
      ],
      "jumbo": [
        "light mozzarella",
        "mozzarella light"
      ],
      "lidl": [
        "light mozzarella",
        "mozzarella light"
      ],
      "aldi": [
        "light mozzarella",
        "mozzarella light"
      ],
      "openFoodFacts": [
        "light mozzarella",
        "mozzarella light"
      ]
    }
  },
  {
    "id": "feta",
    "name": {
      "en": "Feta",
      "nl": "Feta"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 260,
      "protein": 14,
      "carbs": 4,
      "fats": 21
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket"
    ],
    "supermarketKeywords": {
      "ah": [
        "feta"
      ],
      "jumbo": [
        "feta"
      ],
      "lidl": [
        "feta"
      ],
      "aldi": [
        "feta"
      ],
      "openFoodFacts": [
        "feta"
      ]
    }
  },
  {
    "id": "parmesan",
    "name": {
      "en": "Parmesan",
      "nl": "Parmezaan"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 430,
      "protein": 38,
      "carbs": 4,
      "fats": 29
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein"
    ],
    "supermarketKeywords": {
      "ah": [
        "parmezaan",
        "parmesan"
      ],
      "jumbo": [
        "parmezaan",
        "parmesan"
      ],
      "lidl": [
        "parmezaan",
        "parmesan"
      ],
      "aldi": [
        "parmezaan",
        "parmesan"
      ],
      "openFoodFacts": [
        "parmezaan",
        "parmesan"
      ]
    }
  },
  {
    "id": "semi_skimmed_milk",
    "name": {
      "en": "Semi-skimmed milk",
      "nl": "Halfvolle melk"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 47,
      "protein": 3.5,
      "carbs": 5,
      "fats": 1.5
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie"
    ],
    "supermarketKeywords": {
      "ah": [
        "halfvolle melk",
        "semi-skimmed milk",
        "semi skimmed milk"
      ],
      "jumbo": [
        "halfvolle melk",
        "semi-skimmed milk",
        "semi skimmed milk"
      ],
      "lidl": [
        "halfvolle melk",
        "semi-skimmed milk",
        "semi skimmed milk"
      ],
      "aldi": [
        "halfvolle melk",
        "semi-skimmed milk",
        "semi skimmed milk"
      ],
      "openFoodFacts": [
        "halfvolle melk",
        "semi-skimmed milk",
        "semi skimmed milk"
      ]
    }
  },
  {
    "id": "skimmed_milk",
    "name": {
      "en": "Skimmed milk",
      "nl": "Magere melk"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 35,
      "protein": 3.5,
      "carbs": 5,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie"
    ],
    "supermarketKeywords": {
      "ah": [
        "magere melk",
        "skimmed milk"
      ],
      "jumbo": [
        "magere melk",
        "skimmed milk"
      ],
      "lidl": [
        "magere melk",
        "skimmed milk"
      ],
      "aldi": [
        "magere melk",
        "skimmed milk"
      ],
      "openFoodFacts": [
        "magere melk",
        "skimmed milk"
      ]
    }
  },
  {
    "id": "lactose_free_milk",
    "name": {
      "en": "Lactose-free milk",
      "nl": "Lactosevrije melk"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 47,
      "protein": 3.5,
      "carbs": 5,
      "fats": 1.5
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie"
    ],
    "supermarketKeywords": {
      "ah": [
        "lactosevrije melk",
        "lactose-free milk",
        "lactose free milk"
      ],
      "jumbo": [
        "lactosevrije melk",
        "lactose-free milk",
        "lactose free milk"
      ],
      "lidl": [
        "lactosevrije melk",
        "lactose-free milk",
        "lactose free milk"
      ],
      "aldi": [
        "lactosevrije melk",
        "lactose-free milk",
        "lactose free milk"
      ],
      "openFoodFacts": [
        "lactosevrije melk",
        "lactose-free milk",
        "lactose free milk"
      ]
    }
  },
  {
    "id": "buttermilk",
    "name": {
      "en": "Buttermilk",
      "nl": "Karnemelk"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 38,
      "protein": 3.5,
      "carbs": 4,
      "fats": 0.5
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie"
    ],
    "supermarketKeywords": {
      "ah": [
        "karnemelk",
        "buttermilk"
      ],
      "jumbo": [
        "karnemelk",
        "buttermilk"
      ],
      "lidl": [
        "karnemelk",
        "buttermilk"
      ],
      "aldi": [
        "karnemelk",
        "buttermilk"
      ],
      "openFoodFacts": [
        "karnemelk",
        "buttermilk"
      ]
    }
  },
  {
    "id": "oats",
    "name": {
      "en": "Oats",
      "nl": "Havermout"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 370,
      "protein": 13,
      "carbs": 60,
      "fats": 7
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "havermout",
        "oats"
      ],
      "jumbo": [
        "havermout",
        "oats"
      ],
      "lidl": [
        "havermout",
        "oats"
      ],
      "aldi": [
        "havermout",
        "oats"
      ],
      "openFoodFacts": [
        "havermout",
        "oats"
      ]
    }
  },
  {
    "id": "rice_cooked",
    "name": {
      "en": "Cooked rice",
      "nl": "Gekookte rijst"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 130,
      "protein": 3,
      "carbs": 28,
      "fats": 0.3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte rijst",
        "cooked rice",
        "rice cooked"
      ],
      "jumbo": [
        "gekookte rijst",
        "cooked rice",
        "rice cooked"
      ],
      "lidl": [
        "gekookte rijst",
        "cooked rice",
        "rice cooked"
      ],
      "aldi": [
        "gekookte rijst",
        "cooked rice",
        "rice cooked"
      ],
      "openFoodFacts": [
        "gekookte rijst",
        "cooked rice",
        "rice cooked"
      ]
    }
  },
  {
    "id": "brown_rice_cooked",
    "name": {
      "en": "Cooked brown rice",
      "nl": "Gekookte zilvervliesrijst"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 122,
      "protein": 3,
      "carbs": 25,
      "fats": 1
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte zilvervliesrijst",
        "cooked brown rice",
        "brown rice cooked"
      ],
      "jumbo": [
        "gekookte zilvervliesrijst",
        "cooked brown rice",
        "brown rice cooked"
      ],
      "lidl": [
        "gekookte zilvervliesrijst",
        "cooked brown rice",
        "brown rice cooked"
      ],
      "aldi": [
        "gekookte zilvervliesrijst",
        "cooked brown rice",
        "brown rice cooked"
      ],
      "openFoodFacts": [
        "gekookte zilvervliesrijst",
        "cooked brown rice",
        "brown rice cooked"
      ]
    }
  },
  {
    "id": "basmati_rice_cooked",
    "name": {
      "en": "Cooked basmati rice",
      "nl": "Gekookte basmatirijst"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 130,
      "protein": 3,
      "carbs": 28,
      "fats": 0.3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte basmatirijst",
        "cooked basmati rice",
        "basmati rice cooked"
      ],
      "jumbo": [
        "gekookte basmatirijst",
        "cooked basmati rice",
        "basmati rice cooked"
      ],
      "lidl": [
        "gekookte basmatirijst",
        "cooked basmati rice",
        "basmati rice cooked"
      ],
      "aldi": [
        "gekookte basmatirijst",
        "cooked basmati rice",
        "basmati rice cooked"
      ],
      "openFoodFacts": [
        "gekookte basmatirijst",
        "cooked basmati rice",
        "basmati rice cooked"
      ]
    }
  },
  {
    "id": "jasmine_rice_cooked",
    "name": {
      "en": "Cooked jasmine rice",
      "nl": "Gekookte jasmijnrijst"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 130,
      "protein": 3,
      "carbs": 28,
      "fats": 0.3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte jasmijnrijst",
        "cooked jasmine rice",
        "jasmine rice cooked"
      ],
      "jumbo": [
        "gekookte jasmijnrijst",
        "cooked jasmine rice",
        "jasmine rice cooked"
      ],
      "lidl": [
        "gekookte jasmijnrijst",
        "cooked jasmine rice",
        "jasmine rice cooked"
      ],
      "aldi": [
        "gekookte jasmijnrijst",
        "cooked jasmine rice",
        "jasmine rice cooked"
      ],
      "openFoodFacts": [
        "gekookte jasmijnrijst",
        "cooked jasmine rice",
        "jasmine rice cooked"
      ]
    }
  },
  {
    "id": "quinoa_cooked",
    "name": {
      "en": "Cooked quinoa",
      "nl": "Gekookte quinoa"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 120,
      "protein": 4,
      "carbs": 21,
      "fats": 2
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte quinoa",
        "cooked quinoa",
        "quinoa cooked"
      ],
      "jumbo": [
        "gekookte quinoa",
        "cooked quinoa",
        "quinoa cooked"
      ],
      "lidl": [
        "gekookte quinoa",
        "cooked quinoa",
        "quinoa cooked"
      ],
      "aldi": [
        "gekookte quinoa",
        "cooked quinoa",
        "quinoa cooked"
      ],
      "openFoodFacts": [
        "gekookte quinoa",
        "cooked quinoa",
        "quinoa cooked"
      ]
    }
  },
  {
    "id": "couscous_cooked",
    "name": {
      "en": "Cooked couscous",
      "nl": "Gekookte couscous"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 112,
      "protein": 4,
      "carbs": 23,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte couscous",
        "cooked couscous",
        "couscous cooked"
      ],
      "jumbo": [
        "gekookte couscous",
        "cooked couscous",
        "couscous cooked"
      ],
      "lidl": [
        "gekookte couscous",
        "cooked couscous",
        "couscous cooked"
      ],
      "aldi": [
        "gekookte couscous",
        "cooked couscous",
        "couscous cooked"
      ],
      "openFoodFacts": [
        "gekookte couscous",
        "cooked couscous",
        "couscous cooked"
      ]
    }
  },
  {
    "id": "bulgur_cooked",
    "name": {
      "en": "Cooked bulgur",
      "nl": "Gekookte bulgur"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 83,
      "protein": 3,
      "carbs": 19,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte bulgur",
        "cooked bulgur",
        "bulgur cooked"
      ],
      "jumbo": [
        "gekookte bulgur",
        "cooked bulgur",
        "bulgur cooked"
      ],
      "lidl": [
        "gekookte bulgur",
        "cooked bulgur",
        "bulgur cooked"
      ],
      "aldi": [
        "gekookte bulgur",
        "cooked bulgur",
        "bulgur cooked"
      ],
      "openFoodFacts": [
        "gekookte bulgur",
        "cooked bulgur",
        "bulgur cooked"
      ]
    }
  },
  {
    "id": "potatoes",
    "name": {
      "en": "Potatoes",
      "nl": "Aardappelen"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 77,
      "protein": 2,
      "carbs": 17,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "aardappelen",
        "potatoes"
      ],
      "jumbo": [
        "aardappelen",
        "potatoes"
      ],
      "lidl": [
        "aardappelen",
        "potatoes"
      ],
      "aldi": [
        "aardappelen",
        "potatoes"
      ],
      "openFoodFacts": [
        "aardappelen",
        "potatoes"
      ]
    }
  },
  {
    "id": "sweet_potato",
    "name": {
      "en": "Sweet potato",
      "nl": "Zoete aardappel"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 86,
      "protein": 2,
      "carbs": 20,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "zoete aardappel",
        "sweet potato"
      ],
      "jumbo": [
        "zoete aardappel",
        "sweet potato"
      ],
      "lidl": [
        "zoete aardappel",
        "sweet potato"
      ],
      "aldi": [
        "zoete aardappel",
        "sweet potato"
      ],
      "openFoodFacts": [
        "zoete aardappel",
        "sweet potato"
      ]
    }
  },
  {
    "id": "pasta_cooked",
    "name": {
      "en": "Cooked pasta",
      "nl": "Gekookte pasta"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 155,
      "protein": 6,
      "carbs": 31,
      "fats": 1
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte pasta",
        "cooked pasta",
        "pasta cooked"
      ],
      "jumbo": [
        "gekookte pasta",
        "cooked pasta",
        "pasta cooked"
      ],
      "lidl": [
        "gekookte pasta",
        "cooked pasta",
        "pasta cooked"
      ],
      "aldi": [
        "gekookte pasta",
        "cooked pasta",
        "pasta cooked"
      ],
      "openFoodFacts": [
        "gekookte pasta",
        "cooked pasta",
        "pasta cooked"
      ]
    }
  },
  {
    "id": "whole_wheat_pasta_cooked",
    "name": {
      "en": "Cooked whole wheat pasta",
      "nl": "Gekookte volkoren pasta"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 150,
      "protein": 6,
      "carbs": 28,
      "fats": 1
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte volkoren pasta",
        "cooked whole wheat pasta",
        "whole wheat pasta cooked"
      ],
      "jumbo": [
        "gekookte volkoren pasta",
        "cooked whole wheat pasta",
        "whole wheat pasta cooked"
      ],
      "lidl": [
        "gekookte volkoren pasta",
        "cooked whole wheat pasta",
        "whole wheat pasta cooked"
      ],
      "aldi": [
        "gekookte volkoren pasta",
        "cooked whole wheat pasta",
        "whole wheat pasta cooked"
      ],
      "openFoodFacts": [
        "gekookte volkoren pasta",
        "cooked whole wheat pasta",
        "whole wheat pasta cooked"
      ]
    }
  },
  {
    "id": "noodles_cooked",
    "name": {
      "en": "Cooked noodles",
      "nl": "Gekookte noedels"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 138,
      "protein": 5,
      "carbs": 25,
      "fats": 2
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte noedels",
        "cooked noodles",
        "noodles cooked"
      ],
      "jumbo": [
        "gekookte noedels",
        "cooked noodles",
        "noodles cooked"
      ],
      "lidl": [
        "gekookte noedels",
        "cooked noodles",
        "noodles cooked"
      ],
      "aldi": [
        "gekookte noedels",
        "cooked noodles",
        "noodles cooked"
      ],
      "openFoodFacts": [
        "gekookte noedels",
        "cooked noodles",
        "noodles cooked"
      ]
    }
  },
  {
    "id": "whole_grain_bread",
    "name": {
      "en": "Whole grain bread",
      "nl": "Volkoren brood"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 240,
      "protein": 9,
      "carbs": 41,
      "fats": 4
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "volkoren brood",
        "whole grain bread"
      ],
      "jumbo": [
        "volkoren brood",
        "whole grain bread"
      ],
      "lidl": [
        "volkoren brood",
        "whole grain bread"
      ],
      "aldi": [
        "volkoren brood",
        "whole grain bread"
      ],
      "openFoodFacts": [
        "volkoren brood",
        "whole grain bread"
      ]
    }
  },
  {
    "id": "sourdough_bread",
    "name": {
      "en": "Sourdough bread",
      "nl": "Zuurdesembrood"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 250,
      "protein": 8,
      "carbs": 48,
      "fats": 2
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "zuurdesembrood",
        "sourdough bread"
      ],
      "jumbo": [
        "zuurdesembrood",
        "sourdough bread"
      ],
      "lidl": [
        "zuurdesembrood",
        "sourdough bread"
      ],
      "aldi": [
        "zuurdesembrood",
        "sourdough bread"
      ],
      "openFoodFacts": [
        "zuurdesembrood",
        "sourdough bread"
      ]
    }
  },
  {
    "id": "protein_bread",
    "name": {
      "en": "Protein bread",
      "nl": "Eiwitbrood"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 250,
      "protein": 20,
      "carbs": 25,
      "fats": 8
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "eiwitbrood",
        "protein bread"
      ],
      "jumbo": [
        "eiwitbrood",
        "protein bread"
      ],
      "lidl": [
        "eiwitbrood",
        "protein bread"
      ],
      "aldi": [
        "eiwitbrood",
        "protein bread"
      ],
      "openFoodFacts": [
        "eiwitbrood",
        "protein bread"
      ]
    }
  },
  {
    "id": "whole_wheat_wrap",
    "name": {
      "en": "Whole wheat wrap",
      "nl": "Volkoren wrap"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 300,
      "protein": 9,
      "carbs": 50,
      "fats": 7
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "volkoren wrap",
        "whole wheat wrap"
      ],
      "jumbo": [
        "volkoren wrap",
        "whole wheat wrap"
      ],
      "lidl": [
        "volkoren wrap",
        "whole wheat wrap"
      ],
      "aldi": [
        "volkoren wrap",
        "whole wheat wrap"
      ],
      "openFoodFacts": [
        "volkoren wrap",
        "whole wheat wrap"
      ]
    }
  },
  {
    "id": "tortilla_wrap",
    "name": {
      "en": "Tortilla wrap",
      "nl": "Tortilla wrap"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 310,
      "protein": 8,
      "carbs": 52,
      "fats": 8
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "tortilla wrap"
      ],
      "jumbo": [
        "tortilla wrap"
      ],
      "lidl": [
        "tortilla wrap"
      ],
      "aldi": [
        "tortilla wrap"
      ],
      "openFoodFacts": [
        "tortilla wrap"
      ]
    }
  },
  {
    "id": "rice_cakes",
    "name": {
      "en": "Rice cakes",
      "nl": "Rijstwafels"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 385,
      "protein": 8,
      "carbs": 81,
      "fats": 3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "rijstwafels",
        "rice cakes"
      ],
      "jumbo": [
        "rijstwafels",
        "rice cakes"
      ],
      "lidl": [
        "rijstwafels",
        "rice cakes"
      ],
      "aldi": [
        "rijstwafels",
        "rice cakes"
      ],
      "openFoodFacts": [
        "rijstwafels",
        "rice cakes"
      ]
    }
  },
  {
    "id": "corn_cakes",
    "name": {
      "en": "Corn cakes",
      "nl": "Maïswafels"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 390,
      "protein": 8,
      "carbs": 82,
      "fats": 3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "maïswafels",
        "corn cakes"
      ],
      "jumbo": [
        "maïswafels",
        "corn cakes"
      ],
      "lidl": [
        "maïswafels",
        "corn cakes"
      ],
      "aldi": [
        "maïswafels",
        "corn cakes"
      ],
      "openFoodFacts": [
        "maïswafels",
        "corn cakes"
      ]
    }
  },
  {
    "id": "granola",
    "name": {
      "en": "Granola",
      "nl": "Granola"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 450,
      "protein": 10,
      "carbs": 62,
      "fats": 16
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "granola"
      ],
      "jumbo": [
        "granola"
      ],
      "lidl": [
        "granola"
      ],
      "aldi": [
        "granola"
      ],
      "openFoodFacts": [
        "granola"
      ]
    }
  },
  {
    "id": "muesli",
    "name": {
      "en": "Muesli",
      "nl": "Muesli"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 370,
      "protein": 11,
      "carbs": 65,
      "fats": 7
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "muesli"
      ],
      "jumbo": [
        "muesli"
      ],
      "lidl": [
        "muesli"
      ],
      "aldi": [
        "muesli"
      ],
      "openFoodFacts": [
        "muesli"
      ]
    }
  },
  {
    "id": "low_sugar_cereal",
    "name": {
      "en": "Low-sugar cereal",
      "nl": "Ontbijtgranen met weinig suiker"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 360,
      "protein": 10,
      "carbs": 70,
      "fats": 4
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "ontbijtgranen met weinig suiker",
        "low-sugar cereal",
        "low sugar cereal"
      ],
      "jumbo": [
        "ontbijtgranen met weinig suiker",
        "low-sugar cereal",
        "low sugar cereal"
      ],
      "lidl": [
        "ontbijtgranen met weinig suiker",
        "low-sugar cereal",
        "low sugar cereal"
      ],
      "aldi": [
        "ontbijtgranen met weinig suiker",
        "low-sugar cereal",
        "low sugar cereal"
      ],
      "openFoodFacts": [
        "ontbijtgranen met weinig suiker",
        "low-sugar cereal",
        "low sugar cereal"
      ]
    }
  },
  {
    "id": "flour",
    "name": {
      "en": "Flour",
      "nl": "Bloem"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 364,
      "protein": 10,
      "carbs": 76,
      "fats": 1
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "bloem",
        "flour"
      ],
      "jumbo": [
        "bloem",
        "flour"
      ],
      "lidl": [
        "bloem",
        "flour"
      ],
      "aldi": [
        "bloem",
        "flour"
      ],
      "openFoodFacts": [
        "bloem",
        "flour"
      ]
    }
  },
  {
    "id": "whole_wheat_flour",
    "name": {
      "en": "Whole wheat flour",
      "nl": "Volkorenmeel"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 340,
      "protein": 13,
      "carbs": 62,
      "fats": 2
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "volkorenmeel",
        "whole wheat flour"
      ],
      "jumbo": [
        "volkorenmeel",
        "whole wheat flour"
      ],
      "lidl": [
        "volkorenmeel",
        "whole wheat flour"
      ],
      "aldi": [
        "volkorenmeel",
        "whole wheat flour"
      ],
      "openFoodFacts": [
        "volkorenmeel",
        "whole wheat flour"
      ]
    }
  },
  {
    "id": "olive_oil",
    "name": {
      "en": "Olive oil",
      "nl": "Olijfolie"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 884,
      "protein": 0,
      "carbs": 0,
      "fats": 100
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "olijfolie",
        "olive oil"
      ],
      "jumbo": [
        "olijfolie",
        "olive oil"
      ],
      "lidl": [
        "olijfolie",
        "olive oil"
      ],
      "aldi": [
        "olijfolie",
        "olive oil"
      ],
      "openFoodFacts": [
        "olijfolie",
        "olive oil"
      ]
    }
  },
  {
    "id": "coconut_oil",
    "name": {
      "en": "Coconut oil",
      "nl": "Kokosolie"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 900,
      "protein": 0,
      "carbs": 0,
      "fats": 100
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "kokosolie",
        "coconut oil"
      ],
      "jumbo": [
        "kokosolie",
        "coconut oil"
      ],
      "lidl": [
        "kokosolie",
        "coconut oil"
      ],
      "aldi": [
        "kokosolie",
        "coconut oil"
      ],
      "openFoodFacts": [
        "kokosolie",
        "coconut oil"
      ]
    }
  },
  {
    "id": "avocado",
    "name": {
      "en": "Avocado",
      "nl": "Avocado"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 160,
      "protein": 2,
      "carbs": 9,
      "fats": 15
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "avocado"
      ],
      "jumbo": [
        "avocado"
      ],
      "lidl": [
        "avocado"
      ],
      "aldi": [
        "avocado"
      ],
      "openFoodFacts": [
        "avocado"
      ]
    }
  },
  {
    "id": "peanut_butter",
    "name": {
      "en": "Peanut butter",
      "nl": "Pindakaas"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 600,
      "protein": 25,
      "carbs": 12,
      "fats": 50
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "pindakaas",
        "peanut butter"
      ],
      "jumbo": [
        "pindakaas",
        "peanut butter"
      ],
      "lidl": [
        "pindakaas",
        "peanut butter"
      ],
      "aldi": [
        "pindakaas",
        "peanut butter"
      ],
      "openFoodFacts": [
        "pindakaas",
        "peanut butter"
      ]
    }
  },
  {
    "id": "almond_butter",
    "name": {
      "en": "Almond butter",
      "nl": "Amandelpasta"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 620,
      "protein": 21,
      "carbs": 19,
      "fats": 55
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "amandelpasta",
        "almond butter"
      ],
      "jumbo": [
        "amandelpasta",
        "almond butter"
      ],
      "lidl": [
        "amandelpasta",
        "almond butter"
      ],
      "aldi": [
        "amandelpasta",
        "almond butter"
      ],
      "openFoodFacts": [
        "amandelpasta",
        "almond butter"
      ]
    }
  },
  {
    "id": "almonds",
    "name": {
      "en": "Almonds",
      "nl": "Amandelen"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 579,
      "protein": 21,
      "carbs": 22,
      "fats": 50
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "amandelen",
        "almonds"
      ],
      "jumbo": [
        "amandelen",
        "almonds"
      ],
      "lidl": [
        "amandelen",
        "almonds"
      ],
      "aldi": [
        "amandelen",
        "almonds"
      ],
      "openFoodFacts": [
        "amandelen",
        "almonds"
      ]
    }
  },
  {
    "id": "cashews",
    "name": {
      "en": "Cashews",
      "nl": "Cashewnoten"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 553,
      "protein": 18,
      "carbs": 30,
      "fats": 44
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "cashewnoten",
        "cashews"
      ],
      "jumbo": [
        "cashewnoten",
        "cashews"
      ],
      "lidl": [
        "cashewnoten",
        "cashews"
      ],
      "aldi": [
        "cashewnoten",
        "cashews"
      ],
      "openFoodFacts": [
        "cashewnoten",
        "cashews"
      ]
    }
  },
  {
    "id": "walnuts",
    "name": {
      "en": "Walnuts",
      "nl": "Walnoten"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 654,
      "protein": 15,
      "carbs": 14,
      "fats": 65
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "walnoten",
        "walnuts"
      ],
      "jumbo": [
        "walnoten",
        "walnuts"
      ],
      "lidl": [
        "walnoten",
        "walnuts"
      ],
      "aldi": [
        "walnoten",
        "walnuts"
      ],
      "openFoodFacts": [
        "walnoten",
        "walnuts"
      ]
    }
  },
  {
    "id": "mixed_nuts",
    "name": {
      "en": "Mixed nuts",
      "nl": "Gemengde noten"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 610,
      "protein": 18,
      "carbs": 18,
      "fats": 52
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gemengde noten",
        "mixed nuts"
      ],
      "jumbo": [
        "gemengde noten",
        "mixed nuts"
      ],
      "lidl": [
        "gemengde noten",
        "mixed nuts"
      ],
      "aldi": [
        "gemengde noten",
        "mixed nuts"
      ],
      "openFoodFacts": [
        "gemengde noten",
        "mixed nuts"
      ]
    }
  },
  {
    "id": "chia_seeds",
    "name": {
      "en": "Chia seeds",
      "nl": "Chiazaad"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 486,
      "protein": 17,
      "carbs": 42,
      "fats": 31
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "chiazaad",
        "chia seeds"
      ],
      "jumbo": [
        "chiazaad",
        "chia seeds"
      ],
      "lidl": [
        "chiazaad",
        "chia seeds"
      ],
      "aldi": [
        "chiazaad",
        "chia seeds"
      ],
      "openFoodFacts": [
        "chiazaad",
        "chia seeds"
      ]
    }
  },
  {
    "id": "flaxseed",
    "name": {
      "en": "Flaxseed",
      "nl": "Lijnzaad"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 534,
      "protein": 18,
      "carbs": 29,
      "fats": 42
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "lijnzaad",
        "flaxseed"
      ],
      "jumbo": [
        "lijnzaad",
        "flaxseed"
      ],
      "lidl": [
        "lijnzaad",
        "flaxseed"
      ],
      "aldi": [
        "lijnzaad",
        "flaxseed"
      ],
      "openFoodFacts": [
        "lijnzaad",
        "flaxseed"
      ]
    }
  },
  {
    "id": "pumpkin_seeds",
    "name": {
      "en": "Pumpkin seeds",
      "nl": "Pompoenpitten"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 559,
      "protein": 30,
      "carbs": 11,
      "fats": 49
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "pompoenpitten",
        "pumpkin seeds"
      ],
      "jumbo": [
        "pompoenpitten",
        "pumpkin seeds"
      ],
      "lidl": [
        "pompoenpitten",
        "pumpkin seeds"
      ],
      "aldi": [
        "pompoenpitten",
        "pumpkin seeds"
      ],
      "openFoodFacts": [
        "pompoenpitten",
        "pumpkin seeds"
      ]
    }
  },
  {
    "id": "sunflower_seeds",
    "name": {
      "en": "Sunflower seeds",
      "nl": "Zonnebloempitten"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 584,
      "protein": 21,
      "carbs": 20,
      "fats": 51
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "zonnebloempitten",
        "sunflower seeds"
      ],
      "jumbo": [
        "zonnebloempitten",
        "sunflower seeds"
      ],
      "lidl": [
        "zonnebloempitten",
        "sunflower seeds"
      ],
      "aldi": [
        "zonnebloempitten",
        "sunflower seeds"
      ],
      "openFoodFacts": [
        "zonnebloempitten",
        "sunflower seeds"
      ]
    }
  },
  {
    "id": "tahini",
    "name": {
      "en": "Tahini",
      "nl": "Tahini"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 595,
      "protein": 17,
      "carbs": 21,
      "fats": 54
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "tahini"
      ],
      "jumbo": [
        "tahini"
      ],
      "lidl": [
        "tahini"
      ],
      "aldi": [
        "tahini"
      ],
      "openFoodFacts": [
        "tahini"
      ]
    }
  },
  {
    "id": "light_mayo",
    "name": {
      "en": "Light mayonnaise",
      "nl": "Light mayonaise"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 300,
      "protein": 1,
      "carbs": 7,
      "fats": 30
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "light mayonaise",
        "light mayonnaise",
        "light mayo"
      ],
      "jumbo": [
        "light mayonaise",
        "light mayonnaise",
        "light mayo"
      ],
      "lidl": [
        "light mayonaise",
        "light mayonnaise",
        "light mayo"
      ],
      "aldi": [
        "light mayonaise",
        "light mayonnaise",
        "light mayo"
      ],
      "openFoodFacts": [
        "light mayonaise",
        "light mayonnaise",
        "light mayo"
      ]
    }
  },
  {
    "id": "broccoli",
    "name": {
      "en": "Broccoli",
      "nl": "Broccoli"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 34,
      "protein": 3,
      "carbs": 7,
      "fats": 0.4
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "broccoli"
      ],
      "jumbo": [
        "broccoli"
      ],
      "lidl": [
        "broccoli"
      ],
      "aldi": [
        "broccoli"
      ],
      "openFoodFacts": [
        "broccoli"
      ]
    }
  },
  {
    "id": "spinach",
    "name": {
      "en": "Spinach",
      "nl": "Spinazie"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 23,
      "protein": 3,
      "carbs": 4,
      "fats": 0.4
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "spinazie",
        "spinach"
      ],
      "jumbo": [
        "spinazie",
        "spinach"
      ],
      "lidl": [
        "spinazie",
        "spinach"
      ],
      "aldi": [
        "spinazie",
        "spinach"
      ],
      "openFoodFacts": [
        "spinazie",
        "spinach"
      ]
    }
  },
  {
    "id": "green_beans",
    "name": {
      "en": "Green beans",
      "nl": "Groene bonen"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 31,
      "protein": 2,
      "carbs": 7,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "groene bonen",
        "green beans"
      ],
      "jumbo": [
        "groene bonen",
        "green beans"
      ],
      "lidl": [
        "groene bonen",
        "green beans"
      ],
      "aldi": [
        "groene bonen",
        "green beans"
      ],
      "openFoodFacts": [
        "groene bonen",
        "green beans"
      ]
    }
  },
  {
    "id": "cucumber",
    "name": {
      "en": "Cucumber",
      "nl": "Komkommer"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 15,
      "protein": 1,
      "carbs": 4,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "komkommer",
        "cucumber"
      ],
      "jumbo": [
        "komkommer",
        "cucumber"
      ],
      "lidl": [
        "komkommer",
        "cucumber"
      ],
      "aldi": [
        "komkommer",
        "cucumber"
      ],
      "openFoodFacts": [
        "komkommer",
        "cucumber"
      ]
    }
  },
  {
    "id": "tomatoes",
    "name": {
      "en": "Tomatoes",
      "nl": "Tomaten"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 18,
      "protein": 1,
      "carbs": 4,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "tomaten",
        "tomatoes"
      ],
      "jumbo": [
        "tomaten",
        "tomatoes"
      ],
      "lidl": [
        "tomaten",
        "tomatoes"
      ],
      "aldi": [
        "tomaten",
        "tomatoes"
      ],
      "openFoodFacts": [
        "tomaten",
        "tomatoes"
      ]
    }
  },
  {
    "id": "bell_pepper",
    "name": {
      "en": "Bell pepper",
      "nl": "Paprika"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 31,
      "protein": 1,
      "carbs": 6,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "paprika",
        "bell pepper"
      ],
      "jumbo": [
        "paprika",
        "bell pepper"
      ],
      "lidl": [
        "paprika",
        "bell pepper"
      ],
      "aldi": [
        "paprika",
        "bell pepper"
      ],
      "openFoodFacts": [
        "paprika",
        "bell pepper"
      ]
    }
  },
  {
    "id": "zucchini",
    "name": {
      "en": "Zucchini",
      "nl": "Courgette"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 17,
      "protein": 1,
      "carbs": 3,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "courgette",
        "zucchini"
      ],
      "jumbo": [
        "courgette",
        "zucchini"
      ],
      "lidl": [
        "courgette",
        "zucchini"
      ],
      "aldi": [
        "courgette",
        "zucchini"
      ],
      "openFoodFacts": [
        "courgette",
        "zucchini"
      ]
    }
  },
  {
    "id": "mushrooms",
    "name": {
      "en": "Mushrooms",
      "nl": "Champignons"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 22,
      "protein": 3,
      "carbs": 3,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "champignons",
        "mushrooms"
      ],
      "jumbo": [
        "champignons",
        "mushrooms"
      ],
      "lidl": [
        "champignons",
        "mushrooms"
      ],
      "aldi": [
        "champignons",
        "mushrooms"
      ],
      "openFoodFacts": [
        "champignons",
        "mushrooms"
      ]
    }
  },
  {
    "id": "lettuce",
    "name": {
      "en": "Lettuce",
      "nl": "Sla"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 15,
      "protein": 1,
      "carbs": 3,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "sla",
        "lettuce"
      ],
      "jumbo": [
        "sla",
        "lettuce"
      ],
      "lidl": [
        "sla",
        "lettuce"
      ],
      "aldi": [
        "sla",
        "lettuce"
      ],
      "openFoodFacts": [
        "sla",
        "lettuce"
      ]
    }
  },
  {
    "id": "romaine_lettuce",
    "name": {
      "en": "Romaine lettuce",
      "nl": "Romeinse sla"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 17,
      "protein": 1,
      "carbs": 3,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "romeinse sla",
        "romaine lettuce"
      ],
      "jumbo": [
        "romeinse sla",
        "romaine lettuce"
      ],
      "lidl": [
        "romeinse sla",
        "romaine lettuce"
      ],
      "aldi": [
        "romeinse sla",
        "romaine lettuce"
      ],
      "openFoodFacts": [
        "romeinse sla",
        "romaine lettuce"
      ]
    }
  },
  {
    "id": "iceberg_lettuce",
    "name": {
      "en": "Iceberg lettuce",
      "nl": "IJsbergsla"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 14,
      "protein": 1,
      "carbs": 3,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "ijsbergsla",
        "iceberg lettuce"
      ],
      "jumbo": [
        "ijsbergsla",
        "iceberg lettuce"
      ],
      "lidl": [
        "ijsbergsla",
        "iceberg lettuce"
      ],
      "aldi": [
        "ijsbergsla",
        "iceberg lettuce"
      ],
      "openFoodFacts": [
        "ijsbergsla",
        "iceberg lettuce"
      ]
    }
  },
  {
    "id": "carrots",
    "name": {
      "en": "Carrots",
      "nl": "Wortelen"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 41,
      "protein": 1,
      "carbs": 10,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "wortelen",
        "carrots"
      ],
      "jumbo": [
        "wortelen",
        "carrots"
      ],
      "lidl": [
        "wortelen",
        "carrots"
      ],
      "aldi": [
        "wortelen",
        "carrots"
      ],
      "openFoodFacts": [
        "wortelen",
        "carrots"
      ]
    }
  },
  {
    "id": "onion",
    "name": {
      "en": "Onion",
      "nl": "Ui"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 40,
      "protein": 1,
      "carbs": 9,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "ui",
        "onion"
      ],
      "jumbo": [
        "ui",
        "onion"
      ],
      "lidl": [
        "ui",
        "onion"
      ],
      "aldi": [
        "ui",
        "onion"
      ],
      "openFoodFacts": [
        "ui",
        "onion"
      ]
    }
  },
  {
    "id": "red_onion",
    "name": {
      "en": "Red onion",
      "nl": "Rode ui"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 40,
      "protein": 1,
      "carbs": 9,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "rode ui",
        "red onion"
      ],
      "jumbo": [
        "rode ui",
        "red onion"
      ],
      "lidl": [
        "rode ui",
        "red onion"
      ],
      "aldi": [
        "rode ui",
        "red onion"
      ],
      "openFoodFacts": [
        "rode ui",
        "red onion"
      ]
    }
  },
  {
    "id": "garlic",
    "name": {
      "en": "Garlic",
      "nl": "Knoflook"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 149,
      "protein": 6,
      "carbs": 33,
      "fats": 0.5
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "knoflook",
        "garlic"
      ],
      "jumbo": [
        "knoflook",
        "garlic"
      ],
      "lidl": [
        "knoflook",
        "garlic"
      ],
      "aldi": [
        "knoflook",
        "garlic"
      ],
      "openFoodFacts": [
        "knoflook",
        "garlic"
      ]
    }
  },
  {
    "id": "cauliflower",
    "name": {
      "en": "Cauliflower",
      "nl": "Bloemkool"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 25,
      "protein": 2,
      "carbs": 5,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "bloemkool",
        "cauliflower"
      ],
      "jumbo": [
        "bloemkool",
        "cauliflower"
      ],
      "lidl": [
        "bloemkool",
        "cauliflower"
      ],
      "aldi": [
        "bloemkool",
        "cauliflower"
      ],
      "openFoodFacts": [
        "bloemkool",
        "cauliflower"
      ]
    }
  },
  {
    "id": "cauliflower_rice",
    "name": {
      "en": "Cauliflower rice",
      "nl": "Bloemkoolrijst"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 25,
      "protein": 2,
      "carbs": 5,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "bloemkoolrijst",
        "cauliflower rice"
      ],
      "jumbo": [
        "bloemkoolrijst",
        "cauliflower rice"
      ],
      "lidl": [
        "bloemkoolrijst",
        "cauliflower rice"
      ],
      "aldi": [
        "bloemkoolrijst",
        "cauliflower rice"
      ],
      "openFoodFacts": [
        "bloemkoolrijst",
        "cauliflower rice"
      ]
    }
  },
  {
    "id": "asparagus",
    "name": {
      "en": "Asparagus",
      "nl": "Asperges"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 20,
      "protein": 2,
      "carbs": 4,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "asperges",
        "asparagus"
      ],
      "jumbo": [
        "asperges",
        "asparagus"
      ],
      "lidl": [
        "asperges",
        "asparagus"
      ],
      "aldi": [
        "asperges",
        "asparagus"
      ],
      "openFoodFacts": [
        "asperges",
        "asparagus"
      ]
    }
  },
  {
    "id": "eggplant",
    "name": {
      "en": "Eggplant",
      "nl": "Aubergine"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 25,
      "protein": 1,
      "carbs": 6,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "aubergine",
        "eggplant"
      ],
      "jumbo": [
        "aubergine",
        "eggplant"
      ],
      "lidl": [
        "aubergine",
        "eggplant"
      ],
      "aldi": [
        "aubergine",
        "eggplant"
      ],
      "openFoodFacts": [
        "aubergine",
        "eggplant"
      ]
    }
  },
  {
    "id": "cabbage",
    "name": {
      "en": "Cabbage",
      "nl": "Kool"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 25,
      "protein": 1,
      "carbs": 6,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "kool",
        "cabbage"
      ],
      "jumbo": [
        "kool",
        "cabbage"
      ],
      "lidl": [
        "kool",
        "cabbage"
      ],
      "aldi": [
        "kool",
        "cabbage"
      ],
      "openFoodFacts": [
        "kool",
        "cabbage"
      ]
    }
  },
  {
    "id": "red_cabbage",
    "name": {
      "en": "Red cabbage",
      "nl": "Rode kool"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 31,
      "protein": 1,
      "carbs": 7,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "rode kool",
        "red cabbage"
      ],
      "jumbo": [
        "rode kool",
        "red cabbage"
      ],
      "lidl": [
        "rode kool",
        "red cabbage"
      ],
      "aldi": [
        "rode kool",
        "red cabbage"
      ],
      "openFoodFacts": [
        "rode kool",
        "red cabbage"
      ]
    }
  },
  {
    "id": "kale",
    "name": {
      "en": "Kale",
      "nl": "Boerenkool"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 49,
      "protein": 4,
      "carbs": 9,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "boerenkool",
        "kale"
      ],
      "jumbo": [
        "boerenkool",
        "kale"
      ],
      "lidl": [
        "boerenkool",
        "kale"
      ],
      "aldi": [
        "boerenkool",
        "kale"
      ],
      "openFoodFacts": [
        "boerenkool",
        "kale"
      ]
    }
  },
  {
    "id": "arugula",
    "name": {
      "en": "Arugula",
      "nl": "Rucola"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 25,
      "protein": 3,
      "carbs": 4,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "rucola",
        "arugula"
      ],
      "jumbo": [
        "rucola",
        "arugula"
      ],
      "lidl": [
        "rucola",
        "arugula"
      ],
      "aldi": [
        "rucola",
        "arugula"
      ],
      "openFoodFacts": [
        "rucola",
        "arugula"
      ]
    }
  },
  {
    "id": "beetroot",
    "name": {
      "en": "Beetroot",
      "nl": "Rode biet"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 43,
      "protein": 2,
      "carbs": 10,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "rode biet",
        "beetroot"
      ],
      "jumbo": [
        "rode biet",
        "beetroot"
      ],
      "lidl": [
        "rode biet",
        "beetroot"
      ],
      "aldi": [
        "rode biet",
        "beetroot"
      ],
      "openFoodFacts": [
        "rode biet",
        "beetroot"
      ]
    }
  },
  {
    "id": "pumpkin",
    "name": {
      "en": "Pumpkin",
      "nl": "Pompoen"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 26,
      "protein": 1,
      "carbs": 7,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "pompoen",
        "pumpkin"
      ],
      "jumbo": [
        "pompoen",
        "pumpkin"
      ],
      "lidl": [
        "pompoen",
        "pumpkin"
      ],
      "aldi": [
        "pompoen",
        "pumpkin"
      ],
      "openFoodFacts": [
        "pompoen",
        "pumpkin"
      ]
    }
  },
  {
    "id": "frozen_vegetables",
    "name": {
      "en": "Frozen vegetables",
      "nl": "Diepvriesgroenten"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 40,
      "protein": 2,
      "carbs": 7,
      "fats": 0.5
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "diepvriesgroenten",
        "frozen vegetables"
      ],
      "jumbo": [
        "diepvriesgroenten",
        "frozen vegetables"
      ],
      "lidl": [
        "diepvriesgroenten",
        "frozen vegetables"
      ],
      "aldi": [
        "diepvriesgroenten",
        "frozen vegetables"
      ],
      "openFoodFacts": [
        "diepvriesgroenten",
        "frozen vegetables"
      ]
    }
  },
  {
    "id": "stir_fry_vegetables",
    "name": {
      "en": "Stir-fry vegetables",
      "nl": "Wokgroenten"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 45,
      "protein": 2,
      "carbs": 8,
      "fats": 0.5
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "wokgroenten",
        "stir-fry vegetables",
        "stir fry vegetables"
      ],
      "jumbo": [
        "wokgroenten",
        "stir-fry vegetables",
        "stir fry vegetables"
      ],
      "lidl": [
        "wokgroenten",
        "stir-fry vegetables",
        "stir fry vegetables"
      ],
      "aldi": [
        "wokgroenten",
        "stir-fry vegetables",
        "stir fry vegetables"
      ],
      "openFoodFacts": [
        "wokgroenten",
        "stir-fry vegetables",
        "stir fry vegetables"
      ]
    }
  },
  {
    "id": "banana",
    "name": {
      "en": "Banana",
      "nl": "Banaan"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 89,
      "protein": 1,
      "carbs": 23,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "banaan",
        "banana"
      ],
      "jumbo": [
        "banaan",
        "banana"
      ],
      "lidl": [
        "banaan",
        "banana"
      ],
      "aldi": [
        "banaan",
        "banana"
      ],
      "openFoodFacts": [
        "banaan",
        "banana"
      ]
    }
  },
  {
    "id": "apple",
    "name": {
      "en": "Apple",
      "nl": "Appel"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "appel",
        "apple"
      ],
      "jumbo": [
        "appel",
        "apple"
      ],
      "lidl": [
        "appel",
        "apple"
      ],
      "aldi": [
        "appel",
        "apple"
      ],
      "openFoodFacts": [
        "appel",
        "apple"
      ]
    }
  },
  {
    "id": "orange",
    "name": {
      "en": "Orange",
      "nl": "Sinaasappel"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 47,
      "protein": 1,
      "carbs": 12,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "sinaasappel",
        "orange"
      ],
      "jumbo": [
        "sinaasappel",
        "orange"
      ],
      "lidl": [
        "sinaasappel",
        "orange"
      ],
      "aldi": [
        "sinaasappel",
        "orange"
      ],
      "openFoodFacts": [
        "sinaasappel",
        "orange"
      ]
    }
  },
  {
    "id": "pear",
    "name": {
      "en": "Pear",
      "nl": "Peer"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 57,
      "protein": 0.4,
      "carbs": 15,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "peer",
        "pear"
      ],
      "jumbo": [
        "peer",
        "pear"
      ],
      "lidl": [
        "peer",
        "pear"
      ],
      "aldi": [
        "peer",
        "pear"
      ],
      "openFoodFacts": [
        "peer",
        "pear"
      ]
    }
  },
  {
    "id": "berries",
    "name": {
      "en": "Berries",
      "nl": "Bessen"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "bessen",
        "berries"
      ],
      "jumbo": [
        "bessen",
        "berries"
      ],
      "lidl": [
        "bessen",
        "berries"
      ],
      "aldi": [
        "bessen",
        "berries"
      ],
      "openFoodFacts": [
        "bessen",
        "berries"
      ]
    }
  },
  {
    "id": "strawberries",
    "name": {
      "en": "Strawberries",
      "nl": "Aardbeien"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 32,
      "protein": 1,
      "carbs": 8,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "aardbeien",
        "strawberries"
      ],
      "jumbo": [
        "aardbeien",
        "strawberries"
      ],
      "lidl": [
        "aardbeien",
        "strawberries"
      ],
      "aldi": [
        "aardbeien",
        "strawberries"
      ],
      "openFoodFacts": [
        "aardbeien",
        "strawberries"
      ]
    }
  },
  {
    "id": "blueberries",
    "name": {
      "en": "Blueberries",
      "nl": "Blauwe bessen"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 57,
      "protein": 1,
      "carbs": 14,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "blauwe bessen",
        "blueberries"
      ],
      "jumbo": [
        "blauwe bessen",
        "blueberries"
      ],
      "lidl": [
        "blauwe bessen",
        "blueberries"
      ],
      "aldi": [
        "blauwe bessen",
        "blueberries"
      ],
      "openFoodFacts": [
        "blauwe bessen",
        "blueberries"
      ]
    }
  },
  {
    "id": "raspberries",
    "name": {
      "en": "Raspberries",
      "nl": "Frambozen"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 52,
      "protein": 1,
      "carbs": 12,
      "fats": 0.7
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "frambozen",
        "raspberries"
      ],
      "jumbo": [
        "frambozen",
        "raspberries"
      ],
      "lidl": [
        "frambozen",
        "raspberries"
      ],
      "aldi": [
        "frambozen",
        "raspberries"
      ],
      "openFoodFacts": [
        "frambozen",
        "raspberries"
      ]
    }
  },
  {
    "id": "mango",
    "name": {
      "en": "Mango",
      "nl": "Mango"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 60,
      "protein": 1,
      "carbs": 15,
      "fats": 0.4
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "mango"
      ],
      "jumbo": [
        "mango"
      ],
      "lidl": [
        "mango"
      ],
      "aldi": [
        "mango"
      ],
      "openFoodFacts": [
        "mango"
      ]
    }
  },
  {
    "id": "pineapple",
    "name": {
      "en": "Pineapple",
      "nl": "Ananas"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 50,
      "protein": 0.5,
      "carbs": 13,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "ananas",
        "pineapple"
      ],
      "jumbo": [
        "ananas",
        "pineapple"
      ],
      "lidl": [
        "ananas",
        "pineapple"
      ],
      "aldi": [
        "ananas",
        "pineapple"
      ],
      "openFoodFacts": [
        "ananas",
        "pineapple"
      ]
    }
  },
  {
    "id": "kiwi",
    "name": {
      "en": "Kiwi",
      "nl": "Kiwi"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 61,
      "protein": 1,
      "carbs": 15,
      "fats": 0.5
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "kiwi"
      ],
      "jumbo": [
        "kiwi"
      ],
      "lidl": [
        "kiwi"
      ],
      "aldi": [
        "kiwi"
      ],
      "openFoodFacts": [
        "kiwi"
      ]
    }
  },
  {
    "id": "grapes",
    "name": {
      "en": "Grapes",
      "nl": "Druiven"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 69,
      "protein": 1,
      "carbs": 18,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "druiven",
        "grapes"
      ],
      "jumbo": [
        "druiven",
        "grapes"
      ],
      "lidl": [
        "druiven",
        "grapes"
      ],
      "aldi": [
        "druiven",
        "grapes"
      ],
      "openFoodFacts": [
        "druiven",
        "grapes"
      ]
    }
  },
  {
    "id": "watermelon",
    "name": {
      "en": "Watermelon",
      "nl": "Watermeloen"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 30,
      "protein": 0.6,
      "carbs": 8,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "watermeloen",
        "watermelon"
      ],
      "jumbo": [
        "watermeloen",
        "watermelon"
      ],
      "lidl": [
        "watermeloen",
        "watermelon"
      ],
      "aldi": [
        "watermeloen",
        "watermelon"
      ],
      "openFoodFacts": [
        "watermeloen",
        "watermelon"
      ]
    }
  },
  {
    "id": "melon",
    "name": {
      "en": "Melon",
      "nl": "Meloen"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 34,
      "protein": 0.8,
      "carbs": 8,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "meloen",
        "melon"
      ],
      "jumbo": [
        "meloen",
        "melon"
      ],
      "lidl": [
        "meloen",
        "melon"
      ],
      "aldi": [
        "meloen",
        "melon"
      ],
      "openFoodFacts": [
        "meloen",
        "melon"
      ]
    }
  },
  {
    "id": "dates",
    "name": {
      "en": "Dates",
      "nl": "Dadels"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 282,
      "protein": 2,
      "carbs": 75,
      "fats": 0.4
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "dadels",
        "dates"
      ],
      "jumbo": [
        "dadels",
        "dates"
      ],
      "lidl": [
        "dadels",
        "dates"
      ],
      "aldi": [
        "dadels",
        "dates"
      ],
      "openFoodFacts": [
        "dadels",
        "dates"
      ]
    }
  },
  {
    "id": "water",
    "name": {
      "en": "Water",
      "nl": "Water"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "water"
      ],
      "jumbo": [
        "water"
      ],
      "lidl": [
        "water"
      ],
      "aldi": [
        "water"
      ],
      "openFoodFacts": [
        "water"
      ]
    }
  },
  {
    "id": "sparkling_water",
    "name": {
      "en": "Sparkling water",
      "nl": "Bruiswater"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "bruiswater",
        "sparkling water"
      ],
      "jumbo": [
        "bruiswater",
        "sparkling water"
      ],
      "lidl": [
        "bruiswater",
        "sparkling water"
      ],
      "aldi": [
        "bruiswater",
        "sparkling water"
      ],
      "openFoodFacts": [
        "bruiswater",
        "sparkling water"
      ]
    }
  },
  {
    "id": "coffee",
    "name": {
      "en": "Coffee",
      "nl": "Koffie"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 1,
      "protein": 0,
      "carbs": 0,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "koffie",
        "coffee"
      ],
      "jumbo": [
        "koffie",
        "coffee"
      ],
      "lidl": [
        "koffie",
        "coffee"
      ],
      "aldi": [
        "koffie",
        "coffee"
      ],
      "openFoodFacts": [
        "koffie",
        "coffee"
      ]
    }
  },
  {
    "id": "tea",
    "name": {
      "en": "Tea",
      "nl": "Thee"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 1,
      "protein": 0,
      "carbs": 0,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "thee",
        "tea"
      ],
      "jumbo": [
        "thee",
        "tea"
      ],
      "lidl": [
        "thee",
        "tea"
      ],
      "aldi": [
        "thee",
        "tea"
      ],
      "openFoodFacts": [
        "thee",
        "tea"
      ]
    }
  },
  {
    "id": "zero_soda",
    "name": {
      "en": "Zero-sugar soft drink",
      "nl": "Zero frisdrank"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 1,
      "protein": 0,
      "carbs": 0,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "zero frisdrank",
        "zero-sugar soft drink",
        "zero soda"
      ],
      "jumbo": [
        "zero frisdrank",
        "zero-sugar soft drink",
        "zero soda"
      ],
      "lidl": [
        "zero frisdrank",
        "zero-sugar soft drink",
        "zero soda"
      ],
      "aldi": [
        "zero frisdrank",
        "zero-sugar soft drink",
        "zero soda"
      ],
      "openFoodFacts": [
        "zero frisdrank",
        "zero-sugar soft drink",
        "zero soda"
      ]
    }
  },
  {
    "id": "semi_skimmed_milk",
    "name": {
      "en": "Semi-skimmed milk",
      "nl": "Halfvolle melk"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 47,
      "protein": 3.5,
      "carbs": 5,
      "fats": 1.5
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "halfvolle melk",
        "semi-skimmed milk",
        "semi skimmed milk"
      ],
      "jumbo": [
        "halfvolle melk",
        "semi-skimmed milk",
        "semi skimmed milk"
      ],
      "lidl": [
        "halfvolle melk",
        "semi-skimmed milk",
        "semi skimmed milk"
      ],
      "aldi": [
        "halfvolle melk",
        "semi-skimmed milk",
        "semi skimmed milk"
      ],
      "openFoodFacts": [
        "halfvolle melk",
        "semi-skimmed milk",
        "semi skimmed milk"
      ]
    }
  },
  {
    "id": "skimmed_milk",
    "name": {
      "en": "Skimmed milk",
      "nl": "Magere melk"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 35,
      "protein": 3.5,
      "carbs": 5,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "magere melk",
        "skimmed milk"
      ],
      "jumbo": [
        "magere melk",
        "skimmed milk"
      ],
      "lidl": [
        "magere melk",
        "skimmed milk"
      ],
      "aldi": [
        "magere melk",
        "skimmed milk"
      ],
      "openFoodFacts": [
        "magere melk",
        "skimmed milk"
      ]
    }
  },
  {
    "id": "almond_milk_unsweetened",
    "name": {
      "en": "Unsweetened almond milk",
      "nl": "Ongezoete amandelmelk"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 13,
      "protein": 0.5,
      "carbs": 0.3,
      "fats": 1.1
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "ongezoete amandelmelk",
        "unsweetened almond milk",
        "almond milk unsweetened"
      ],
      "jumbo": [
        "ongezoete amandelmelk",
        "unsweetened almond milk",
        "almond milk unsweetened"
      ],
      "lidl": [
        "ongezoete amandelmelk",
        "unsweetened almond milk",
        "almond milk unsweetened"
      ],
      "aldi": [
        "ongezoete amandelmelk",
        "unsweetened almond milk",
        "almond milk unsweetened"
      ],
      "openFoodFacts": [
        "ongezoete amandelmelk",
        "unsweetened almond milk",
        "almond milk unsweetened"
      ]
    }
  },
  {
    "id": "soy_milk_unsweetened",
    "name": {
      "en": "Unsweetened soy milk",
      "nl": "Ongezoete sojamelk"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 33,
      "protein": 3.3,
      "carbs": 0.5,
      "fats": 1.8
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "ongezoete sojamelk",
        "unsweetened soy milk",
        "soy milk unsweetened"
      ],
      "jumbo": [
        "ongezoete sojamelk",
        "unsweetened soy milk",
        "soy milk unsweetened"
      ],
      "lidl": [
        "ongezoete sojamelk",
        "unsweetened soy milk",
        "soy milk unsweetened"
      ],
      "aldi": [
        "ongezoete sojamelk",
        "unsweetened soy milk",
        "soy milk unsweetened"
      ],
      "openFoodFacts": [
        "ongezoete sojamelk",
        "unsweetened soy milk",
        "soy milk unsweetened"
      ]
    }
  },
  {
    "id": "oat_milk",
    "name": {
      "en": "Oat milk",
      "nl": "Havermelk"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 46,
      "protein": 1,
      "carbs": 7,
      "fats": 1.5
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "havermelk",
        "oat milk"
      ],
      "jumbo": [
        "havermelk",
        "oat milk"
      ],
      "lidl": [
        "havermelk",
        "oat milk"
      ],
      "aldi": [
        "havermelk",
        "oat milk"
      ],
      "openFoodFacts": [
        "havermelk",
        "oat milk"
      ]
    }
  },
  {
    "id": "coconut_water",
    "name": {
      "en": "Coconut water",
      "nl": "Kokoswater"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 19,
      "protein": 0.7,
      "carbs": 4,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "kokoswater",
        "coconut water"
      ],
      "jumbo": [
        "kokoswater",
        "coconut water"
      ],
      "lidl": [
        "kokoswater",
        "coconut water"
      ],
      "aldi": [
        "kokoswater",
        "coconut water"
      ],
      "openFoodFacts": [
        "kokoswater",
        "coconut water"
      ]
    }
  },
  {
    "id": "electrolytes",
    "name": {
      "en": "Electrolytes",
      "nl": "Elektrolyten"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 10,
      "protein": 0,
      "carbs": 2,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "elektrolyten",
        "electrolytes"
      ],
      "jumbo": [
        "elektrolyten",
        "electrolytes"
      ],
      "lidl": [
        "elektrolyten",
        "electrolytes"
      ],
      "aldi": [
        "elektrolyten",
        "electrolytes"
      ],
      "openFoodFacts": [
        "elektrolyten",
        "electrolytes"
      ]
    }
  },
  {
    "id": "soy_sauce",
    "name": {
      "en": "Soy sauce",
      "nl": "Sojasaus"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 53,
      "protein": 8,
      "carbs": 5,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "sojasaus",
        "soy sauce"
      ],
      "jumbo": [
        "sojasaus",
        "soy sauce"
      ],
      "lidl": [
        "sojasaus",
        "soy sauce"
      ],
      "aldi": [
        "sojasaus",
        "soy sauce"
      ],
      "openFoodFacts": [
        "sojasaus",
        "soy sauce"
      ]
    }
  },
  {
    "id": "salsa",
    "name": {
      "en": "Salsa",
      "nl": "Salsa"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 35,
      "protein": 1,
      "carbs": 7,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "salsa"
      ],
      "jumbo": [
        "salsa"
      ],
      "lidl": [
        "salsa"
      ],
      "aldi": [
        "salsa"
      ],
      "openFoodFacts": [
        "salsa"
      ]
    }
  },
  {
    "id": "tomato_sauce",
    "name": {
      "en": "Tomato sauce",
      "nl": "Tomatensaus"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 40,
      "protein": 2,
      "carbs": 7,
      "fats": 0.5
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "tomatensaus",
        "tomato sauce"
      ],
      "jumbo": [
        "tomatensaus",
        "tomato sauce"
      ],
      "lidl": [
        "tomatensaus",
        "tomato sauce"
      ],
      "aldi": [
        "tomatensaus",
        "tomato sauce"
      ],
      "openFoodFacts": [
        "tomatensaus",
        "tomato sauce"
      ]
    }
  },
  {
    "id": "passata",
    "name": {
      "en": "Passata",
      "nl": "Passata"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 33,
      "protein": 1.5,
      "carbs": 5,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "passata"
      ],
      "jumbo": [
        "passata"
      ],
      "lidl": [
        "passata"
      ],
      "aldi": [
        "passata"
      ],
      "openFoodFacts": [
        "passata"
      ]
    }
  },
  {
    "id": "light_cream_cheese",
    "name": {
      "en": "Light cream cheese",
      "nl": "Light roomkaas"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 150,
      "protein": 8,
      "carbs": 5,
      "fats": 10
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "light roomkaas",
        "light cream cheese"
      ],
      "jumbo": [
        "light roomkaas",
        "light cream cheese"
      ],
      "lidl": [
        "light roomkaas",
        "light cream cheese"
      ],
      "aldi": [
        "light roomkaas",
        "light cream cheese"
      ],
      "openFoodFacts": [
        "light roomkaas",
        "light cream cheese"
      ]
    }
  },
  {
    "id": "mustard",
    "name": {
      "en": "Mustard",
      "nl": "Mosterd"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 66,
      "protein": 4,
      "carbs": 6,
      "fats": 4
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "mosterd",
        "mustard"
      ],
      "jumbo": [
        "mosterd",
        "mustard"
      ],
      "lidl": [
        "mosterd",
        "mustard"
      ],
      "aldi": [
        "mosterd",
        "mustard"
      ],
      "openFoodFacts": [
        "mosterd",
        "mustard"
      ]
    }
  },
  {
    "id": "ketchup_light",
    "name": {
      "en": "Light ketchup",
      "nl": "Light ketchup"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "light ketchup",
        "ketchup light"
      ],
      "jumbo": [
        "light ketchup",
        "ketchup light"
      ],
      "lidl": [
        "light ketchup",
        "ketchup light"
      ],
      "aldi": [
        "light ketchup",
        "ketchup light"
      ],
      "openFoodFacts": [
        "light ketchup",
        "ketchup light"
      ]
    }
  },
  {
    "id": "sriracha",
    "name": {
      "en": "Sriracha",
      "nl": "Sriracha"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 100,
      "protein": 2,
      "carbs": 20,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "sriracha"
      ],
      "jumbo": [
        "sriracha"
      ],
      "lidl": [
        "sriracha"
      ],
      "aldi": [
        "sriracha"
      ],
      "openFoodFacts": [
        "sriracha"
      ]
    }
  },
  {
    "id": "sweet_chili_sauce",
    "name": {
      "en": "Sweet chili sauce",
      "nl": "Sweet chilisaus"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 180,
      "protein": 1,
      "carbs": 43,
      "fats": 0.5
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "sweet chilisaus",
        "sweet chili sauce"
      ],
      "jumbo": [
        "sweet chilisaus",
        "sweet chili sauce"
      ],
      "lidl": [
        "sweet chilisaus",
        "sweet chili sauce"
      ],
      "aldi": [
        "sweet chilisaus",
        "sweet chili sauce"
      ],
      "openFoodFacts": [
        "sweet chilisaus",
        "sweet chili sauce"
      ]
    }
  },
  {
    "id": "teriyaki_sauce",
    "name": {
      "en": "Teriyaki sauce",
      "nl": "Teriyakisaus"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 100,
      "protein": 4,
      "carbs": 20,
      "fats": 0.5
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "teriyakisaus",
        "teriyaki sauce"
      ],
      "jumbo": [
        "teriyakisaus",
        "teriyaki sauce"
      ],
      "lidl": [
        "teriyakisaus",
        "teriyaki sauce"
      ],
      "aldi": [
        "teriyakisaus",
        "teriyaki sauce"
      ],
      "openFoodFacts": [
        "teriyakisaus",
        "teriyaki sauce"
      ]
    }
  },
  {
    "id": "hummus",
    "name": {
      "en": "Hummus",
      "nl": "Hummus"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 250,
      "protein": 8,
      "carbs": 14,
      "fats": 18
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "hummus"
      ],
      "jumbo": [
        "hummus"
      ],
      "lidl": [
        "hummus"
      ],
      "aldi": [
        "hummus"
      ],
      "openFoodFacts": [
        "hummus"
      ]
    }
  },
  {
    "id": "tzatziki",
    "name": {
      "en": "Tzatziki",
      "nl": "Tzatziki"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 120,
      "protein": 4,
      "carbs": 5,
      "fats": 9
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "tzatziki"
      ],
      "jumbo": [
        "tzatziki"
      ],
      "lidl": [
        "tzatziki"
      ],
      "aldi": [
        "tzatziki"
      ],
      "openFoodFacts": [
        "tzatziki"
      ]
    }
  },
  {
    "id": "pesto",
    "name": {
      "en": "Pesto",
      "nl": "Pesto"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 430,
      "protein": 5,
      "carbs": 6,
      "fats": 42
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "pesto"
      ],
      "jumbo": [
        "pesto"
      ],
      "lidl": [
        "pesto"
      ],
      "aldi": [
        "pesto"
      ],
      "openFoodFacts": [
        "pesto"
      ]
    }
  },
  {
    "id": "fajita_spices",
    "name": {
      "en": "Fajita spices",
      "nl": "Fajita kruiden"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 250,
      "protein": 8,
      "carbs": 40,
      "fats": 6
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "fajita kruiden",
        "fajita spices"
      ],
      "jumbo": [
        "fajita kruiden",
        "fajita spices"
      ],
      "lidl": [
        "fajita kruiden",
        "fajita spices"
      ],
      "aldi": [
        "fajita kruiden",
        "fajita spices"
      ],
      "openFoodFacts": [
        "fajita kruiden",
        "fajita spices"
      ]
    }
  },
  {
    "id": "taco_spices",
    "name": {
      "en": "Taco spices",
      "nl": "Taco kruiden"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 250,
      "protein": 8,
      "carbs": 40,
      "fats": 6
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "taco kruiden",
        "taco spices"
      ],
      "jumbo": [
        "taco kruiden",
        "taco spices"
      ],
      "lidl": [
        "taco kruiden",
        "taco spices"
      ],
      "aldi": [
        "taco kruiden",
        "taco spices"
      ],
      "openFoodFacts": [
        "taco kruiden",
        "taco spices"
      ]
    }
  },
  {
    "id": "curry_paste",
    "name": {
      "en": "Curry paste",
      "nl": "Currypasta"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 170,
      "protein": 3,
      "carbs": 18,
      "fats": 9
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "currypasta",
        "curry paste"
      ],
      "jumbo": [
        "currypasta",
        "curry paste"
      ],
      "lidl": [
        "currypasta",
        "curry paste"
      ],
      "aldi": [
        "currypasta",
        "curry paste"
      ],
      "openFoodFacts": [
        "currypasta",
        "curry paste"
      ]
    }
  },
  {
    "id": "dark_chocolate",
    "name": {
      "en": "Dark chocolate",
      "nl": "Pure chocolade"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 550,
      "protein": 8,
      "carbs": 45,
      "fats": 38
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "pure chocolade",
        "dark chocolate"
      ],
      "jumbo": [
        "pure chocolade",
        "dark chocolate"
      ],
      "lidl": [
        "pure chocolade",
        "dark chocolate"
      ],
      "aldi": [
        "pure chocolade",
        "dark chocolate"
      ],
      "openFoodFacts": [
        "pure chocolade",
        "dark chocolate"
      ]
    }
  },
  {
    "id": "honey",
    "name": {
      "en": "Honey",
      "nl": "Honing"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 304,
      "protein": 0,
      "carbs": 82,
      "fats": 0
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "honing",
        "honey"
      ],
      "jumbo": [
        "honing",
        "honey"
      ],
      "lidl": [
        "honing",
        "honey"
      ],
      "aldi": [
        "honing",
        "honey"
      ],
      "openFoodFacts": [
        "honing",
        "honey"
      ]
    }
  },
  {
    "id": "cinnamon",
    "name": {
      "en": "Cinnamon",
      "nl": "Kaneel"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 247,
      "protein": 4,
      "carbs": 81,
      "fats": 1
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "kaneel",
        "cinnamon"
      ],
      "jumbo": [
        "kaneel",
        "cinnamon"
      ],
      "lidl": [
        "kaneel",
        "cinnamon"
      ],
      "aldi": [
        "kaneel",
        "cinnamon"
      ],
      "openFoodFacts": [
        "kaneel",
        "cinnamon"
      ]
    }
  },
  {
    "id": "protein_bar",
    "name": {
      "en": "Protein bar",
      "nl": "Eiwitreep"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 360,
      "protein": 30,
      "carbs": 35,
      "fats": 12
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "eiwitreep",
        "protein bar"
      ],
      "jumbo": [
        "eiwitreep",
        "protein bar"
      ],
      "lidl": [
        "eiwitreep",
        "protein bar"
      ],
      "aldi": [
        "eiwitreep",
        "protein bar"
      ],
      "openFoodFacts": [
        "eiwitreep",
        "protein bar"
      ]
    }
  },
  {
    "id": "low_calorie_ice_cream",
    "name": {
      "en": "Low-calorie ice cream",
      "nl": "Laagcalorie ijs"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 140,
      "protein": 6,
      "carbs": 20,
      "fats": 4
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "laagcalorie ijs",
        "low-calorie ice cream",
        "low calorie ice cream"
      ],
      "jumbo": [
        "laagcalorie ijs",
        "low-calorie ice cream",
        "low calorie ice cream"
      ],
      "lidl": [
        "laagcalorie ijs",
        "low-calorie ice cream",
        "low calorie ice cream"
      ],
      "aldi": [
        "laagcalorie ijs",
        "low-calorie ice cream",
        "low calorie ice cream"
      ],
      "openFoodFacts": [
        "laagcalorie ijs",
        "low-calorie ice cream",
        "low calorie ice cream"
      ]
    }
  },
  {
    "id": "popcorn_plain",
    "name": {
      "en": "Plain popcorn",
      "nl": "Naturel popcorn"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 380,
      "protein": 12,
      "carbs": 78,
      "fats": 4
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "naturel popcorn",
        "plain popcorn",
        "popcorn plain"
      ],
      "jumbo": [
        "naturel popcorn",
        "plain popcorn",
        "popcorn plain"
      ],
      "lidl": [
        "naturel popcorn",
        "plain popcorn",
        "popcorn plain"
      ],
      "aldi": [
        "naturel popcorn",
        "plain popcorn",
        "popcorn plain"
      ],
      "openFoodFacts": [
        "naturel popcorn",
        "plain popcorn",
        "popcorn plain"
      ]
    }
  },
  {
    "id": "crackers_wholegrain",
    "name": {
      "en": "Wholegrain crackers",
      "nl": "Volkoren crackers"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 360,
      "protein": 10,
      "carbs": 65,
      "fats": 8
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "volkoren crackers",
        "wholegrain crackers",
        "crackers wholegrain"
      ],
      "jumbo": [
        "volkoren crackers",
        "wholegrain crackers",
        "crackers wholegrain"
      ],
      "lidl": [
        "volkoren crackers",
        "wholegrain crackers",
        "crackers wholegrain"
      ],
      "aldi": [
        "volkoren crackers",
        "wholegrain crackers",
        "crackers wholegrain"
      ],
      "openFoodFacts": [
        "volkoren crackers",
        "wholegrain crackers",
        "crackers wholegrain"
      ]
    }
  },
  {
    "id": "cocoa_powder",
    "name": {
      "en": "Cocoa powder",
      "nl": "Cacaopoeder"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 230,
      "protein": 20,
      "carbs": 14,
      "fats": 14
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "cacaopoeder",
        "cocoa powder"
      ],
      "jumbo": [
        "cacaopoeder",
        "cocoa powder"
      ],
      "lidl": [
        "cacaopoeder",
        "cocoa powder"
      ],
      "aldi": [
        "cacaopoeder",
        "cocoa powder"
      ],
      "openFoodFacts": [
        "cacaopoeder",
        "cocoa powder"
      ]
    }
  },
  {
    "id": "jam_light",
    "name": {
      "en": "Light jam",
      "nl": "Light jam"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 80,
      "protein": 0,
      "carbs": 20,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "light jam",
        "jam light"
      ],
      "jumbo": [
        "light jam",
        "jam light"
      ],
      "lidl": [
        "light jam",
        "jam light"
      ],
      "aldi": [
        "light jam",
        "jam light"
      ],
      "openFoodFacts": [
        "light jam",
        "jam light"
      ]
    }
  },
  {
    "id": "maple_syrup",
    "name": {
      "en": "Maple syrup",
      "nl": "Ahornsiroop"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 260,
      "protein": 0,
      "carbs": 67,
      "fats": 0
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "ahornsiroop",
        "maple syrup"
      ],
      "jumbo": [
        "ahornsiroop",
        "maple syrup"
      ],
      "lidl": [
        "ahornsiroop",
        "maple syrup"
      ],
      "aldi": [
        "ahornsiroop",
        "maple syrup"
      ],
      "openFoodFacts": [
        "ahornsiroop",
        "maple syrup"
      ]
    }
  },
  {
    "id": "chicken_drumstick",
    "name": {
      "en": "Chicken drumstick",
      "nl": "Kippenpoot"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 175,
      "protein": 18,
      "carbs": 0,
      "fats": 11
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "kippenpoot",
        "chicken drumstick"
      ],
      "jumbo": [
        "kippenpoot",
        "chicken drumstick"
      ],
      "lidl": [
        "kippenpoot",
        "chicken drumstick"
      ],
      "aldi": [
        "kippenpoot",
        "chicken drumstick"
      ],
      "openFoodFacts": [
        "kippenpoot",
        "chicken drumstick"
      ]
    }
  },
  {
    "id": "chicken_wings",
    "name": {
      "en": "Chicken wings",
      "nl": "Kippenvleugels"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 220,
      "protein": 19,
      "carbs": 0,
      "fats": 16
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "kippenvleugels",
        "chicken wings"
      ],
      "jumbo": [
        "kippenvleugels",
        "chicken wings"
      ],
      "lidl": [
        "kippenvleugels",
        "chicken wings"
      ],
      "aldi": [
        "kippenvleugels",
        "chicken wings"
      ],
      "openFoodFacts": [
        "kippenvleugels",
        "chicken wings"
      ]
    }
  },
  {
    "id": "beef_tartare",
    "name": {
      "en": "Beef tartare",
      "nl": "Biefstuk tartaar"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 125,
      "protein": 22,
      "carbs": 0,
      "fats": 4
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "biefstuk tartaar",
        "beef tartare"
      ],
      "jumbo": [
        "biefstuk tartaar",
        "beef tartare"
      ],
      "lidl": [
        "biefstuk tartaar",
        "beef tartare"
      ],
      "aldi": [
        "biefstuk tartaar",
        "beef tartare"
      ],
      "openFoodFacts": [
        "biefstuk tartaar",
        "beef tartare"
      ]
    }
  },
  {
    "id": "beef_burger_lean",
    "name": {
      "en": "Lean beef burger",
      "nl": "Magere runderburger"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 170,
      "protein": 21,
      "carbs": 2,
      "fats": 9
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "magere runderburger",
        "lean beef burger",
        "beef burger lean"
      ],
      "jumbo": [
        "magere runderburger",
        "lean beef burger",
        "beef burger lean"
      ],
      "lidl": [
        "magere runderburger",
        "lean beef burger",
        "beef burger lean"
      ],
      "aldi": [
        "magere runderburger",
        "lean beef burger",
        "beef burger lean"
      ],
      "openFoodFacts": [
        "magere runderburger",
        "lean beef burger",
        "beef burger lean"
      ]
    }
  },
  {
    "id": "haddock",
    "name": {
      "en": "Haddock",
      "nl": "Schelvis"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 90,
      "protein": 19,
      "carbs": 0,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "schelvis",
        "haddock"
      ],
      "jumbo": [
        "schelvis",
        "haddock"
      ],
      "lidl": [
        "schelvis",
        "haddock"
      ],
      "aldi": [
        "schelvis",
        "haddock"
      ],
      "openFoodFacts": [
        "schelvis",
        "haddock"
      ]
    }
  },
  {
    "id": "pollock",
    "name": {
      "en": "Pollock",
      "nl": "Koolvis"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 90,
      "protein": 19,
      "carbs": 0,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "koolvis",
        "pollock"
      ],
      "jumbo": [
        "koolvis",
        "pollock"
      ],
      "lidl": [
        "koolvis",
        "pollock"
      ],
      "aldi": [
        "koolvis",
        "pollock"
      ],
      "openFoodFacts": [
        "koolvis",
        "pollock"
      ]
    }
  },
  {
    "id": "sea_bass",
    "name": {
      "en": "Sea bass",
      "nl": "Zeebaars"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 125,
      "protein": 20,
      "carbs": 0,
      "fats": 4
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "zeebaars",
        "sea bass"
      ],
      "jumbo": [
        "zeebaars",
        "sea bass"
      ],
      "lidl": [
        "zeebaars",
        "sea bass"
      ],
      "aldi": [
        "zeebaars",
        "sea bass"
      ],
      "openFoodFacts": [
        "zeebaars",
        "sea bass"
      ]
    }
  },
  {
    "id": "herring",
    "name": {
      "en": "Herring",
      "nl": "Haring"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 210,
      "protein": 18,
      "carbs": 0,
      "fats": 15
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "haring",
        "herring"
      ],
      "jumbo": [
        "haring",
        "herring"
      ],
      "lidl": [
        "haring",
        "herring"
      ],
      "aldi": [
        "haring",
        "herring"
      ],
      "openFoodFacts": [
        "haring",
        "herring"
      ]
    }
  },
  {
    "id": "trout",
    "name": {
      "en": "Trout",
      "nl": "Forel"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 168,
      "protein": 21,
      "carbs": 0,
      "fats": 9
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "forel",
        "trout"
      ],
      "jumbo": [
        "forel",
        "trout"
      ],
      "lidl": [
        "forel",
        "trout"
      ],
      "aldi": [
        "forel",
        "trout"
      ],
      "openFoodFacts": [
        "forel",
        "trout"
      ]
    }
  },
  {
    "id": "scallops",
    "name": {
      "en": "Scallops",
      "nl": "Sint-jakobsschelpen"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 90,
      "protein": 17,
      "carbs": 3,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "sint-jakobsschelpen",
        "scallops"
      ],
      "jumbo": [
        "sint-jakobsschelpen",
        "scallops"
      ],
      "lidl": [
        "sint-jakobsschelpen",
        "scallops"
      ],
      "aldi": [
        "sint-jakobsschelpen",
        "scallops"
      ],
      "openFoodFacts": [
        "sint-jakobsschelpen",
        "scallops"
      ]
    }
  },
  {
    "id": "crab",
    "name": {
      "en": "Crab",
      "nl": "Krab"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 97,
      "protein": 19,
      "carbs": 0,
      "fats": 2
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "krab",
        "crab"
      ],
      "jumbo": [
        "krab",
        "crab"
      ],
      "lidl": [
        "krab",
        "crab"
      ],
      "aldi": [
        "krab",
        "crab"
      ],
      "openFoodFacts": [
        "krab",
        "crab"
      ]
    }
  },
  {
    "id": "squid",
    "name": {
      "en": "Squid",
      "nl": "Inktvis"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 92,
      "protein": 16,
      "carbs": 3,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "inktvis",
        "squid"
      ],
      "jumbo": [
        "inktvis",
        "squid"
      ],
      "lidl": [
        "inktvis",
        "squid"
      ],
      "aldi": [
        "inktvis",
        "squid"
      ],
      "openFoodFacts": [
        "inktvis",
        "squid"
      ]
    }
  },
  {
    "id": "split_peas",
    "name": {
      "en": "Split peas",
      "nl": "Spliterwten"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 118,
      "protein": 8,
      "carbs": 21,
      "fats": 0.4
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "spliterwten",
        "split peas"
      ],
      "jumbo": [
        "spliterwten",
        "split peas"
      ],
      "lidl": [
        "spliterwten",
        "split peas"
      ],
      "aldi": [
        "spliterwten",
        "split peas"
      ],
      "openFoodFacts": [
        "spliterwten",
        "split peas"
      ]
    }
  },
  {
    "id": "white_beans",
    "name": {
      "en": "White beans",
      "nl": "Witte bonen"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 139,
      "protein": 9,
      "carbs": 25,
      "fats": 0.5
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "witte bonen",
        "white beans"
      ],
      "jumbo": [
        "witte bonen",
        "white beans"
      ],
      "lidl": [
        "witte bonen",
        "white beans"
      ],
      "aldi": [
        "witte bonen",
        "white beans"
      ],
      "openFoodFacts": [
        "witte bonen",
        "white beans"
      ]
    }
  },
  {
    "id": "vegan_burger",
    "name": {
      "en": "Vegan burger",
      "nl": "Vegan burger"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 210,
      "protein": 16,
      "carbs": 10,
      "fats": 12
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "vegan burger"
      ],
      "jumbo": [
        "vegan burger"
      ],
      "lidl": [
        "vegan burger"
      ],
      "aldi": [
        "vegan burger"
      ],
      "openFoodFacts": [
        "vegan burger"
      ]
    }
  },
  {
    "id": "collagen_protein",
    "name": {
      "en": "Collagen protein",
      "nl": "Collageen eiwit"
    },
    "category": "protein",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 360,
      "protein": 90,
      "carbs": 0,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "meal_prep"
    ],
    "supermarketKeywords": {
      "ah": [
        "collageen eiwit",
        "collagen protein"
      ],
      "jumbo": [
        "collageen eiwit",
        "collagen protein"
      ],
      "lidl": [
        "collageen eiwit",
        "collagen protein"
      ],
      "aldi": [
        "collageen eiwit",
        "collagen protein"
      ],
      "openFoodFacts": [
        "collageen eiwit",
        "collagen protein"
      ]
    }
  },
  {
    "id": "ricotta",
    "name": {
      "en": "Ricotta",
      "nl": "Ricotta"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 170,
      "protein": 11,
      "carbs": 3,
      "fats": 13
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "ricotta"
      ],
      "jumbo": [
        "ricotta"
      ],
      "lidl": [
        "ricotta"
      ],
      "aldi": [
        "ricotta"
      ],
      "openFoodFacts": [
        "ricotta"
      ]
    }
  },
  {
    "id": "mozzarella",
    "name": {
      "en": "Mozzarella",
      "nl": "Mozzarella"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 280,
      "protein": 18,
      "carbs": 2,
      "fats": 22
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "mozzarella"
      ],
      "jumbo": [
        "mozzarella"
      ],
      "lidl": [
        "mozzarella"
      ],
      "aldi": [
        "mozzarella"
      ],
      "openFoodFacts": [
        "mozzarella"
      ]
    }
  },
  {
    "id": "goat_cheese",
    "name": {
      "en": "Goat cheese",
      "nl": "Geitenkaas"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 300,
      "protein": 18,
      "carbs": 2,
      "fats": 24
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "geitenkaas",
        "goat cheese"
      ],
      "jumbo": [
        "geitenkaas",
        "goat cheese"
      ],
      "lidl": [
        "geitenkaas",
        "goat cheese"
      ],
      "aldi": [
        "geitenkaas",
        "goat cheese"
      ],
      "openFoodFacts": [
        "geitenkaas",
        "goat cheese"
      ]
    }
  },
  {
    "id": "cheddar",
    "name": {
      "en": "Cheddar",
      "nl": "Cheddar"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 400,
      "protein": 25,
      "carbs": 1,
      "fats": 33
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "cheddar"
      ],
      "jumbo": [
        "cheddar"
      ],
      "lidl": [
        "cheddar"
      ],
      "aldi": [
        "cheddar"
      ],
      "openFoodFacts": [
        "cheddar"
      ]
    }
  },
  {
    "id": "gouda_30",
    "name": {
      "en": "Gouda 30+ cheese",
      "nl": "Goudse kaas 30+"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 280,
      "protein": 30,
      "carbs": 0,
      "fats": 18
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "goudse kaas 30+",
        "gouda 30+ cheese",
        "gouda 30"
      ],
      "jumbo": [
        "goudse kaas 30+",
        "gouda 30+ cheese",
        "gouda 30"
      ],
      "lidl": [
        "goudse kaas 30+",
        "gouda 30+ cheese",
        "gouda 30"
      ],
      "aldi": [
        "goudse kaas 30+",
        "gouda 30+ cheese",
        "gouda 30"
      ],
      "openFoodFacts": [
        "goudse kaas 30+",
        "gouda 30+ cheese",
        "gouda 30"
      ]
    }
  },
  {
    "id": "whole_milk",
    "name": {
      "en": "Whole milk",
      "nl": "Volle melk"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 64,
      "protein": 3.4,
      "carbs": 5,
      "fats": 3.5
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "volle melk",
        "whole milk"
      ],
      "jumbo": [
        "volle melk",
        "whole milk"
      ],
      "lidl": [
        "volle melk",
        "whole milk"
      ],
      "aldi": [
        "volle melk",
        "whole milk"
      ],
      "openFoodFacts": [
        "volle melk",
        "whole milk"
      ]
    }
  },
  {
    "id": "kefir",
    "name": {
      "en": "Kefir",
      "nl": "Kefir"
    },
    "category": "dairy",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 55,
      "protein": 3.5,
      "carbs": 4,
      "fats": 2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "kefir"
      ],
      "jumbo": [
        "kefir"
      ],
      "lidl": [
        "kefir"
      ],
      "aldi": [
        "kefir"
      ],
      "openFoodFacts": [
        "kefir"
      ]
    }
  },
  {
    "id": "instant_oats",
    "name": {
      "en": "Instant oats",
      "nl": "Instant havermout"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 370,
      "protein": 13,
      "carbs": 60,
      "fats": 7
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "instant havermout",
        "instant oats"
      ],
      "jumbo": [
        "instant havermout",
        "instant oats"
      ],
      "lidl": [
        "instant havermout",
        "instant oats"
      ],
      "aldi": [
        "instant havermout",
        "instant oats"
      ],
      "openFoodFacts": [
        "instant havermout",
        "instant oats"
      ]
    }
  },
  {
    "id": "sushi_rice_cooked",
    "name": {
      "en": "Cooked sushi rice",
      "nl": "Gekookte sushirijst"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 140,
      "protein": 3,
      "carbs": 30,
      "fats": 0.3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte sushirijst",
        "cooked sushi rice",
        "sushi rice cooked"
      ],
      "jumbo": [
        "gekookte sushirijst",
        "cooked sushi rice",
        "sushi rice cooked"
      ],
      "lidl": [
        "gekookte sushirijst",
        "cooked sushi rice",
        "sushi rice cooked"
      ],
      "aldi": [
        "gekookte sushirijst",
        "cooked sushi rice",
        "sushi rice cooked"
      ],
      "openFoodFacts": [
        "gekookte sushirijst",
        "cooked sushi rice",
        "sushi rice cooked"
      ]
    }
  },
  {
    "id": "wild_rice_cooked",
    "name": {
      "en": "Cooked wild rice",
      "nl": "Gekookte wilde rijst"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 101,
      "protein": 4,
      "carbs": 21,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte wilde rijst",
        "cooked wild rice",
        "wild rice cooked"
      ],
      "jumbo": [
        "gekookte wilde rijst",
        "cooked wild rice",
        "wild rice cooked"
      ],
      "lidl": [
        "gekookte wilde rijst",
        "cooked wild rice",
        "wild rice cooked"
      ],
      "aldi": [
        "gekookte wilde rijst",
        "cooked wild rice",
        "wild rice cooked"
      ],
      "openFoodFacts": [
        "gekookte wilde rijst",
        "cooked wild rice",
        "wild rice cooked"
      ]
    }
  },
  {
    "id": "barley_cooked",
    "name": {
      "en": "Cooked barley",
      "nl": "Gekookte gerst"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 123,
      "protein": 2,
      "carbs": 28,
      "fats": 0.4
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte gerst",
        "cooked barley",
        "barley cooked"
      ],
      "jumbo": [
        "gekookte gerst",
        "cooked barley",
        "barley cooked"
      ],
      "lidl": [
        "gekookte gerst",
        "cooked barley",
        "barley cooked"
      ],
      "aldi": [
        "gekookte gerst",
        "cooked barley",
        "barley cooked"
      ],
      "openFoodFacts": [
        "gekookte gerst",
        "cooked barley",
        "barley cooked"
      ]
    }
  },
  {
    "id": "buckwheat_cooked",
    "name": {
      "en": "Cooked buckwheat",
      "nl": "Gekookte boekweit"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 92,
      "protein": 3,
      "carbs": 20,
      "fats": 0.6
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte boekweit",
        "cooked buckwheat",
        "buckwheat cooked"
      ],
      "jumbo": [
        "gekookte boekweit",
        "cooked buckwheat",
        "buckwheat cooked"
      ],
      "lidl": [
        "gekookte boekweit",
        "cooked buckwheat",
        "buckwheat cooked"
      ],
      "aldi": [
        "gekookte boekweit",
        "cooked buckwheat",
        "buckwheat cooked"
      ],
      "openFoodFacts": [
        "gekookte boekweit",
        "cooked buckwheat",
        "buckwheat cooked"
      ]
    }
  },
  {
    "id": "baby_potatoes",
    "name": {
      "en": "Baby potatoes",
      "nl": "Krieltjes"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 77,
      "protein": 2,
      "carbs": 17,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "krieltjes",
        "baby potatoes"
      ],
      "jumbo": [
        "krieltjes",
        "baby potatoes"
      ],
      "lidl": [
        "krieltjes",
        "baby potatoes"
      ],
      "aldi": [
        "krieltjes",
        "baby potatoes"
      ],
      "openFoodFacts": [
        "krieltjes",
        "baby potatoes"
      ]
    }
  },
  {
    "id": "yam",
    "name": {
      "en": "Yam",
      "nl": "Yam"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 118,
      "protein": 1.5,
      "carbs": 28,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "yam"
      ],
      "jumbo": [
        "yam"
      ],
      "lidl": [
        "yam"
      ],
      "aldi": [
        "yam"
      ],
      "openFoodFacts": [
        "yam"
      ]
    }
  },
  {
    "id": "chickpea_pasta_cooked",
    "name": {
      "en": "Cooked chickpea pasta",
      "nl": "Gekookte kikkererwtenpasta"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 160,
      "protein": 9,
      "carbs": 27,
      "fats": 3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte kikkererwtenpasta",
        "cooked chickpea pasta",
        "chickpea pasta cooked"
      ],
      "jumbo": [
        "gekookte kikkererwtenpasta",
        "cooked chickpea pasta",
        "chickpea pasta cooked"
      ],
      "lidl": [
        "gekookte kikkererwtenpasta",
        "cooked chickpea pasta",
        "chickpea pasta cooked"
      ],
      "aldi": [
        "gekookte kikkererwtenpasta",
        "cooked chickpea pasta",
        "chickpea pasta cooked"
      ],
      "openFoodFacts": [
        "gekookte kikkererwtenpasta",
        "cooked chickpea pasta",
        "chickpea pasta cooked"
      ]
    }
  },
  {
    "id": "lentil_pasta_cooked",
    "name": {
      "en": "Cooked lentil pasta",
      "nl": "Gekookte linzenpasta"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 160,
      "protein": 12,
      "carbs": 25,
      "fats": 2
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte linzenpasta",
        "cooked lentil pasta",
        "lentil pasta cooked"
      ],
      "jumbo": [
        "gekookte linzenpasta",
        "cooked lentil pasta",
        "lentil pasta cooked"
      ],
      "lidl": [
        "gekookte linzenpasta",
        "cooked lentil pasta",
        "lentil pasta cooked"
      ],
      "aldi": [
        "gekookte linzenpasta",
        "cooked lentil pasta",
        "lentil pasta cooked"
      ],
      "openFoodFacts": [
        "gekookte linzenpasta",
        "cooked lentil pasta",
        "lentil pasta cooked"
      ]
    }
  },
  {
    "id": "rice_noodles_cooked",
    "name": {
      "en": "Cooked rice noodles",
      "nl": "Gekookte rijstnoedels"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 110,
      "protein": 2,
      "carbs": 25,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte rijstnoedels",
        "cooked rice noodles",
        "rice noodles cooked"
      ],
      "jumbo": [
        "gekookte rijstnoedels",
        "cooked rice noodles",
        "rice noodles cooked"
      ],
      "lidl": [
        "gekookte rijstnoedels",
        "cooked rice noodles",
        "rice noodles cooked"
      ],
      "aldi": [
        "gekookte rijstnoedels",
        "cooked rice noodles",
        "rice noodles cooked"
      ],
      "openFoodFacts": [
        "gekookte rijstnoedels",
        "cooked rice noodles",
        "rice noodles cooked"
      ]
    }
  },
  {
    "id": "egg_noodles_cooked",
    "name": {
      "en": "Cooked egg noodles",
      "nl": "Gekookte eiernoedels"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 138,
      "protein": 5,
      "carbs": 25,
      "fats": 2
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gekookte eiernoedels",
        "cooked egg noodles",
        "egg noodles cooked"
      ],
      "jumbo": [
        "gekookte eiernoedels",
        "cooked egg noodles",
        "egg noodles cooked"
      ],
      "lidl": [
        "gekookte eiernoedels",
        "cooked egg noodles",
        "egg noodles cooked"
      ],
      "aldi": [
        "gekookte eiernoedels",
        "cooked egg noodles",
        "egg noodles cooked"
      ],
      "openFoodFacts": [
        "gekookte eiernoedels",
        "cooked egg noodles",
        "egg noodles cooked"
      ]
    }
  },
  {
    "id": "rye_bread",
    "name": {
      "en": "Rye bread",
      "nl": "Roggebrood"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 220,
      "protein": 8,
      "carbs": 42,
      "fats": 2
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "roggebrood",
        "rye bread"
      ],
      "jumbo": [
        "roggebrood",
        "rye bread"
      ],
      "lidl": [
        "roggebrood",
        "rye bread"
      ],
      "aldi": [
        "roggebrood",
        "rye bread"
      ],
      "openFoodFacts": [
        "roggebrood",
        "rye bread"
      ]
    }
  },
  {
    "id": "white_bread",
    "name": {
      "en": "White bread",
      "nl": "Wit brood"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 265,
      "protein": 8,
      "carbs": 50,
      "fats": 3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "wit brood",
        "white bread"
      ],
      "jumbo": [
        "wit brood",
        "white bread"
      ],
      "lidl": [
        "wit brood",
        "white bread"
      ],
      "aldi": [
        "wit brood",
        "white bread"
      ],
      "openFoodFacts": [
        "wit brood",
        "white bread"
      ]
    }
  },
  {
    "id": "spelt_bread",
    "name": {
      "en": "Spelt bread",
      "nl": "Speltbrood"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 245,
      "protein": 10,
      "carbs": 42,
      "fats": 4
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "speltbrood",
        "spelt bread"
      ],
      "jumbo": [
        "speltbrood",
        "spelt bread"
      ],
      "lidl": [
        "speltbrood",
        "spelt bread"
      ],
      "aldi": [
        "speltbrood",
        "spelt bread"
      ],
      "openFoodFacts": [
        "speltbrood",
        "spelt bread"
      ]
    }
  },
  {
    "id": "corn_tortilla",
    "name": {
      "en": "Corn tortilla",
      "nl": "Maistortilla"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 218,
      "protein": 6,
      "carbs": 45,
      "fats": 3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "maistortilla",
        "corn tortilla"
      ],
      "jumbo": [
        "maistortilla",
        "corn tortilla"
      ],
      "lidl": [
        "maistortilla",
        "corn tortilla"
      ],
      "aldi": [
        "maistortilla",
        "corn tortilla"
      ],
      "openFoodFacts": [
        "maistortilla",
        "corn tortilla"
      ]
    }
  },
  {
    "id": "pita_bread",
    "name": {
      "en": "Pita bread",
      "nl": "Pitabrødje"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 275,
      "protein": 9,
      "carbs": 55,
      "fats": 2
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "pitabrødje",
        "pita bread"
      ],
      "jumbo": [
        "pitabrødje",
        "pita bread"
      ],
      "lidl": [
        "pitabrødje",
        "pita bread"
      ],
      "aldi": [
        "pitabrødje",
        "pita bread"
      ],
      "openFoodFacts": [
        "pitabrødje",
        "pita bread"
      ]
    }
  },
  {
    "id": "crispbread",
    "name": {
      "en": "Crispbread",
      "nl": "Knäckebröd"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 350,
      "protein": 10,
      "carbs": 70,
      "fats": 3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "knäckebröd",
        "crispbread"
      ],
      "jumbo": [
        "knäckebröd",
        "crispbread"
      ],
      "lidl": [
        "knäckebröd",
        "crispbread"
      ],
      "aldi": [
        "knäckebröd",
        "crispbread"
      ],
      "openFoodFacts": [
        "knäckebröd",
        "crispbread"
      ]
    }
  },
  {
    "id": "low_calorie_wrap",
    "name": {
      "en": "Low-calorie wrap",
      "nl": "Low calorie wrap"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 220,
      "protein": 8,
      "carbs": 38,
      "fats": 5
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "low calorie wrap",
        "low-calorie wrap"
      ],
      "jumbo": [
        "low calorie wrap",
        "low-calorie wrap"
      ],
      "lidl": [
        "low calorie wrap",
        "low-calorie wrap"
      ],
      "aldi": [
        "low calorie wrap",
        "low-calorie wrap"
      ],
      "openFoodFacts": [
        "low calorie wrap",
        "low-calorie wrap"
      ]
    }
  },
  {
    "id": "cornflakes",
    "name": {
      "en": "Cornflakes",
      "nl": "Cornflakes"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 370,
      "protein": 7,
      "carbs": 84,
      "fats": 1
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "cornflakes"
      ],
      "jumbo": [
        "cornflakes"
      ],
      "lidl": [
        "cornflakes"
      ],
      "aldi": [
        "cornflakes"
      ],
      "openFoodFacts": [
        "cornflakes"
      ]
    }
  },
  {
    "id": "bran_flakes",
    "name": {
      "en": "Bran flakes",
      "nl": "Bran flakes"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 320,
      "protein": 10,
      "carbs": 65,
      "fats": 3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "bran flakes"
      ],
      "jumbo": [
        "bran flakes"
      ],
      "lidl": [
        "bran flakes"
      ],
      "aldi": [
        "bran flakes"
      ],
      "openFoodFacts": [
        "bran flakes"
      ]
    }
  },
  {
    "id": "almond_flour",
    "name": {
      "en": "Almond flour",
      "nl": "Amandelmeel"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 580,
      "protein": 21,
      "carbs": 20,
      "fats": 50
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "amandelmeel",
        "almond flour"
      ],
      "jumbo": [
        "amandelmeel",
        "almond flour"
      ],
      "lidl": [
        "amandelmeel",
        "almond flour"
      ],
      "aldi": [
        "amandelmeel",
        "almond flour"
      ],
      "openFoodFacts": [
        "amandelmeel",
        "almond flour"
      ]
    }
  },
  {
    "id": "couscous_pearl",
    "name": {
      "en": "Pearl couscous",
      "nl": "Parelcouscous"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 130,
      "protein": 5,
      "carbs": 25,
      "fats": 1
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "parelcouscous",
        "pearl couscous",
        "couscous pearl"
      ],
      "jumbo": [
        "parelcouscous",
        "pearl couscous",
        "couscous pearl"
      ],
      "lidl": [
        "parelcouscous",
        "pearl couscous",
        "couscous pearl"
      ],
      "aldi": [
        "parelcouscous",
        "pearl couscous",
        "couscous pearl"
      ],
      "openFoodFacts": [
        "parelcouscous",
        "pearl couscous",
        "couscous pearl"
      ]
    }
  },
  {
    "id": "gnocchi",
    "name": {
      "en": "Gnocchi",
      "nl": "Gnocchi"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 160,
      "protein": 4,
      "carbs": 34,
      "fats": 1
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gnocchi"
      ],
      "jumbo": [
        "gnocchi"
      ],
      "lidl": [
        "gnocchi"
      ],
      "aldi": [
        "gnocchi"
      ],
      "openFoodFacts": [
        "gnocchi"
      ]
    }
  },
  {
    "id": "polenta",
    "name": {
      "en": "Polenta",
      "nl": "Polenta"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 70,
      "protein": 2,
      "carbs": 15,
      "fats": 0.5
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "polenta"
      ],
      "jumbo": [
        "polenta"
      ],
      "lidl": [
        "polenta"
      ],
      "aldi": [
        "polenta"
      ],
      "openFoodFacts": [
        "polenta"
      ]
    }
  },
  {
    "id": "rice_paper",
    "name": {
      "en": "Rice paper",
      "nl": "Rijstvellen"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 330,
      "protein": 5,
      "carbs": 80,
      "fats": 0.5
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "rijstvellen",
        "rice paper"
      ],
      "jumbo": [
        "rijstvellen",
        "rice paper"
      ],
      "lidl": [
        "rijstvellen",
        "rice paper"
      ],
      "aldi": [
        "rijstvellen",
        "rice paper"
      ],
      "openFoodFacts": [
        "rijstvellen",
        "rice paper"
      ]
    }
  },
  {
    "id": "breadcrumbs",
    "name": {
      "en": "Breadcrumbs",
      "nl": "Paneermeel"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 395,
      "protein": 13,
      "carbs": 72,
      "fats": 5
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "paneermeel",
        "breadcrumbs"
      ],
      "jumbo": [
        "paneermeel",
        "breadcrumbs"
      ],
      "lidl": [
        "paneermeel",
        "breadcrumbs"
      ],
      "aldi": [
        "paneermeel",
        "breadcrumbs"
      ],
      "openFoodFacts": [
        "paneermeel",
        "breadcrumbs"
      ]
    }
  },
  {
    "id": "protein_cereal",
    "name": {
      "en": "Protein cereal",
      "nl": "Eiwit ontbijtgranen"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 370,
      "protein": 25,
      "carbs": 50,
      "fats": 6
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "eiwit ontbijtgranen",
        "protein cereal"
      ],
      "jumbo": [
        "eiwit ontbijtgranen",
        "protein cereal"
      ],
      "lidl": [
        "eiwit ontbijtgranen",
        "protein cereal"
      ],
      "aldi": [
        "eiwit ontbijtgranen",
        "protein cereal"
      ],
      "openFoodFacts": [
        "eiwit ontbijtgranen",
        "protein cereal"
      ]
    }
  },
  {
    "id": "protein_wrap",
    "name": {
      "en": "Protein wrap",
      "nl": "Eiwit wrap"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 280,
      "protein": 20,
      "carbs": 35,
      "fats": 8
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "eiwit wrap",
        "protein wrap"
      ],
      "jumbo": [
        "eiwit wrap",
        "protein wrap"
      ],
      "lidl": [
        "eiwit wrap",
        "protein wrap"
      ],
      "aldi": [
        "eiwit wrap",
        "protein wrap"
      ],
      "openFoodFacts": [
        "eiwit wrap",
        "protein wrap"
      ]
    }
  },
  {
    "id": "low_carb_wrap",
    "name": {
      "en": "Low-carb wrap",
      "nl": "Low-carb wrap"
    },
    "category": "carbs",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 200,
      "protein": 12,
      "carbs": 25,
      "fats": 8
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "low-carb wrap",
        "low carb wrap"
      ],
      "jumbo": [
        "low-carb wrap",
        "low carb wrap"
      ],
      "lidl": [
        "low-carb wrap",
        "low carb wrap"
      ],
      "aldi": [
        "low-carb wrap",
        "low carb wrap"
      ],
      "openFoodFacts": [
        "low-carb wrap",
        "low carb wrap"
      ]
    }
  },
  {
    "id": "extra_virgin_olive_oil",
    "name": {
      "en": "Extra virgin olive oil",
      "nl": "Extra vierge olijfolie"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 884,
      "protein": 0,
      "carbs": 0,
      "fats": 100
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "extra vierge olijfolie",
        "extra virgin olive oil"
      ],
      "jumbo": [
        "extra vierge olijfolie",
        "extra virgin olive oil"
      ],
      "lidl": [
        "extra vierge olijfolie",
        "extra virgin olive oil"
      ],
      "aldi": [
        "extra vierge olijfolie",
        "extra virgin olive oil"
      ],
      "openFoodFacts": [
        "extra vierge olijfolie",
        "extra virgin olive oil"
      ]
    }
  },
  {
    "id": "rapeseed_oil",
    "name": {
      "en": "Rapeseed oil",
      "nl": "Raapzaadolie"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 884,
      "protein": 0,
      "carbs": 0,
      "fats": 100
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "raapzaadolie",
        "rapeseed oil"
      ],
      "jumbo": [
        "raapzaadolie",
        "rapeseed oil"
      ],
      "lidl": [
        "raapzaadolie",
        "rapeseed oil"
      ],
      "aldi": [
        "raapzaadolie",
        "rapeseed oil"
      ],
      "openFoodFacts": [
        "raapzaadolie",
        "rapeseed oil"
      ]
    }
  },
  {
    "id": "sunflower_oil",
    "name": {
      "en": "Sunflower oil",
      "nl": "Zonnebloemolie"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 884,
      "protein": 0,
      "carbs": 0,
      "fats": 100
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "zonnebloemolie",
        "sunflower oil"
      ],
      "jumbo": [
        "zonnebloemolie",
        "sunflower oil"
      ],
      "lidl": [
        "zonnebloemolie",
        "sunflower oil"
      ],
      "aldi": [
        "zonnebloemolie",
        "sunflower oil"
      ],
      "openFoodFacts": [
        "zonnebloemolie",
        "sunflower oil"
      ]
    }
  },
  {
    "id": "guacamole",
    "name": {
      "en": "Guacamole",
      "nl": "Guacamole"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 160,
      "protein": 2,
      "carbs": 8,
      "fats": 13
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "guacamole"
      ],
      "jumbo": [
        "guacamole"
      ],
      "lidl": [
        "guacamole"
      ],
      "aldi": [
        "guacamole"
      ],
      "openFoodFacts": [
        "guacamole"
      ]
    }
  },
  {
    "id": "cashew_butter",
    "name": {
      "en": "Cashew butter",
      "nl": "Cashewpasta"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 590,
      "protein": 18,
      "carbs": 30,
      "fats": 46
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "cashewpasta",
        "cashew butter"
      ],
      "jumbo": [
        "cashewpasta",
        "cashew butter"
      ],
      "lidl": [
        "cashewpasta",
        "cashew butter"
      ],
      "aldi": [
        "cashewpasta",
        "cashew butter"
      ],
      "openFoodFacts": [
        "cashewpasta",
        "cashew butter"
      ]
    }
  },
  {
    "id": "pecans",
    "name": {
      "en": "Pecans",
      "nl": "Pecannoten"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 691,
      "protein": 9,
      "carbs": 14,
      "fats": 72
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "pecannoten",
        "pecans"
      ],
      "jumbo": [
        "pecannoten",
        "pecans"
      ],
      "lidl": [
        "pecannoten",
        "pecans"
      ],
      "aldi": [
        "pecannoten",
        "pecans"
      ],
      "openFoodFacts": [
        "pecannoten",
        "pecans"
      ]
    }
  },
  {
    "id": "hazelnuts",
    "name": {
      "en": "Hazelnuts",
      "nl": "Hazelnoten"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 628,
      "protein": 15,
      "carbs": 17,
      "fats": 61
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "hazelnoten",
        "hazelnuts"
      ],
      "jumbo": [
        "hazelnoten",
        "hazelnuts"
      ],
      "lidl": [
        "hazelnoten",
        "hazelnuts"
      ],
      "aldi": [
        "hazelnoten",
        "hazelnuts"
      ],
      "openFoodFacts": [
        "hazelnoten",
        "hazelnuts"
      ]
    }
  },
  {
    "id": "pistachios",
    "name": {
      "en": "Pistachios",
      "nl": "Pistachenoten"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 560,
      "protein": 20,
      "carbs": 28,
      "fats": 45
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "pistachenoten",
        "pistachios"
      ],
      "jumbo": [
        "pistachenoten",
        "pistachios"
      ],
      "lidl": [
        "pistachenoten",
        "pistachios"
      ],
      "aldi": [
        "pistachenoten",
        "pistachios"
      ],
      "openFoodFacts": [
        "pistachenoten",
        "pistachios"
      ]
    }
  },
  {
    "id": "sesame_seeds",
    "name": {
      "en": "Sesame seeds",
      "nl": "Sesamzaad"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 573,
      "protein": 18,
      "carbs": 23,
      "fats": 50
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "high_protein",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "sesamzaad",
        "sesame seeds"
      ],
      "jumbo": [
        "sesamzaad",
        "sesame seeds"
      ],
      "lidl": [
        "sesamzaad",
        "sesame seeds"
      ],
      "aldi": [
        "sesamzaad",
        "sesame seeds"
      ],
      "openFoodFacts": [
        "sesamzaad",
        "sesame seeds"
      ]
    }
  },
  {
    "id": "butter",
    "name": {
      "en": "Butter",
      "nl": "Roomboter"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 717,
      "protein": 1,
      "carbs": 1,
      "fats": 81
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "roomboter",
        "butter"
      ],
      "jumbo": [
        "roomboter",
        "butter"
      ],
      "lidl": [
        "roomboter",
        "butter"
      ],
      "aldi": [
        "roomboter",
        "butter"
      ],
      "openFoodFacts": [
        "roomboter",
        "butter"
      ]
    }
  },
  {
    "id": "olives",
    "name": {
      "en": "Olives",
      "nl": "Olijven"
    },
    "category": "fats",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 145,
      "protein": 1,
      "carbs": 4,
      "fats": 15
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "olijven",
        "olives"
      ],
      "jumbo": [
        "olijven",
        "olives"
      ],
      "lidl": [
        "olijven",
        "olives"
      ],
      "aldi": [
        "olijven",
        "olives"
      ],
      "openFoodFacts": [
        "olijven",
        "olives"
      ]
    }
  },
  {
    "id": "brussels_sprouts",
    "name": {
      "en": "Brussels sprouts",
      "nl": "Spruitjes"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 43,
      "protein": 3,
      "carbs": 9,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "spruitjes",
        "brussels sprouts"
      ],
      "jumbo": [
        "spruitjes",
        "brussels sprouts"
      ],
      "lidl": [
        "spruitjes",
        "brussels sprouts"
      ],
      "aldi": [
        "spruitjes",
        "brussels sprouts"
      ],
      "openFoodFacts": [
        "spruitjes",
        "brussels sprouts"
      ]
    }
  },
  {
    "id": "red_bell_pepper",
    "name": {
      "en": "Red bell pepper",
      "nl": "Rode paprika"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 31,
      "protein": 1,
      "carbs": 6,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "rode paprika",
        "red bell pepper"
      ],
      "jumbo": [
        "rode paprika",
        "red bell pepper"
      ],
      "lidl": [
        "rode paprika",
        "red bell pepper"
      ],
      "aldi": [
        "rode paprika",
        "red bell pepper"
      ],
      "openFoodFacts": [
        "rode paprika",
        "red bell pepper"
      ]
    }
  },
  {
    "id": "yellow_bell_pepper",
    "name": {
      "en": "Yellow bell pepper",
      "nl": "Gele paprika"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 31,
      "protein": 1,
      "carbs": 6,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gele paprika",
        "yellow bell pepper"
      ],
      "jumbo": [
        "gele paprika",
        "yellow bell pepper"
      ],
      "lidl": [
        "gele paprika",
        "yellow bell pepper"
      ],
      "aldi": [
        "gele paprika",
        "yellow bell pepper"
      ],
      "openFoodFacts": [
        "gele paprika",
        "yellow bell pepper"
      ]
    }
  },
  {
    "id": "shiitake",
    "name": {
      "en": "Shiitake mushrooms",
      "nl": "Shiitake"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 34,
      "protein": 2,
      "carbs": 7,
      "fats": 0.5
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "shiitake",
        "shiitake mushrooms"
      ],
      "jumbo": [
        "shiitake",
        "shiitake mushrooms"
      ],
      "lidl": [
        "shiitake",
        "shiitake mushrooms"
      ],
      "aldi": [
        "shiitake",
        "shiitake mushrooms"
      ],
      "openFoodFacts": [
        "shiitake",
        "shiitake mushrooms"
      ]
    }
  },
  {
    "id": "spring_onion",
    "name": {
      "en": "Spring onion",
      "nl": "Bosui"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 32,
      "protein": 2,
      "carbs": 7,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "bosui",
        "spring onion"
      ],
      "jumbo": [
        "bosui",
        "spring onion"
      ],
      "lidl": [
        "bosui",
        "spring onion"
      ],
      "aldi": [
        "bosui",
        "spring onion"
      ],
      "openFoodFacts": [
        "bosui",
        "spring onion"
      ]
    }
  },
  {
    "id": "ginger",
    "name": {
      "en": "Ginger",
      "nl": "Gember"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 80,
      "protein": 2,
      "carbs": 18,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gember",
        "ginger"
      ],
      "jumbo": [
        "gember",
        "ginger"
      ],
      "lidl": [
        "gember",
        "ginger"
      ],
      "aldi": [
        "gember",
        "ginger"
      ],
      "openFoodFacts": [
        "gember",
        "ginger"
      ]
    }
  },
  {
    "id": "pak_choi",
    "name": {
      "en": "Pak choi",
      "nl": "Paksoi"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 13,
      "protein": 1.5,
      "carbs": 2,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "paksoi",
        "pak choi"
      ],
      "jumbo": [
        "paksoi",
        "pak choi"
      ],
      "lidl": [
        "paksoi",
        "pak choi"
      ],
      "aldi": [
        "paksoi",
        "pak choi"
      ],
      "openFoodFacts": [
        "paksoi",
        "pak choi"
      ]
    }
  },
  {
    "id": "celery",
    "name": {
      "en": "Celery",
      "nl": "Bleekselderij"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 16,
      "protein": 1,
      "carbs": 3,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "bleekselderij",
        "celery"
      ],
      "jumbo": [
        "bleekselderij",
        "celery"
      ],
      "lidl": [
        "bleekselderij",
        "celery"
      ],
      "aldi": [
        "bleekselderij",
        "celery"
      ],
      "openFoodFacts": [
        "bleekselderij",
        "celery"
      ]
    }
  },
  {
    "id": "radish",
    "name": {
      "en": "Radish",
      "nl": "Radijs"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 16,
      "protein": 1,
      "carbs": 3,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "radijs",
        "radish"
      ],
      "jumbo": [
        "radijs",
        "radish"
      ],
      "lidl": [
        "radijs",
        "radish"
      ],
      "aldi": [
        "radijs",
        "radish"
      ],
      "openFoodFacts": [
        "radijs",
        "radish"
      ]
    }
  },
  {
    "id": "leek",
    "name": {
      "en": "Leek",
      "nl": "Prei"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 61,
      "protein": 1.5,
      "carbs": 14,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "prei",
        "leek"
      ],
      "jumbo": [
        "prei",
        "leek"
      ],
      "lidl": [
        "prei",
        "leek"
      ],
      "aldi": [
        "prei",
        "leek"
      ],
      "openFoodFacts": [
        "prei",
        "leek"
      ]
    }
  },
  {
    "id": "fennel",
    "name": {
      "en": "Fennel",
      "nl": "Venkel"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 31,
      "protein": 1,
      "carbs": 7,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "venkel",
        "fennel"
      ],
      "jumbo": [
        "venkel",
        "fennel"
      ],
      "lidl": [
        "venkel",
        "fennel"
      ],
      "aldi": [
        "venkel",
        "fennel"
      ],
      "openFoodFacts": [
        "venkel",
        "fennel"
      ]
    }
  },
  {
    "id": "corn",
    "name": {
      "en": "Corn",
      "nl": "Maïs"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 96,
      "protein": 3,
      "carbs": 21,
      "fats": 1.5
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "maïs",
        "corn"
      ],
      "jumbo": [
        "maïs",
        "corn"
      ],
      "lidl": [
        "maïs",
        "corn"
      ],
      "aldi": [
        "maïs",
        "corn"
      ],
      "openFoodFacts": [
        "maïs",
        "corn"
      ]
    }
  },
  {
    "id": "peas",
    "name": {
      "en": "Peas",
      "nl": "Erwten"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 81,
      "protein": 5,
      "carbs": 14,
      "fats": 0.4
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "erwten",
        "peas"
      ],
      "jumbo": [
        "erwten",
        "peas"
      ],
      "lidl": [
        "erwten",
        "peas"
      ],
      "aldi": [
        "erwten",
        "peas"
      ],
      "openFoodFacts": [
        "erwten",
        "peas"
      ]
    }
  },
  {
    "id": "mixed_salad",
    "name": {
      "en": "Mixed salad",
      "nl": "Gemengde salade"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 20,
      "protein": 1,
      "carbs": 4,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gemengde salade",
        "mixed salad"
      ],
      "jumbo": [
        "gemengde salade",
        "mixed salad"
      ],
      "lidl": [
        "gemengde salade",
        "mixed salad"
      ],
      "aldi": [
        "gemengde salade",
        "mixed salad"
      ],
      "openFoodFacts": [
        "gemengde salade",
        "mixed salad"
      ]
    }
  },
  {
    "id": "sauerkraut",
    "name": {
      "en": "Sauerkraut",
      "nl": "Zuurkool"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 19,
      "protein": 1,
      "carbs": 4,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "zuurkool",
        "sauerkraut"
      ],
      "jumbo": [
        "zuurkool",
        "sauerkraut"
      ],
      "lidl": [
        "zuurkool",
        "sauerkraut"
      ],
      "aldi": [
        "zuurkool",
        "sauerkraut"
      ],
      "openFoodFacts": [
        "zuurkool",
        "sauerkraut"
      ]
    }
  },
  {
    "id": "pickles",
    "name": {
      "en": "Pickles",
      "nl": "Augurken"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 12,
      "protein": 0.5,
      "carbs": 2,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "augurken",
        "pickles"
      ],
      "jumbo": [
        "augurken",
        "pickles"
      ],
      "lidl": [
        "augurken",
        "pickles"
      ],
      "aldi": [
        "augurken",
        "pickles"
      ],
      "openFoodFacts": [
        "augurken",
        "pickles"
      ]
    }
  },
  {
    "id": "nori",
    "name": {
      "en": "Nori sheets",
      "nl": "Nori vellen"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 35,
      "protein": 6,
      "carbs": 5,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "nori vellen",
        "nori sheets",
        "nori"
      ],
      "jumbo": [
        "nori vellen",
        "nori sheets",
        "nori"
      ],
      "lidl": [
        "nori vellen",
        "nori sheets",
        "nori"
      ],
      "aldi": [
        "nori vellen",
        "nori sheets",
        "nori"
      ],
      "openFoodFacts": [
        "nori vellen",
        "nori sheets",
        "nori"
      ]
    }
  },
  {
    "id": "seaweed_salad",
    "name": {
      "en": "Seaweed salad",
      "nl": "Zeewiersalade"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 70,
      "protein": 2,
      "carbs": 10,
      "fats": 3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "zeewiersalade",
        "seaweed salad"
      ],
      "jumbo": [
        "zeewiersalade",
        "seaweed salad"
      ],
      "lidl": [
        "zeewiersalade",
        "seaweed salad"
      ],
      "aldi": [
        "zeewiersalade",
        "seaweed salad"
      ],
      "openFoodFacts": [
        "zeewiersalade",
        "seaweed salad"
      ]
    }
  },
  {
    "id": "kimchi",
    "name": {
      "en": "Kimchi",
      "nl": "Kimchi"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 20,
      "protein": 1,
      "carbs": 4,
      "fats": 0.5
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "kimchi"
      ],
      "jumbo": [
        "kimchi"
      ],
      "lidl": [
        "kimchi"
      ],
      "aldi": [
        "kimchi"
      ],
      "openFoodFacts": [
        "kimchi"
      ]
    }
  },
  {
    "id": "bean_sprouts",
    "name": {
      "en": "Bean sprouts",
      "nl": "Taugé"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 30,
      "protein": 3,
      "carbs": 6,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "taugé",
        "bean sprouts"
      ],
      "jumbo": [
        "taugé",
        "bean sprouts"
      ],
      "lidl": [
        "taugé",
        "bean sprouts"
      ],
      "aldi": [
        "taugé",
        "bean sprouts"
      ],
      "openFoodFacts": [
        "taugé",
        "bean sprouts"
      ]
    }
  },
  {
    "id": "bamboo_shoots",
    "name": {
      "en": "Bamboo shoots",
      "nl": "Bamboescheuten"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 27,
      "protein": 3,
      "carbs": 5,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "bamboescheuten",
        "bamboo shoots"
      ],
      "jumbo": [
        "bamboescheuten",
        "bamboo shoots"
      ],
      "lidl": [
        "bamboescheuten",
        "bamboo shoots"
      ],
      "aldi": [
        "bamboescheuten",
        "bamboo shoots"
      ],
      "openFoodFacts": [
        "bamboescheuten",
        "bamboo shoots"
      ]
    }
  },
  {
    "id": "water_chestnuts",
    "name": {
      "en": "Water chestnuts",
      "nl": "Waterkastanjes"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 97,
      "protein": 1,
      "carbs": 24,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "waterkastanjes",
        "water chestnuts"
      ],
      "jumbo": [
        "waterkastanjes",
        "water chestnuts"
      ],
      "lidl": [
        "waterkastanjes",
        "water chestnuts"
      ],
      "aldi": [
        "waterkastanjes",
        "water chestnuts"
      ],
      "openFoodFacts": [
        "waterkastanjes",
        "water chestnuts"
      ]
    }
  },
  {
    "id": "artichoke",
    "name": {
      "en": "Artichoke",
      "nl": "Artisjok"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 47,
      "protein": 3,
      "carbs": 11,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "artisjok",
        "artichoke"
      ],
      "jumbo": [
        "artisjok",
        "artichoke"
      ],
      "lidl": [
        "artisjok",
        "artichoke"
      ],
      "aldi": [
        "artisjok",
        "artichoke"
      ],
      "openFoodFacts": [
        "artisjok",
        "artichoke"
      ]
    }
  },
  {
    "id": "sun_dried_tomatoes",
    "name": {
      "en": "Sun-dried tomatoes",
      "nl": "Zongedroogde tomaten"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 260,
      "protein": 14,
      "carbs": 56,
      "fats": 3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "zongedroogde tomaten",
        "sun-dried tomatoes",
        "sun dried tomatoes"
      ],
      "jumbo": [
        "zongedroogde tomaten",
        "sun-dried tomatoes",
        "sun dried tomatoes"
      ],
      "lidl": [
        "zongedroogde tomaten",
        "sun-dried tomatoes",
        "sun dried tomatoes"
      ],
      "aldi": [
        "zongedroogde tomaten",
        "sun-dried tomatoes",
        "sun dried tomatoes"
      ],
      "openFoodFacts": [
        "zongedroogde tomaten",
        "sun-dried tomatoes",
        "sun dried tomatoes"
      ]
    }
  },
  {
    "id": "jalapenos",
    "name": {
      "en": "Jalapeños",
      "nl": "Jalapeños"
    },
    "category": "vegetables",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 29,
      "protein": 1,
      "carbs": 7,
      "fats": 0.4
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "meal_prep",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "jalapeños",
        "jalapenos"
      ],
      "jumbo": [
        "jalapeños",
        "jalapenos"
      ],
      "lidl": [
        "jalapeños",
        "jalapenos"
      ],
      "aldi": [
        "jalapeños",
        "jalapenos"
      ],
      "openFoodFacts": [
        "jalapeños",
        "jalapenos"
      ]
    }
  },
  {
    "id": "mandarin",
    "name": {
      "en": "Mandarin",
      "nl": "Mandarijn"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 53,
      "protein": 0.8,
      "carbs": 13,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "mandarijn",
        "mandarin"
      ],
      "jumbo": [
        "mandarijn",
        "mandarin"
      ],
      "lidl": [
        "mandarijn",
        "mandarin"
      ],
      "aldi": [
        "mandarijn",
        "mandarin"
      ],
      "openFoodFacts": [
        "mandarijn",
        "mandarin"
      ]
    }
  },
  {
    "id": "peach",
    "name": {
      "en": "Peach",
      "nl": "Perzik"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 39,
      "protein": 1,
      "carbs": 10,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "perzik",
        "peach"
      ],
      "jumbo": [
        "perzik",
        "peach"
      ],
      "lidl": [
        "perzik",
        "peach"
      ],
      "aldi": [
        "perzik",
        "peach"
      ],
      "openFoodFacts": [
        "perzik",
        "peach"
      ]
    }
  },
  {
    "id": "nectarine",
    "name": {
      "en": "Nectarine",
      "nl": "Nectarine"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 44,
      "protein": 1,
      "carbs": 11,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "nectarine"
      ],
      "jumbo": [
        "nectarine"
      ],
      "lidl": [
        "nectarine"
      ],
      "aldi": [
        "nectarine"
      ],
      "openFoodFacts": [
        "nectarine"
      ]
    }
  },
  {
    "id": "plum",
    "name": {
      "en": "Plum",
      "nl": "Pruim"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 46,
      "protein": 0.7,
      "carbs": 11,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "pruim",
        "plum"
      ],
      "jumbo": [
        "pruim",
        "plum"
      ],
      "lidl": [
        "pruim",
        "plum"
      ],
      "aldi": [
        "pruim",
        "plum"
      ],
      "openFoodFacts": [
        "pruim",
        "plum"
      ]
    }
  },
  {
    "id": "blackberries",
    "name": {
      "en": "Blackberries",
      "nl": "Bramen"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 43,
      "protein": 1,
      "carbs": 10,
      "fats": 0.5
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "bramen",
        "blackberries"
      ],
      "jumbo": [
        "bramen",
        "blackberries"
      ],
      "lidl": [
        "bramen",
        "blackberries"
      ],
      "aldi": [
        "bramen",
        "blackberries"
      ],
      "openFoodFacts": [
        "bramen",
        "blackberries"
      ]
    }
  },
  {
    "id": "grapefruit",
    "name": {
      "en": "Grapefruit",
      "nl": "Grapefruit"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 42,
      "protein": 0.8,
      "carbs": 11,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "grapefruit"
      ],
      "jumbo": [
        "grapefruit"
      ],
      "lidl": [
        "grapefruit"
      ],
      "aldi": [
        "grapefruit"
      ],
      "openFoodFacts": [
        "grapefruit"
      ]
    }
  },
  {
    "id": "lemon",
    "name": {
      "en": "Lemon",
      "nl": "Citroen"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 29,
      "protein": 1,
      "carbs": 9,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "citroen",
        "lemon"
      ],
      "jumbo": [
        "citroen",
        "lemon"
      ],
      "lidl": [
        "citroen",
        "lemon"
      ],
      "aldi": [
        "citroen",
        "lemon"
      ],
      "openFoodFacts": [
        "citroen",
        "lemon"
      ]
    }
  },
  {
    "id": "lime",
    "name": {
      "en": "Lime",
      "nl": "Limoen"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 30,
      "protein": 1,
      "carbs": 11,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "limoen",
        "lime"
      ],
      "jumbo": [
        "limoen",
        "lime"
      ],
      "lidl": [
        "limoen",
        "lime"
      ],
      "aldi": [
        "limoen",
        "lime"
      ],
      "openFoodFacts": [
        "limoen",
        "lime"
      ]
    }
  },
  {
    "id": "pomegranate",
    "name": {
      "en": "Pomegranate",
      "nl": "Granaatappel"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 83,
      "protein": 2,
      "carbs": 19,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "granaatappel",
        "pomegranate"
      ],
      "jumbo": [
        "granaatappel",
        "pomegranate"
      ],
      "lidl": [
        "granaatappel",
        "pomegranate"
      ],
      "aldi": [
        "granaatappel",
        "pomegranate"
      ],
      "openFoodFacts": [
        "granaatappel",
        "pomegranate"
      ]
    }
  },
  {
    "id": "figs",
    "name": {
      "en": "Figs",
      "nl": "Vijgen"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 74,
      "protein": 0.8,
      "carbs": 19,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "vijgen",
        "figs"
      ],
      "jumbo": [
        "vijgen",
        "figs"
      ],
      "lidl": [
        "vijgen",
        "figs"
      ],
      "aldi": [
        "vijgen",
        "figs"
      ],
      "openFoodFacts": [
        "vijgen",
        "figs"
      ]
    }
  },
  {
    "id": "dried_apricots",
    "name": {
      "en": "Dried apricots",
      "nl": "Gedroogde abrikozen"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 241,
      "protein": 3,
      "carbs": 63,
      "fats": 0.5
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gedroogde abrikozen",
        "dried apricots"
      ],
      "jumbo": [
        "gedroogde abrikozen",
        "dried apricots"
      ],
      "lidl": [
        "gedroogde abrikozen",
        "dried apricots"
      ],
      "aldi": [
        "gedroogde abrikozen",
        "dried apricots"
      ],
      "openFoodFacts": [
        "gedroogde abrikozen",
        "dried apricots"
      ]
    }
  },
  {
    "id": "canned_peaches_light",
    "name": {
      "en": "Light canned peaches",
      "nl": "Perzik op sap light"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 45,
      "protein": 0.5,
      "carbs": 11,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "perzik op sap light",
        "light canned peaches",
        "canned peaches light"
      ],
      "jumbo": [
        "perzik op sap light",
        "light canned peaches",
        "canned peaches light"
      ],
      "lidl": [
        "perzik op sap light",
        "light canned peaches",
        "canned peaches light"
      ],
      "aldi": [
        "perzik op sap light",
        "light canned peaches",
        "canned peaches light"
      ],
      "openFoodFacts": [
        "perzik op sap light",
        "light canned peaches",
        "canned peaches light"
      ]
    }
  },
  {
    "id": "apple_sauce_unsweetened",
    "name": {
      "en": "Unsweetened apple sauce",
      "nl": "Ongezoete appelmoes"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 50,
      "protein": 0.2,
      "carbs": 12,
      "fats": 0.1
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "ongezoete appelmoes",
        "unsweetened apple sauce",
        "apple sauce unsweetened"
      ],
      "jumbo": [
        "ongezoete appelmoes",
        "unsweetened apple sauce",
        "apple sauce unsweetened"
      ],
      "lidl": [
        "ongezoete appelmoes",
        "unsweetened apple sauce",
        "apple sauce unsweetened"
      ],
      "aldi": [
        "ongezoete appelmoes",
        "unsweetened apple sauce",
        "apple sauce unsweetened"
      ],
      "openFoodFacts": [
        "ongezoete appelmoes",
        "unsweetened apple sauce",
        "apple sauce unsweetened"
      ]
    }
  },
  {
    "id": "frozen_mango",
    "name": {
      "en": "Frozen mango",
      "nl": "Diepvries mango"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 60,
      "protein": 1,
      "carbs": 15,
      "fats": 0.4
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "diepvries mango",
        "frozen mango"
      ],
      "jumbo": [
        "diepvries mango",
        "frozen mango"
      ],
      "lidl": [
        "diepvries mango",
        "frozen mango"
      ],
      "aldi": [
        "diepvries mango",
        "frozen mango"
      ],
      "openFoodFacts": [
        "diepvries mango",
        "frozen mango"
      ]
    }
  },
  {
    "id": "frozen_berries",
    "name": {
      "en": "Frozen berries",
      "nl": "Diepvries bessen"
    },
    "category": "fruit",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 50,
      "protein": 1,
      "carbs": 12,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "diepvries bessen",
        "frozen berries"
      ],
      "jumbo": [
        "diepvries bessen",
        "frozen berries"
      ],
      "lidl": [
        "diepvries bessen",
        "frozen berries"
      ],
      "aldi": [
        "diepvries bessen",
        "frozen berries"
      ],
      "openFoodFacts": [
        "diepvries bessen",
        "frozen berries"
      ]
    }
  },
  {
    "id": "espresso",
    "name": {
      "en": "Espresso",
      "nl": "Espresso"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 2,
      "protein": 0,
      "carbs": 0,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "espresso"
      ],
      "jumbo": [
        "espresso"
      ],
      "lidl": [
        "espresso"
      ],
      "aldi": [
        "espresso"
      ],
      "openFoodFacts": [
        "espresso"
      ]
    }
  },
  {
    "id": "green_tea",
    "name": {
      "en": "Green tea",
      "nl": "Groene thee"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 1,
      "protein": 0,
      "carbs": 0,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "groene thee",
        "green tea"
      ],
      "jumbo": [
        "groene thee",
        "green tea"
      ],
      "lidl": [
        "groene thee",
        "green tea"
      ],
      "aldi": [
        "groene thee",
        "green tea"
      ],
      "openFoodFacts": [
        "groene thee",
        "green tea"
      ]
    }
  },
  {
    "id": "diet_iced_tea",
    "name": {
      "en": "Diet iced tea",
      "nl": "Zero ijsthee"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 1,
      "protein": 0,
      "carbs": 0,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "zero ijsthee",
        "diet iced tea"
      ],
      "jumbo": [
        "zero ijsthee",
        "diet iced tea"
      ],
      "lidl": [
        "zero ijsthee",
        "diet iced tea"
      ],
      "aldi": [
        "zero ijsthee",
        "diet iced tea"
      ],
      "openFoodFacts": [
        "zero ijsthee",
        "diet iced tea"
      ]
    }
  },
  {
    "id": "whole_milk_drink",
    "name": {
      "en": "Whole milk",
      "nl": "Volle melk"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 64,
      "protein": 3.4,
      "carbs": 5,
      "fats": 3.5
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "volle melk",
        "whole milk",
        "whole milk drink"
      ],
      "jumbo": [
        "volle melk",
        "whole milk",
        "whole milk drink"
      ],
      "lidl": [
        "volle melk",
        "whole milk",
        "whole milk drink"
      ],
      "aldi": [
        "volle melk",
        "whole milk",
        "whole milk drink"
      ],
      "openFoodFacts": [
        "volle melk",
        "whole milk",
        "whole milk drink"
      ]
    }
  },
  {
    "id": "protein_shake_ready",
    "name": {
      "en": "Ready protein shake",
      "nl": "Kant-en-klare eiwitshake"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 70,
      "protein": 10,
      "carbs": 5,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "kant-en-klare eiwitshake",
        "ready protein shake",
        "protein shake ready"
      ],
      "jumbo": [
        "kant-en-klare eiwitshake",
        "ready protein shake",
        "protein shake ready"
      ],
      "lidl": [
        "kant-en-klare eiwitshake",
        "ready protein shake",
        "protein shake ready"
      ],
      "aldi": [
        "kant-en-klare eiwitshake",
        "ready protein shake",
        "protein shake ready"
      ],
      "openFoodFacts": [
        "kant-en-klare eiwitshake",
        "ready protein shake",
        "protein shake ready"
      ]
    }
  },
  {
    "id": "smoothie_fruit",
    "name": {
      "en": "Fruit smoothie",
      "nl": "Fruit smoothie"
    },
    "category": "drinks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 60,
      "protein": 1,
      "carbs": 14,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "gluten_free",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "fruit smoothie",
        "smoothie fruit"
      ],
      "jumbo": [
        "fruit smoothie",
        "smoothie fruit"
      ],
      "lidl": [
        "fruit smoothie",
        "smoothie fruit"
      ],
      "aldi": [
        "fruit smoothie",
        "smoothie fruit"
      ],
      "openFoodFacts": [
        "fruit smoothie",
        "smoothie fruit"
      ]
    }
  },
  {
    "id": "bbq_sauce",
    "name": {
      "en": "BBQ sauce",
      "nl": "BBQ saus"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 170,
      "protein": 1,
      "carbs": 40,
      "fats": 0.5
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "bbq saus",
        "bbq sauce"
      ],
      "jumbo": [
        "bbq saus",
        "bbq sauce"
      ],
      "lidl": [
        "bbq saus",
        "bbq sauce"
      ],
      "aldi": [
        "bbq saus",
        "bbq sauce"
      ],
      "openFoodFacts": [
        "bbq saus",
        "bbq sauce"
      ]
    }
  },
  {
    "id": "hot_sauce",
    "name": {
      "en": "Hot sauce",
      "nl": "Hete saus"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 20,
      "protein": 1,
      "carbs": 4,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "hete saus",
        "hot sauce"
      ],
      "jumbo": [
        "hete saus",
        "hot sauce"
      ],
      "lidl": [
        "hete saus",
        "hot sauce"
      ],
      "aldi": [
        "hete saus",
        "hot sauce"
      ],
      "openFoodFacts": [
        "hete saus",
        "hot sauce"
      ]
    }
  },
  {
    "id": "red_pesto",
    "name": {
      "en": "Red pesto",
      "nl": "Rode pesto"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 360,
      "protein": 5,
      "carbs": 10,
      "fats": 32
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "rode pesto",
        "red pesto"
      ],
      "jumbo": [
        "rode pesto",
        "red pesto"
      ],
      "lidl": [
        "rode pesto",
        "red pesto"
      ],
      "aldi": [
        "rode pesto",
        "red pesto"
      ],
      "openFoodFacts": [
        "rode pesto",
        "red pesto"
      ]
    }
  },
  {
    "id": "yogurt_dressing",
    "name": {
      "en": "Yogurt dressing",
      "nl": "Yoghurt dressing"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 90,
      "protein": 4,
      "carbs": 6,
      "fats": 5
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "yoghurt dressing",
        "yogurt dressing"
      ],
      "jumbo": [
        "yoghurt dressing",
        "yogurt dressing"
      ],
      "lidl": [
        "yoghurt dressing",
        "yogurt dressing"
      ],
      "aldi": [
        "yoghurt dressing",
        "yogurt dressing"
      ],
      "openFoodFacts": [
        "yoghurt dressing",
        "yogurt dressing"
      ]
    }
  },
  {
    "id": "caesar_light",
    "name": {
      "en": "Light Caesar dressing",
      "nl": "Light Caesar dressing"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 170,
      "protein": 4,
      "carbs": 8,
      "fats": 12
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "light caesar dressing",
        "caesar light"
      ],
      "jumbo": [
        "light caesar dressing",
        "caesar light"
      ],
      "lidl": [
        "light caesar dressing",
        "caesar light"
      ],
      "aldi": [
        "light caesar dressing",
        "caesar light"
      ],
      "openFoodFacts": [
        "light caesar dressing",
        "caesar light"
      ]
    }
  },
  {
    "id": "curry_powder",
    "name": {
      "en": "Curry powder",
      "nl": "Kerriepoeder"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 325,
      "protein": 14,
      "carbs": 56,
      "fats": 14
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "kerriepoeder",
        "curry powder"
      ],
      "jumbo": [
        "kerriepoeder",
        "curry powder"
      ],
      "lidl": [
        "kerriepoeder",
        "curry powder"
      ],
      "aldi": [
        "kerriepoeder",
        "curry powder"
      ],
      "openFoodFacts": [
        "kerriepoeder",
        "curry powder"
      ]
    }
  },
  {
    "id": "paprika_powder",
    "name": {
      "en": "Paprika powder",
      "nl": "Paprikapoeder"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 282,
      "protein": 14,
      "carbs": 54,
      "fats": 13
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "paprikapoeder",
        "paprika powder"
      ],
      "jumbo": [
        "paprikapoeder",
        "paprika powder"
      ],
      "lidl": [
        "paprikapoeder",
        "paprika powder"
      ],
      "aldi": [
        "paprikapoeder",
        "paprika powder"
      ],
      "openFoodFacts": [
        "paprikapoeder",
        "paprika powder"
      ]
    }
  },
  {
    "id": "cumin",
    "name": {
      "en": "Cumin",
      "nl": "Komijn"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 375,
      "protein": 18,
      "carbs": 44,
      "fats": 22
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "komijn",
        "cumin"
      ],
      "jumbo": [
        "komijn",
        "cumin"
      ],
      "lidl": [
        "komijn",
        "cumin"
      ],
      "aldi": [
        "komijn",
        "cumin"
      ],
      "openFoodFacts": [
        "komijn",
        "cumin"
      ]
    }
  },
  {
    "id": "oregano",
    "name": {
      "en": "Oregano",
      "nl": "Oregano"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 265,
      "protein": 9,
      "carbs": 69,
      "fats": 4
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "oregano"
      ],
      "jumbo": [
        "oregano"
      ],
      "lidl": [
        "oregano"
      ],
      "aldi": [
        "oregano"
      ],
      "openFoodFacts": [
        "oregano"
      ]
    }
  },
  {
    "id": "basil",
    "name": {
      "en": "Basil",
      "nl": "Basilicum"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 23,
      "protein": 3,
      "carbs": 3,
      "fats": 0.6
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "basilicum",
        "basil"
      ],
      "jumbo": [
        "basilicum",
        "basil"
      ],
      "lidl": [
        "basilicum",
        "basil"
      ],
      "aldi": [
        "basilicum",
        "basil"
      ],
      "openFoodFacts": [
        "basilicum",
        "basil"
      ]
    }
  },
  {
    "id": "dill",
    "name": {
      "en": "Dill",
      "nl": "Dille"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 43,
      "protein": 3,
      "carbs": 7,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "dille",
        "dill"
      ],
      "jumbo": [
        "dille",
        "dill"
      ],
      "lidl": [
        "dille",
        "dill"
      ],
      "aldi": [
        "dille",
        "dill"
      ],
      "openFoodFacts": [
        "dille",
        "dill"
      ]
    }
  },
  {
    "id": "parsley",
    "name": {
      "en": "Parsley",
      "nl": "Peterselie"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 36,
      "protein": 3,
      "carbs": 6,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "peterselie",
        "parsley"
      ],
      "jumbo": [
        "peterselie",
        "parsley"
      ],
      "lidl": [
        "peterselie",
        "parsley"
      ],
      "aldi": [
        "peterselie",
        "parsley"
      ],
      "openFoodFacts": [
        "peterselie",
        "parsley"
      ]
    }
  },
  {
    "id": "cilantro",
    "name": {
      "en": "Cilantro",
      "nl": "Koriander"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 23,
      "protein": 2,
      "carbs": 4,
      "fats": 0.5
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "koriander",
        "cilantro"
      ],
      "jumbo": [
        "koriander",
        "cilantro"
      ],
      "lidl": [
        "koriander",
        "cilantro"
      ],
      "aldi": [
        "koriander",
        "cilantro"
      ],
      "openFoodFacts": [
        "koriander",
        "cilantro"
      ]
    }
  },
  {
    "id": "mint",
    "name": {
      "en": "Mint",
      "nl": "Munt"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 44,
      "protein": 3,
      "carbs": 8,
      "fats": 0.7
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "munt",
        "mint"
      ],
      "jumbo": [
        "munt",
        "mint"
      ],
      "lidl": [
        "munt",
        "mint"
      ],
      "aldi": [
        "munt",
        "mint"
      ],
      "openFoodFacts": [
        "munt",
        "mint"
      ]
    }
  },
  {
    "id": "thyme",
    "name": {
      "en": "Thyme",
      "nl": "Tijm"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 101,
      "protein": 6,
      "carbs": 24,
      "fats": 2
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "tijm",
        "thyme"
      ],
      "jumbo": [
        "tijm",
        "thyme"
      ],
      "lidl": [
        "tijm",
        "thyme"
      ],
      "aldi": [
        "tijm",
        "thyme"
      ],
      "openFoodFacts": [
        "tijm",
        "thyme"
      ]
    }
  },
  {
    "id": "rosemary",
    "name": {
      "en": "Rosemary",
      "nl": "Rozemarijn"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 131,
      "protein": 3,
      "carbs": 21,
      "fats": 6
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "rozemarijn",
        "rosemary"
      ],
      "jumbo": [
        "rozemarijn",
        "rosemary"
      ],
      "lidl": [
        "rozemarijn",
        "rosemary"
      ],
      "aldi": [
        "rozemarijn",
        "rosemary"
      ],
      "openFoodFacts": [
        "rozemarijn",
        "rosemary"
      ]
    }
  },
  {
    "id": "nutmeg",
    "name": {
      "en": "Nutmeg",
      "nl": "Nootmuskaat"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 525,
      "protein": 6,
      "carbs": 49,
      "fats": 36
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "nootmuskaat",
        "nutmeg"
      ],
      "jumbo": [
        "nootmuskaat",
        "nutmeg"
      ],
      "lidl": [
        "nootmuskaat",
        "nutmeg"
      ],
      "aldi": [
        "nootmuskaat",
        "nutmeg"
      ],
      "openFoodFacts": [
        "nootmuskaat",
        "nutmeg"
      ]
    }
  },
  {
    "id": "turmeric",
    "name": {
      "en": "Turmeric",
      "nl": "Kurkuma"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 312,
      "protein": 10,
      "carbs": 67,
      "fats": 3
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "kurkuma",
        "turmeric"
      ],
      "jumbo": [
        "kurkuma",
        "turmeric"
      ],
      "lidl": [
        "kurkuma",
        "turmeric"
      ],
      "aldi": [
        "kurkuma",
        "turmeric"
      ],
      "openFoodFacts": [
        "kurkuma",
        "turmeric"
      ]
    }
  },
  {
    "id": "chili_flakes",
    "name": {
      "en": "Chili flakes",
      "nl": "Chilivlokken"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 282,
      "protein": 12,
      "carbs": 50,
      "fats": 14
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "chilivlokken",
        "chili flakes"
      ],
      "jumbo": [
        "chilivlokken",
        "chili flakes"
      ],
      "lidl": [
        "chilivlokken",
        "chili flakes"
      ],
      "aldi": [
        "chilivlokken",
        "chili flakes"
      ],
      "openFoodFacts": [
        "chilivlokken",
        "chili flakes"
      ]
    }
  },
  {
    "id": "vanilla_extract",
    "name": {
      "en": "Vanilla extract",
      "nl": "Vanille extract"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 288,
      "protein": 0,
      "carbs": 13,
      "fats": 0
    },
    "goals": [
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "vanille extract",
        "vanilla extract"
      ],
      "jumbo": [
        "vanille extract",
        "vanilla extract"
      ],
      "lidl": [
        "vanille extract",
        "vanilla extract"
      ],
      "aldi": [
        "vanille extract",
        "vanilla extract"
      ],
      "openFoodFacts": [
        "vanille extract",
        "vanilla extract"
      ]
    }
  },
  {
    "id": "baking_powder",
    "name": {
      "en": "Baking powder",
      "nl": "Bakpoeder"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 53,
      "protein": 0,
      "carbs": 28,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "bakpoeder",
        "baking powder"
      ],
      "jumbo": [
        "bakpoeder",
        "baking powder"
      ],
      "lidl": [
        "bakpoeder",
        "baking powder"
      ],
      "aldi": [
        "bakpoeder",
        "baking powder"
      ],
      "openFoodFacts": [
        "bakpoeder",
        "baking powder"
      ]
    }
  },
  {
    "id": "yeast",
    "name": {
      "en": "Yeast",
      "nl": "Gist"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 325,
      "protein": 40,
      "carbs": 41,
      "fats": 8
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "gist",
        "yeast"
      ],
      "jumbo": [
        "gist",
        "yeast"
      ],
      "lidl": [
        "gist",
        "yeast"
      ],
      "aldi": [
        "gist",
        "yeast"
      ],
      "openFoodFacts": [
        "gist",
        "yeast"
      ]
    }
  },
  {
    "id": "capers",
    "name": {
      "en": "Capers",
      "nl": "Kappertjes"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 23,
      "protein": 2,
      "carbs": 5,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "kappertjes",
        "capers"
      ],
      "jumbo": [
        "kappertjes",
        "capers"
      ],
      "lidl": [
        "kappertjes",
        "capers"
      ],
      "aldi": [
        "kappertjes",
        "capers"
      ],
      "openFoodFacts": [
        "kappertjes",
        "capers"
      ]
    }
  },
  {
    "id": "apple_cider_vinegar",
    "name": {
      "en": "Apple cider vinegar",
      "nl": "Appelazijn"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 20,
      "protein": 0,
      "carbs": 1,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "appelazijn",
        "apple cider vinegar"
      ],
      "jumbo": [
        "appelazijn",
        "apple cider vinegar"
      ],
      "lidl": [
        "appelazijn",
        "apple cider vinegar"
      ],
      "aldi": [
        "appelazijn",
        "apple cider vinegar"
      ],
      "openFoodFacts": [
        "appelazijn",
        "apple cider vinegar"
      ]
    }
  },
  {
    "id": "balsamic_vinegar",
    "name": {
      "en": "Balsamic vinegar",
      "nl": "Balsamicoazijn"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 88,
      "protein": 0,
      "carbs": 17,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "balsamicoazijn",
        "balsamic vinegar"
      ],
      "jumbo": [
        "balsamicoazijn",
        "balsamic vinegar"
      ],
      "lidl": [
        "balsamicoazijn",
        "balsamic vinegar"
      ],
      "aldi": [
        "balsamicoazijn",
        "balsamic vinegar"
      ],
      "openFoodFacts": [
        "balsamicoazijn",
        "balsamic vinegar"
      ]
    }
  },
  {
    "id": "rice_vinegar",
    "name": {
      "en": "Rice vinegar",
      "nl": "Rijstazijn"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 18,
      "protein": 0,
      "carbs": 1,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "rijstazijn",
        "rice vinegar"
      ],
      "jumbo": [
        "rijstazijn",
        "rice vinegar"
      ],
      "lidl": [
        "rijstazijn",
        "rice vinegar"
      ],
      "aldi": [
        "rijstazijn",
        "rice vinegar"
      ],
      "openFoodFacts": [
        "rijstazijn",
        "rice vinegar"
      ]
    }
  },
  {
    "id": "chicken_stock",
    "name": {
      "en": "Chicken stock",
      "nl": "Kippenbouillon"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 10,
      "protein": 1,
      "carbs": 1,
      "fats": 0.3
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "kippenbouillon",
        "chicken stock"
      ],
      "jumbo": [
        "kippenbouillon",
        "chicken stock"
      ],
      "lidl": [
        "kippenbouillon",
        "chicken stock"
      ],
      "aldi": [
        "kippenbouillon",
        "chicken stock"
      ],
      "openFoodFacts": [
        "kippenbouillon",
        "chicken stock"
      ]
    }
  },
  {
    "id": "vegetable_stock",
    "name": {
      "en": "Vegetable stock",
      "nl": "Groentebouillon"
    },
    "category": "condiments",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 8,
      "protein": 0.5,
      "carbs": 1,
      "fats": 0.2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegan",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "groentebouillon",
        "vegetable stock"
      ],
      "jumbo": [
        "groentebouillon",
        "vegetable stock"
      ],
      "lidl": [
        "groentebouillon",
        "vegetable stock"
      ],
      "aldi": [
        "groentebouillon",
        "vegetable stock"
      ],
      "openFoodFacts": [
        "groentebouillon",
        "vegetable stock"
      ]
    }
  },
  {
    "id": "wholegrain_crackers",
    "name": {
      "en": "Wholegrain crackers",
      "nl": "Volkoren crackers"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 360,
      "protein": 10,
      "carbs": 65,
      "fats": 8
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "volkoren crackers",
        "wholegrain crackers"
      ],
      "jumbo": [
        "volkoren crackers",
        "wholegrain crackers"
      ],
      "lidl": [
        "volkoren crackers",
        "wholegrain crackers"
      ],
      "aldi": [
        "volkoren crackers",
        "wholegrain crackers"
      ],
      "openFoodFacts": [
        "volkoren crackers",
        "wholegrain crackers"
      ]
    }
  },
  {
    "id": "peanut_powder",
    "name": {
      "en": "Peanut powder",
      "nl": "Pindapoeder"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 400,
      "protein": 45,
      "carbs": 30,
      "fats": 12
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "pindapoeder",
        "peanut powder"
      ],
      "jumbo": [
        "pindapoeder",
        "peanut powder"
      ],
      "lidl": [
        "pindapoeder",
        "peanut powder"
      ],
      "aldi": [
        "pindapoeder",
        "peanut powder"
      ],
      "openFoodFacts": [
        "pindapoeder",
        "peanut powder"
      ]
    }
  },
  {
    "id": "protein_pudding",
    "name": {
      "en": "Protein pudding",
      "nl": "Eiwitpudding"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 80,
      "protein": 10,
      "carbs": 8,
      "fats": 1
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "eiwitpudding",
        "protein pudding"
      ],
      "jumbo": [
        "eiwitpudding",
        "protein pudding"
      ],
      "lidl": [
        "eiwitpudding",
        "protein pudding"
      ],
      "aldi": [
        "eiwitpudding",
        "protein pudding"
      ],
      "openFoodFacts": [
        "eiwitpudding",
        "protein pudding"
      ]
    }
  },
  {
    "id": "protein_mousse",
    "name": {
      "en": "Protein mousse",
      "nl": "Eiwitmousse"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 90,
      "protein": 10,
      "carbs": 9,
      "fats": 2
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "eiwitmousse",
        "protein mousse"
      ],
      "jumbo": [
        "eiwitmousse",
        "protein mousse"
      ],
      "lidl": [
        "eiwitmousse",
        "protein mousse"
      ],
      "aldi": [
        "eiwitmousse",
        "protein mousse"
      ],
      "openFoodFacts": [
        "eiwitmousse",
        "protein mousse"
      ]
    }
  },
  {
    "id": "sugar_free_jelly",
    "name": {
      "en": "Sugar-free jelly",
      "nl": "Suikervrije jelly"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 10,
      "protein": 1,
      "carbs": 1,
      "fats": 0
    },
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "low_calorie",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "suikervrije jelly",
        "sugar-free jelly",
        "sugar free jelly"
      ],
      "jumbo": [
        "suikervrije jelly",
        "sugar-free jelly",
        "sugar free jelly"
      ],
      "lidl": [
        "suikervrije jelly",
        "sugar-free jelly",
        "sugar free jelly"
      ],
      "aldi": [
        "suikervrije jelly",
        "sugar-free jelly",
        "sugar free jelly"
      ],
      "openFoodFacts": [
        "suikervrije jelly",
        "sugar-free jelly",
        "sugar free jelly"
      ]
    }
  },
  {
    "id": "coconut_flakes",
    "name": {
      "en": "Coconut flakes",
      "nl": "Kokosrasp"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 660,
      "protein": 7,
      "carbs": 24,
      "fats": 64
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "kokosrasp",
        "coconut flakes"
      ],
      "jumbo": [
        "kokosrasp",
        "coconut flakes"
      ],
      "lidl": [
        "kokosrasp",
        "coconut flakes"
      ],
      "aldi": [
        "kokosrasp",
        "coconut flakes"
      ],
      "openFoodFacts": [
        "kokosrasp",
        "coconut flakes"
      ]
    }
  },
  {
    "id": "protein_chips",
    "name": {
      "en": "Protein chips",
      "nl": "Eiwit chips"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 400,
      "protein": 40,
      "carbs": 35,
      "fats": 12
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "eiwit chips",
        "protein chips"
      ],
      "jumbo": [
        "eiwit chips",
        "protein chips"
      ],
      "lidl": [
        "eiwit chips",
        "protein chips"
      ],
      "aldi": [
        "eiwit chips",
        "protein chips"
      ],
      "openFoodFacts": [
        "eiwit chips",
        "protein chips"
      ]
    }
  },
  {
    "id": "beef_jerky",
    "name": {
      "en": "Beef jerky",
      "nl": "Beef jerky"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 300,
      "protein": 50,
      "carbs": 10,
      "fats": 5
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "beef jerky"
      ],
      "jumbo": [
        "beef jerky"
      ],
      "lidl": [
        "beef jerky"
      ],
      "aldi": [
        "beef jerky"
      ],
      "openFoodFacts": [
        "beef jerky"
      ]
    }
  },
  {
    "id": "turkey_jerky",
    "name": {
      "en": "Turkey jerky",
      "nl": "Turkey jerky"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 280,
      "protein": 50,
      "carbs": 8,
      "fats": 4
    },
    "goals": [
      "fat_loss",
      "build_muscle",
      "maintenance"
    ],
    "tags": [
      "dutch_supermarket",
      "high_protein",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "turkey jerky"
      ],
      "jumbo": [
        "turkey jerky"
      ],
      "lidl": [
        "turkey jerky"
      ],
      "aldi": [
        "turkey jerky"
      ],
      "openFoodFacts": [
        "turkey jerky"
      ]
    }
  },
  {
    "id": "oat_bars",
    "name": {
      "en": "Oat bars",
      "nl": "Havermoutrepen"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 380,
      "protein": 8,
      "carbs": 60,
      "fats": 12
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "havermoutrepen",
        "oat bars"
      ],
      "jumbo": [
        "havermoutrepen",
        "oat bars"
      ],
      "lidl": [
        "havermoutrepen",
        "oat bars"
      ],
      "aldi": [
        "havermoutrepen",
        "oat bars"
      ],
      "openFoodFacts": [
        "havermoutrepen",
        "oat bars"
      ]
    }
  },
  {
    "id": "energy_gel",
    "name": {
      "en": "Energy gel",
      "nl": "Energiegel"
    },
    "category": "snacks",
    "unit": "100g",
    "macrosPer100g": {
      "calories": 250,
      "protein": 0,
      "carbs": 62,
      "fats": 0
    },
    "goals": [
      "build_muscle",
      "maintenance",
      "performance"
    ],
    "tags": [
      "dutch_supermarket",
      "vegetarian"
    ],
    "supermarketKeywords": {
      "ah": [
        "energiegel",
        "energy gel"
      ],
      "jumbo": [
        "energiegel",
        "energy gel"
      ],
      "lidl": [
        "energiegel",
        "energy gel"
      ],
      "aldi": [
        "energiegel",
        "energy gel"
      ],
      "openFoodFacts": [
        "energiegel",
        "energy gel"
      ]
    }
  }
];

export function getFoodById(id) {
  return foods.find((food) => food.id === id) || null;
}

export function getFoodsByCategory(category) {
  return foods.filter((food) => food.category === category);
}

export function getFoodsByGoal(goal) {
  return foods.filter((food) => food.goals.includes(goal));
}

export function getFoodsByTag(tag) {
  return foods.filter((food) => food.tags.includes(tag));
}

export function getFoodName(id, language = "en") {
  const food = getFoodById(id);
  return food?.name?.[language] || food?.name?.en || id;
}

export function getFoodMacros(id) {
  return getFoodById(id)?.macrosPer100g || null;
}

export function searchFoods(query, language = "en") {
  const q = String(query || "").toLowerCase().trim();
  if (!q) return foods;

  return foods.filter((food) => {
    const nameEn = food.name.en.toLowerCase();
    const nameNl = food.name.nl.toLowerCase();
    const keywords = Object.values(food.supermarketKeywords || {})
      .flat()
      .join(" ")
      .toLowerCase();

    return nameEn.includes(q) || nameNl.includes(q) || keywords.includes(q);
  });
}

export function calculateIngredientMacros(foodId, grams) {
  const food = getFoodById(foodId);
  if (!food) return { calories: 0, protein: 0, carbs: 0, fats: 0 };

  const factor = Number(grams || 0) / 100;

  return {
    calories: Math.round(food.macrosPer100g.calories * factor),
    protein: Math.round(food.macrosPer100g.protein * factor),
    carbs: Math.round(food.macrosPer100g.carbs * factor),
    fats: Math.round(food.macrosPer100g.fats * factor),
  };
}

export function calculateRecipeMacros(ingredients = []) {
  return ingredients.reduce(
    (total, item) => {
      const macros = calculateIngredientMacros(item.foodId, item.grams);

      return {
        calories: total.calories + macros.calories,
        protein: total.protein + macros.protein,
        carbs: total.carbs + macros.carbs,
        fats: total.fats + macros.fats,
      };
    },
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );
}

export function getSupermarketSearchTerms(foodId, supermarket = "ah") {
  const food = getFoodById(foodId);
  if (!food) return [];

  return (
    food.supermarketKeywords?.[supermarket] ||
    food.supermarketKeywords?.openFoodFacts ||
    []
  );
}

export function getOpenFoodFactsSearchTerms(foodId) {
  return getSupermarketSearchTerms(foodId, "openFoodFacts");
}

export function getRandomFoodsByCategory(category, count = 5) {
  return foods
    .filter((food) => food.category === category)
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export function getRecipeReadyFoods(goal = "maintenance") {
  return {
    proteins: foods.filter((food) => food.category === "protein" && food.goals.includes(goal)),
    dairy: foods.filter((food) => food.category === "dairy" && food.goals.includes(goal)),
    carbs: foods.filter((food) => food.category === "carbs" && food.goals.includes(goal)),
    fats: foods.filter((food) => food.category === "fats" && food.goals.includes(goal)),
    vegetables: foods.filter((food) => food.category === "vegetables" && food.goals.includes(goal)),
    fruit: foods.filter((food) => food.category === "fruit" && food.goals.includes(goal)),
    condiments: foods.filter((food) => food.category === "condiments"),
    snacks: foods.filter((food) => food.category === "snacks" && food.goals.includes(goal)),
  };
}

export default foods;

