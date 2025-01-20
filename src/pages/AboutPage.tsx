import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PlasmaBg } from '../components/PlasmaBg';
import { Users, Target, Award, Sparkles, GraduationCap, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Students', value: '10,000+' },
    { icon: Target, label: 'Course Completion Rate', value: '94%' },
    { icon: Award, label: 'Expert Instructors', value: '50+' }
  ];

  const values = [
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and modern teaching methods'
    },
    {
      icon: GraduationCap,
      title: 'Excellence',
      description: 'Committed to providing the highest quality education'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building a supportive environment for learners to grow together'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-5" />
      <PlasmaBg />
      <Header onSearch={() => {}} />

      <main className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Empowering the Next Generation of Tech Leaders
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            TechEdu is more than just a learning platform. We're a community dedicated to helping individuals master the skills they need to succeed in the ever-evolving world of technology.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="card-glass p-8 text-center">
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-glass p-8 mb-16"
        >
          <h2 className="text-3xl font-bold gradient-text mb-6 text-center">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            At TechEdu, we believe that quality education should be accessible to everyone. Our mission is to break down the barriers to learning and provide a comprehensive, engaging, and practical learning experience that prepares students for real-world success in the technology industry.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <div key={index} className="card-glass p-8 text-center">
              <value.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold gradient-text mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};