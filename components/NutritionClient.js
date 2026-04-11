"use client";

import { useMemo, useState } from "react";

const nutritionPlans = {
  "Lose Fat": {
    summary:
      "Prioritize a calorie deficit, high protein, filling meals, and simple repeatable structure. These sample days help members stay lean while still eating satisfying food.",
    caloriesGuide: "Usually a moderate calorie deficit based on bodyweight and activity",
    proteinGuide: "1.8–2.2g protein per kg bodyweight",
    carbsGuide: "Moderate carbs around training and active periods",
    fatsGuide: "Moderate fats from whole-food sources",
    hydration: "2.5–3.5L water daily",
    timing: [
      "Protein in every meal",
      "Use high-volume foods to stay fuller for longer",
      "Keep snacks planned instead of random",
      "Place more carbs around training if preferred",
    ],
    grocery: [
      "Chicken breast or thigh",
      "Lean beef or turkey",
      "Eggs / egg whites",
      "Greek yogurt / skyr / cottage cheese",
      "Rice / oats / potatoes / wraps",
      "Berries / bananas / apples",
      "Frozen vegetables / salad mixes",
      "Avocado / olive oil / nuts in moderation",
    ],
    sampleDays: [
      {
        title: "Day 1 — Lean reset",
        totalCalories: "1,780 kcal",
        totalProtein: "152g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Greek Yogurt Berry Bowl",
            calories: "390 kcal",
            protein: "32g",
            ingredients: [
              "250g Greek yogurt",
              "80g berries",
              "25g granola",
              "10g chia seeds",
            ],
            method:
              "Add yogurt to a bowl, top with berries, granola, and chia seeds.",
          },
          {
            label: "Lunch",
            title: "Chicken Rice Bowl",
            calories: "510 kcal",
            protein: "45g",
            ingredients: [
              "150g chicken breast",
              "150g cooked rice",
              "150g mixed vegetables",
              "1 tbsp light sauce",
            ],
            method:
              "Cook chicken, serve over rice with vegetables, and drizzle with light sauce.",
          },
          {
            label: "Snack",
            title: "Protein Shake + Apple",
            calories: "220 kcal",
            protein: "27g",
            ingredients: ["1 scoop whey", "1 apple", "Water or almond milk"],
            method: "Blend or shake the whey, then eat the apple on the side.",
          },
          {
            label: "Dinner",
            title: "Salmon with Potatoes",
            calories: "660 kcal",
            protein: "48g",
            ingredients: [
              "180g salmon",
              "220g potatoes",
              "150g green beans",
              "1 tsp olive oil",
            ],
            method:
              "Bake salmon and potatoes, steam green beans, then plate together.",
          },
        ],
      },
      {
        title: "Day 2 — Higher volume",
        totalCalories: "1,720 kcal",
        totalProtein: "149g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Egg White Omelet",
            calories: "330 kcal",
            protein: "31g",
            ingredients: [
              "200g egg whites",
              "1 whole egg",
              "Spinach",
              "Mushrooms",
              "1 slice toast",
            ],
            method:
              "Cook eggs with spinach and mushrooms. Serve with toast.",
          },
          {
            label: "Lunch",
            title: "Turkey Wrap",
            calories: "460 kcal",
            protein: "40g",
            ingredients: [
              "150g turkey breast",
              "1 wrap",
              "Lettuce",
              "Tomato",
              "Light yogurt dressing",
            ],
            method:
              "Fill wrap with turkey and vegetables, then add dressing and roll tightly.",
          },
          {
            label: "Snack",
            title: "Cottage Cheese Pineapple Cup",
            calories: "210 kcal",
            protein: "24g",
            ingredients: ["200g cottage cheese", "100g pineapple"],
            method: "Combine in a bowl and serve cold.",
          },
          {
            label: "Dinner",
            title: "Lean Beef Stir-Fry",
            calories: "720 kcal",
            protein: "54g",
            ingredients: [
              "170g lean beef",
              "160g cooked jasmine rice",
              "200g stir-fry vegetables",
              "Soy or teriyaki light sauce",
            ],
            method:
              "Cook beef, stir-fry vegetables, and serve over rice with sauce.",
          },
        ],
      },
      {
        title: "Day 3 — Simple office day",
        totalCalories: "1,760 kcal",
        totalProtein: "147g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Overnight Protein Oats",
            calories: "400 kcal",
            protein: "33g",
            ingredients: [
              "50g oats",
              "1 scoop whey",
              "150g Greek yogurt",
              "80g blueberries",
            ],
            method:
              "Mix all ingredients and leave in the fridge overnight.",
          },
          {
            label: "Lunch",
            title: "Chicken Pasta Salad",
            calories: "500 kcal",
            protein: "42g",
            ingredients: [
              "150g chicken breast",
              "140g cooked pasta",
              "Cucumber",
              "Cherry tomatoes",
              "Light dressing",
            ],
            method:
              "Slice cooked chicken and combine with pasta, vegetables, and dressing.",
          },
          {
            label: "Snack",
            title: "Boiled Eggs + Fruit",
            calories: "220 kcal",
            protein: "14g",
            ingredients: ["2 boiled eggs", "1 orange", "1 small banana"],
            method: "Boil eggs ahead of time and serve with fruit.",
          },
          {
            label: "Dinner",
            title: "White Fish & Sweet Potato",
            calories: "640 kcal",
            protein: "58g",
            ingredients: [
              "220g white fish",
              "250g sweet potato",
              "150g broccoli",
              "1 tsp olive oil",
            ],
            method:
              "Bake fish and sweet potato, steam broccoli, then plate together.",
          },
        ],
      },
      {
        title: "Day 4 — Controlled comfort day",
        totalCalories: "1,740 kcal",
        totalProtein: "144g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Lean Smoothie",
            calories: "340 kcal",
            protein: "31g",
            ingredients: [
              "1 scoop whey",
              "1 banana",
              "Spinach",
              "250ml almond milk",
              "Ice",
            ],
            method: "Blend until smooth.",
          },
          {
            label: "Lunch",
            title: "Tuna Rice Bowl",
            calories: "470 kcal",
            protein: "38g",
            ingredients: [
              "1 can tuna",
              "150g cooked rice",
              "Corn",
              "Cucumber",
              "Lettuce",
            ],
            method:
              "Drain tuna and layer all ingredients into a bowl.",
          },
          {
            label: "Snack",
            title: "Greek Yogurt Pot",
            calories: "180 kcal",
            protein: "20g",
            ingredients: ["200g Greek yogurt", "Cinnamon"],
            method: "Serve chilled with cinnamon.",
          },
          {
            label: "Dinner",
            title: "Chicken Burger Bowl",
            calories: "750 kcal",
            protein: "55g",
            ingredients: [
              "180g chicken mince or chicken breast",
              "220g potatoes",
              "Lettuce",
              "Tomato",
              "Pickles",
            ],
            method:
              "Cook chicken, roast potatoes, and serve over salad vegetables.",
          },
        ],
      },
      {
        title: "Day 5 — Training support",
        totalCalories: "1,820 kcal",
        totalProtein: "156g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Oats with Whey and Strawberries",
            calories: "410 kcal",
            protein: "34g",
            ingredients: [
              "55g oats",
              "1 scoop whey",
              "100g strawberries",
              "Cinnamon",
            ],
            method: "Cook oats and stir whey in after cooking.",
          },
          {
            label: "Lunch",
            title: "Lean Beef Rice Bowl",
            calories: "540 kcal",
            protein: "46g",
            ingredients: [
              "160g lean beef",
              "160g cooked rice",
              "Mixed vegetables",
            ],
            method: "Cook beef and combine with rice and vegetables.",
          },
          {
            label: "Snack",
            title: "Rice Cakes and Cottage Cheese",
            calories: "220 kcal",
            protein: "18g",
            ingredients: ["3 rice cakes", "150g cottage cheese"],
            method: "Top rice cakes with cottage cheese or eat alongside.",
          },
          {
            label: "Dinner",
            title: "Chicken Fajita Bowl",
            calories: "650 kcal",
            protein: "58g",
            ingredients: [
              "180g chicken",
              "Peppers",
              "Onion",
              "150g rice",
              "Salsa",
            ],
            method:
              "Cook chicken with peppers and onion, then serve over rice with salsa.",
          },
        ],
      },
      {
        title: "Day 6 — Fast prep day",
        totalCalories: "1,710 kcal",
        totalProtein: "145g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Scrambled Eggs and Kiwi",
            calories: "360 kcal",
            protein: "28g",
            ingredients: ["3 eggs", "1 slice toast", "2 kiwi fruits"],
            method: "Scramble the eggs and serve with toast and kiwi.",
          },
          {
            label: "Lunch",
            title: "Meal Prep Chicken Box",
            calories: "500 kcal",
            protein: "44g",
            ingredients: [
              "150g chicken breast",
              "200g potatoes",
              "Greens",
            ],
            method:
              "Cook all items in advance and portion into a container.",
          },
          {
            label: "Snack",
            title: "Protein Pudding",
            calories: "210 kcal",
            protein: "24g",
            ingredients: ["1 protein pudding cup", "Optional berries"],
            method: "Serve chilled.",
          },
          {
            label: "Dinner",
            title: "Turkey Meatballs with Zucchini",
            calories: "640 kcal",
            protein: "49g",
            ingredients: [
              "180g turkey meatballs",
              "Tomato sauce",
              "Zucchini noodles",
              "Parmesan sprinkle",
            ],
            method:
              "Cook turkey meatballs, heat sauce, and serve over zucchini noodles.",
          },
        ],
      },
      {
        title: "Day 7 — Weekend structure",
        totalCalories: "1,790 kcal",
        totalProtein: "150g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Yogurt Parfait",
            calories: "380 kcal",
            protein: "31g",
            ingredients: [
              "250g Greek yogurt",
              "Berries",
              "Flax seeds",
              "Small granola portion",
            ],
            method: "Layer ingredients in a glass or bowl.",
          },
          {
            label: "Lunch",
            title: "Grilled Chicken Sandwich",
            calories: "480 kcal",
            protein: "41g",
            ingredients: [
              "150g grilled chicken",
              "2 thin bread slices",
              "Salad",
              "Tomato",
            ],
            method: "Assemble into a sandwich and serve with salad.",
          },
          {
            label: "Snack",
            title: "Protein Bar + Orange",
            calories: "230 kcal",
            protein: "20g",
            ingredients: ["1 protein bar", "1 orange"],
            method: "Serve as a quick snack.",
          },
          {
            label: "Dinner",
            title: "Shrimp Rice Bowl",
            calories: "700 kcal",
            protein: "58g",
            ingredients: [
              "220g shrimp",
              "160g cooked rice",
              "Vegetables",
              "1 tsp oil",
            ],
            method: "Cook shrimp and vegetables, then serve over rice.",
          },
        ],
      },
      {
        title: "Day 8 — Higher satiety",
        totalCalories: "1,760 kcal",
        totalProtein: "148g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Veggie Omelet with Avocado Toast",
            calories: "400 kcal",
            protein: "26g",
            ingredients: [
              "3 eggs",
              "Spinach",
              "Tomato",
              "1 toast slice",
              "50g avocado",
            ],
            method: "Cook omelet and serve with avocado toast.",
          },
          {
            label: "Lunch",
            title: "Lean Beef Burrito Bowl",
            calories: "510 kcal",
            protein: "44g",
            ingredients: [
              "160g lean beef",
              "Lettuce",
              "Rice",
              "Salsa",
              "Beans",
            ],
            method: "Assemble into a bowl after cooking beef.",
          },
          {
            label: "Snack",
            title: "Skyr and Berries",
            calories: "190 kcal",
            protein: "22g",
            ingredients: ["200g skyr", "80g berries"],
            method: "Combine and serve chilled.",
          },
          {
            label: "Dinner",
            title: "Baked Cod with Asparagus",
            calories: "660 kcal",
            protein: "56g",
            ingredients: [
              "220g cod",
              "220g potatoes",
              "Asparagus",
              "1 tsp oil",
            ],
            method:
              "Bake cod and potatoes, roast asparagus, and serve together.",
          },
        ],
      },
      {
        title: "Day 9 — Light but filling",
        totalCalories: "1,730 kcal",
        totalProtein: "146g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Chia Protein Pudding",
            calories: "350 kcal",
            protein: "29g",
            ingredients: [
              "1 scoop whey",
              "15g chia seeds",
              "200ml almond milk",
              "Fruit topping",
            ],
            method:
              "Mix and chill until thick, then top with fruit.",
          },
          {
            label: "Lunch",
            title: "Chicken Caesar Wrap",
            calories: "500 kcal",
            protein: "42g",
            ingredients: [
              "150g chicken",
              "1 wrap",
              "Lettuce",
              "Parmesan",
              "Light Caesar dressing",
            ],
            method: "Wrap ingredients tightly and slice in half.",
          },
          {
            label: "Snack",
            title: "Edamame + Shake",
            calories: "250 kcal",
            protein: "28g",
            ingredients: ["100g edamame", "1 scoop whey"],
            method: "Cook edamame and drink the shake alongside.",
          },
          {
            label: "Dinner",
            title: "Turkey Chili with Rice",
            calories: "630 kcal",
            protein: "47g",
            ingredients: [
              "170g turkey mince",
              "Beans",
              "Tomato sauce",
              "130g cooked rice",
            ],
            method:
              "Cook turkey with tomato sauce and beans, then serve over rice.",
          },
        ],
      },
      {
        title: "Day 10 — Restaurant-style control",
        totalCalories: "1,810 kcal",
        totalProtein: "151g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Oatmeal with Whey and Banana",
            calories: "400 kcal",
            protein: "31g",
            ingredients: ["55g oats", "1 scoop whey", "1 banana"],
            method: "Cook oats and mix in whey. Top with sliced banana.",
          },
          {
            label: "Lunch",
            title: "Grilled Chicken Bowl",
            calories: "500 kcal",
            protein: "43g",
            ingredients: [
              "160g grilled chicken",
              "150g rice",
              "Vegetables",
            ],
            method: "Layer ingredients into a bowl.",
          },
          {
            label: "Snack",
            title: "Greek Yogurt + Apple",
            calories: "210 kcal",
            protein: "21g",
            ingredients: ["200g Greek yogurt", "1 apple"],
            method: "Serve cold with sliced apple.",
          },
          {
            label: "Dinner",
            title: "Steak with Roasted Vegetables",
            calories: "700 kcal",
            protein: "56g",
            ingredients: [
              "180g lean steak",
              "200g vegetables",
              "180g baked potato",
            ],
            method:
              "Cook steak to preference and roast vegetables and potato.",
          },
        ],
      },
      {
        title: "Day 11 — Repeatable cut day",
        totalCalories: "1,750 kcal",
        totalProtein: "150g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Eggs, Fruit, and Toast",
            calories: "360 kcal",
            protein: "25g",
            ingredients: ["3 eggs", "1 toast slice", "1 apple"],
            method: "Cook eggs and serve with toast and fruit.",
          },
          {
            label: "Lunch",
            title: "Tuna Potato Salad Bowl",
            calories: "500 kcal",
            protein: "39g",
            ingredients: [
              "1 can tuna",
              "220g potatoes",
              "Greens",
              "Light dressing",
            ],
            method: "Cook potatoes and combine with tuna and greens.",
          },
          {
            label: "Snack",
            title: "Cottage Cheese Berries",
            calories: "200 kcal",
            protein: "22g",
            ingredients: ["180g cottage cheese", "80g berries"],
            method: "Serve together in a bowl.",
          },
          {
            label: "Dinner",
            title: "Chicken Stir-Fry",
            calories: "690 kcal",
            protein: "64g",
            ingredients: [
              "200g chicken",
              "Vegetables",
              "150g cooked rice",
              "Soy sauce",
            ],
            method: "Stir-fry chicken and vegetables, then serve over rice.",
          },
        ],
      },
      {
        title: "Day 12 — Low-chaos day",
        totalCalories: "1,700 kcal",
        totalProtein: "143g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Protein Yogurt Cup",
            calories: "320 kcal",
            protein: "30g",
            ingredients: ["250g Greek yogurt", "Berries", "10g seeds"],
            method: "Mix and serve cold.",
          },
          {
            label: "Lunch",
            title: "Turkey Rice Salad",
            calories: "490 kcal",
            protein: "42g",
            ingredients: ["150g turkey", "140g rice", "Salad mix"],
            method: "Combine turkey, rice, and salad into a bowl.",
          },
          {
            label: "Snack",
            title: "Boiled Eggs + Banana",
            calories: "210 kcal",
            protein: "13g",
            ingredients: ["2 eggs", "1 banana"],
            method: "Serve prepared eggs with banana.",
          },
          {
            label: "Dinner",
            title: "Baked Fish Plate",
            calories: "680 kcal",
            protein: "58g",
            ingredients: ["220g fish", "220g potatoes", "Broccoli"],
            method: "Bake fish and potatoes, steam broccoli.",
          },
        ],
      },
      {
        title: "Day 13 — Cleaner carb split",
        totalCalories: "1,790 kcal",
        totalProtein: "154g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Protein Oats Bowl",
            calories: "400 kcal",
            protein: "33g",
            ingredients: ["Oats", "Whey", "Blueberries"],
            method: "Cook oats and stir in whey after heating.",
          },
          {
            label: "Lunch",
            title: "Chicken Wrap Meal",
            calories: "500 kcal",
            protein: "43g",
            ingredients: ["Chicken", "Wrap", "Lettuce", "Tomato"],
            method: "Assemble into wrap and serve.",
          },
          {
            label: "Snack",
            title: "Skyr Cup",
            calories: "180 kcal",
            protein: "20g",
            ingredients: ["200g skyr", "Cinnamon"],
            method: "Serve cold.",
          },
          {
            label: "Dinner",
            title: "Lean Beef Plate",
            calories: "710 kcal",
            protein: "58g",
            ingredients: ["180g lean beef", "Rice", "Vegetables"],
            method: "Cook beef and serve with rice and vegetables.",
          },
        ],
      },
      {
        title: "Day 14 — Lean finish",
        totalCalories: "1,770 kcal",
        totalProtein: "149g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Smoothie Bowl",
            calories: "360 kcal",
            protein: "30g",
            ingredients: ["Whey", "Banana", "Greek yogurt", "Ice"],
            method: "Blend thick and serve in a bowl.",
          },
          {
            label: "Lunch",
            title: "Chicken Burrito Bowl",
            calories: "520 kcal",
            protein: "44g",
            ingredients: ["Chicken", "Rice", "Beans", "Salsa"],
            method: "Layer ingredients in a bowl.",
          },
          {
            label: "Snack",
            title: "Protein Bar",
            calories: "220 kcal",
            protein: "20g",
            ingredients: ["1 protein bar"],
            method: "Serve as-is.",
          },
          {
            label: "Dinner",
            title: "Shrimp Sweet Potato Plate",
            calories: "670 kcal",
            protein: "55g",
            ingredients: ["Shrimp", "Sweet potato", "Vegetables"],
            method: "Cook shrimp, roast potato, and plate with vegetables.",
          },
        ],
      },
    ],
  },

  "Build Muscle": {
    summary:
      "Prioritize strong protein intake, enough calories, higher carbs around training, and recovery. These days are built to support training performance and muscle growth.",
    caloriesGuide: "Usually a slight calorie surplus",
    proteinGuide: "1.8–2.2g protein per kg bodyweight",
    carbsGuide: "Higher carbs around training",
    fatsGuide: "Moderate fats for recovery and hormones",
    hydration: "3L+ water daily",
    timing: [
      "Eat before and after training",
      "Use more carbs around hard sessions",
      "Keep protein consistent across the day",
      "Do not under-eat on heavy training days",
    ],
    grocery: [
      "Chicken / steak / lean beef / salmon",
      "Greek yogurt / cottage cheese / eggs",
      "Oats / bagels / rice / pasta / potatoes",
      "Fruit",
      "Nut butter",
      "Olive oil / avocado",
      "Easy carb sources for around training",
    ],
    sampleDays: [
      {
        title: "Day 1 — Classic gain day",
        totalCalories: "2,650 kcal",
        totalProtein: "178g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Oats with Whey and Peanut Butter",
            calories: "640 kcal",
            protein: "42g",
            ingredients: ["80g oats", "1 scoop whey", "1 banana", "20g peanut butter"],
            method: "Cook oats, stir in whey, top with banana and peanut butter.",
          },
          {
            label: "Lunch",
            title: "Beef Rice Bowl",
            calories: "700 kcal",
            protein: "48g",
            ingredients: ["180g lean beef", "220g cooked rice", "Avocado", "Vegetables"],
            method: "Cook beef and serve over rice with avocado and vegetables.",
          },
          {
            label: "Snack",
            title: "Greek Yogurt + Granola",
            calories: "420 kcal",
            protein: "28g",
            ingredients: ["250g Greek yogurt", "50g granola", "Honey"],
            method: "Combine and serve chilled.",
          },
          {
            label: "Dinner",
            title: "Chicken Pasta Bowl",
            calories: "890 kcal",
            protein: "60g",
            ingredients: ["200g chicken", "200g cooked pasta", "Tomato sauce", "Parmesan"],
            method: "Cook chicken and pasta, then combine with sauce and parmesan.",
          },
        ],
      },
      {
        title: "Day 2 — Heavy training support",
        totalCalories: "2,720 kcal",
        totalProtein: "181g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Bagel Egg Stack",
            calories: "620 kcal",
            protein: "37g",
            ingredients: ["1 bagel", "3 eggs", "Turkey slices", "Cheese slice"],
            method: "Build into a sandwich.",
          },
          {
            label: "Lunch",
            title: "Chicken Rice Plate",
            calories: "690 kcal",
            protein: "50g",
            ingredients: ["200g chicken", "220g rice", "Vegetables"],
            method: "Cook and serve together.",
          },
          {
            label: "Snack",
            title: "Shake + Banana + Rice Cakes",
            calories: "360 kcal",
            protein: "29g",
            ingredients: ["1 scoop whey", "1 banana", "3 rice cakes"],
            method: "Drink shake and eat the rest alongside.",
          },
          {
            label: "Dinner",
            title: "Salmon and Potatoes",
            calories: "1,050 kcal",
            protein: "65g",
            ingredients: ["220g salmon", "300g potatoes", "Vegetables", "1 tbsp oil"],
            method: "Bake salmon and potatoes, then serve with vegetables.",
          },
        ],
      },
      {
        title: "Day 3 — Easy surplus day",
        totalCalories: "2,600 kcal",
        totalProtein: "175g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Greek Yogurt Power Bowl",
            calories: "560 kcal",
            protein: "35g",
            ingredients: ["300g Greek yogurt", "60g oats", "Berries", "Honey"],
            method: "Mix together in a bowl.",
          },
          {
            label: "Lunch",
            title: "Steak Wrap Meal",
            calories: "720 kcal",
            protein: "48g",
            ingredients: ["180g steak", "2 wraps", "Vegetables", "Sauce"],
            method: "Cook steak, slice, and wrap with vegetables.",
          },
          {
            label: "Snack",
            title: "Cottage Cheese + Fruit + Nut Butter",
            calories: "370 kcal",
            protein: "24g",
            ingredients: ["200g cottage cheese", "Fruit", "15g nut butter"],
            method: "Serve everything in one bowl.",
          },
          {
            label: "Dinner",
            title: "Beef Pasta",
            calories: "950 kcal",
            protein: "68g",
            ingredients: ["200g lean beef", "220g pasta", "Tomato sauce"],
            method: "Cook pasta and beef, then combine.",
          },
        ],
      },
      {
        title: "Day 4 — Post-workout focus",
        totalCalories: "2,680 kcal",
        totalProtein: "180g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Overnight Oats",
            calories: "580 kcal",
            protein: "39g",
            ingredients: ["Oats", "Whey", "Banana", "Greek yogurt"],
            method: "Mix and chill overnight.",
          },
          {
            label: "Lunch",
            title: "Chicken Burrito Bowl",
            calories: "760 kcal",
            protein: "52g",
            ingredients: ["Chicken", "Rice", "Beans", "Salsa", "Corn"],
            method: "Build into a large bowl.",
          },
          {
            label: "Snack",
            title: "Chocolate Milk + Protein Bar",
            calories: "340 kcal",
            protein: "24g",
            ingredients: ["Chocolate milk", "1 protein bar"],
            method: "Serve as quick post-training fuel.",
          },
          {
            label: "Dinner",
            title: "Teriyaki Salmon Rice",
            calories: "1,000 kcal",
            protein: "65g",
            ingredients: ["Salmon", "Rice", "Vegetables", "Teriyaki sauce"],
            method: "Cook salmon and serve over rice.",
          },
        ],
      },
      {
        title: "Day 5 — Strong appetite day",
        totalCalories: "2,750 kcal",
        totalProtein: "185g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Eggs, Toast, Avocado, Fruit",
            calories: "670 kcal",
            protein: "34g",
            ingredients: ["4 eggs", "2 toast slices", "Avocado", "Fruit"],
            method: "Cook eggs and assemble plate.",
          },
          {
            label: "Lunch",
            title: "Double Chicken Rice Bowl",
            calories: "800 kcal",
            protein: "62g",
            ingredients: ["240g chicken", "220g rice", "Vegetables"],
            method: "Cook chicken and serve over rice.",
          },
          {
            label: "Snack",
            title: "Mass Smoothie",
            calories: "430 kcal",
            protein: "32g",
            ingredients: ["Whey", "Oats", "Banana", "Peanut butter", "Milk"],
            method: "Blend until smooth.",
          },
          {
            label: "Dinner",
            title: "Lean Beef Burgers with Potatoes",
            calories: "850 kcal",
            protein: "57g",
            ingredients: ["2 lean burger patties", "Potatoes", "Burger bun", "Salad"],
            method: "Cook patties, roast potatoes, and assemble.",
          },
        ],
      },
      {
        title: "Day 6 — High protein build",
        totalCalories: "2,620 kcal",
        totalProtein: "182g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Protein Pancakes",
            calories: "610 kcal",
            protein: "40g",
            ingredients: ["Oats", "Eggs", "Whey", "Berries", "Honey"],
            method: "Blend, cook into pancakes, and top with berries.",
          },
          {
            label: "Lunch",
            title: "Tuna Pasta Salad",
            calories: "680 kcal",
            protein: "46g",
            ingredients: ["Tuna", "Pasta", "Light mayo", "Vegetables"],
            method: "Mix all ingredients together.",
          },
          {
            label: "Snack",
            title: "Greek Yogurt + Cereal",
            calories: "330 kcal",
            protein: "23g",
            ingredients: ["Greek yogurt", "Crunchy cereal"],
            method: "Combine and serve.",
          },
          {
            label: "Dinner",
            title: "Chicken Thighs and Sweet Potato",
            calories: "1,000 kcal",
            protein: "73g",
            ingredients: ["Chicken thighs", "Sweet potato", "Vegetables"],
            method: "Bake and serve together.",
          },
        ],
      },
      {
        title: "Day 7 — Weekend muscle support",
        totalCalories: "2,700 kcal",
        totalProtein: "176g protein",
        meals: [
          {
            label: "Breakfast",
            title: "French Toast and Eggs",
            calories: "640 kcal",
            protein: "34g",
            ingredients: ["Bread", "Eggs", "Milk", "Fruit"],
            method: "Cook bread in egg mixture and serve with extra eggs.",
          },
          {
            label: "Lunch",
            title: "Steak Rice Bowl",
            calories: "760 kcal",
            protein: "50g",
            ingredients: ["Steak", "Rice", "Avocado", "Vegetables"],
            method: "Cook steak and serve over rice.",
          },
          {
            label: "Snack",
            title: "Cottage Cheese Granola Cup",
            calories: "320 kcal",
            protein: "24g",
            ingredients: ["Cottage cheese", "Granola"],
            method: "Combine and serve.",
          },
          {
            label: "Dinner",
            title: "Chicken Pesto Pasta",
            calories: "980 kcal",
            protein: "68g",
            ingredients: ["Chicken", "Pasta", "Pesto", "Parmesan"],
            method: "Cook and toss everything together.",
          },
        ],
      },
      {
        title: "Day 8 — Fast prep gain day",
        totalCalories: "2,610 kcal",
        totalProtein: "177g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Oats with Almond Butter",
            calories: "600 kcal",
            protein: "39g",
            ingredients: ["Oats", "Whey", "Almond butter", "Banana"],
            method: "Cook oats and stir in toppings.",
          },
          {
            label: "Lunch",
            title: "Turkey Rice Boxes",
            calories: "690 kcal",
            protein: "50g",
            ingredients: ["Turkey mince", "Rice", "Vegetables"],
            method: "Meal prep into containers.",
          },
          {
            label: "Snack",
            title: "Bagel + Protein Shake",
            calories: "350 kcal",
            protein: "28g",
            ingredients: ["Bagel", "1 scoop whey"],
            method: "Serve together.",
          },
          {
            label: "Dinner",
            title: "Beef Chili with Rice",
            calories: "970 kcal",
            protein: "60g",
            ingredients: ["Lean beef", "Beans", "Rice", "Tomato sauce"],
            method: "Cook chili and serve over rice.",
          },
        ],
      },
      {
        title: "Day 9 — Performance support",
        totalCalories: "2,690 kcal",
        totalProtein: "179g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Eggs, Bagel, Banana",
            calories: "620 kcal",
            protein: "35g",
            ingredients: ["3 eggs", "1 bagel", "1 banana"],
            method: "Cook eggs and serve with bagel and banana.",
          },
          {
            label: "Lunch",
            title: "Chicken Noodles",
            calories: "730 kcal",
            protein: "52g",
            ingredients: ["Chicken", "Noodles", "Vegetables", "Sauce"],
            method: "Cook and stir-fry together.",
          },
          {
            label: "Snack",
            title: "Yogurt Cereal Bowl",
            calories: "330 kcal",
            protein: "22g",
            ingredients: ["Greek yogurt", "Cereal"],
            method: "Combine in a bowl.",
          },
          {
            label: "Dinner",
            title: "Salmon Sushi Bowl",
            calories: "1,010 kcal",
            protein: "70g",
            ingredients: ["Salmon", "Rice", "Cucumber", "Avocado"],
            method: "Cook salmon and serve over rice with toppings.",
          },
        ],
      },
      {
        title: "Day 10 — Clean bulk",
        totalCalories: "2,640 kcal",
        totalProtein: "181g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Mass Smoothie Bowl",
            calories: "610 kcal",
            protein: "41g",
            ingredients: ["Whey", "Oats", "Berries", "Peanut butter"],
            method: "Blend thick and serve in a bowl.",
          },
          {
            label: "Lunch",
            title: "Lean Beef Burrito Bowl",
            calories: "710 kcal",
            protein: "50g",
            ingredients: ["Lean beef", "Rice", "Beans", "Salsa"],
            method: "Assemble after cooking beef.",
          },
          {
            label: "Snack",
            title: "Rice Cakes + Cottage Cheese + Jam",
            calories: "320 kcal",
            protein: "20g",
            ingredients: ["Rice cakes", "Cottage cheese", "Jam"],
            method: "Top rice cakes and serve.",
          },
          {
            label: "Dinner",
            title: "Chicken Breast Pasta",
            calories: "1,000 kcal",
            protein: "70g",
            ingredients: ["Chicken breast", "Pasta", "Garlic vegetables"],
            method: "Cook and combine all items.",
          },
        ],
      },
      {
        title: "Day 11 — Easy repeat gain day",
        totalCalories: "2,620 kcal",
        totalProtein: "176g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Yogurt Oats Honey Bowl",
            calories: "570 kcal",
            protein: "35g",
            ingredients: ["Greek yogurt", "Oats", "Banana", "Honey"],
            method: "Mix and serve cold.",
          },
          {
            label: "Lunch",
            title: "Chicken Wrap with Potatoes",
            calories: "700 kcal",
            protein: "47g",
            ingredients: ["Chicken", "Wrap", "Potatoes", "Salad"],
            method: "Wrap chicken and serve potatoes on the side.",
          },
          {
            label: "Snack",
            title: "Protein Shake + Trail Mix",
            calories: "360 kcal",
            protein: "28g",
            ingredients: ["Whey", "Trail mix"],
            method: "Shake and snack.",
          },
          {
            label: "Dinner",
            title: "Steak Rice Broccoli Plate",
            calories: "990 kcal",
            protein: "66g",
            ingredients: ["Steak", "Rice", "Broccoli"],
            method: "Cook steak and serve with rice and broccoli.",
          },
        ],
      },
      {
        title: "Day 12 — Carb loaded day",
        totalCalories: "2,760 kcal",
        totalProtein: "184g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Bagel Peanut Butter Stack",
            calories: "650 kcal",
            protein: "34g",
            ingredients: ["Bagel", "Peanut butter", "Whey shake"],
            method: "Toast bagel and serve with shake.",
          },
          {
            label: "Lunch",
            title: "Chicken Pasta Meal",
            calories: "760 kcal",
            protein: "54g",
            ingredients: ["Chicken", "Pasta", "Sauce"],
            method: "Cook and combine.",
          },
          {
            label: "Snack",
            title: "Yogurt + Granola + Fruit",
            calories: "350 kcal",
            protein: "23g",
            ingredients: ["Greek yogurt", "Granola", "Fruit"],
            method: "Mix together.",
          },
          {
            label: "Dinner",
            title: "Salmon Potato Plate",
            calories: "1,000 kcal",
            protein: "73g",
            ingredients: ["Salmon", "Potatoes", "Vegetables"],
            method: "Bake salmon and potatoes, then serve.",
          },
        ],
      },
      {
        title: "Day 13 — Recovery support",
        totalCalories: "2,630 kcal",
        totalProtein: "178g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Egg and Oat Plate",
            calories: "600 kcal",
            protein: "38g",
            ingredients: ["Eggs", "Oats", "Fruit"],
            method: "Cook separately and serve.",
          },
          {
            label: "Lunch",
            title: "Turkey Rice Bowl",
            calories: "690 kcal",
            protein: "49g",
            ingredients: ["Turkey mince", "Rice", "Vegetables"],
            method: "Cook and plate together.",
          },
          {
            label: "Snack",
            title: "Protein Pudding + Banana",
            calories: "290 kcal",
            protein: "24g",
            ingredients: ["Protein pudding", "Banana"],
            method: "Serve chilled.",
          },
          {
            label: "Dinner",
            title: "Beef Noodle Stir-Fry",
            calories: "1,050 kcal",
            protein: "67g",
            ingredients: ["Lean beef", "Noodles", "Vegetables"],
            method: "Stir-fry together.",
          },
        ],
      },
      {
        title: "Day 14 — Strong finish day",
        totalCalories: "2,700 kcal",
        totalProtein: "182g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Protein French Toast",
            calories: "630 kcal",
            protein: "39g",
            ingredients: ["Bread", "Eggs", "Whey", "Berries"],
            method: "Coat bread, cook, and top with berries.",
          },
          {
            label: "Lunch",
            title: "Chicken Burrito Plate",
            calories: "730 kcal",
            protein: "54g",
            ingredients: ["Chicken", "Rice", "Beans", "Vegetables"],
            method: "Serve on one plate or bowl.",
          },
          {
            label: "Snack",
            title: "Shake + Rice Cakes",
            calories: "320 kcal",
            protein: "28g",
            ingredients: ["Whey", "Rice cakes"],
            method: "Serve together.",
          },
          {
            label: "Dinner",
            title: "Steak Pasta Bowl",
            calories: "1,020 kcal",
            protein: "61g",
            ingredients: ["Steak", "Pasta", "Tomato sauce"],
            method: "Cook and combine.",
          },
        ],
      },
    ],
  },

  "Tone & Shape Body": {
    summary:
      "Use balanced calories, strong protein, controlled portions, and consistent training support. These days help members improve body shape without feeling extreme or overly restrictive.",
    caloriesGuide: "Maintenance or light deficit depending on current body composition",
    proteinGuide: "High protein daily",
    carbsGuide: "Moderate carbs around training and active days",
    fatsGuide: "Balanced fats from quality sources",
    hydration: "2.5–3L water daily",
    timing: [
      "Keep meals structured and repeatable",
      "Protein in every meal",
      "Use simple meals during busy days",
      "Avoid turning weekends into all-or-nothing eating",
    ],
    grocery: [
      "Chicken / turkey / fish",
      "Eggs / egg whites / Greek yogurt",
      "Rice / potatoes / oats / wraps",
      "Fruit",
      "Salad vegetables / greens",
      "Olive oil / avocado / nuts",
    ],
    sampleDays: [
      {
        title: "Day 1 — Balanced shape day",
        totalCalories: "2,030 kcal",
        totalProtein: "154g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Eggs, Toast, Fruit",
            calories: "430 kcal",
            protein: "28g",
            ingredients: ["3 eggs", "2 toast slices", "Fruit"],
            method: "Cook eggs and serve with toast and fruit.",
          },
          {
            label: "Lunch",
            title: "Chicken Wrap + Salad",
            calories: "520 kcal",
            protein: "42g",
            ingredients: ["Chicken", "Wrap", "Salad", "Light dressing"],
            method: "Assemble wrap and serve with side salad.",
          },
          {
            label: "Snack",
            title: "Protein Smoothie",
            calories: "260 kcal",
            protein: "28g",
            ingredients: ["Whey", "Banana", "Almond milk"],
            method: "Blend until smooth.",
          },
          {
            label: "Dinner",
            title: "Fish, Sweet Potato, Vegetables",
            calories: "820 kcal",
            protein: "56g",
            ingredients: ["Fish", "Sweet potato", "Vegetables", "Olive oil"],
            method: "Bake and serve together.",
          },
        ],
      },
      {
        title: "Day 2 — Lean and polished",
        totalCalories: "1,980 kcal",
        totalProtein: "150g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Greek Yogurt with Berries",
            calories: "390 kcal",
            protein: "31g",
            ingredients: ["Greek yogurt", "Berries", "Oats"],
            method: "Combine in a bowl.",
          },
          {
            label: "Lunch",
            title: "Turkey Rice Bowl",
            calories: "540 kcal",
            protein: "43g",
            ingredients: ["Turkey", "Rice", "Cucumber", "Greens"],
            method: "Cook turkey and serve with rice and greens.",
          },
          {
            label: "Snack",
            title: "Cottage Cheese + Fruit",
            calories: "220 kcal",
            protein: "22g",
            ingredients: ["Cottage cheese", "Fruit"],
            method: "Serve cold.",
          },
          {
            label: "Dinner",
            title: "Chicken Stir-Fry",
            calories: "830 kcal",
            protein: "54g",
            ingredients: ["Chicken", "Rice", "Vegetables", "Light sauce"],
            method: "Stir-fry and serve over rice.",
          },
        ],
      },
      {
        title: "Day 3 — Office-friendly shape day",
        totalCalories: "2,020 kcal",
        totalProtein: "152g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Overnight Oats",
            calories: "420 kcal",
            protein: "32g",
            ingredients: ["Oats", "Whey", "Greek yogurt"],
            method: "Mix and chill overnight.",
          },
          {
            label: "Lunch",
            title: "Tuna Pasta Salad",
            calories: "540 kcal",
            protein: "38g",
            ingredients: ["Tuna", "Pasta", "Vegetables"],
            method: "Mix all together.",
          },
          {
            label: "Snack",
            title: "Protein Bar + Apple",
            calories: "260 kcal",
            protein: "20g",
            ingredients: ["Protein bar", "Apple"],
            method: "Serve as quick snack.",
          },
          {
            label: "Dinner",
            title: "Salmon and Broccoli Plate",
            calories: "800 kcal",
            protein: "62g",
            ingredients: ["Salmon", "Potatoes", "Broccoli"],
            method: "Bake salmon and potatoes, steam broccoli.",
          },
        ],
      },
      {
        title: "Day 4 — Light structured day",
        totalCalories: "1,960 kcal",
        totalProtein: "148g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Smoothie Start",
            calories: "350 kcal",
            protein: "30g",
            ingredients: ["Whey", "Banana", "Spinach", "Almond milk"],
            method: "Blend until smooth.",
          },
          {
            label: "Lunch",
            title: "Chicken Caesar Wrap",
            calories: "510 kcal",
            protein: "41g",
            ingredients: ["Chicken", "Wrap", "Lettuce", "Light Caesar"],
            method: "Assemble and wrap tightly.",
          },
          {
            label: "Snack",
            title: "Greek Yogurt Cup",
            calories: "180 kcal",
            protein: "20g",
            ingredients: ["Greek yogurt"],
            method: "Serve chilled.",
          },
          {
            label: "Dinner",
            title: "Turkey Meatballs with Rice",
            calories: "920 kcal",
            protein: "57g",
            ingredients: ["Turkey meatballs", "Rice", "Greens", "Tomato sauce"],
            method: "Cook meatballs and serve over rice.",
          },
        ],
      },
      {
        title: "Day 5 — Active day support",
        totalCalories: "2,040 kcal",
        totalProtein: "156g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Mushroom Omelet",
            calories: "400 kcal",
            protein: "29g",
            ingredients: ["Eggs", "Mushrooms", "Toast"],
            method: "Cook omelet and serve with toast.",
          },
          {
            label: "Lunch",
            title: "Beef Rice Bowl",
            calories: "560 kcal",
            protein: "44g",
            ingredients: ["Lean beef", "Rice", "Vegetables"],
            method: "Cook beef and serve with rice.",
          },
          {
            label: "Snack",
            title: "Rice Cakes + Cottage Cheese",
            calories: "220 kcal",
            protein: "17g",
            ingredients: ["Rice cakes", "Cottage cheese"],
            method: "Serve together.",
          },
          {
            label: "Dinner",
            title: "Fish Tacos",
            calories: "860 kcal",
            protein: "66g",
            ingredients: ["White fish", "Wraps", "Salad", "Sauce"],
            method: "Cook fish and build tacos.",
          },
        ],
      },
      {
        title: "Day 6 — Weekend control",
        totalCalories: "1,990 kcal",
        totalProtein: "150g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Yogurt Chia Bowl",
            calories: "390 kcal",
            protein: "31g",
            ingredients: ["Greek yogurt", "Chia", "Berries"],
            method: "Mix and chill.",
          },
          {
            label: "Lunch",
            title: "Chicken Sandwich",
            calories: "520 kcal",
            protein: "41g",
            ingredients: ["Chicken", "Bread", "Salad"],
            method: "Assemble sandwich.",
          },
          {
            label: "Snack",
            title: "Protein Shake + Banana",
            calories: "230 kcal",
            protein: "27g",
            ingredients: ["Whey", "Banana"],
            method: "Shake and serve.",
          },
          {
            label: "Dinner",
            title: "Shrimp Pasta",
            calories: "850 kcal",
            protein: "51g",
            ingredients: ["Shrimp", "Pasta", "Vegetables"],
            method: "Cook shrimp and pasta together.",
          },
        ],
      },
      {
        title: "Day 7 — Higher protein shape day",
        totalCalories: "2,050 kcal",
        totalProtein: "158g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Scrambled Eggs and Avocado Toast",
            calories: "460 kcal",
            protein: "28g",
            ingredients: ["Eggs", "Toast", "Avocado", "Kiwi"],
            method: "Cook eggs and serve over toast.",
          },
          {
            label: "Lunch",
            title: "Turkey Burrito Bowl",
            calories: "560 kcal",
            protein: "45g",
            ingredients: ["Turkey mince", "Rice", "Beans", "Salsa"],
            method: "Assemble in a bowl.",
          },
          {
            label: "Snack",
            title: "Skyr + Fruit",
            calories: "200 kcal",
            protein: "22g",
            ingredients: ["Skyr", "Fruit"],
            method: "Serve cold.",
          },
          {
            label: "Dinner",
            title: "Grilled Salmon Plate",
            calories: "830 kcal",
            protein: "63g",
            ingredients: ["Salmon", "Potatoes", "Asparagus"],
            method: "Bake and serve together.",
          },
        ],
      },
      {
        title: "Day 8 — Quick prep",
        totalCalories: "1,970 kcal",
        totalProtein: "149g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Oats with Whey",
            calories: "390 kcal",
            protein: "31g",
            ingredients: ["Oats", "Whey", "Strawberries"],
            method: "Cook oats and mix in whey.",
          },
          {
            label: "Lunch",
            title: "Meal Prep Chicken Box",
            calories: "530 kcal",
            protein: "44g",
            ingredients: ["Chicken", "Rice", "Vegetables"],
            method: "Prep in advance and portion out.",
          },
          {
            label: "Snack",
            title: "Boiled Eggs + Orange",
            calories: "200 kcal",
            protein: "13g",
            ingredients: ["2 eggs", "1 orange"],
            method: "Serve together.",
          },
          {
            label: "Dinner",
            title: "Beef Mince Sweet Potato Bowl",
            calories: "850 kcal",
            protein: "61g",
            ingredients: ["Lean beef mince", "Sweet potato", "Greens"],
            method: "Cook beef and serve over sweet potato.",
          },
        ],
      },
      {
        title: "Day 9 — Lean routine",
        totalCalories: "2,000 kcal",
        totalProtein: "153g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Protein Pancakes",
            calories: "420 kcal",
            protein: "33g",
            ingredients: ["Oats", "Eggs", "Whey", "Berries"],
            method: "Blend and cook as pancakes.",
          },
          {
            label: "Lunch",
            title: "Tuna Wrap",
            calories: "500 kcal",
            protein: "38g",
            ingredients: ["Tuna", "Wrap", "Cucumber salad"],
            method: "Assemble wrap and serve with salad.",
          },
          {
            label: "Snack",
            title: "Cottage Cheese Pineapple",
            calories: "220 kcal",
            protein: "22g",
            ingredients: ["Cottage cheese", "Pineapple"],
            method: "Serve chilled.",
          },
          {
            label: "Dinner",
            title: "Chicken Breast Plate",
            calories: "860 kcal",
            protein: "60g",
            ingredients: ["Chicken breast", "Potatoes", "Greens"],
            method: "Bake or grill and serve.",
          },
        ],
      },
      {
        title: "Day 10 — Shape-focused balance",
        totalCalories: "2,030 kcal",
        totalProtein: "155g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Yogurt Parfait",
            calories: "400 kcal",
            protein: "31g",
            ingredients: ["Greek yogurt", "Oats", "Banana"],
            method: "Layer in a bowl or jar.",
          },
          {
            label: "Lunch",
            title: "Salmon Rice Bowl",
            calories: "560 kcal",
            protein: "42g",
            ingredients: ["Salmon", "Rice", "Avocado"],
            method: "Cook salmon and serve over rice.",
          },
          {
            label: "Snack",
            title: "Protein Pudding",
            calories: "190 kcal",
            protein: "20g",
            ingredients: ["Protein pudding cup"],
            method: "Serve chilled.",
          },
          {
            label: "Dinner",
            title: "Turkey Chili",
            calories: "880 kcal",
            protein: "62g",
            ingredients: ["Turkey mince", "Beans", "Vegetables", "Tomato sauce"],
            method: "Cook together until thick.",
          },
        ],
      },
      {
        title: "Day 11 — Easy repeat shape day",
        totalCalories: "1,990 kcal",
        totalProtein: "151g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Eggs, Oats, Berries",
            calories: "430 kcal",
            protein: "30g",
            ingredients: ["Eggs", "Oats", "Berries"],
            method: "Cook eggs and oats separately.",
          },
          {
            label: "Lunch",
            title: "Chicken Salad Bowl",
            calories: "500 kcal",
            protein: "42g",
            ingredients: ["Chicken", "Rice", "Salad mix"],
            method: "Build bowl with cooked chicken and rice.",
          },
          {
            label: "Snack",
            title: "Greek Yogurt + Apple",
            calories: "210 kcal",
            protein: "21g",
            ingredients: ["Greek yogurt", "Apple"],
            method: "Serve chilled with sliced apple.",
          },
          {
            label: "Dinner",
            title: "White Fish Plate",
            calories: "850 kcal",
            protein: "58g",
            ingredients: ["White fish", "Sweet potato", "Green vegetables"],
            method: "Bake and serve together.",
          },
        ],
      },
      {
        title: "Day 12 — Clean structure day",
        totalCalories: "1,970 kcal",
        totalProtein: "149g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Smoothie Bowl",
            calories: "380 kcal",
            protein: "29g",
            ingredients: ["Whey", "Yogurt", "Banana", "Ice"],
            method: "Blend thick and serve.",
          },
          {
            label: "Lunch",
            title: "Turkey Wrap Meal",
            calories: "520 kcal",
            protein: "41g",
            ingredients: ["Turkey", "Wrap", "Lettuce", "Tomato"],
            method: "Assemble wrap and serve.",
          },
          {
            label: "Snack",
            title: "Skyr Pot",
            calories: "180 kcal",
            protein: "20g",
            ingredients: ["Skyr", "Cinnamon"],
            method: "Serve cold.",
          },
          {
            label: "Dinner",
            title: "Lean Beef Rice Plate",
            calories: "890 kcal",
            protein: "59g",
            ingredients: ["Lean beef", "Rice", "Vegetables"],
            method: "Cook and plate together.",
          },
        ],
      },
      {
        title: "Day 13 — Weekend shape support",
        totalCalories: "2,040 kcal",
        totalProtein: "156g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Avocado Egg Toast",
            calories: "450 kcal",
            protein: "27g",
            ingredients: ["Eggs", "Toast", "Avocado"],
            method: "Cook eggs and serve on toast.",
          },
          {
            label: "Lunch",
            title: "Chicken Burrito Bowl",
            calories: "560 kcal",
            protein: "44g",
            ingredients: ["Chicken", "Rice", "Beans", "Salsa"],
            method: "Layer in a bowl.",
          },
          {
            label: "Snack",
            title: "Protein Shake",
            calories: "170 kcal",
            protein: "25g",
            ingredients: ["Whey", "Water or milk"],
            method: "Shake and serve.",
          },
          {
            label: "Dinner",
            title: "Salmon Potato Bowl",
            calories: "860 kcal",
            protein: "60g",
            ingredients: ["Salmon", "Potatoes", "Vegetables"],
            method: "Bake and serve together.",
          },
        ],
      },
      {
        title: "Day 14 — Strong balanced finish",
        totalCalories: "2,010 kcal",
        totalProtein: "154g protein",
        meals: [
          {
            label: "Breakfast",
            title: "Protein Oat Bowl",
            calories: "410 kcal",
            protein: "32g",
            ingredients: ["Oats", "Whey", "Fruit"],
            method: "Cook oats and stir in whey.",
          },
          {
            label: "Lunch",
            title: "Tuna Rice Salad",
            calories: "500 kcal",
            protein: "39g",
            ingredients: ["Tuna", "Rice", "Greens"],
            method: "Mix all ingredients together.",
          },
          {
            label: "Snack",
            title: "Cottage Cheese Cup",
            calories: "200 kcal",
            protein: "22g",
            ingredients: ["Cottage cheese", "Berries"],
            method: "Serve cold.",
          },
          {
            label: "Dinner",
            title: "Chicken and Sweet Potato Plate",
            calories: "900 kcal",
            protein: "61g",
            ingredients: ["Chicken", "Sweet potato", "Greens"],
            method: "Bake and serve.",
          },
        ],
      },
    ],
  },
};

