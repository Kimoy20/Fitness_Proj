"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Users,
  MapPin,
  Zap,
  Clock,
  DollarSign,
  TrendingUp,
  Star,
  Heart,
  Share2,
  Calendar,
  Target,
  Award,
  CheckCircle,
  Flame,
  Utensils,
  Droplets,
  Apple,
  Coffee,
} from "lucide-react";

interface SportDetail {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  intensity: string;
  environment: string;
  social: string;
  barrierToEntry: {
    cost: string;
    gear: string[];
    learningCurve: string;
  };
  fitnessROI: {
    primaryMuscles: string[];
    cardio: string;
    strength: string;
    flexibility: string;
    benefits: string[];
    caloriesBurned: {
      per30Min: number;
      per60Min: number;
      perHour: number;
      notes: string;
    };
  };
  vibeCheck: {
    community: string;
    culture: string;
    bestFor: string[];
  };
  timeCommitment: {
    sessionLength: string;
    frequency: string;
    travelRequired: string;
  };
  tags: string[];
  description: string;
  rating: number;
  popularity: number;
  equipment: string[];
  howToStart: string[];
  tips: string[];
  variations: string[];
  nutrition: {
    dailyCalories: number;
    protein: string;
    carbs: string;
    fat: string;
    hydration: string;
    preWorkout: {
      timing: string;
      foods: string[];
      purpose: string;
    };
    postWorkout: {
      timing: string;
      foods: string[];
      purpose: string;
    };
    mealPlan: {
      breakfast: Array<{
        name: string;
        ingredients: string[];
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
      }>;
      lunch: Array<{
        name: string;
        ingredients: string[];
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
      }>;
      dinner: Array<{
        name: string;
        ingredients: string[];
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
      }>;
      snacks: Array<{
        name: string;
        ingredients: string[];
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
      }>;
    };
    weeklyMeals: {
      monday: {
        breakfast: string;
        lunch: string;
        dinner: string;
        snacks: string;
      };
      tuesday: {
        breakfast: string;
        lunch: string;
        dinner: string;
        snacks: string;
      };
      wednesday: {
        breakfast: string;
        lunch: string;
        dinner: string;
        snacks: string;
      };
      thursday: {
        breakfast: string;
        lunch: string;
        dinner: string;
        snacks: string;
      };
      friday: {
        breakfast: string;
        lunch: string;
        dinner: string;
        snacks: string;
      };
    };
    supplements: string[];
    notes: string;
  };
}

