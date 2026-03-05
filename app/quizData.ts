// Quiz data and types for Coffee Personality Quiz

export type PersonalityType =
  | "Bold Adventurer"
  | "Sweet Enthusiast"
  | "Social Butterfly"
  | "Night Owl"
  | "Indulgent Treat";

export interface Answer {
  emoji: string;
  text: string;
  personalityType: PersonalityType;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface CoffeePairing {
  personality: PersonalityType;
  drink: string;
  tagline: string;
  description: string;
}

// Quiz Questions
export const questions: Question[] = [
  {
    id: 1,
    question: "How do you spend your ideal weekend?",
    answers: [
      {
        emoji: "🏔️",
        text: "Trying a new extreme sport or adventure",
        personalityType: "Bold Adventurer",
      },
      {
        emoji: "🍰",
        text: "Brunch at the cutest cafe in town",
        personalityType: "Sweet Enthusiast",
      },
      {
        emoji: "🎉",
        text: "Hosting friends for game night",
        personalityType: "Social Butterfly",
      },
      {
        emoji: "🌙",
        text: "Binge-watching shows until 3am",
        personalityType: "Night Owl",
      },
      {
        emoji: "🛁",
        text: "Spa day with all the extras",
        personalityType: "Indulgent Treat",
      },
    ],
  },
  {
    id: 2,
    question: "What's your go-to travel style?",
    answers: [
      {
        emoji: "🎒",
        text: "Backpacking through unknown territories",
        personalityType: "Bold Adventurer",
      },
      {
        emoji: "🏰",
        text: "Instagram-worthy destinations with charming cafes",
        personalityType: "Sweet Enthusiast",
      },
      {
        emoji: "🏖️",
        text: "Beach resort with friends and activities",
        personalityType: "Social Butterfly",
      },
      {
        emoji: "🌃",
        text: "Exploring nightlife and late-night food scenes",
        personalityType: "Night Owl",
      },
      {
        emoji: "✨",
        text: "Luxury resort with room service",
        personalityType: "Indulgent Treat",
      },
    ],
  },
  {
    id: 3,
    question: "Pick your ideal dinner:",
    answers: [
      {
        emoji: "🌶️",
        text: "Spicy food challenge at a hole-in-the-wall",
        personalityType: "Bold Adventurer",
      },
      {
        emoji: "🧁",
        text: "Dessert-first at a trendy spot",
        personalityType: "Sweet Enthusiast",
      },
      {
        emoji: "🍕",
        text: "Group dinner with lots of sharing plates",
        personalityType: "Social Butterfly",
      },
      {
        emoji: "🍜",
        text: "Late-night ramen run",
        personalityType: "Night Owl",
      },
      {
        emoji: "🥩",
        text: "Fine dining tasting menu",
        personalityType: "Indulgent Treat",
      },
    ],
  },
  {
    id: 4,
    question: "How do you handle Monday mornings?",
    answers: [
      {
        emoji: "💪",
        text: "5am workout to crush the day",
        personalityType: "Bold Adventurer",
      },
      {
        emoji: "☀️",
        text: "Positive playlist and a smile",
        personalityType: "Sweet Enthusiast",
      },
      {
        emoji: "☕",
        text: "Coffee date with a coworker",
        personalityType: "Social Butterfly",
      },
      {
        emoji: "😴",
        text: "Hit snooze repeatedly",
        personalityType: "Night Owl",
      },
      {
        emoji: "🛌",
        text: "Take it slow with a luxe breakfast",
        personalityType: "Indulgent Treat",
      },
    ],
  },
  {
    id: 5,
    question: "Your perfect evening looks like:",
    answers: [
      {
        emoji: "🧗",
        text: "Rock climbing or a new intense class",
        personalityType: "Bold Adventurer",
      },
      {
        emoji: "🎨",
        text: "Crafting or a cozy book",
        personalityType: "Sweet Enthusiast",
      },
      {
        emoji: "🎤",
        text: "Karaoke or trivia night out",
        personalityType: "Social Butterfly",
      },
      {
        emoji: "🎮",
        text: "Gaming marathon till dawn",
        personalityType: "Night Owl",
      },
      {
        emoji: "🍷",
        text: "Wine and gourmet cheese board",
        personalityType: "Indulgent Treat",
      },
    ],
  },
  {
    id: 6,
    question: "Choose your vacation vibe:",
    answers: [
      {
        emoji: "⛰️",
        text: "Hiking to a remote summit",
        personalityType: "Bold Adventurer",
      },
      {
        emoji: "🌸",
        text: "Cherry blossom festival in spring",
        personalityType: "Sweet Enthusiast",
      },
      {
        emoji: "🎪",
        text: "Music festival with your crew",
        personalityType: "Social Butterfly",
      },
      {
        emoji: "🌆",
        text: "City that never sleeps",
        personalityType: "Night Owl",
      },
      {
        emoji: "🏝️",
        text: "Private villa with a personal chef",
        personalityType: "Indulgent Treat",
      },
    ],
  },
];

// Coffee Pairings
export const coffeePairings: CoffeePairing[] = [
  {
    personality: "Bold Adventurer",
    drink: "Double Espresso",
    tagline: "You live for intensity",
    description: "For those who embrace challenges and live life at full throttle",
  },
  {
    personality: "Sweet Enthusiast",
    drink: "Caramel Latte",
    tagline: "Life's too short for bitter",
    description: "You find joy in the little things and sweetness in every moment",
  },
  {
    personality: "Social Butterfly",
    drink: "Cappuccino",
    tagline: "Coffee is better with company",
    description: "You thrive on connection and sharing experiences with others",
  },
  {
    personality: "Night Owl",
    drink: "Red Eye (coffee + espresso shot)",
    tagline: "Sleep is optional",
    description: "Your best hours are after dark, fueled by determination and caffeine",
  },
  {
    personality: "Indulgent Treat",
    drink: "Mocha with Whip",
    tagline: "Coffee is dessert",
    description: "You believe in treating yourself to the finer things in life",
  },
];
