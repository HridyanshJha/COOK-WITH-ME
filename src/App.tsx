import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrendingRecipes from './components/TrendingRecipes';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main>
            <HeroSection />
            <TrendingRecipes />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;