const sportData: { [key: string]: SportDetail } = {
  swimming: {
    id: "swimming",
    name: "Swimming",
    category: "individual",
    difficulty: "beginner",
    intensity: "medium",
    environment: "both",
    social: "solitary",
    barrierToEntry: {
      cost: "$$",
      gear: ["Swimsuit", "Goggles", "Swim cap"],
      learningCurve: "gentle",
    },
    fitnessROI: {
      primaryMuscles: ["full body", "core", "shoulders", "back", "legs"],
      cardio: "high",
      strength: "medium",
      flexibility: "medium",
      benefits: [
        "low impact on joints",
        "improves lung capacity",
        "full body workout",
        "stress relief",
      ],
      caloriesBurned: {
        per30Min: 220,
        per60Min: 440,
        perHour: 440,
        notes: "Based on moderate freestyle swimming for 155lb person",
      },
    },
    vibeCheck: {
      community: "casual",
      culture:
        "Swimming communities are generally welcoming and focused on personal improvement. Lane swimming etiquette is important, but most swimmers are respectful of different skill levels.",
      bestFor: [
        "people seeking low-impact exercise",
        "those who enjoy meditative movement",
        "cross-training athletes",
        "stress relief seekers",
      ],
    },
    timeCommitment: {
      sessionLength: "30-60 min",
      frequency: "2-4x/week",
      travelRequired: "minimal",
    },
    tags: [
      "low impact",
      "full body",
      "cardio",
      "meditative",
      "indoor",
      "outdoor",
    ],
    description:
      "Full-body, low-impact exercise perfect for all fitness levels and ages.",
    rating: 4.8,
    popularity: 95,
    equipment: ["Swimsuit", "Goggles", "Swim cap", "Kickboard", "Pull buoy"],
    howToStart: [
      "Find a local pool with lap swimming hours",
      "Start with 15-20 minute sessions",
      "Focus on proper breathing technique",
      "Consider taking beginner lessons",
    ],
    tips: [
      "Warm up before and cool down after each session",
      "Vary your strokes to work different muscle groups",
      "Use a waterproof watch to track intervals",
      "Join a masters swimming group for motivation",
    ],
    variations: [
      "Freestyle",
      "Backstroke",
      "Breaststroke",
      "Butterfly",
      "Water aerobics",
    ],
    nutrition: {
      dailyCalories: 2800,
      protein: "140g",
      carbs: "350g",
      fat: "90g",
      hydration: "3-4 liters",
      preWorkout: {
        timing: "1-2 hours before",
        foods: ["banana", "oatmeal", "toast with almond butter"],
        purpose: "Sustained energy for long swims",
      },
      postWorkout: {
        timing: "Within 30-60 minutes",
        foods: ["protein shake", "grilled chicken", "brown rice", "vegetables"],
        purpose: "Muscle recovery and glycogen replenishment",
      },
      mealPlan: {
        breakfast: [
          {
            name: "Swimmer's Power Oatmeal",
            ingredients: [
              "1.5 cups oats",
              "1 scoop protein powder",
              "1 banana",
              "2 tbsp almond butter",
              "1 cup berries",
            ],
            calories: 550,
            protein: 40,
            carbs: 70,
            fat: 18,
          },
        ],
        lunch: [
          {
            name: "Grilled Salmon Bowl",
            ingredients: [
              "6oz salmon",
              "1 cup quinoa",
              "mixed vegetables",
              "avocado",
              "olive oil",
            ],
            calories: 650,
            protein: 45,
            carbs: 50,
            fat: 30,
          },
        ],
        dinner: [
          {
            name: "Lean Chicken Pasta",
            ingredients: [
              "6oz chicken breast",
              "2 cups whole wheat pasta",
              "marinara sauce",
              "side salad",
            ],
            calories: 700,
            protein: 50,
            carbs: 80,
            fat: 20,
          },
        ],
        snacks: [
          {
            name: "Recovery Smoothie",
            ingredients: [
              "1 cup Greek yogurt",
              "banana",
              "spinach",
              "protein powder",
              "almond milk",
            ],
            calories: 350,
            protein: 30,
            carbs: 45,
            fat: 8,
          },
        ],
      },
      weeklyMeals: {
        monday: {
          breakfast: "Swimmer's Power Oatmeal with protein powder",
          lunch: "Grilled chicken salad with quinoa",
          dinner: "Salmon with sweet potato and vegetables",
          snacks: "Greek yogurt with berries",
        },
        tuesday: {
          breakfast: "Whole grain toast with almond butter and banana",
          lunch: "Turkey wrap with vegetables",
          dinner: "Lean beef with brown rice and broccoli",
          snacks: "Protein shake",
        },
        wednesday: {
          breakfast: "Egg white omelet with vegetables",
          lunch: "Tuna salad with whole grain crackers",
          dinner: "Chicken stir-fry with mixed vegetables",
          snacks: "Apple with almond butter",
        },
        thursday: {
          breakfast: "Smoothie with protein powder and fruits",
          lunch: "Quinoa bowl with roasted vegetables",
          dinner: "Grilled fish with asparagus",
          snacks: "Trail mix",
        },
        friday: {
          breakfast: "Oatmeal with nuts and seeds",
          lunch: "Chicken and avocado sandwich",
          dinner: "Pasta with lean meat sauce",
          snacks: "Cottage cheese with fruit",
        },
      },
      supplements: [
        "whey protein",
        "omega-3 fish oil",
        "multivitamin",
        "electrolytes",
      ],
      notes:
        "Swimmers need higher carbohydrate intake for endurance. Focus on complex carbs and lean proteins.",
    },
  },
  "rock-climbing": {
    id: "rock-climbing",
    name: "Rock Climbing",
    category: "individual",
    difficulty: "intermediate",
    intensity: "high",
    environment: "both",
    social: "small_group",
    barrierToEntry: {
      cost: "$$$",
      gear: ["Climbing shoes", "Harness", "Chalk bag", "Belay device"],
      learningCurve: "moderate",
    },
    fitnessROI: {
      primaryMuscles: ["forearms", "back", "biceps", "core", "legs"],
      cardio: "medium",
      strength: "high",
      flexibility: "medium",
      benefits: [
        "problem-solving skills",
        "full body strength",
        "mental focus",
        "confidence building",
      ],
      caloriesBurned: {
        per30Min: 280,
        per60Min: 560,
        perHour: 560,
        notes: "Based on moderate rock climbing for 155lb person",
      },
    },
    vibeCheck: {
      community: "supportive",
      culture:
        "Climbing gyms have a collaborative atmosphere where climbers encourage each other. There's strong emphasis on safety and helping others learn techniques.",
      bestFor: [
        "problem solvers",
        "strength builders",
        "adventure seekers",
        "people who like measurable progress",
      ],
    },
    timeCommitment: {
      sessionLength: "60-120 min",
      frequency: "2-4x/week",
      travelRequired: "minimal",
    },
    tags: ["strength", "problem solving", "adventure", "indoor", "outdoor"],
    description:
      "Build strength and problem-solving skills while scaling vertical challenges.",
    rating: 4.9,
    popularity: 88,
    equipment: [
      "Climbing shoes",
      "Harness",
      "Chalk bag",
      "Belay device",
      "Rope",
      "Quickdraws",
    ],
    howToStart: [
      "Visit a climbing gym for introductory class",
      "Learn basic safety and belaying techniques",
      "Start with easier routes (5.6-5.8 difficulty)",
      "Focus on technique over strength initially",
    ],
    tips: [
      "Always warm up your fingers and shoulders",
      "Learn to read routes before climbing",
      "Practice footwork on easier problems",
      "Take rest days to prevent overuse injuries",
    ],
    variations: [
      "Bouldering",
      "Sport climbing",
      "Trad climbing",
      "Indoor climbing",
      "Free soloing",
    ],
    nutrition: {
      dailyCalories: 2600,
      protein: "130g",
      carbs: "300g",
      fat: "85g",
      hydration: "2.5-3.5 liters",
      preWorkout: {
        timing: "60-90 minutes before",
        foods: ["apple", "handful of almonds", "whole grain toast"],
        purpose: "Quick energy without feeling heavy",
      },
      postWorkout: {
        timing: "Within 45 minutes",
        foods: ["protein shake", "chocolate milk", "banana", "rice cakes"],
        purpose: "Quick muscle recovery and glycogen replenishment",
      },
      mealPlan: {
        breakfast: [
          {
            name: "Climber's Breakfast Bowl",
            ingredients: [
              "2 eggs",
              "1 cup quinoa",
              "spinach",
              "avocado",
              "whole grain toast",
            ],
            calories: 500,
            protein: 35,
            carbs: 45,
            fat: 22,
          },
        ],
        lunch: [
          {
            name: "Mediterranean Chicken Wrap",
            ingredients: [
              "6oz grilled chicken",
              "whole wheat tortilla",
              "hummus",
              "vegetables",
              "feta cheese",
            ],
            calories: 600,
            protein: 40,
            carbs: 55,
            fat: 25,
          },
        ],
        dinner: [
          {
            name: "Beef Stir-Fry",
            ingredients: [
              "6oz lean beef",
              "mixed vegetables",
              "brown rice",
              "soy sauce",
              "ginger",
            ],
            calories: 650,
            protein: 45,
            carbs: 60,
            fat: 20,
          },
        ],
        snacks: [
          {
            name: "Trail Mix Energy",
            ingredients: ["mixed nuts", "dried fruits", "dark chocolate chips"],
            calories: 300,
            protein: 8,
            carbs: 35,
            fat: 18,
          },
        ],
      },
      weeklyMeals: {
        monday: {
          breakfast: "Climber's Breakfast Bowl",
          lunch: "Mediterranean Chicken Wrap",
          dinner: "Beef Stir-Fry",
          snacks: "Trail Mix Energy",
        },
        tuesday: {
          breakfast: "Protein Oatmeal",
          lunch: "Turkey & Avocado Wrap",
          dinner: "Salmon & Quinoa",
          snacks: "Energy Balls",
        },
        wednesday: {
          breakfast: "Greek Yogurt Parfait",
          lunch: "Chicken & Vegetable Stir-Fry",
          dinner: "Lean Beef Bowl",
          snacks: "Almonds & Fruit",
        },
        thursday: {
          breakfast: "Eggs & Toast",
          lunch: "Tuna Salad",
          dinner: "Chicken Curry",
          snacks: "Protein Bar",
        },
        friday: {
          breakfast: "Smoothie Bowl",
          lunch: "Mediterranean Pasta",
          dinner: "Steak & Vegetables",
          snacks: "Trail Mix",
        },
      },
      supplements: ["whey protein", "BCAAs", "magnesium", "vitamin D"],
      notes:
        "Climbers need strong grip and lean muscle. Focus on protein for muscle maintenance and complex carbs for sustained energy.",
    },
  },
  yoga: {
    id: "yoga",
    name: "Yoga",
    category: "individual",
    difficulty: "beginner",
    intensity: "low",
    environment: "indoor",
    social: "mixed",
    barrierToEntry: {
      cost: "$",
      gear: ["Yoga mat", "comfortable clothing"],
      learningCurve: "gentle",
    },
    fitnessROI: {
      primaryMuscles: [
        "core",
        "flexibility",
        "balance",
        "mind-body connection",
      ],
      cardio: "low",
      strength: "medium",
      flexibility: "high",
      benefits: [
        "stress reduction",
        "improved flexibility",
        "better posture",
        "mindfulness",
        "injury prevention",
      ],
      caloriesBurned: {
        per30Min: 90,
        per60Min: 180,
        perHour: 180,
        notes: "Based on Hatha yoga for 155lb person",
      },
    },
    vibeCheck: {
      community: "supportive",
      culture:
        "Yoga studios are typically welcoming spaces focused on personal growth and mindfulness. The community is generally non-judgmental and supportive of all skill levels.",
      bestFor: [
        "stress management",
        "flexibility seekers",
        "mindfulness practitioners",
        "people recovering from injury",
        "desk workers",
      ],
    },
    timeCommitment: {
      sessionLength: "30-90 min",
      frequency: "2-5x/week",
      travelRequired: "none",
    },
    tags: [
      "flexibility",
      "mindfulness",
      "low impact",
      "beginner friendly",
      "stress relief",
    ],
    description:
      "Ancient practice combining physical postures, breathing techniques, and meditation.",
    rating: 4.7,
    popularity: 92,
    equipment: ["Yoga mat", "blocks", "straps", "bolsters"],
    howToStart: [
      "Find a local yoga studio",
      "Start with beginner classes",
      "Invest in a good quality mat",
      "Practice basic poses at home",
    ],
    tips: [
      "Focus on breathing",
      "Listen to your body",
      "Don't compare yourself to others",
      "Consistency is more important than intensity",
    ],
    variations: ["Hatha", "Vinyasa", "Ashtanga", "Bikram", "Restorative"],
    nutrition: {
      dailyCalories: 2200,
      protein: "100g",
      carbs: "280g",
      fat: "75g",
      hydration: "2.5-3 liters",
      preWorkout: {
        timing: "30-60 minutes before",
        foods: ["light fruit", "handful of nuts"],
        purpose: "Light energy without feeling heavy",
      },
      postWorkout: {
        timing: "Within 30 minutes",
        foods: ["protein smoothie", "banana", "almond butter"],
        purpose: "Gentle recovery and flexibility support",
      },
      mealPlan: {
        breakfast: [
          {
            name: "Yoga Parfait",
            ingredients: ["Greek yogurt", "granola", "berries", "honey"],
            calories: 400,
            protein: 25,
            carbs: 50,
            fat: 12,
          },
        ],
        lunch: [
          {
            name: "Buddha Bowl",
            ingredients: [
              "quinoa",
              "chickpeas",
              "roasted vegetables",
              "tahini",
            ],
            calories: 550,
            protein: 20,
            carbs: 65,
            fat: 22,
          },
        ],
        dinner: [
          {
            name: "Lentil Curry",
            ingredients: [
              "red lentils",
              "coconut milk",
              "vegetables",
              "brown rice",
            ],
            calories: 600,
            protein: 25,
            carbs: 75,
            fat: 18,
          },
        ],
        snacks: [
          {
            name: "Energy Balls",
            ingredients: ["dates", "nuts", "coconut", "cacao"],
            calories: 250,
            protein: 6,
            carbs: 30,
            fat: 14,
          },
        ],
      },
      weeklyMeals: {
        monday: {
          breakfast: "Yoga Parfait",
          lunch: "Buddha Bowl",
          dinner: "Lentil Curry",
          snacks: "Energy Balls",
        },
        tuesday: {
          breakfast: "Green Smoothie",
          lunch: "Quinoa Salad",
          dinner: "Vegetable Stir-Fry",
          snacks: "Fruit & Nuts",
        },
        wednesday: {
          breakfast: "Overnight Oats",
          lunch: "Chickpea Wrap",
          dinner: "Sweet Potato Bowl",
          snacks: "Protein Bar",
        },
        thursday: {
          breakfast: "Chia Pudding",
          lunch: "Mediterranean Bowl",
          dinner: "Coconut Curry",
          snacks: "Trail Mix",
        },
        friday: {
          breakfast: "Acai Bowl",
          lunch: "Sushi Bowl",
          dinner: "Tofu Stir-Fry",
          snacks: "Energy Balls",
        },
      },
      supplements: ["probiotics", "vitamin B12", "magnesium"],
      notes:
        "Yoga practitioners benefit from plant-based proteins and complex carbs for sustained energy.",
    },
  },
  running: {
    id: "running",
    name: "Running",
    category: "individual",
    difficulty: "beginner",
    intensity: "high",
    environment: "outdoor",
    social: "mixed",
    barrierToEntry: {
      cost: "$",
      gear: ["Running shoes", "comfortable clothing"],
      learningCurve: "gentle",
    },
    fitnessROI: {
      primaryMuscles: ["legs", "core", "cardiovascular system"],
      cardio: "high",
      strength: "medium",
      flexibility: "low",
      benefits: [
        "cardiovascular health",
        "weight management",
        "mental clarity",
        "endurance building",
        "accessible anywhere",
      ],
      caloriesBurned: {
        per30Min: 300,
        per60Min: 600,
        perHour: 600,
        notes: "Based on 6 mph running pace for 155lb person",
      },
    },
    vibeCheck: {
      community: "mixed",
      culture:
        "Running communities range from competitive racing groups to casual social runs. There's a place for everyone, from solo runners to club members.",
      bestFor: [
        "cardio enthusiasts",
        "stress relief seekers",
        "goal-oriented people",
        "those wanting flexible exercise options",
      ],
    },
    timeCommitment: {
      sessionLength: "20-60 min",
      frequency: "3-5x/week",
      travelRequired: "none",
    },
    tags: ["cardio", "endurance", "accessible", "weight loss", "mental health"],
    description:
      "The most accessible cardiovascular exercise that can be done almost anywhere.",
    rating: 4.6,
    popularity: 98,
    equipment: ["Running shoes", "athletic clothing", "watch", "water bottle"],
    howToStart: [
      "Start with walk-run intervals",
      "Invest in good running shoes",
      "Set realistic goals",
      "Join a running group",
    ],
    tips: [
      "Warm up properly",
      "Listen to your body",
      "Increase mileage gradually",
      "Stay hydrated",
    ],
    variations: [
      "Road running",
      "Trail running",
      "Track running",
      "Treadmill",
      "Interval training",
    ],
    nutrition: {
      dailyCalories: 3000,
      protein: "120g",
      carbs: "400g",
      fat: "80g",
      hydration: "3-4 liters",
      preWorkout: {
        timing: "30-60 minutes before",
        foods: ["banana", "toast with peanut butter", "small bowl of oatmeal"],
        purpose: "Quick energy for sustained running",
      },
      postWorkout: {
        timing: "Within 30 minutes",
        foods: ["chocolate milk", "protein shake", "banana", "rice cakes"],
        purpose: "Rapid glycogen replenishment and muscle recovery",
      },
      mealPlan: {
        breakfast: [
          {
            name: "Runner's Power Breakfast",
            ingredients: [
              "2 eggs",
              "whole wheat toast",
              "avocado",
              "fruit",
              "orange juice",
            ],
            calories: 600,
            protein: 30,
            carbs: 70,
            fat: 20,
          },
        ],
        lunch: [
          {
            name: "Turkey & Avocado Sandwich",
            ingredients: [
              "whole wheat bread",
              "turkey breast",
              "avocado",
              "lettuce",
              "tomato",
            ],
            calories: 550,
            protein: 35,
            carbs: 60,
            fat: 18,
          },
        ],
        dinner: [
          {
            name: "Pasta with Lean Meat Sauce",
            ingredients: [
              "whole wheat pasta",
              "lean ground turkey",
              "marinara",
              "parmesan",
              "side salad",
            ],
            calories: 700,
            protein: 40,
            carbs: 85,
            fat: 15,
          },
        ],
        snacks: [
          {
            name: "Running Energy Bar",
            ingredients: [
              "oats",
              "honey",
              "nuts",
              "dried fruits",
              "dark chocolate",
            ],
            calories: 280,
            protein: 8,
            carbs: 40,
            fat: 12,
          },
        ],
      },
      weeklyMeals: {
        monday: {
          breakfast: "Runner's Power Breakfast",
          lunch: "Turkey & Avocado Sandwich",
          dinner: "Pasta with Lean Meat Sauce",
          snacks: "Running Energy Bar",
        },
        tuesday: {
          breakfast: "Oatmeal with Berries",
          lunch: "Chicken Caesar Salad",
          dinner: "Beef & Vegetable Bowl",
          snacks: "Banana with Peanut Butter",
        },
        wednesday: {
          breakfast: "Protein Smoothie",
          lunch: "Tuna Wrap",
          dinner: "Chicken Stir-Fry",
          snacks: "Trail Mix",
        },
        thursday: {
          breakfast: "Eggs & Toast",
          lunch: "Quinoa Bowl",
          dinner: "Salmon & Rice",
          snacks: "Energy Bar",
        },
        friday: {
          breakfast: "Pancakes with Syrup",
          lunch: "Turkey Club Sandwich",
          dinner: "Pasta with Meatballs",
          snacks: "Protein Shake",
        },
      },
      supplements: ["electrolytes", "iron", "vitamin D", "omega-3"],
      notes:
        "Runners need high carbohydrates for endurance. Focus on complex carbs and adequate protein for muscle recovery.",
    },
  },
  cycling: {
    id: "cycling",
    name: "Cycling",
    category: "individual",
    difficulty: "beginner",
    intensity: "medium",
    environment: "both",
    social: "mixed",
    barrierToEntry: {
      cost: "$$$",
      gear: ["Bicycle", "Helmet", "Cycling clothing"],
      learningCurve: "gentle",
    },
    fitnessROI: {
      primaryMuscles: ["legs", "glutes", "core", "cardiovascular system"],
      cardio: "high",
      strength: "medium",
      flexibility: "low",
      benefits: [
        "low impact cardio",
        "leg strength",
        "endurance",
        "exploration",
        "transportation",
      ],
      caloriesBurned: {
        per30Min: 250,
        per60Min: 500,
        perHour: 500,
        notes: "Based on moderate cycling (12-14 mph) for 155lb person",
      },
    },
    vibeCheck: {
      community: "mixed",
      culture:
        "Cycling has diverse communities from competitive racers to casual weekend riders. Most groups are welcoming to newcomers and focus on safety and enjoyment.",
      bestFor: [
        "nature lovers",
        "commuters",
        "low impact cardio seekers",
        "adventure seekers",
        "eco-conscious individuals",
      ],
    },
    timeCommitment: {
      sessionLength: "30-120 min",
      frequency: "2-4x/week",
      travelRequired: "minimal",
    },
    tags: ["low impact", "cardio", "endurance", "outdoor", "transportation"],
    description:
      "Low-impact cardiovascular exercise that doubles as transportation.",
    rating: 4.8,
    popularity: 85,
    equipment: [
      "Bicycle",
      "Helmet",
      "Cycling shorts",
      "water bottle",
      "repair kit",
    ],
    howToStart: [
      "Get a bike that fits you",
      "Learn basic maintenance",
      "Start with short rides",
      "Follow traffic laws",
    ],
    tips: [
      "Always wear a helmet",
      "Check tire pressure",
      "Use lights at night",
      "Stay visible",
    ],
    variations: [
      "Road cycling",
      "Mountain biking",
      "Indoor cycling",
      "Commuting",
      "Touring",
    ],
    nutrition: {
      dailyCalories: 2700,
      protein: "110g",
      carbs: "350g",
      fat: "85g",
      hydration: "3-4 liters",
      preWorkout: {
        timing: "60-90 minutes before",
        foods: ["oatmeal with banana", "whole grain toast", "peanut butter"],
        purpose: "Sustained energy for long rides",
      },
      postWorkout: {
        timing: "Within 30-60 minutes",
        foods: ["protein shake", "chocolate milk", "fruit", "granola bar"],
        purpose: "Muscle recovery and glycogen replenishment",
      },
      mealPlan: {
        breakfast: [
          {
            name: "Cyclist's Oatmeal Power",
            ingredients: [
              "1.5 cups oats",
              "1 banana",
              "2 tbsp peanut butter",
              "1 scoop protein powder",
              "berries",
            ],
            calories: 580,
            protein: 35,
            carbs: 75,
            fat: 20,
          },
        ],
        lunch: [
          {
            name: "Chicken & Quinoa Bowl",
            ingredients: [
              "6oz grilled chicken",
              "1 cup quinoa",
              "roasted vegetables",
              "olive oil",
            ],
            calories: 620,
            protein: 40,
            carbs: 60,
            fat: 22,
          },
        ],
        dinner: [
          {
            name: "Salmon & Sweet Potato",
            ingredients: [
              "6oz salmon",
              "1 sweet potato",
              "steamed broccoli",
              "mixed greens",
            ],
            calories: 650,
            protein: 42,
            carbs: 65,
            fat: 25,
          },
        ],
        snacks: [
          {
            name: "Energy Trail Mix",
            ingredients: [
              "almonds",
              "walnuts",
              "dried cranberries",
              "dark chocolate chips",
            ],
            calories: 320,
            protein: 10,
            carbs: 35,
            fat: 20,
          },
        ],
      },
      weeklyMeals: {
        monday: {
          breakfast: "Cyclist's Energy Oatmeal with fruits and nuts",
          lunch: "Chicken & Quinoa Bowl with roasted vegetables",
          dinner: "Grilled salmon with sweet potato and asparagus",
          snacks: "Energy bars with electrolytes",
        },
        tuesday: {
          breakfast: "Whole grain toast with avocado and eggs",
          lunch: "Mediterranean pasta with lean protein",
          dinner: "Lean beef with brown rice and vegetables",
          snacks: "Greek yogurt with honey",
        },
        wednesday: {
          breakfast: "Smoothie with protein powder and banana",
          lunch: "Turkey and vegetable wrap",
          dinner: "Chicken stir-fry with quinoa",
          snacks: "Trail mix and dried fruits",
        },
        thursday: {
          breakfast: "Egg white omelet with vegetables",
          lunch: "Tuna salad with whole grain crackers",
          dinner: "Pasta with turkey meat sauce",
          snacks: "Apple with almond butter",
        },
        friday: {
          breakfast: "Cottage cheese with fruits and nuts",
          lunch: "Grilled chicken Caesar salad",
          dinner: "Fish tacos with avocado salsa",
          snacks: "Protein shake with banana",
        },
      },
      supplements: [
        "electrolytes",
        "vitamin B complex",
        "magnesium",
        "coenzyme Q10",
      ],
      notes:
        "Cyclists need balanced nutrition for endurance. Focus on complex carbs and lean proteins with healthy fats.",
    },
  },
  weightlifting: {
    id: "weightlifting",
    name: "Weightlifting",
    category: "individual",
    difficulty: "intermediate",
    intensity: "high",
    environment: "indoor",
    social: "mixed",
    barrierToEntry: {
      cost: "$$",
      gear: ["Gym membership", "workout clothes"],
      learningCurve: "moderate",
    },
    fitnessROI: {
      primaryMuscles: ["all major muscle groups", "strength", "bone density"],
      cardio: "low",
      strength: "high",
      flexibility: "medium",
      benefits: [
        "muscle building",
        "strength gains",
        "bone density",
        "metabolism boost",
        "confidence",
      ],
      caloriesBurned: {
        per30Min: 120,
        per60Min: 240,
        perHour: 240,
        notes: "Based on moderate weightlifting for 155lb person",
      },
    },
    vibeCheck: {
      community: "mixed",
      culture:
        "Gym environments vary from hardcore powerlifting gyms to commercial fitness centers. Most serious lifters are respectful and willing to share knowledge.",
      bestFor: [
        "strength seekers",
        "muscle builders",
        "goal-oriented people",
        "those wanting measurable progress",
      ],
    },
    timeCommitment: {
      sessionLength: "45-90 min",
      frequency: "3-4x/week",
      travelRequired: "minimal",
    },
    tags: ["strength", "muscle building", "gym", "resistance training"],
    description:
      "Progressive resistance training for building strength and muscle mass.",
    rating: 4.5,
    popularity: 78,
    equipment: [
      "Barbells",
      "dumbbells",
      "weight plates",
      "bench",
      "squat rack",
    ],
    howToStart: [
      "Join a gym",
      "Learn proper form",
      "Start with light weights",
      "Consider a personal trainer",
    ],
    tips: [
      "Focus on form over weight",
      "Progress gradually",
      "Rest between workouts",
      "Track your progress",
    ],
    variations: [
      "Powerlifting",
      "Bodybuilding",
      "Olympic lifting",
      "Strongman",
      "CrossFit",
    ],
    nutrition: {
      dailyCalories: 2900,
      protein: "160g",
      carbs: "320g",
      fat: "90g",
      hydration: "3-4 liters",
      preWorkout: {
        timing: "60-90 minutes before",
        foods: ["banana", "rice cakes", "peanut butter", "coffee"],
        purpose: "Energy and focus for lifting",
      },
      postWorkout: {
        timing: "Within 30-45 minutes",
        foods: ["whey protein shake", "fast carbs", "creatine", "water"],
        purpose: "Maximum muscle protein synthesis and recovery",
      },
      mealPlan: {
        breakfast: [
          {
            name: "Muscle Builder Breakfast",
            ingredients: [
              "6 eggs",
              "oatmeal",
              "protein shake",
              "banana",
              "almonds",
            ],
            calories: 700,
            protein: 50,
            carbs: 70,
            fat: 25,
          },
        ],
        lunch: [
          {
            name: "Power Lunch Bowl",
            ingredients: [
              "8oz chicken breast",
              "2 cups brown rice",
              "black beans",
              "avocado",
              "salsa",
            ],
            calories: 750,
            protein: 55,
            carbs: 80,
            fat: 20,
          },
        ],
        dinner: [
          {
            name: "Steak & Potato Dinner",
            ingredients: [
              "8oz lean steak",
              "sweet potato",
              "asparagus",
              "olive oil",
            ],
            calories: 800,
            protein: 60,
            carbs: 70,
            fat: 25,
          },
        ],
        snacks: [
          {
            name: "Protein Shake",
            ingredients: [
              "2 scoops whey protein",
              "oat milk",
              "banana",
              "peanut butter",
            ],
            calories: 450,
            protein: 40,
            carbs: 45,
            fat: 12,
          },
        ],
      },
      weeklyMeals: {
        monday: {
          breakfast: "Bodybuilder's Oatmeal with protein powder",
          lunch: "Grilled chicken breast with brown rice",
          dinner: "Lean steak with sweet potato and vegetables",
          snacks: "Protein shake with banana",
        },
        tuesday: {
          breakfast: "Egg white omelet with vegetables",
          lunch: "Turkey breast with quinoa and avocado",
          dinner: "Salmon with asparagus and brown rice",
          snacks: "Greek yogurt with nuts",
        },
        wednesday: {
          breakfast: "Protein smoothie with oats and berries",
          lunch: "Lean beef wrap with vegetables",
          dinner: "Chicken stir-fry with mixed vegetables",
          snacks: "Cottage cheese with fruit",
        },
        thursday: {
          breakfast: "Whole grain toast with peanut butter and banana",
          lunch: "Tuna salad with whole grain crackers",
          dinner: "Pork chops with roasted vegetables",
          snacks: "Protein bars",
        },
        friday: {
          breakfast: "Scrambled eggs with whole grain toast",
          lunch: "Chicken Caesar salad with extra protein",
          dinner: "Lean ground beef with pasta",
          snacks: "Chocolate milk and protein powder",
        },
      },
      supplements: [
        "whey protein",
        "creatine",
        "beta-alanine",
        "vitamin D",
        "zinc",
      ],
      notes:
        "Weightlifters need high protein for muscle building. Focus on lean proteins and complex carbs around workouts.",
    },
  },
};

