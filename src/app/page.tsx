"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Category } from "@/types";
import { categories } from "@/data/mockData";
import { CategoryCard } from "@/components/CategoryCard";
import { GameItem } from "@/components/GameItem";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Category Grid */}
      {!selectedCategory && (
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <h1 className="text-5xl font-bold text-white mb-2">Game Categories</h1>
              <p className="text-gray-400 text-lg">Select a category to explore games</p>
            </header>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Category Detail Page */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            layoutId={`category-${selectedCategory.id}`}
            className="fixed inset-0 z-50 overflow-hidden bg-neutral-900"
            initial={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            {/* Background Image with Blur */}
            <div className="absolute inset-0">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.name}
                className="w-full h-full object-cover opacity-20 blur-2xl"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedCategory.color} opacity-10`} />
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/80 to-neutral-950" />
            </div>

            {/* Content */}
            <div className="relative h-full overflow-y-auto">
              <div className="max-w-7xl mx-auto p-8">
                {/* Back Button */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors mb-8 group"
                >
                  <svg
                    className="w-6 h-6 transition-transform group-hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="text-lg font-semibold">Back to Categories</span>
                </motion.button>

                {/* Category Title & Description */}
                <motion.div className="mb-12">
                  <motion.h1
                    layoutId={`category-title-${selectedCategory.id}`}
                    className="text-6xl font-bold text-white mb-4"
                  >
                    {selectedCategory.name}
                  </motion.h1>
                  <motion.p
                    layoutId={`category-desc-${selectedCategory.id}`}
                    className="text-gray-300 text-xl"
                  >
                    {selectedCategory.description}
                  </motion.p>
                </motion.div>

                {/* Games Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {selectedCategory.games.map((game, index) => (
                    <GameItem key={game.id} game={game} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
