import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Play } from 'lucide-react';
import { Header } from '../components/Header';
import { PlasmaBg } from '../components/PlasmaBg';
import { Footer } from '../components/Footer';
import { NotFound } from '../components/NotFound';
import { courses } from '../data/courses';

export const CoursePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  if (!course) {
    return <NotFound type="course" />;
  }

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <PlasmaBg />
      <Header onSearch={() => {}} />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            {course.title}
          </h1>
          <p className="text-xl text-gray-300 mb-6">{course.description}</p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>Instructor: {course.instructor}</span>
            <span>•</span>
            <span>Duration: {course.duration}</span>
            <span>•</span>
            <span>Category: {course.category}</span>
          </div>
        </motion.div>

        {activeVideo && (
          <div className="mb-12 rounded-xl overflow-hidden aspect-video">
            <iframe
              src={activeVideo}
              className="w-full h-full"
              allowFullScreen
              title="Course Video"
            />
          </div>
        )}

        <div className="space-y-4">
          {course.sections.map(section => (
            <div
              key={section.id}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-purple-500/10 transition-colors"
              >
                <h3 className="text-xl font-semibold">{section.title}</h3>
                {expandedSections.includes(section.id) ? (
                  <ChevronUp className="text-purple-400" />
                ) : (
                  <ChevronDown className="text-purple-400" />
                )}
              </button>

              {expandedSections.includes(section.id) && (
                <div className="px-6 pb-4 space-y-2">
                  {section.videos.map(video => (
                    <motion.button
                      key={video.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => setActiveVideo(video.embedUrl)}
                      className="w-full flex items-center space-x-4 p-4 rounded-lg hover:bg-purple-500/10 transition-colors"
                    >
                      <div className="relative flex-shrink-0">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-40 h-24 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                          <Play className="text-white" size={24} />
                        </div>
                      </div>
                      <div className="flex-grow text-left">
                        <h4 className="font-medium mb-1">{video.title}</h4>
                        <span className="text-sm text-gray-400">
                          Duration: {video.duration}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};