"use client";

import { motion } from "framer-motion";
import { Game } from "../types";

interface GameCardProps {
  game: Game;
  onClick: () => void;
}

export function GameCard({ game, onClick }: GameCardProps) {
  return (
    <motion.div
      layoutId={`game-${game.id}`}
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded-lg bg-zinc-800 aspect-[4/5]"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <motion.img
        src={game.image}
        alt={game.title}
        className="w-full h-full object-cover"
      />
      <motion.div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
        <motion.h3 className="text-white font-bold text-lg">
          {game.title}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
}
