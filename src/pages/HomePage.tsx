import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { CourseGrid } from '../components/CourseGrid';
import { PlasmaBg } from '../components/PlasmaBg';
import { Footer } from '../components/Footer';
import { courses } from '../data/courses';

export const HomePage: React.FC = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = (query: string) => {
    const filtered = courses.filter(course =>
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase()) ||
      course.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black text-white">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-10" />
      <PlasmaBg />
      <Header onSearch={handleSearch} />
      
      <main className="relative pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 px-4"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Discover Your Next Skill
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Explore our cutting-edge courses and transform your future with industry-leading instructors.
          </motion.p>

          <motion.div
            className="mt-12 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full border border-purple-500/30 hover:border-purple-500/60 text-white font-medium transition-all">
              Browse Courses
            </button>
          </motion.div>
        </motion.div>

        <CourseGrid courses={filteredCourses} />
      </main>

      <Footer />
    </div>
  );
};