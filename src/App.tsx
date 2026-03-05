import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  ArrowRight, 
  Check, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Dumbbell, 
  Zap, 
  Activity, 
  Menu,
  X
} from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- Components ---

const Navbar = ({ darkMode, toggleDarkMode }: { darkMode: boolean, toggleDarkMode: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          TRUE HIVES
        </motion.div>

        {/* Desktop Nav */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 gap-8"
        >
          {['Work', 'Services', 'Pricing', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">
              {item}
            </a>
          ))}
        </motion.div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="hidden md:block px-6 py-2 bg-foreground text-background rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Join Now
          </button>
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['Work', 'Services', 'Pricing', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full py-3 bg-foreground text-background rounded-xl font-semibold">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.9] mb-8"
        >
          TRAIN.<br />EVOLVE.<br />DOMINATE.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto mb-12"
        >
          The elite fitness ecosystem for the modern athlete. We combine design-driven performance coaching with smart recovery intelligence.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 bg-foreground text-background rounded-full font-bold flex items-center gap-2 group">
            Start Your Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-colors">
            View Programs
          </button>
        </motion.div>
      </div>

      {/* Abstract Visual */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none"
      >
        <div className="w-full h-full rounded-full border-[1px] border-foreground/20 flex items-center justify-center">
          <div className="w-[80%] h-[80%] rounded-full border-[1px] border-foreground/30 flex items-center justify-center">
            <div className="w-[60%] h-[60%] rounded-full border-[1px] border-foreground/40 flex items-center justify-center">
              <Dumbbell size={100} className="opacity-50" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Our Ecosystem</h2>
          <p className="opacity-60 max-w-md">Everything you need to reach your peak potential, integrated into a single seamless experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Performance Coaching */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-card p-8 min-h-[400px]"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-6">
                <Activity className="text-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Performance Coaching</h3>
              <p className="opacity-60 max-w-xs mb-8">Data-driven training plans tailored to your specific biomechanics and goals.</p>
            </div>
            
            {/* Mock Interface Visual */}
            <div className="absolute bottom-0 right-0 w-[70%] h-[60%] bg-background border-t border-l border-white/10 rounded-tl-2xl p-4 translate-y-4 translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="h-2 w-20 bg-foreground/10 rounded" />
                <div className="h-6 w-6 rounded-full bg-foreground/5" />
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-foreground/5" />
                    <div className="flex-1 space-y-1">
                      <div className="h-2 w-full bg-foreground/10 rounded" />
                      <div className="h-2 w-1/2 bg-foreground/5 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Card 2: Smart Recovery */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card p-8 min-h-[400px]"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-6">
                <Zap className="text-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Smart Recovery</h3>
              <p className="opacity-60 mb-8">AI-powered recovery protocols using biometric feedback.</p>
            </div>

            {/* Pulsing Node Animation */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <div className="relative">
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-32 h-32 rounded-full bg-foreground/10 blur-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-foreground" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Nutrition Intelligence */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-3 group relative overflow-hidden rounded-3xl border border-white/10 bg-card p-8 min-h-[300px]"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-6">
                  <Check className="text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Nutrition Intelligence</h3>
                <p className="opacity-60 max-w-md">Precision macro tracking and meal planning that evolves with your performance data.</p>
              </div>
              
              {/* Code Snippet Visual */}
              <div className="flex-1 w-full bg-background/50 rounded-2xl border border-white/10 p-6 font-mono text-xs overflow-hidden">
                <div className="flex gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-1">
                  <p className="text-blue-400">const <span className="text-foreground">nutritionPlan</span> = {'{'}</p>
                  <p className="pl-4 text-purple-400">calories: <span className="text-orange-400">2850</span>,</p>
                  <p className="pl-4 text-purple-400">protein: <span className="text-orange-400">210</span>, <span className="text-gray-500">// grams</span></p>
                  <p className="pl-4 text-purple-400">carbs: <span className="text-orange-400">320</span>,</p>
                  <p className="pl-4 text-purple-400">fats: <span className="text-orange-400">85</span></p>
                  <p className="text-blue-400">{'}'};</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const logos = ["NIKE", "ADIDAS", "PUMA", "UNDER ARMOUR", "REEBOK", "GYMSHARK", "LULULEMON"];
  
  return (
    <div className="py-20 border-y border-white/10 overflow-hidden bg-background">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-20 items-center"
      >
        {[...logos, ...logos].map((logo, i) => (
          <span key={i} className="text-4xl md:text-6xl font-black opacity-20 hover:opacity-100 transition-opacity cursor-default">
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const CaseStudies = () => {
  const studies = [
    { title: "The Hive HQ", category: "Facility", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" },
    { title: "Elite Performance", category: "Program", img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1920" },
    { title: "Recovery Lab", category: "Facility", img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920" },
  ];

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold tracking-tight mb-16">Featured Spaces</h2>
        <div className="space-y-20">
          {studies.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl"
            >
              <img 
                src={study.img} 
                alt={study.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <p className="text-sm font-medium text-white/60 mb-2 uppercase tracking-widest">{study.category}</p>
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">{study.title}</h3>
              </div>
              <div className="absolute top-8 right-8 md:top-12 md:right-12">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'quarterly'>('monthly');

  const plans = [
    { name: "Basic", price: billing === 'monthly' ? 99 : 249, features: ["Access to all gyms", "Basic training app", "Locker access"] },
    { name: "Pro", price: billing === 'monthly' ? 199 : 499, features: ["Everything in Basic", "1 Personal session/mo", "Nutrition tracking", "Recovery lab access"], popular: true },
    { name: "Elite", price: billing === 'monthly' ? 399 : 999, features: ["Everything in Pro", "Unlimited sessions", "Biometric monitoring", "Private lounge"] },
  ];

  return (
    <section id="pricing" className="py-20 bg-card/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-8">Simple, Transparent Pricing</h2>
        
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm ${billing === 'monthly' ? 'opacity-100' : 'opacity-40'}`}>Monthly</span>
          <button 
            onClick={() => setBilling(billing === 'monthly' ? 'quarterly' : 'monthly')}
            className="w-12 h-6 rounded-full bg-foreground/10 relative p-1 transition-colors"
          >
            <motion.div 
              animate={{ x: billing === 'monthly' ? 0 : 24 }}
              className="w-4 h-4 rounded-full bg-foreground"
            />
          </button>
          <span className={`text-sm ${billing === 'quarterly' ? 'opacity-100' : 'opacity-40'}`}>Quarterly <span className="text-green-500 font-bold ml-1">Save 20%</span></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-foreground ring-1 ring-foreground/20' : 'border-white/10'} bg-background text-left flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">${plan.price}</span>
                <span className="opacity-40 text-sm">/{billing === 'monthly' ? 'mo' : 'quarter'}</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm opacity-80">
                    <Check size={16} className="text-green-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full font-bold transition-all ${plan.popular ? 'bg-foreground text-background' : 'border border-white/10 hover:bg-white/5'}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-40 pb-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-20 mb-40">
          <div className="flex-1">
            <h2 className="text-6xl md:text-[120px] font-black tracking-tighter leading-none mb-12">LET'S<br />TRAIN.</h2>
            <div className="flex gap-6">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="#" 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 flex-1">
            <div className="space-y-4">
              <h4 className="text-sm font-bold opacity-40 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-2">
                {['Work', 'Services', 'Pricing', 'FAQ'].map(item => (
                  <li key={item}><a href="#" className="hover:opacity-60 transition-opacity">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold opacity-40 uppercase tracking-widest">Legal</h4>
              <ul className="space-y-2">
                {['Privacy', 'Terms', 'Cookies'].map(item => (
                  <li key={item}><a href="#" className="hover:opacity-60 transition-opacity">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold opacity-40 uppercase tracking-widest">Contact</h4>
              <p className="text-sm">hello@truehives.com</p>
              <p className="text-sm">+1 (555) 000-0000</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 opacity-40 text-xs">
          <p>© 2024 TRUE HIVES GYM. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED BY TRUE HIVES AGENCY</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen selection:bg-foreground selection:text-background">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      
      <main>
        <Hero />
        <Marquee />
        <BentoGrid />
        <CaseStudies />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}
