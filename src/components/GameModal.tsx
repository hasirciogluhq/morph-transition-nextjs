"use client";

import { motion } from "framer-motion";
import { Game } from "../types";

interface GameModalProps {
  game: Game;
  onClose: () => void;
}

export function GameModal({ game, onClose }: GameModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8"
      onClick={onClose}
    >
      <motion.div
        layoutId={`game-${game.id}`}
        className="relative w-full max-w-4xl bg-zinc-900 rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
        >
          <span className="text-2xl font-bold">×</span>
        </motion.button>

        {/* Image */}
        <motion.div className="relative w-full h-96">
          <motion.img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="p-8"
        >
          <motion.h2 className="text-4xl font-bold text-white mb-4">
            {game.title}
          </motion.h2>
          <motion.p className="text-gray-300 text-lg leading-relaxed">
            {game.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex gap-4"
          >
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Play Now
            </button>
            <button className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-colors">
              Add to Library
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
