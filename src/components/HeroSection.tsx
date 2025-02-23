import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Discover & Share
            <span className="text-orange-500"> Amazing Recipes</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join our community of food lovers and share your culinary creations
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for recipes, ingredients, or cuisines..."
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}