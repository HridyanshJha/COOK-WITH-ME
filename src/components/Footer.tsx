import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              COOK WITH ME
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Share your recipes with the world and discover amazing dishes from our community.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Contact</a></li>
              <li><a href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Terms of Service</a></li>
              <li><a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/recipes/breakfast" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Breakfast</a></li>
              <li><a href="/recipes/lunch" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Lunch</a></li>
              <li><a href="/recipes/dinner" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Dinner</a></li>
              <li><a href="/recipes/desserts" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">Desserts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} COOK WITH ME. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}