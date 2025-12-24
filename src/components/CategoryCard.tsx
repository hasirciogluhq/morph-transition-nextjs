"use client";

import { motion } from "framer-motion";
import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <motion.div
      layoutId={`category-${category.id}`}
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded-xl bg-neutral-800 aspect-[16/9]"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-40`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.h2 
          layoutId={`category-title-${category.id}`}
          className="text-white font-bold text-2xl mb-2"
        >
          {category.name}
        </motion.h2>
        <motion.p 
          layoutId={`category-desc-${category.id}`}
          className="text-gray-200 text-sm"
        >
          {category.description}
        </motion.p>
      </div>
    </motion.div>
  );
}
