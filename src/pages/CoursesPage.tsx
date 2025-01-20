import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PlasmaBg } from '../components/PlasmaBg';
import { CourseCard } from '../components/CourseCard';
import { courses } from '../data/courses';
import { Sparkles, Clock } from 'lucide-react';

export const CoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const currentCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const upcomingCourses = [
    {
      id: 'upcoming-1',
      title: 'Advanced Cloud Architecture',
      description: 'Master cloud infrastructure design and deployment with hands-on projects.',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800',
      instructor: 'David Clark',
      category: 'Cloud Computing',
      duration: 'Coming Soon',
      sections: []
    },
    {
      id: 'upcoming-2',
      title: 'Blockchain Development',
      description: 'Learn to build decentralized applications and smart contracts.',
      thumbnail: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800',
      instructor: 'Sarah Chen',
      category: 'Blockchain',
      duration: 'Coming Soon',
      sections: []
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-5" />
      <PlasmaBg />
      <Header onSearch={setSearchQuery} />

      <main className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Current Courses Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 rounded-full bg-purple-500/10">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Available Courses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </motion.section>

        {/* Upcoming Courses Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 rounded-full bg-purple-500/10">
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Upcoming Courses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};