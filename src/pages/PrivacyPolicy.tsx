import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PlasmaBg } from '../components/PlasmaBg';
import { Shield, Lock, Eye } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-5" />
      <PlasmaBg />
      <Header onSearch={() => {}} />

      <main className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block p-3 rounded-full bg-purple-500/10 mb-4"
            >
              <Shield className="w-8 h-8 text-purple-400" />
            </motion.div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section className="glass rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Lock className="text-purple-400" size={20} />
                Information We Collect
              </h2>
              <p>
                At TechEdu, we collect information to provide better services to our users. The information we collect includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Basic account information (name, email)</li>
                <li>Course progress and completion data</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Eye className="text-purple-400" size={20} />
                How We Use Your Information
              </h2>
              <p>We use the collected information for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and improving our educational services</li>
                <li>Personalizing your learning experience</li>
                <li>Communicating updates and recommendations</li>
                <li>Processing payments and maintaining accounts</li>
              </ul>
            </section>

            {/* Add more sections as needed */}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};