import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PlasmaBg } from '../components/PlasmaBg';
import { NotFound } from '../components/NotFound';
import { Map, ChevronRight, BookOpen, Code, CheckCircle2 } from 'lucide-react';

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  resources: {
    title: string;
    url: string;
    type: 'documentation' | 'tutorial' | 'practice';
  }[];
}

interface Roadmap {
  id: string;
  title: string;
  description: string;
  image: string;
  steps: RoadmapStep[];
}

const roadmaps: Record<string, Roadmap> = {
  '1': {
    id: '1',
    title: 'Frontend Development',
    description: 'Master modern frontend development with React, TypeScript, and more',
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop',
    steps: [
      {
        id: 'html-css',
        title: 'HTML & CSS Fundamentals',
        description: 'Learn the building blocks of web development',
        resources: [
          {
            title: 'MDN Web Docs - HTML',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            type: 'documentation'
          },
          {
            title: 'CSS Tricks',
            url: 'https://css-tricks.com',
            type: 'tutorial'
          }
        ]
      },
      {
        id: 'javascript',
        title: 'JavaScript Essentials',
        description: 'Master core JavaScript concepts and modern ES6+ features',
        resources: [
          {
            title: 'JavaScript.info',
            url: 'https://javascript.info',
            type: 'documentation'
          },
          {
            title: 'Frontend Masters',
            url: 'https://frontendmasters.com',
            type: 'practice'
          }
        ]
      },
      {
        id: 'react',
        title: 'React Development',
        description: 'Build modern web applications with React',
        resources: [
          {
            title: 'React Documentation',
            url: 'https://react.dev',
            type: 'documentation'
          },
          {
            title: 'React Tutorial',
            url: 'https://react.dev/learn',
            type: 'tutorial'
          }
        ]
      }
    ]
  },
  '2': {
    id: '2',
    title: 'Backend Development',
    description: 'Learn server-side programming, databases, and API development',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
    steps: [
      {
        id: 'node-basics',
        title: 'Node.js Fundamentals',
        description: 'Get started with server-side JavaScript',
        resources: [
          {
            title: 'Node.js Documentation',
            url: 'https://nodejs.org/docs/latest/',
            type: 'documentation'
          },
          {
            title: 'Node.js Tutorial',
            url: 'https://nodejs.dev/learn',
            type: 'tutorial'
          }
        ]
      },
      {
        id: 'databases',
        title: 'Database Management',
        description: 'Learn SQL and NoSQL database concepts',
        resources: [
          {
            title: 'PostgreSQL Tutorial',
            url: 'https://www.postgresqltutorial.com',
            type: 'documentation'
          },
          {
            title: 'MongoDB University',
            url: 'https://university.mongodb.com',
            type: 'practice'
          }
        ]
      }
    ]
  }
};

export const RoadmapPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const roadmap = id ? roadmaps[id] : null;

  if (!roadmap) {
    return <NotFound type="roadmap" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-5" />
      <PlasmaBg />
      <Header onSearch={() => {}} />

      <main className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-3 rounded-full bg-purple-500/10">
              <Map className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {roadmap.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {roadmap.description}
          </p>
        </motion.div>

        {/* Roadmap Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500 to-pink-500 opacity-20" />

          {/* Steps */}
          <div className="space-y-12">
            {roadmap.steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-1/2">
                  <div className="card-glass p-6 relative">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">{index + 1}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 gradient-text">{step.title}</h3>
                    <p className="text-gray-300 mb-6">{step.description}</p>

                    {/* Resources */}
                    <div className="space-y-3">
                      {step.resources.map((resource, rIndex) => (
                        <a
                          key={rIndex}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-3 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                        >
                          {resource.type === 'documentation' && <BookOpen className="text-purple-400" size={20} />}
                          {resource.type === 'tutorial' && <Code className="text-purple-400" size={20} />}
                          {resource.type === 'practice' && <CheckCircle2 className="text-purple-400" size={20} />}
                          <span className="text-gray-300 hover:text-purple-400 transition-colors">
                            {resource.title}
                          </span>
                          <ChevronRight className="text-purple-400 ml-auto" size={16} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center relative z-10 mt-6">
                  <div className="w-6 h-6 rounded-full bg-black" />
                </div>

                {/* Empty Space for Alignment */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};