import React from 'react';
import { motion } from 'framer-motion';
import { CourseCard } from './CourseCard';
import { Course } from '../types/course';
import { Sparkles } from 'lucide-react';

interface RelatedCoursesProps {
  currentCourse: Course;
  courses: Course[];
}

export const RelatedCourses: React.FC<RelatedCoursesProps> = ({ currentCourse, courses }) => {
  const relatedCourses = courses
    .filter(course => 
      course.id !== currentCourse.id && 
      (course.category === currentCourse.category || 
       course.title.toLowerCase().includes(currentCourse.category.toLowerCase()))
    )
    .slice(0, 3);

  if (relatedCourses.length === 0) return null;

  return (
    <div className="mt-16">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 rounded-full bg-purple-500/10">
          <Sparkles className="w-6 h-6 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold gradient-text">
          Related Courses
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedCourses.map(course => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CourseCard course={course} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};