function MacroCard({ label, value }) {
  return (
    <div style={macroCard}>
      <div style={macroLabel}>{label}</div>
      <div style={macroValue}>{value}</div>
    </div>
  );
}

function MealCard({ meal }) {
  return (
    <div style={mealCard}>
      <div style={mealTopRow}>
        <div>
          <div style={mealLabel}>{meal.label}</div>
          <div style={mealTitle}>{meal.title}</div>
        </div>
        <div style={mealStats}>
          <span style={mealStatPill}>{meal.calories}</span>
          <span style={mealStatPill}>{meal.protein}</span>
        </div>
      </div>

      <div style={mealSection}>
        <div style={miniHeading}>Ingredients</div>
        <ul style={ingredientsList}>
          {meal.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={mealSection}>
        <div style={miniHeading}>How to make it</div>
        <p style={mealMethod}>{meal.method}</p>
      </div>
    </div>
  );
}

export default function NutritionClient({ membershipType }) {
  const membership = String(membershipType || "").toLowerCase();
  const isStarter = membership === "starter";

  const goals = Object.keys(nutritionPlans);
  const [selectedGoal, setSelectedGoal] = useState("Build Muscle");
  const [selectedDay, setSelectedDay] = useState(0);

  const plan = nutritionPlans[selectedGoal];
  const activeDay = useMemo(() => {
    return plan.sampleDays[selectedDay] || plan.sampleDays[0];
  }, [plan, selectedDay]);

  function handleGoalChange(goal) {
    setSelectedGoal(goal);
    setSelectedDay(0);
  }

  return (
    <div style={pageWrap}>
      <section style={heroCard}>
        <div style={eyebrow}>Nutrition Plans</div>
        <h1 style={heroTitle}>14-day meal plan examples for every goal</h1>
        <p style={heroText}>
          Members can switch between goals and compare full eating days with
          calories, protein, ingredients, and prep instructions. This makes the
          page feel much more premium and useful right away.
        </p>

        <div style={goalTabs}>
          {goals.map((goal) => {
            const active = selectedGoal === goal;
            return (
              <button
                key={goal}
                onClick={() => handleGoalChange(goal)}
                style={{
                  ...goalTab,
                  background: active ? "#ffffff" : "rgba(255,255,255,0.04)",
                  color: active ? "#111111" : "#ffffff",
                  border: active
                    ? "1px solid rgba(255,255,255,0.95)"
                    : "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {goal}
              </button>
            );
          })}
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionTop}>
          <div style={eyebrow}>Nutrition Direction</div>
          <h2 style={sectionTitle}>{selectedGoal}</h2>
        </div>

        <p style={muted}>{plan.summary}</p>

        <div style={macroGrid}>
          <MacroCard label="Calories" value={plan.caloriesGuide} />
          <MacroCard label="Protein" value={plan.proteinGuide} />
          <MacroCard label="Carbs" value={plan.carbsGuide} />
          <MacroCard label="Fats" value={plan.fatsGuide} />
          <MacroCard label="Hydration" value={plan.hydration} />
        </div>
      </section>

      <section style={twoColGrid}>
        <div style={sectionCard}>
          <div style={eyebrow}>Meal Timing</div>
          <h2 style={sectionTitleSmall}>How to structure your day</h2>
          <ul style={list}>
            {plan.timing.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={sectionCard}>
          <div style={eyebrow}>Grocery Base</div>
          <h2 style={sectionTitleSmall}>What to keep in the house</h2>
          <ul style={list}>
            {plan.grocery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sampleHeader}>
          <div>
            <div style={eyebrow}>Sample Days</div>
            <h2 style={sectionTitle}>Choose a full day</h2>
            <p style={mutedCompact}>
              {plan.sampleDays.length} full days available for {selectedGoal}
            </p>
          </div>

          <div style={summaryBox}>
            <div style={summaryBoxLabel}>Selected day totals</div>
            <div style={summaryBoxValue}>{activeDay.totalCalories}</div>
            <div style={summaryBoxSub}>{activeDay.totalProtein}</div>
          </div>
        </div>

        <div style={dayTabs}>
          {plan.sampleDays.map((day, index) => {
            const active = selectedDay === index;
            return (
              <button
                key={day.title}
                onClick={() => setSelectedDay(index)}
                style={{
                  ...dayTab,
                  background: active
                    ? "rgba(255,255,255,0.14)"
                    : "rgba(255,255,255,0.03)",
                  border: active
                    ? "1px solid rgba(255,255,255,0.22)"
                    : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                Day {index + 1}
              </button>
            );
          })}
        </div>

        <div style={featuredDayCard}>
          <div style={featuredDayTop}>
            <div>
              <div style={featuredDayTitle}>{activeDay.title}</div>
              <div style={featuredDayMeta}>
                <span style={featuredMetaPill}>{activeDay.totalCalories}</span>
                <span style={featuredMetaPill}>{activeDay.totalProtein}</span>
              </div>
            </div>
          </div>

          <div style={mealsGrid}>
            {activeDay.meals.map((meal) => (
              <MealCard key={`${activeDay.title}-${meal.label}-${meal.title}`} meal={meal} />
            ))}
          </div>
        </div>
      </section>

      {isStarter && (
        <section style={lockedCard}>
          <div style={lockedTitle}>Starter nutrition access</div>
          <p style={muted}>
            Starter now already feels much more complete with real example days.
            Premium and VIP can later unlock custom calorie targets, saved meal
            plans, shopping lists, substitutions, and member-specific nutrition
            adjustments.
          </p>
        </section>
      )}
    </div>
  );
}

const pageWrap = {
  display: "grid",
  gap: "22px",
};

const heroCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "24px",
  padding: "28px",
};

const sectionCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
};

const lockedCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px dashed rgba(255,255,255,0.2)",
  borderRadius: "22px",
  padding: "24px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const heroTitle = {
  margin: 0,
  fontSize: "clamp(28px, 4vw, 42px)",
  fontWeight: "800",
  lineHeight: 1.08,
};

const heroText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginTop: "12px",
  maxWidth: "780px",
};

const sectionTop = {
  marginBottom: "14px",
};

const sectionTitle = {
  margin: 0,
  fontSize: "28px",
  fontWeight: "800",
};

const sectionTitleSmall = {
  margin: 0,
  fontSize: "24px",
  fontWeight: "800",
};

const muted = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
};

