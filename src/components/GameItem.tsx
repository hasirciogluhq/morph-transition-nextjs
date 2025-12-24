"use client";

import { motion } from "framer-motion";
import { Game } from "@/types";

interface GameItemProps {
  game: Game;
  index: number;
}

export function GameItem({ game, index }: GameItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
      className="group relative overflow-hidden rounded-lg bg-neutral-800/50 backdrop-blur aspect-[3/4] cursor-pointer"
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-lg mb-1">{game.title}</h3>
        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
          {game.description}
        </p>
      </div>
    </motion.div>
  );
}
