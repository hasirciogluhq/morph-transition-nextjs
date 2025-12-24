import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "rpg",
    name: "RPG Games",
    description: "Role-playing adventures and epic quests",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    color: "from-purple-600 to-pink-600",
    games: [
      {
        id: "rpg-1",
        title: "Fantasy Realm: Legends",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=500&fit=crop",
        description: "Embark on an epic journey through mystical lands filled with magic and dragons."
      },
      {
        id: "rpg-2",
        title: "Dark Souls Legacy",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=500&fit=crop",
        description: "Face challenging foes in this dark fantasy world."
      },
      {
        id: "rpg-3",
        title: "Elder Scrolls: Horizon",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=500&fit=crop",
        description: "Explore vast open worlds with unlimited freedom."
      },
      {
        id: "rpg-4",
        title: "Witcher's Quest",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=500&fit=crop",
        description: "Hunt monsters and uncover ancient mysteries."
      },
      {
        id: "rpg-5",
        title: "Final Fantasy Reborn",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=500&fit=crop",
        description: "A timeless JRPG experience with stunning visuals."
      }
    ]
  },
  {
    id: "fps",
    name: "FPS Shooters",
    description: "Fast-paced first-person combat",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop",
    color: "from-red-600 to-orange-600",
    games: [
      {
        id: "fps-1",
        title: "Modern Warfare Elite",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=500&fit=crop",
        description: "Tactical modern combat with realistic graphics."
      },
      {
        id: "fps-2",
        title: "Battlefield Legends",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=500&fit=crop",
        description: "Large-scale warfare with destruction physics."
      },
      {
        id: "fps-3",
        title: "Counter Strike: Global",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=500&fit=crop",
        description: "Competitive tactical shooter with skill-based gameplay."
      },
      {
        id: "fps-4",
        title: "Apex Legends Pro",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400&h=500&fit=crop",
        description: "Battle royale with unique hero abilities."
      }
    ]
  },
  {
    id: "racing",
    name: "Racing Games",
    description: "High-speed racing action",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&h=600&fit=crop",
    color: "from-blue-600 to-cyan-600",
    games: [
      {
        id: "racing-1",
        title: "Forza Motorsport Ultimate",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400&h=500&fit=crop",
        description: "Realistic racing simulation with 500+ cars."
      },
      {
        id: "racing-2",
        title: "Need for Speed: Heat",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=500&fit=crop",
        description: "Street racing with police chases."
      },
      {
        id: "racing-3",
        title: "Mario Kart Deluxe",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=500&fit=crop",
        description: "Fun arcade racing with power-ups."
      },
      {
        id: "racing-4",
        title: "Gran Turismo 7",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=500&fit=crop",
        description: "The ultimate racing simulator experience."
      },
      {
        id: "racing-5",
        title: "F1 Championship",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=500&fit=crop",
        description: "Official Formula 1 racing game."
      }
    ]
  },
  {
    id: "adventure",
    name: "Adventure",
    description: "Exploration and story-driven experiences",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=600&fit=crop",
    color: "from-green-600 to-emerald-600",
    games: [
      {
        id: "adv-1",
        title: "Uncharted: Lost Legacy",
        image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=500&fit=crop",
        description: "Treasure hunting and action-packed adventures."
      },
      {
        id: "adv-2",
        title: "Tomb Raider Reborn",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=500&fit=crop",
        description: "Explore ancient tombs and solve puzzles."
      },
      {
        id: "adv-3",
        title: "The Last of Us: Part III",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=500&fit=crop",
        description: "Emotional story in a post-apocalyptic world."
      },
      {
        id: "adv-4",
        title: "Horizon: Zero Dawn 2",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=500&fit=crop",
        description: "Hunt robotic creatures in a beautiful open world."
      }
    ]
  }
];