const mutedCompact = {
  color: "rgba(255,255,255,0.62)",
  lineHeight: 1.6,
  marginTop: "6px",
};

const goalTabs = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "18px",
};

const goalTab = {
  padding: "12px 14px",
  borderRadius: "12px",
  fontWeight: "700",
  cursor: "pointer",
};

const macroGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "14px",
  marginTop: "18px",
};

const macroCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "18px",
};

const macroLabel = {
  color: "rgba(255,255,255,0.56)",
  marginBottom: "8px",
};

const macroValue = {
  fontWeight: "800",
  lineHeight: 1.6,
};

const twoColGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "22px",
};

const list = {
  paddingLeft: "18px",
  lineHeight: 1.9,
  color: "rgba(255,255,255,0.72)",
};

const sampleHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px",
  marginBottom: "18px",
  flexWrap: "wrap",
};

const summaryBox = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "16px 18px",
  minWidth: "220px",
};

const summaryBoxLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "6px",
};

const summaryBoxValue = {
  fontSize: "22px",
  fontWeight: "800",
};

const summaryBoxSub = {
  color: "rgba(255,255,255,0.68)",
  marginTop: "4px",
};

const dayTabs = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginBottom: "18px",
};

const dayTab = {
  padding: "10px 14px",
  borderRadius: "12px",
  color: "white",
  fontWeight: "700",
  cursor: "pointer",
};

const featuredDayCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const featuredDayTop = {
  marginBottom: "16px",
};

const featuredDayTitle = {
  fontSize: "22px",
  fontWeight: "800",
  marginBottom: "10px",
};

const featuredDayMeta = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const featuredMetaPill = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "999px",
  padding: "8px 12px",
  fontWeight: "700",
  fontSize: "14px",
};

const mealsGrid = {
  display: "grid",
  gap: "14px",
};

const mealCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "16px",
};

const mealTopRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "12px",
  marginBottom: "14px",
  flexWrap: "wrap",
};

const mealLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "6px",
};

const mealTitle = {
  fontSize: "20px",
  fontWeight: "800",
};

const mealStats = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
};

const mealStatPill = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "999px",
  padding: "8px 12px",
  fontSize: "13px",
  fontWeight: "700",
};

const mealSection = {
  marginTop: "12px",
};

const miniHeading = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const ingredientsList = {
  paddingLeft: "18px",
  lineHeight: 1.8,
  color: "rgba(255,255,255,0.74)",
  margin: 0,
};

const mealMethod = {
  margin: 0,
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.75,
};

const lockedTitle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "8px",
};