export default function SportDetailPage() {
  const params = useParams();
  const sportId = params.id as string;
  const [isFavorited, setIsFavorited] = useState(false);
  const [dailyBudget, setDailyBudget] = useState<number>(50);

  // Budget-based meal filtering logic
  const estimateMealCost = (
    mealName: string,
    ingredients: string[],
  ): number => {
    // Simple cost estimation based on ingredient complexity
    const costPerIngredient = 1.5; // Average cost per ingredient
    const baseCost = 2; // Base cost for preparation
    return baseCost + ingredients.length * costPerIngredient;
  };

  const getBudgetFriendlyMeals = (meals: any[], budget: number) => {
    return meals.map((meal) => ({
      ...meal,
      estimatedCost: estimateMealCost(meal.name, meal.ingredients),
      withinBudget:
        estimateMealCost(meal.name, meal.ingredients) <= budget * 0.25, // 25% of daily budget per meal
    }));
  };

  const getTotalDailyCost = (
    breakfast: any[],
    lunch: any[],
    dinner: any[],
    snacks: any[],
  ) => {
    const breakfastCost = breakfast[0]
      ? estimateMealCost(breakfast[0].name, breakfast[0].ingredients)
      : 0;
    const lunchCost = lunch[0]
      ? estimateMealCost(lunch[0].name, lunch[0].ingredients)
      : 0;
    const dinnerCost = dinner[0]
      ? estimateMealCost(dinner[0].name, dinner[0].ingredients)
      : 0;
    const snacksCost = snacks[0]
      ? estimateMealCost(snacks[0].name, snacks[0].ingredients)
      : 0;
    return breakfastCost + lunchCost + dinnerCost + snacksCost;
  };

  const getBudgetFriendlyAlternatives = (mealType: string, budget: number) => {
    const alternatives = {
      breakfast: [
        {
          name: "Oatmeal with Banana",
          ingredients: ["oats", "banana", "honey"],
          calories: 300,
          protein: 8,
          carbs: 60,
          fat: 5,
        },
        {
          name: "Eggs on Toast",
          ingredients: ["2 eggs", "whole wheat toast"],
          calories: 250,
          protein: 15,
          carbs: 30,
          fat: 10,
        },
        {
          name: "Yogurt Parfait",
          ingredients: ["Greek yogurt", "granola", "berries"],
          calories: 280,
          protein: 12,
          carbs: 45,
          fat: 8,
        },
      ],
      lunch: [
        {
          name: "Rice and Beans",
          ingredients: ["brown rice", "black beans", "spices"],
          calories: 400,
          protein: 12,
          carbs: 70,
          fat: 8,
        },
        {
          name: "Tuna Sandwich",
          ingredients: ["canned tuna", "whole wheat bread", "lettuce"],
          calories: 350,
          protein: 25,
          carbs: 40,
          fat: 12,
        },
        {
          name: "Pasta with Vegetables",
          ingredients: ["pasta", "tomato sauce", "mixed vegetables"],
          calories: 380,
          protein: 10,
          carbs: 65,
          fat: 8,
        },
      ],
      dinner: [
        {
          name: "Chicken Stir-Fry",
          ingredients: ["chicken breast", "vegetables", "rice"],
          calories: 450,
          protein: 35,
          carbs: 50,
          fat: 15,
        },
        {
          name: "Lentil Soup",
          ingredients: ["lentils", "vegetables", "broth"],
          calories: 320,
          protein: 18,
          carbs: 55,
          fat: 8,
        },
        {
          name: "Egg Fried Rice",
          ingredients: ["eggs", "rice", "vegetables", "soy sauce"],
          calories: 380,
          protein: 15,
          carbs: 60,
          fat: 12,
        },
      ],
      snacks: [
        {
          name: "Apple with Peanut Butter",
          ingredients: ["apple", "peanut butter"],
          calories: 200,
          protein: 6,
          carbs: 25,
          fat: 12,
        },
        {
          name: "Trail Mix",
          ingredients: ["nuts", "raisins", "seeds"],
          calories: 250,
          protein: 8,
          carbs: 30,
          fat: 15,
        },
        {
          name: "Hard Boiled Eggs",
          ingredients: ["2 eggs", "salt"],
          calories: 140,
          protein: 12,
          carbs: 2,
          fat: 10,
        },
      ],
    };

    return (
      (alternatives as any)[mealType]?.filter(
        (meal) =>
          estimateMealCost(meal.name, meal.ingredients) <= budget * 0.25,
      ) || []
    );
  };

  const sport = sportData[sportId];

  if (!sport) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sport Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The sport you're looking for doesn't exist.
          </p>
          <Link
            href="/sports"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Browse All Sports
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 border-green-200";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "advanced":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "medium":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated fitness background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100"></div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-5xl mx-auto">
              <Link
                href="/sports"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-all hover:gap-3 group"
              >
                <ArrowLeft className="w-5 h-5 transform transition-transform group-hover:-translate-x-1" />
                <span className="font-medium">Back to Sports Directory</span>
              </Link>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10">
                <div className="lg:flex-1">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold tracking-wide">
                      SPORT DETAILS
                    </span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    {sport.name}
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl leading-relaxed font-medium">
                    {sport.description}
                  </p>
                </div>

                <div className="flex items-center gap-6 mt-8 lg:mt-0">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Star className="w-6 h-6 text-yellow-300 fill-current" />
                      <span className="text-3xl font-black">
                        {sport.rating}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-white/80">
                      Expert Rating
                    </span>
                  </div>

                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-3xl font-black mb-2">
                      {sport.popularity}%
                    </div>
                    <span className="text-sm font-medium text-white/80">
                      Popularity
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsFavorited(!isFavorited)}
                      className="p-4 bg-white/20 hover:bg-white/30 rounded-2xl transition-all hover:scale-110"
                    >
                      <Heart
                        className={`w-6 h-6 ${isFavorited ? "fill-current text-red-400" : ""}`}
                      />
                    </button>
                    <button className="p-4 bg-white/20 hover:bg-white/30 rounded-2xl transition-all hover:scale-110">
                      <Share2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <span
                  className={`px-6 py-3 rounded-full text-sm font-bold border-2 shadow-lg ${getDifficultyColor(sport.difficulty)}`}
                >
                  {sport.difficulty}
                </span>
                <span
                  className={`px-6 py-3 rounded-full text-sm font-bold border-2 shadow-lg ${getIntensityColor(sport.intensity)}`}
                >
                  {sport.intensity} intensity
                </span>
                <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold shadow-lg">
                  {sport.environment}
                </span>
                <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold shadow-lg">
                  {sport.social}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Enhanced Quick Stats */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Quick Overview
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl mx-auto mb-3">
                      <DollarSign className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div className="font-semibold text-gray-900">
                      {sport.barrierToEntry.cost}
                    </div>
                    <div className="text-sm text-gray-600">Cost</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl mx-auto mb-3">
                      <Clock className="w-7 h-7 text-teal-600" />
                    </div>
                    <div className="font-semibold text-gray-900">
                      {sport.timeCommitment.sessionLength}
                    </div>
                    <div className="text-sm text-gray-600">Session</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl mx-auto mb-3">
                      <Users className="w-7 h-7 text-cyan-600" />
                    </div>
                    <div className="font-semibold text-gray-900">
                      {sport.social}
                    </div>
                    <div className="text-sm text-gray-600">Social</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl mx-auto mb-3">
                      <TrendingUp className="w-7 h-7 text-orange-600" />
                    </div>
                    <div className="font-semibold text-gray-900">
                      {sport.barrierToEntry.learningCurve}
                    </div>
                    <div className="text-sm text-gray-600">Learning</div>
                  </div>
                </div>
              </div>

              {/* Fitness ROI */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Fitness Benefits
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      Primary Muscles
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {sport.fitnessROI.primaryMuscles.map((muscle, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-800 rounded-lg text-sm"
                        >
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-green-600" />
                      Benefits
                    </h3>
                    <div className="space-y-2">
                      {sport.fitnessROI.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="font-semibold text-blue-600 mb-1">
                      Cardio
                    </div>
                    <div className="text-sm text-gray-600">
                      {sport.fitnessROI.cardio}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="font-semibold text-green-600 mb-1">
                      Strength
                    </div>
                    <div className="text-sm text-gray-600">
                      {sport.fitnessROI.strength}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="font-semibold text-purple-600 mb-1">
                      Flexibility
                    </div>
                    <div className="text-sm text-gray-600">
                      {sport.fitnessROI.flexibility}
                    </div>
                  </div>
                </div>
              </div>

              {/* Calorie Burn Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Flame className="w-6 h-6 text-orange-500" />
                  Calorie Burn
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-4">
                  <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="font-semibold text-orange-600 mb-1">
                      30 Minutes
                    </div>
                    <div className="text-2xl font-bold text-orange-700">
                      {sport.fitnessROI.caloriesBurned.per30Min}
                    </div>
                    <div className="text-sm text-gray-600">calories</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="font-semibold text-orange-600 mb-1">
                      60 Minutes
                    </div>
                    <div className="text-2xl font-bold text-orange-700">
                      {sport.fitnessROI.caloriesBurned.per60Min}
                    </div>
                    <div className="text-sm text-gray-600">calories</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="font-semibold text-orange-600 mb-1">
                      Per Hour
                    </div>
                    <div className="text-2xl font-bold text-orange-700">
                      {sport.fitnessROI.caloriesBurned.perHour}
                    </div>
                    <div className="text-sm text-gray-600">calories</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                  <strong>Note:</strong> {sport.fitnessROI.caloriesBurned.notes}
                </div>
              </div>

              {/* How to Get Started */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  How to Get Started
                </h2>
                <div className="space-y-4">
                  {sport.howToStart.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Pro Tips
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {sport.tips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex gap-3 p-4 bg-blue-50 rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Meal Plan */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 overflow-visible">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Daily Meal Plan
                </h2>
                <div className="space-y-6 max-h-none overflow-visible">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      🌅 Breakfast
                    </h4>
                    {sport.nutrition.mealPlan.breakfast.map((meal, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="font-medium text-gray-900 mb-2 text-lg">
                          {meal.name}
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          {meal.ingredients.join(", ")}
                        </div>
                        <div className="flex gap-4 text-xs">
                          <span className="text-green-600">
                            {meal.calories} cal
                          </span>
                          <span className="text-blue-600">
                            {meal.protein}g protein
                          </span>
                          <span className="text-orange-600">
                            {meal.carbs}g carbs
                          </span>
                          <span className="text-purple-600">
                            {meal.fat}g fat
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Weekly Meal Plan */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 overflow-visible">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Weekly Meal Plan (Monday-Friday)
                </h2>
                <div className="space-y-3 max-h-none overflow-visible">
                  {["monday", "tuesday", "wednesday", "thursday", "friday"].map(
                    (day) => (
                      <div
                        key={day}
                        className="border-l-4 border-gray-200 pl-3"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2 capitalize">
                          {day === "monday" && "🌅 Monday"}
                          {day === "tuesday" && "🌅 Tuesday"}
                          {day === "wednesday" && "🌅 Wednesday"}
                          {day === "thursday" && "🌅 Thursday"}
                          {day === "friday" && "🌅 Friday"}
                        </h4>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <div className="font-medium text-green-800 mb-2 text-lg">
                              Breakfast
                            </div>
                            <div className="text-sm text-gray-700">
                              {(sport.nutrition.weeklyMeals as any)?.[day]
                                ?.breakfast || "Meal not available"}
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <div className="font-medium text-blue-800 mb-2 text-lg">
                              Lunch
                            </div>
                            <div className="text-sm text-gray-700">
                              {(sport.nutrition.weeklyMeals as any)?.[day]
                                ?.lunch || "Meal not available"}
                            </div>
                          </div>
                          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                            <div className="font-medium text-orange-800 mb-2 text-lg">
                              Dinner
                            </div>
                            <div className="text-sm text-gray-700">
                              {(sport.nutrition.weeklyMeals as any)?.[day]
                                ?.dinner || "Meal not available"}
                            </div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                            <div className="font-medium text-purple-800 mb-2 text-lg">
                              Snacks
                            </div>
                            <div className="text-sm text-gray-700">
                              {(sport.nutrition.weeklyMeals as any)?.[day]
                                ?.snacks || "Meal not available"}
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Weekend Meals
                  </h4>
                  <div className="text-sm text-gray-600">
                    Weekends are perfect for meal prep and family meals. Focus
                    on balanced nutrition with plenty of protein and complex
                    carbs for recovery.
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Equipment */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Equipment Needed
                </h3>
                <div className="space-y-4">
                  {sport.equipment.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Commitment */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Time Commitment
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Clock className="w-5 h-5" />
                      <span className="text-lg">Session Length</span>
                    </div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {sport.timeCommitment.sessionLength}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Calendar className="w-5 h-5" />
                      <span className="text-lg">Frequency</span>
                    </div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {sport.timeCommitment.frequency}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="w-5 h-5" />
                      <span className="text-lg">Travel Required</span>
                    </div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {sport.timeCommitment.travelRequired}
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Vibe */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Community Vibe
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Users className="w-5 h-5" />
                      <span className="text-lg">Community</span>
                    </div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {sport.vibeCheck.community}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-600 mb-2">Best For</div>
                    <div className="space-y-2">
                      {sport.vibeCheck.bestFor.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Variations */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Variations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {sport.variations.map((variation, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                    >
                      {variation}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nutrition Guide */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-green-600" />
                  Nutrition Guide
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="font-semibold text-green-700">
                        {sport.nutrition.dailyCalories}
                      </div>
                      <div className="text-gray-600">Daily Calories</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="font-semibold text-blue-700">
                        {sport.nutrition.protein}
                      </div>
                      <div className="text-gray-600">Protein</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="font-semibold text-orange-700">
                        {sport.nutrition.carbs}
                      </div>
                      <div className="text-gray-600">Carbs</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="font-semibold text-purple-700">
                        {sport.nutrition.fat}
                      </div>
                      <div className="text-gray-600">Fat</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    <span>{sport.nutrition.hydration} daily hydration</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Apple className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-gray-900">
                        Pre-Workout
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 mb-1">
                      {sport.nutrition.preWorkout.timing}
                    </div>
                    <div className="text-xs text-gray-700">
                      {sport.nutrition.preWorkout.foods.join(", ")}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Coffee className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-semibold text-gray-900">
                        Post-Workout
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 mb-1">
                      {sport.nutrition.postWorkout.timing}
                    </div>
                    <div className="text-xs text-gray-700">
                      {sport.nutrition.postWorkout.foods.join(", ")}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">
                  Ready to Try {sport.name}?
                </h3>
                <p className="text-white/90 mb-4">
                  Take our quiz to see if this sport matches your preferences!
                </p>
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Take Quiz
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
