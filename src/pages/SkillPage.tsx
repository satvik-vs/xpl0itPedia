import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PlasmaBg } from '../components/PlasmaBg';
import { NotFound } from '../components/NotFound';
import { Rocket, BookOpen, Code, Link as LinkIcon } from 'lucide-react';

interface SkillResource {
  title: string;
  description: string;
  url: string;
  type: 'documentation' | 'tutorial' | 'tool';
}

interface SkillData {
  title: string;
  description: string;
  resources: SkillResource[];
}

const skillsData: Record<string, Record<string, SkillData>> = {
  Frontend: {
    HTML: {
      title: 'HTML',
      description: 'The standard markup language for documents designed to be displayed in a web browser.',
      resources: [
        {
          title: 'MDN HTML Guide',
          description: 'Comprehensive HTML documentation and tutorials',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          type: 'documentation'
        },
        {
          title: 'W3Schools HTML Tutorial',
          description: 'Interactive HTML learning platform',
          url: 'https://www.w3schools.com/html/',
          type: 'tutorial'
        }
      ]
    },
    CSS: {
      title: 'CSS',
      description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document.',
      resources: [
        {
          title: 'MDN CSS Guide',
          description: 'Complete CSS documentation and tutorials',
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          type: 'documentation'
        },
        {
          title: 'CSS Tricks',
          description: 'Tips, tricks, and techniques on using CSS',
          url: 'https://css-tricks.com',
          type: 'tutorial'
        }
      ]
    }
  }
};

export const SkillPage: React.FC = () => {
  const { category, skill } = useParams<{ category: string; skill: string }>();
  const skillData = category && skill ? skillsData[category]?.[skill] : null;

  if (!skillData) {
    return <NotFound type="skill" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-5" />
      <PlasmaBg />
      <Header onSearch={() => {}} />

      <main className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 rounded-full bg-purple-500/10">
              <Rocket className="w-6 h-6 text-purple-400" />
            </div>
            <h1 className="text-4xl font-bold gradient-text">
              {skillData.title}
            </h1>
          </div>
          <p className="text-xl text-gray-300">{skillData.description}</p>
        </div>

        {/* Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillData.resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card-glass p-6"
            >
              <div className="flex items-start space-x-4">
                {resource.type === 'documentation' && <BookOpen className="text-purple-400" />}
                {resource.type === 'tutorial' && <Code className="text-purple-400" />}
                {resource.type === 'tool' && <LinkIcon className="text-purple-400" />}
                <div>
                  <h3 className="text-xl font-bold mb-2 gradient-text">{resource.title}</h3>
                  <p className="text-gray-400 mb-4">{resource.description}</p>
                  <span className="text-sm text-purple-400">{resource.type}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};