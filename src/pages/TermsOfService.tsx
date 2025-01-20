import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PlasmaBg } from '../components/PlasmaBg';
import { Scale, FileText, Copyright, AlertCircle } from 'lucide-react';

export const TermsOfService: React.FC = () => {
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
              <Scale className="w-8 h-8 text-purple-400" />
            </motion.div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section className="glass rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <FileText className="text-purple-400" size={20} />
                Agreement to Terms
              </h2>
              <p>
                By accessing and using XploitPedia's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Copyright className="text-purple-400" size={20} />
                Intellectual Property Rights
              </h2>
              <p>
                The content provided in our courses, including but not limited to videos, text, graphics, and code examples, is licensed from our content partners or owned by Xpl0itPedia. This content is protected by copyright and other intellectual property laws.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Users may not download, copy, or share course content unless explicitly permitted</li>
                <li>Course content is for personal, non-commercial use only</li>
                <li>Redistribution of course materials is strictly prohibited</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <AlertCircle className="text-purple-400" size={20} />
                Disclaimer
              </h2>
              <p>
                The educational content provided through Xpl0itPedia is for informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the content.
              </p>
            </section>

            {/* Add more sections as needed */}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};