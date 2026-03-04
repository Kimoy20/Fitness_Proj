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
    </div>
  );
}
