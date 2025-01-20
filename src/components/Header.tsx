import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/40 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <GraduationCap size={32} className="text-purple-500 group-hover:text-purple-400 transition-colors" />
              <div className="absolute inset-0 animate-glow rounded-full"></div>
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-pink-600 transition-all">
              Xpl0itPedia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/courses" className="nav-link">Courses</Link>
            <Link to="/resources" className="nav-link">Resources</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-64 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400 outline-none transition-all group-hover:border-purple-500/30"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 group-hover:text-purple-400 transition-colors" size={20} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link to="/" className="block nav-link py-2">Home</Link>
            <Link to="/courses" className="block nav-link py-2">Courses</Link>
            <Link to="/resources" className="block nav-link py-2">Resources</Link>
            <Link to="/about" className="block nav-link py-2">About</Link>
            <Link to="/contact" className="block nav-link py-2">Contact</Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400 outline-none transition-all"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};