import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PlasmaBg } from '../components/PlasmaBg';
import { Map, Code, BookOpen } from 'lucide-react';

interface Roadmap {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface SkillCategory {
  category: string;
  skills: string[];
}

const roadmaps: Roadmap[] = [
  {
    id: '1',
    title: 'Frontend Development',
    description: 'Master modern frontend development with React, TypeScript, and more',
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Backend Development',
    description: 'Learn server-side programming, databases, and API development',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop'
  }
];

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'Java', 'SQL', 'MongoDB']
  }
];

export const ResourcesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-5" />
      <PlasmaBg />
      <Header onSearch={() => {}} />

      <main className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Learning Roadmaps Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 rounded-full bg-purple-500/10">
              <Map className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold gradient-text">
              Learning Roadmaps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmaps.map((roadmap) => (
              <motion.div
                key={roadmap.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-glass overflow-hidden"
              >
                <div className="aspect-video relative">
                  <img
                    src={roadmap.image}
                    alt={roadmap.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 gradient-text">
                    {roadmap.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{roadmap.description}</p>
                  <button 
                    onClick={() => navigate(`/roadmap/${roadmap.id}`)}
                    className="btn-primary w-full"
                  >
                    View Roadmap
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 rounded-full bg-purple-500/10">
              <Code className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold gradient-text">
              Skills & Technologies
            </h2>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-glass p-6"
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => navigate(`/skill/${category.category}/${skill}`)}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 hover:border-purple-500/60 transition-all duration-300"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};