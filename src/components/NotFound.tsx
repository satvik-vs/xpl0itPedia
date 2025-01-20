import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { PlasmaBg } from './PlasmaBg';
import { Search, Home, ArrowLeft } from 'lucide-react';

interface NotFoundProps {
  type: 'course' | 'skill' | 'roadmap' | 'page';
  title?: string;
}

export const NotFound: React.FC<NotFoundProps> = ({ type, title }) => {
  const messages = {
    course: {
      title: 'Course Not Found',
      description: "The course you are looking for doesn't exist or has been moved.",
    },
    skill: {
      title: 'Skill Not Found',
      description: "The skill resource you're looking for doesn't exist or has been moved.",
    },
    roadmap: {
      title: 'Roadmap Not Found',
      description: "The learning roadmap you're looking for doesn't exist or has been moved.",
    },
    page: {
      title: 'Page Not Found',
      description: "The page you're looking for doesn't exist or has been moved.",
    },
  };

  const message = messages[type];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-5" />
      <PlasmaBg />
      <Header onSearch={() => {}} />

      <main className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 mb-8 rounded-full bg-purple-500/10 flex items-center justify-center"
          >
            <Search className="w-12 h-12 text-purple-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            {title || message.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl"
          >
            {message.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-neon flex items-center justify-center gap-2"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};