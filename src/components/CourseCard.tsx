import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, User, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Course } from '../types/course';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-white/10 hover:border-purple-500/30 transition-all duration-300"
      onClick={handleClick}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
        >
          <Play size={32} className="ml-1" />
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <Tag size={16} className="text-purple-400" />
          <span className="text-sm text-purple-400 font-medium">{course.category}</span>
        </div>

        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User size={16} className="text-gray-400" />
              <span className="text-sm text-gray-400">{course.instructor}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={16} className="text-gray-400" />
              <span className="text-sm text-gray-400">{course.duration}</span>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm font-medium transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
          >
            Enroll Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};