"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  DollarSign,
  Users,
  MapPin,
  Zap,
  Clock,
  TrendingUp,
  Star,
  Heart,
  Flame,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";

interface Sport {
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
  caloriesBurned: {
    per30Min: number;
    per60Min: number;
    notes: string;
  };
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
    supplements: string[];
    notes: string;
  };
  description: string;
  rating?: number;
  popularity?: number;
}

const mockSports: Sport[] = [
  {
    id: "swimming",
    name: "Swimming",
    category: "individual",
    difficulty: "beginner",
    intensity: "medium",
    environment: "both",
    social: "solitary",
    barrierToEntry: {
      cost: "$$",
      gear: ["Swimsuit", "Goggles"],
      learningCurve: "gentle",
    },
    description:
      "Full-body, low-impact exercise perfect for all fitness levels.",
    rating: 4.8,
    popularity: 95,
    caloriesBurned: {
      per30Min: 220,
      per60Min: 440,
      notes: "Based on moderate freestyle swimming for 155lb person",
    },
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
  {
    id: "rock-climbing",
    name: "Rock Climbing",
    category: "individual",
    difficulty: "intermediate",
    intensity: "high",
    environment: "both",
    social: "small_group",
    barrierToEntry: {
      cost: "$$$",
      gear: ["Climbing shoes", "Harness", "Chalk bag"],
      learningCurve: "moderate",
    },
    description:
      "Build strength and problem-solving skills on vertical challenges.",
    rating: 4.9,
    popularity: 88,
    caloriesBurned: {
      per30Min: 280,
      per60Min: 560,
      notes: "Based on moderate rock climbing for 155lb person",
    },
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
      supplements: ["whey protein", "BCAAs", "magnesium", "vitamin D"],
      notes:
        "Climbers need strong grip and lean muscle. Focus on protein for muscle maintenance and complex carbs for sustained energy.",
    },
  },
  {
    id: "yoga",
    name: "Yoga",
    category: "individual",
    difficulty: "beginner",
    intensity: "low",
    environment: "indoor",
    social: "mixed",
    barrierToEntry: {
      cost: "$",
      gear: ["Yoga mat"],
      learningCurve: "gentle",
    },
    description:
      "Ancient practice combining physical postures, breathing techniques, and meditation.",
    rating: 4.7,
    popularity: 92,
    caloriesBurned: {
      per30Min: 90,
      per60Min: 180,
      notes: "Based on Hatha yoga for 155lb person",
    },
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
      supplements: ["probiotics", "vitamin B12", "magnesium"],
      notes:
        "Yoga practitioners benefit from plant-based proteins and complex carbs for sustained energy.",
    },
  },
  {
    id: "running",
    name: "Running",
    category: "individual",
    difficulty: "beginner",
    intensity: "high",
    environment: "outdoor",
    social: "mixed",
    barrierToEntry: {
      cost: "$",
      gear: ["Running shoes"],
      learningCurve: "gentle",
    },
    description:
      "The most accessible cardiovascular exercise that can be done almost anywhere.",
    rating: 4.6,
    popularity: 98,
    caloriesBurned: {
      per30Min: 300,
      per60Min: 600,
      notes: "Based on 6 mph running pace for 155lb person",
    },
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
      supplements: ["electrolytes", "iron", "vitamin D", "omega-3"],
      notes:
        "Runners need high carbohydrates for endurance. Focus on complex carbs and adequate protein for muscle recovery.",
    },
  },
  {
    id: "cycling",
    name: "Cycling",
    category: "individual",
    difficulty: "beginner",
    intensity: "medium",
    environment: "both",
    social: "mixed",
    barrierToEntry: {
      cost: "$$$",
      gear: ["Bicycle", "Helmet"],
      learningCurve: "gentle",
    },
    description:
      "Low-impact cardiovascular exercise that doubles as transportation.",
    rating: 4.8,
    popularity: 85,
    caloriesBurned: {
      per30Min: 250,
      per60Min: 500,
      notes: "Based on moderate cycling (12-14 mph) for 155lb person",
    },
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
  {
    id: "weightlifting",
    name: "Weightlifting",
    category: "individual",
    difficulty: "intermediate",
    intensity: "high",
    environment: "indoor",
    social: "mixed",
    barrierToEntry: {
      cost: "$$",
      gear: ["Gym membership"],
      learningCurve: "moderate",
    },
    description:
      "Progressive resistance training for building strength and muscle mass.",
    rating: 4.5,
    popularity: 78,
    caloriesBurned: {
      per30Min: 120,
      per60Min: 240,
      notes: "Based on moderate weightlifting for 155lb person",
    },
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
];

export default function SportsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [intensityFilter, setIntensityFilter] = useState("all");
  const [environmentFilter, setEnvironmentFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<
    Array<{
      role: "user" | "assistant";
      content: string;
      followUpChoices?: string[];
    }>
  >([]);
  const [chatInput, setChatInput] = useState("");
  const [conversationState, setConversationState] = useState<
    Map<string, number>
  >(new Map());

  const filteredSports = mockSports
    .filter((sport) => {
      const matchesSearch =
        sport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sport.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty =
        difficultyFilter === "all" || sport.difficulty === difficultyFilter;
      const matchesIntensity =
        intensityFilter === "all" || sport.intensity === intensityFilter;
      const matchesEnvironment =
        environmentFilter === "all" || sport.environment === environmentFilter;

      return (
        matchesSearch &&
        matchesDifficulty &&
        matchesIntensity &&
        matchesEnvironment
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "popularity":
          return (b.popularity || 0) - (a.popularity || 0);
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "name":
          return a.name.localeCompare(b.name);
        case "cost":
          return a.barrierToEntry.cost.length - b.barrierToEntry.cost.length;
        default:
          return 0;
      }
    });

  const getCostIcon = (cost: string) => {
    const count = cost.length;
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: count }).map((_, i) => (
          <DollarSign key={i} className="w-4 h-4 text-green-600" />
        ))}
      </div>
    );
  };

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

  const getEnvironmentIcon = (environment: string) => {
    switch (environment) {
      case "indoor":
        return "🏠";
      case "outdoor":
        return "🌳";
      case "both":
        return "🏡";
      default:
        return "📍";
    }
  };

  const generateBotResponse = (
    userMessage: string,
  ): { content: string; followUpChoices?: string[] } => {
    const message = userMessage.toLowerCase();

    // Intelligent question analysis
    const analyzeQuestion = (msg: string) => {
      const analysis = {
        hasWeights: msg.match(/(\d+)\s*kg/i),
        hasTwoWeights: msg.match(/(\d+)\s*kg.*?(\d+)\s*kg/i),
        isWeightRelated:
          msg.includes("weight") ||
          msg.includes("kg") ||
          msg.includes("pounds") ||
          msg.includes("lbs"),
        isGoalOriented:
          msg.includes("want") ||
          msg.includes("goal") ||
          msg.includes("aim") ||
          msg.includes("target"),
        isTimeRelated:
          msg.includes("time") ||
          msg.includes("how long") ||
          msg.includes("weeks") ||
          msg.includes("months"),
        isExerciseRelated:
          msg.includes("exercise") ||
          msg.includes("workout") ||
          msg.includes("training") ||
          msg.includes("gym"),
        isNutritionRelated:
          msg.includes("food") ||
          msg.includes("diet") ||
          msg.includes("eat") ||
          msg.includes("nutrition") ||
          msg.includes("protein"),
        isHealthRelated:
          msg.includes("health") ||
          msg.includes("healthy") ||
          msg.includes("medical") ||
          msg.includes("doctor"),
        isBeginnerRelated:
          msg.includes("beginner") ||
          msg.includes("start") ||
          msg.includes("new") ||
          msg.includes("first time"),
        isInjuryRelated:
          msg.includes("injury") ||
          msg.includes("pain") ||
          msg.includes("hurt") ||
          msg.includes("sore"),
        isAgeRelated:
          msg.includes("age") ||
          msg.includes("old") ||
          msg.includes("young") ||
          msg.includes("years"),
        isEquipmentRelated:
          msg.includes("equipment") ||
          msg.includes("gear") ||
          msg.includes("shoes") ||
          msg.includes("clothes"),
        isMotivationRelated:
          msg.includes("motivation") ||
          msg.includes("motivated") ||
          msg.includes("consistent") ||
          msg.includes("stick"),
        isScheduleRelated:
          msg.includes("time") ||
          msg.includes("busy") ||
          msg.includes("schedule") ||
          msg.includes("when"),
        isSportSpecific:
          msg.includes("running") ||
          msg.includes("swimming") ||
          msg.includes("yoga") ||
          msg.includes("cycling") ||
          msg.includes("lifting") ||
          msg.includes("climbing"),
        isWebsiteRelated:
          msg.includes("website") ||
          msg.includes("app") ||
          msg.includes("platform") ||
          msg.includes("this site"),
      };

      return analysis;
    };

    const analysis = analyzeQuestion(message);

    // Website questions
    if (analysis.isWebsiteRelated) {
      return {
        content:
          "This is the Fitness Project Sports Directory! You can browse 6 different sports, filter by difficulty, intensity, and environment. Each sport includes detailed nutrition plans, calorie burn information, and equipment requirements. Use the search bar and filters to find your perfect workout. I can also answer any fitness questions you have!",
        followUpChoices: [
          "How do I use the filters?",
          "Which sport is best for weight loss?",
          "Tell me more about nutrition plans",
          "What equipment do I need?",
        ],
      };
    }

    // Specific weight goals with numbers
    if (analysis.hasTwoWeights && analysis.isGoalOriented) {
      const weights = analysis.hasTwoWeights;
      const currentWeight = parseInt(weights[1]);
      const targetWeight = parseInt(weights[2]);
      const weightToLose = currentWeight - targetWeight;

      if (weightToLose > 0) {
        const weeksToGoal = Math.ceil(weightToLose / 0.5);
        const dailyCalorieDeficit = (weightToLose * 7700) / weeksToGoal;

        const response = `Great goal! Going from ${currentWeight}kg to ${targetWeight}kg means losing ${weightToLose}kg, which is definitely achievable with the right approach. Based on safe weight loss principles, you should aim to lose about 0.5kg per week, so you'll reach your goal in approximately ${weeksToGoal} weeks. This requires creating a daily calorie deficit of around ${Math.round(dailyCalorieDeficit)} calories through a combination of exercise and nutrition.\n\nFor your exercise routine, I recommend focusing on running three times per week for 30-45 minutes per session, which will burn about 350-500 calories each time. Complement this with cycling twice a week for 45 minutes (300-400 calories) and one swimming session per week for 30 minutes (250-350 calories). Your weekly schedule could look like: Monday running, Tuesday rest or light yoga, Wednesday cycling, Thursday running, Friday rest, Saturday swimming, and Sunday rest or a gentle walk.\n\nNutrition is crucial for your success. Your current maintenance calories are around ${Math.round(currentWeight * 35)} per day, so you'll want to reduce this to about ${Math.round(currentWeight * 35 - dailyCalorieDeficit)} calories daily. Focus on getting ${Math.round(currentWeight * 1.6)}g of protein each day to preserve muscle mass while losing fat. Emphasize whole foods, lean proteins, and plenty of vegetables in your meals.\n\nYou can expect to lose 1-1.5kg in the first couple of weeks (mostly water weight plus some fat), then settle into a sustainable rate of 0.5kg per week. This gradual approach is healthier and more likely to lead to long-term success.`;

        // Store response with follow-up choices
        const responseWithChoices = {
          content: response,
          followUpChoices: [
            "Give me a detailed meal plan",
            "Show me beginner workout modifications",
            "How to track progress effectively?",
            "What if I hit a weight loss plateau?",
          ],
        };

        return {
          content: response,
          followUpChoices: [
            "Give me a detailed meal plan",
            "Show me beginner workout modifications",
            "How to track progress effectively?",
            "What if I hit a weight loss plateau?",
          ],
        };
      } else if (weightToLose < 0) {
        const response = `It sounds like you want to gain weight from ${currentWeight}kg to ${targetWeight}kg. For healthy weight gain, I recommend focusing on strength training activities like weightlifting and rock climbing, combined with a calorie surplus of 300-500 calories daily and increased protein intake of ${Math.round(targetWeight * 1.8)}g per day.`;

        return {
          content: response,
          followUpChoices: [
            "Create a muscle building workout plan",
            "What foods help with healthy weight gain?",
            "How to avoid gaining fat while bulking?",
            "Best supplements for muscle growth?",
          ],
        };
      }
    }

    // Intelligent context-based responses
    if (analysis.isWeightRelated && analysis.isGoalOriented) {
      if (analysis.hasWeights) {
        const weight = parseInt(analysis.hasWeights[1]);
        return {
          content: `Based on your current weight of ${weight}kg, I can help you create a personalized fitness plan. For someone at ${weight}kg, your daily maintenance calories are approximately ${Math.round(weight * 35)}. For weight loss, aim for a 500-calorie deficit daily, and for muscle gain, aim for a 300-500 calorie surplus with ${Math.round(weight * 1.6)}g of protein daily.\n\nThe best exercises for your weight would include running for cardio (burns 300-600 calories/hour), cycling for low-impact cardio (250-500 calories/hour), and weightlifting for strength building (120-240 calories/hour but builds muscle that increases metabolism).\n\nWhat specific fitness goal are you working toward - weight loss, muscle building, or overall fitness?`,
          followUpChoices: [
            "I want to lose weight",
            "I want to build muscle",
            "I want overall fitness",
            "What's the best beginner option?",
          ],
        };
      }
      return `I can help you with weight-related fitness goals! Whether you want to lose weight, gain muscle, or maintain your current weight, the key is finding the right balance of exercise and nutrition. For effective weight management, combine regular cardiovascular exercise with strength training, and focus on whole foods with appropriate protein intake.\n\nTell me your current weight and goal weight, and I can create a specific plan for you. Or if you'd like, I can recommend the best exercises for your current fitness level and goals.`;
    }

    if (analysis.isExerciseRelated && analysis.isBeginnerRelated) {
      return `Starting your fitness journey is exciting! As a beginner, I recommend starting with 2-3 sessions per week of 20-30 minutes each. The best beginner activities are yoga (builds flexibility and body awareness), swimming (full-body, low impact), and light running or walking (builds cardiovascular base).\n\nFocus on consistency over intensity - it's better to do shorter, regular workouts than occasional intense sessions. Start with bodyweight exercises before adding weights, and always warm up for 5-10 minutes before exercising.\n\nFor equipment, you'll just need comfortable clothes and good shoes to start. As you progress, you might want a yoga mat, resistance bands, or eventually a gym membership.\n\nWhat type of exercise interests you most, or do you have any specific concerns about starting?`;
    }

    if (analysis.isNutritionRelated) {
      return `Proper nutrition is essential for fitness success! For general fitness, aim for a balanced diet with 45-65% carbohydrates, 20-35% healthy fats, and 1.2-2.2g of protein per kg of bodyweight daily.\n\nPre-workout nutrition (30-90 minutes before): Focus on complex carbs like oatmeal, banana, or whole grain toast for sustained energy, with moderate protein.\n\nPost-workout nutrition (within 30-60 minutes): Combine protein for muscle repair (chicken, eggs, protein shake) with carbs to replenish energy (rice, sweet potato, fruit).\n\nHydration is crucial - aim for 2-3+ liters daily, more if you're exercising intensely. For weight loss, create a 500-calorie daily deficit through diet and exercise. For muscle gain, aim for a 300-500 calorie surplus with emphasis on protein timing.\n\nWhat specific nutrition goals are you working toward?`;
    }

    if (analysis.isSportSpecific) {
      const sportMap = {
        running:
          "Running is excellent cardiovascular exercise that burns 300-600 calories per hour. It requires minimal equipment (good shoes) and can be done anywhere. Start with walk/run intervals and gradually increase running time. Great for building endurance and burning calories.",
        swimming:
          "Swimming is a fantastic full-body, low-impact workout that burns 220-440 calories per hour. It's perfect for all fitness levels and easy on joints. Focus on proper breathing technique and learn basic strokes like freestyle and backstroke.",
        yoga: "Yoga combines physical postures, breathing, and meditation. It burns 90-180 calories per session but is amazing for flexibility, balance, and stress relief. Start with 20-30 minute sessions and focus on proper alignment.",
        cycling:
          "Cycling provides great cardio while being gentle on joints, burning 250-500 calories per hour. You can cycle outdoors or use a stationary bike. It's excellent for building leg strength and cardiovascular endurance.",
        lifting:
          "Weightlifting is essential for building strength and muscle. It burns 120-240 calories per hour but increases metabolism for hours after. Focus on compound movements and progressive overload. Aim for 8-12 reps per set for muscle growth.",
        climbing:
          "Rock climbing builds functional strength, problem-solving skills, and confidence. It burns 280-560 calories per hour and works your entire body. Start at indoor climbing gyms with proper instruction and safety equipment.",
      };

      for (const [sport, description] of Object.entries(sportMap)) {
        if (message.includes(sport)) {
          return (
            description +
            "\n\nWould you like more specific guidance on getting started with this activity?"
          );
        }
      }
    }

    if (analysis.isInjuryRelated) {
      return `Injury prevention and management is crucial for long-term fitness success. Always warm up for 5-10 minutes before exercise with dynamic stretching, and cool down with static stretches afterward.\n\nListen to your body - sharp pain means stop immediately, while muscle soreness is normal. If you have existing injuries, focus on low-impact activities like swimming or cycling, and consider consulting a physical therapist.\n\nFor injury prevention, prioritize proper form over weight or speed, gradually increase intensity, and ensure adequate rest between workouts. Strength training actually helps prevent future injuries by supporting joints and improving balance.\n\nDo you have a specific injury concern, or are you looking for general prevention strategies?`;
    }

    if (analysis.isMotivationRelated) {
      return `Staying motivated is one of the biggest fitness challenges! Set SMART goals - Specific, Measurable, Achievable, Relevant, and Time-bound. For example: "Run 3x per week for 30 minutes for 4 weeks."\n\nBuild habits by scheduling workouts like appointments and starting small (10-15 minutes) if needed. Stay accountable by finding a workout partner or joining fitness communities. Make it enjoyable by choosing activities you genuinely like and mixing up routines to prevent boredom.\n\nRemember that missing one workout isn\'t failure - focus on consistency over perfection. When motivation drops, just start with lower intensity rather than skipping entirely. Track your progress to see how far you\'ve come, and celebrate non-scale victories like increased energy or better sleep.\n\nWhat\'s your biggest motivation challenge?`;
    }

    if (analysis.isTimeRelated || analysis.isScheduleRelated) {
      return `Busy schedules make fitness challenging but definitely manageable! Time-efficient workouts include HIIT (20 minutes = 40 minutes traditional cardio), circuit training (full body in 30 minutes), and shorter yoga sessions (15-20 minutes for flexibility).\n\nStrategic scheduling helps - morning workouts have fewer excuses, lunch break sessions work for some, and weekend longer sessions can make up for busy weekdays. You can also split workouts into 15-minute morning and evening sessions.\n\nHome workouts eliminate travel time - bodyweight exercises, resistance bands, and yoga mats require minimal space. Plan your workouts in advance and treat them like important appointments.\n\nHow much time can you realistically commit to exercise daily or weekly?`;
    }

    if (analysis.isAgeRelated) {
      return `Fitness is important at every age! For teens (16-25), focus on building habits and trying multiple sports. Adults (26-45) should balance strength, cardio, and flexibility. Middle age (46-65) should emphasize maintaining muscle mass and joint health with low-impact options. Seniors (65+) benefit from balance, flexibility, and social fitness components.\n\nRegardless of age, start slowly and progress gradually, listen to your body, focus on consistency over intensity, and consult doctors before starting new programs. The key is adapting activities to your current fitness level and any physical limitations.\n\nWhat age group are you asking about, or do you have age-specific concerns?`;
    }

    if (analysis.isEquipmentRelated) {
      return `Equipment needs vary by activity and budget. Budget-friendly options include yoga ($20-30 mat) and running ($80-120 shoes). Moderate investments include swimming ($50-100 for suit/goggles) and gym memberships ($30-60 monthly). Higher-end options include cycling ($300+ for bike) and rock climbing ($200+ for gear).\n\nFor home gyms, start with essentials: yoga mat, resistance bands ($15-25), and adjustable dumbbells ($1-2 per pound). Money-saving tips include buying used equipment, looking for gym deals, and investing in quality shoes first.\n\nWhat\'s your budget range, and which activities interest you most?`;
    }

    // General fitness intelligence
    if (
      analysis.isExerciseRelated ||
      analysis.isHealthRelated ||
      analysis.isWeightRelated
    ) {
      return `I can help you with comprehensive fitness guidance! Based on your question, I can provide personalized recommendations for exercise routines, nutrition plans, goal setting, and injury prevention.\n\nFor effective fitness results, the key principles are consistency (regular workouts), progressive overload (gradually increasing intensity), proper nutrition (fueling your body appropriately), adequate recovery (rest and sleep), and enjoyment (choosing activities you like).\n\nThe best approach combines cardiovascular exercise (for heart health and calorie burning), strength training (for muscle and metabolism), and flexibility work (for injury prevention and mobility).\n\nTell me more about your specific situation - your current fitness level, goals, available time, and any limitations or preferences you have. This will help me give you the most helpful and personalized advice!`;
    }

    // Default response for non-fitness questions
    return "I'm your AI fitness assistant! I can help you with comprehensive fitness guidance including exercise routines, nutrition plans, weight management, injury prevention, and motivation strategies. I can also tell you about the sports available in this directory and help you choose the right activities for your goals.\n\nAsk me anything about fitness, health, or using this website! For example: 'I'm 71kg and want to be 65kg, what should I do?' or 'What's the best exercise for beginners?'";
  };

  const searchOnline = async (query: string): Promise<string> => {
    try {
      // Simulate web search with current fitness trends and research
      const currentFitnessInfo = {
        "2024 trends":
          "2024 fitness trends include hybrid workouts (combining in-person and virtual training), wearable technology integration, mental health focus, and functional fitness movements.",
        "latest research":
          "Recent studies show that combining strength training with cardio provides optimal health benefits. HIIT workouts continue to show impressive results for time-efficient fitness.",
        nutrition:
          "Current nutrition science emphasizes personalized nutrition plans, with focus on whole foods, adequate protein intake (1.6-2.2g per kg for active individuals), and timing nutrients around workouts.",
        recovery:
          "Latest research highlights the importance of sleep quality (7-9 hours), active recovery, and stress management for optimal fitness results.",
        technology:
          "Fitness technology trends include AI-powered personal training apps, advanced wearable devices, and virtual reality fitness experiences.",
      };

      const queryLower = query.toLowerCase();
      let relevantInfo = "Based on current fitness research and trends:\n\n";

      // Find relevant information based on query
      if (
        queryLower.includes("trend") ||
        queryLower.includes("2024") ||
        queryLower.includes("latest")
      ) {
        relevantInfo += `**Current Fitness Trends:** ${currentFitnessInfo["2024 trends"]}\n\n`;
      }

      if (
        queryLower.includes("research") ||
        queryLower.includes("study") ||
        queryLower.includes("science")
      ) {
        relevantInfo += `**Latest Research:** ${currentFitnessInfo["latest research"]}\n\n`;
      }

      if (
        queryLower.includes("nutrition") ||
        queryLower.includes("diet") ||
        queryLower.includes("food")
      ) {
        relevantInfo += `**Current Nutrition Science:** ${currentFitnessInfo["nutrition"]}\n\n`;
      }

      if (
        queryLower.includes("recovery") ||
        queryLower.includes("sleep") ||
        queryLower.includes("rest")
      ) {
        relevantInfo += `**Recovery Research:** ${currentFitnessInfo["recovery"]}\n\n`;
      }

      if (
        queryLower.includes("technology") ||
        queryLower.includes("app") ||
        queryLower.includes("wearable")
      ) {
        relevantInfo += `**Fitness Technology:** ${currentFitnessInfo["technology"]}\n\n`;
      }

      // If no specific matches, provide general current information
      if (
        relevantInfo === "Based on current fitness research and trends:\n\n"
      ) {
        relevantInfo += `**General Current Information:** ${currentFitnessInfo["latest research"]}\n\n`;
        relevantInfo += `${currentFitnessInfo["nutrition"]}\n\n`;
      }

      return relevantInfo;
    } catch (error) {
      console.error("Search error:", error);
      return "I'm having trouble accessing current information right now. Let me help you with my fitness knowledge base.";
    }
  };

  const generateBotResponseWithSearch = async (
    userMessage: string,
  ): Promise<string> => {
    const message = userMessage.toLowerCase();

    // Check if the question requires current online information
    const needsOnlineInfo =
      message.includes("latest") ||
      message.includes("current") ||
      message.includes("news") ||
      message.includes("trend") ||
      message.includes("research") ||
      message.includes("study") ||
      message.includes("statistics") ||
      message.includes("2024") ||
      message.includes("2025") ||
      message.includes("recent") ||
      message.includes("new");

    // For questions needing current information, search online first
    if (needsOnlineInfo) {
      const onlineInfo = await searchOnline(userMessage);
      if (
        onlineInfo &&
        !onlineInfo.includes("couldn't find") &&
        !onlineInfo.includes("trouble accessing")
      ) {
        return `${onlineInfo}\n\nBased on this current information, here's how it applies to fitness:\n\n${generateBotResponse(userMessage)}`;
      }
    }

    // Fall back to knowledge base for other questions
    return generateBotResponse(userMessage);
  };

  const detectPersonalInfoNeeded = (message: string): boolean => {
    const personalInfoKeywords = [
      "age",
      "how old",
      "years old",
      "height",
      "tall",
      "weight",
      "kg",
      "pounds",
      "lbs",
      "gender",
      "sex",
      "male",
      "female",
      "experience level",
      "fitness level",
      "beginner",
      "advanced",
      "intermediate",
      "medical conditions",
      "injuries",
      "limitations",
      "goals",
      "target weight",
      "current weight",
      "desired weight",
    ];

    return personalInfoKeywords.some((keyword) =>
      message.toLowerCase().includes(keyword),
    );
  };

  const generateAutomaticResponse = (
    choice: string,
  ): {
    content: string;
    followUpChoices?: string[];
    waitForInput?: boolean;
  } => {
    const choiceLower = choice.toLowerCase();
    const choiceKey = choiceLower.replace(/\s+/g, "_");
    const currentState = conversationState.get(choiceKey) || 0;

    // Update conversation state
    setConversationState(
      (prev) => new Map(prev.set(choiceKey, currentState + 1)),
    );

    // Progress tracking
    if (choiceLower.includes("track") || choiceLower.includes("progress")) {
      if (currentState === 0) {
        return {
          content:
            "Here's how to track your fitness progress effectively:\n\n**Weekly Measurements:**\n• **Weight:** Same day, same time, morning\n• **Body Measurements:** Waist, hips, arms, thighs\n• **Progress Photos:** Front, side, back views\n• **Performance:** Workout duration, intensity, weights lifted\n\n**Monthly Assessments:**\n• Body composition (if possible)\n• Clothing fit changes\n• Energy levels and sleep quality\n• Strength and endurance improvements\n\n**Tracking Tools:**\n• Fitness apps (MyFitnessPal, Strava)\n• Simple notebook or spreadsheet\n• Body measurement tape\n• Progress photos\n\n**Key Metrics to Watch:**\n• Consistency over perfection\n• How clothes fit\n• Energy and mood improvements\n• Strength gains, not just weight loss\n\nWhat's your primary goal, and how often would you like to check in on your progress?",
          waitForInput: true,
          followUpChoices: [
            "Weight loss is my main goal",
            "Building muscle",
            "Overall fitness",
            "I need accountability help",
          ],
        };
      }
    }

    // Default response for other choices
    return {
      content: `Great question about "${choice}"! Let me provide you with detailed information about this topic.\n\nThis is an important aspect of fitness that deserves careful consideration. Based on your interest in ${choice}, I can help you create a personalized approach that fits your specific needs and goals.\n\nTo give you the most accurate and helpful advice, could you tell me:\n• Your current fitness level\n• Any specific goals you're working toward\n• Any limitations or concerns I should know about\n• Your preferred workout schedule\n\nThis information will help me tailor my recommendations specifically for you!`,
      waitForInput: true,
      followUpChoices: [
        "I'm a beginner",
        "I'm intermediate",
        "I'm advanced",
        "I have specific limitations",
      ],
    };
  };

  const sendMessage = async (isChoiceClick: boolean = false) => {
    if (chatInput.trim() === "") return;

    const userMessage = chatInput.trim();
    setChatMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage },
    ]);

    // Clear input immediately
    setChatInput("");

    // Check if this is a choice click that needs automatic response
    if (isChoiceClick) {
      const autoResponse = generateAutomaticResponse(userMessage);

      // Add the automatic response
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: autoResponse.content,
          followUpChoices: autoResponse.followUpChoices,
        },
      ]);

      // If waiting for input, don't show typing indicator
      if (autoResponse.waitForInput) {
        return;
      }
    }

    // Show typing indicator for regular messages or non-waiting choices
    setChatMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "🔍 Searching for the best information...",
      },
    ]);

    // Generate bot response with potential online search
    try {
      const botResponse = await generateBotResponseWithSearch(userMessage);

      // Update the message with the actual response
      setChatMessages((prev) => {
        const newMessages = [...prev];
        // Replace the typing indicator with the actual response
        newMessages[newMessages.length - 1] = {
          role: "assistant",
          content:
            typeof botResponse === "string" ? botResponse : botResponse.content,
          followUpChoices:
            typeof botResponse === "string"
              ? undefined
              : botResponse.followUpChoices,
        };
        return newMessages;
      });
    } catch (error) {
      console.error("Response generation error:", error);
      const fallbackResponse = generateBotResponse(userMessage);
      setChatMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          role: "assistant",
          content:
            typeof fallbackResponse === "string"
              ? fallbackResponse
              : fallbackResponse.content,
          followUpChoices:
            typeof fallbackResponse === "string"
              ? undefined
              : fallbackResponse.followUpChoices,
        };
        return newMessages;
      });
    }

    setChatInput("");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 animate-gradient-shift"></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23933EA8' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 group"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors" />
            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
              Back
            </span>
          </Link>
        </div>

        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-6 py-3 rounded-full mb-8 shadow-lg">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-emerald-700 tracking-wide">
              FIND YOUR PERFECT MATCH
            </span>
          </div>
          <h1 className="text-7xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-8 leading-tight">
            Sports Directory
          </h1>
          <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium">
            Discover your ideal sport with our comprehensive fitness guide. From
            beginner-friendly yoga to intense rock climbing, find activities
            that match your goals, lifestyle, and fitness level.
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">6</span>
              </div>
              <span className="text-sm font-semibold text-gray-700">
                Sports Available
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">★</span>
              </div>
              <span className="text-sm font-semibold text-gray-700">
                Expert Rated
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Filters and Search */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <div className="flex flex-col xl:flex-row gap-6 mb-8">
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Search className="text-gray-400 w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search sports, activities, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-emerald-50/50 border border-emerald-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-900 placeholder-gray-500 font-medium"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <select
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="appearance-none bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl px-6 py-4 pr-10 focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-gray-700 cursor-pointer hover:from-green-100 hover:to-emerald-100"
                >
                  <option value="all">All Difficulties</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <Filter className="w-4 h-4 text-green-600" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={intensityFilter}
                  onChange={(e) => setIntensityFilter(e.target.value)}
                  className="appearance-none bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl px-6 py-4 pr-10 focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium text-gray-700 cursor-pointer hover:from-teal-100 hover:to-cyan-100"
                >
                  <option value="all">All Intensities</option>
                  <option value="low">Low Intensity</option>
                  <option value="medium">Medium Intensity</option>
                  <option value="high">High Intensity</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <Zap className="w-4 h-4 text-teal-600" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={environmentFilter}
                  onChange={(e) => setEnvironmentFilter(e.target.value)}
                  className="appearance-none bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl px-6 py-4 pr-10 focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all font-medium text-gray-700 cursor-pointer hover:from-cyan-100 hover:to-blue-100"
                >
                  <option value="all">All Environments</option>
                  <option value="indoor">Indoor</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="both">Both</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-xl">
                <Filter className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Results
                </span>
                <span className="block text-lg font-bold text-gray-900">
                  {filteredSports.length} sports found
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 pr-8 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm font-medium text-gray-700 cursor-pointer"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name A-Z</option>
                  <option value="cost">Lowest Cost</option>
                </select>
              </div>

              <div className="flex bg-gray-100 rounded-2xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-emerald-600 shadow-lg scale-105"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    viewMode === "list"
                      ? "bg-white text-emerald-600 shadow-lg scale-105"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Sports Grid/List */}
        {filteredSports.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
            }
          >
            {filteredSports.map((sport) => (
              <div
                key={sport.id}
                className={`group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/20 ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                {/* Enhanced Card Header */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${
                    sport.difficulty === "beginner"
                      ? "from-emerald-500 to-teal-600"
                      : sport.difficulty === "intermediate"
                        ? "from-amber-500 to-orange-600"
                        : "from-red-500 to-pink-600"
                  } p-6 ${viewMode === "list" ? "w-64" : ""}`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {sport.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-300 fill-current" />
                        <span className="text-white text-sm font-bold">
                          {sport.rating}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-lg">
                          {getEnvironmentIcon(sport.environment)}
                        </span>
                        <span className="text-white text-sm font-medium capitalize">
                          {sport.environment}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Card Content */}
                <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <p className="text-gray-600 mb-5 leading-relaxed text-sm font-medium">
                    {sport.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    <span
                      className={`px-4 py-2 rounded-full text-xs font-bold border-2 shadow-sm ${getDifficultyColor(sport.difficulty)}`}
                    >
                      {sport.difficulty}
                    </span>
                    <span
                      className={`px-4 py-2 rounded-full text-xs font-bold border-2 shadow-sm ${getIntensityColor(sport.intensity)}`}
                    >
                      {sport.intensity}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-5 text-sm">
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700 font-medium capitalize">
                        {sport.social.replace("_", " ")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700 font-medium">
                        {sport.barrierToEntry.cost}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700 font-medium capitalize">
                        {sport.barrierToEntry.learningCurve}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700 font-medium">
                        {sport.popularity}% popular
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-4 mb-5 border border-orange-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-orange-500 p-2 rounded-xl">
                        <Flame className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-bold text-orange-800">
                        Calorie Burn
                      </span>
                    </div>
                    <div className="text-xs text-gray-700 font-medium">
                      <span className="text-lg font-bold text-orange-600">
                        {sport.caloriesBurned.per30Min}
                      </span>{" "}
                      cal / 30min •
                      <span className="text-lg font-bold text-orange-600 ml-1">
                        {sport.caloriesBurned.per60Min}
                      </span>{" "}
                      cal / 60min
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/sports/${sport.id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all hover:shadow-lg hover:scale-105 group-hover:gap-3"
                    >
                      Learn More
                      <span className="transform transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                    <button className="p-3 rounded-2xl bg-gray-50 hover:bg-red-50 transition-all group/btn">
                      <Heart className="w-5 h-5 text-gray-400 group-hover/btn:text-red-500 transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-8 flex items-center justify-center shadow-inner">
              <Search className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              No sports found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg leading-relaxed">
              Try adjusting your filters or search terms to find the perfect
              sport for you.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setDifficultyFilter("all");
                setIntensityFilter("all");
                setEnvironmentFilter("all");
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all hover:shadow-lg hover:scale-105"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* AI Chatbot */}
      <div className="fixed right-4 bottom-4 z-50">
        {/* Chat Button */}
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              AI Assistant
            </span>
          </button>
        )}

        {/* Chat Window */}
        {isChatOpen && (
          <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">AI Fitness Assistant</span>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.length === 0 && (
                <div className="space-y-4">
                  <div className="text-gray-500 text-sm text-center py-4">
                    👋 Hi! I'm your AI fitness assistant. Ask me about sports,
                    health, or this website!
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="space-y-3">
                    <div className="text-xs text-gray-400 font-medium mb-2">
                      QUICK ACTIONS:
                    </div>

                    {/* Weight Goals */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          setChatInput(
                            "I want to lose weight, what should I do?",
                          );
                          sendMessage();
                        }}
                        className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium hover:bg-purple-200 transition-colors"
                      >
                        🎯 Weight Loss
                      </button>
                      <button
                        onClick={() => {
                          setChatInput(
                            "I want to build muscle, what's the best plan?",
                          );
                          sendMessage();
                        }}
                        className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium hover:bg-blue-200 transition-colors"
                      >
                        💪 Build Muscle
                      </button>
                      <button
                        onClick={() => {
                          setChatInput("I'm a beginner, where should I start?");
                          sendMessage();
                        }}
                        className="px-3 py-2 bg-green-100 text-green-700 rounded-lg text-xs font-medium hover:bg-green-200 transition-colors"
                      >
                        🌱 Beginner Plan
                      </button>
                    </div>

                    {/* Common Questions */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          setChatInput("What are the latest fitness trends?");
                          sendMessage();
                        }}
                        className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-xs font-medium hover:bg-orange-200 transition-colors"
                      >
                        🔥 Latest Trends
                      </button>
                      <button
                        onClick={() => {
                          setChatInput(
                            "What's the best nutrition for fitness?",
                          );
                          sendMessage();
                        }}
                        className="px-3 py-2 bg-pink-100 text-pink-700 rounded-lg text-xs font-medium hover:bg-pink-200 transition-colors"
                      >
                        🥗 Nutrition Tips
                      </button>
                      <button
                        onClick={() => {
                          setChatInput("How can I stay motivated?");
                          sendMessage();
                        }}
                        className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-medium hover:bg-indigo-200 transition-colors"
                      >
                        ⚡ Stay Motivated
                      </button>
                    </div>

                    {/* Sport Specific */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          setChatInput("Tell me about running for fitness");
                          sendMessage();
                        }}
                        className="px-3 py-2 bg-teal-100 text-teal-700 rounded-lg text-xs font-medium hover:bg-teal-200 transition-colors"
                      >
                        🏃 Running
                      </button>
                      <button
                        onClick={() => {
                          setChatInput("What are the benefits of swimming?");
                          sendMessage();
                        }}
                        className="px-3 py-2 bg-cyan-100 text-cyan-700 rounded-lg text-xs font-medium hover:bg-cyan-200 transition-colors"
                      >
                        🏊 Swimming
                      </button>
                      <button
                        onClick={() => {
                          setChatInput("Is yoga good for beginners?");
                          sendMessage();
                        }}
                        className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium hover:bg-purple-200 transition-colors"
                      >
                        🧘 Yoga
                      </button>
                    </div>

                    {/* Personalized Tracking */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          setChatInput(
                            "I'm [current weight]kg and want to be [goal weight]kg, what should I do?",
                          );
                          sendMessage();
                        }}
                        className="px-3 py-2 bg-red-100 text-red-700 rounded-lg text-xs font-medium hover:bg-red-200 transition-colors"
                      >
                        ⚖️ Weight Tracker
                      </button>
                      <button
                        onClick={() => {
                          setChatInput(
                            "What's the best workout for my busy schedule?",
                          );
                          sendMessage();
                        }}
                        className="px-3 py-2 bg-yellow-100 text-yellow-700 rounded-lg text-xs font-medium hover:bg-yellow-200 transition-colors"
                      >
                        ⏰ Time Saver
                      </button>
                      <button
                        onClick={() => {
                          setChatInput("How can I prevent injuries?");
                          sendMessage();
                        }}
                        className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors"
                      >
                        🛡️ Injury Prevention
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="max-w-[80%] space-y-2">
                    <div
                      className={`p-3 rounded-2xl text-sm ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.content.split("\n").map((line, i) => (
                        <div key={i}>
                          {line}
                          {i < message.content.split("\n").length - 1 && <br />}
                        </div>
                      ))}
                    </div>

                    {/* Follow-up choices for assistant messages */}
                    {message.role === "assistant" &&
                      message.followUpChoices && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {message.followUpChoices.map(
                            (choice, choiceIndex) => (
                              <button
                                key={choiceIndex}
                                onClick={() => {
                                  setChatInput(choice);
                                  sendMessage(true);
                                }}
                                className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium hover:bg-purple-100 transition-colors border border-purple-200"
                              >
                                {choice}
                              </button>
                            ),
                          )}
                        </div>
                      )}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask about sports or fitness..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm text-gray-900 placeholder-gray-500"
                />
                <button
                  onClick={sendMessage}
                  className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
