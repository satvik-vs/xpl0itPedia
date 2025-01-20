import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PlasmaBg } from '../components/PlasmaBg';
import { Cookie, Info, Settings, Shield } from 'lucide-react';

export const CookiePolicy: React.FC = () => {
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
              <Cookie className="w-8 h-8 text-purple-400" />
            </motion.div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section className="glass rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Info className="text-purple-400" size={20} />
                What Are Cookies
              </h2>
              <p>
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remembering your preferences and settings</li>
                <li>Keeping you signed in to your account</li>
                <li>Understanding how you use our platform</li>
                <li>Improving our services based on your behavior</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Settings className="text-purple-400" size={20} />
                Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-purple-400">Essential Cookies</h3>
                  <p>Required for the website to function properly, including authentication and security.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-400">Preference Cookies</h3>
                  <p>Remember your settings and preferences for a better experience.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-400">Analytics Cookies</h3>
                  <p>Help us understand how visitors interact with our website.</p>
                </div>
              </div>
            </section>

            <section className="glass rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Shield className="text-purple-400" size={20} />
                Your Cookie Choices
              </h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};