import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EyeOff, 
  DollarSign, 
  AlertTriangle, 
  RefreshCw, 
  Bell, 
  Hand, 
  Brain, 
  Users, 
  PiggyBank,
  Shield,
  Stethoscope,
  Briefcase,
  Check,
  X,
  Menu,
  X as CloseIcon,
  Play,
  Download,
  TrendingDown,
  TrendingUp
} from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Logo Component
const CareRewardsLogo = ({ className = '', color = 'white' }: { className?: string; color?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg viewBox="0 0 40 40" className="w-10 h-10">
      <rect x="4" y="16" width="8" height="20" rx="2" fill={color === 'white' ? '#C4E86B' : '#004D40'} />
      <rect x="16" y="8" width="8" height="28" rx="2" fill={color === 'white' ? '#C4E86B' : '#004D40'} />
      <rect x="28" y="20" width="8" height="16" rx="2" fill={color === 'white' ? '#C4E86B' : '#004D40'} />
    </svg>
    <span className={`text-2xl font-semibold ${color === 'white' ? 'text-white' : 'text-[#004D40]'}`}>
      Care<span className="font-normal">Rewards</span>
    </span>
  </div>
);

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Platform', href: '#platform' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#004D40]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <CareRewardsLogo className="scale-75" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-[#C4E86B] text-[#004D40] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#d4f07d] transition-colors">
              Schedule Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#004D40] border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/90 hover:text-white text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full bg-[#C4E86B] text-[#004D40] px-5 py-2 rounded-full text-sm font-semibold">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = ({ onCalculateClick }: { onCalculateClick: () => void }) => {
  return (
    <section className="min-h-screen bg-[#004D40] flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#C4E86B] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C4E86B] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="text-[#C4E86B]">Empower Employees</span>
            <br />
            <span className="text-[#C4E86B]">Improve Outcomes</span>
            <br />
            Bend the Cost Curve
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <CareRewardsLogo />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/80 text-lg mb-2"
        >
          Financial rewards for high quality, cost-efficient care
          <br />
          lowers employer health spend
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white font-medium mb-8"
        >
          A rare win-win
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <div className="w-5 h-5 rounded-full border-2 border-white/50 flex items-center justify-center">
              <span className="text-xs">S</span>
            </div>
            SOC Type 2
          </div>
          <button
            onClick={onCalculateClick}
            className="bg-[#C4E86B] text-[#004D40] px-8 py-3 rounded-full text-base font-semibold hover:bg-[#d4f07d] transition-all transform hover:scale-105"
          >
            Calculate Your Savings
          </button>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Shield size={18} />
            HIPAA Compliant
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Calculator Form Section
const CalculatorSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    workEmail: '',
    employer: '',
    employeeBase: '',
    location: '',
    primaryInterest: '',
    annualHealthSpend: '',
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  if (showThankYou) {
    return (
      <section className="min-h-screen bg-[#004D40] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-4"
        >
          <CareRewardsLogo className="justify-center mb-8" />
          <h2 className="text-white text-xl mb-4">
            Thank you for your interest in our services.
          </h2>
          <p className="text-white/80 mb-2">
            A custom report will be delivered to your email address shortly.
          </p>
          <p className="text-white/80">
            We look forward to staying in touch with you.
          </p>
          <button
            onClick={() => setShowThankYou(false)}
            className="mt-8 text-[#C4E86B] hover:underline"
          >
            Back to form
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="calculator" className="min-h-screen bg-[#004D40] flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'name', placeholder: 'Name' },
              { name: 'title', placeholder: 'Title' },
              { name: 'workEmail', placeholder: 'Work Email', type: 'email' },
              { name: 'employer', placeholder: 'Employer' },
              { name: 'employeeBase', placeholder: 'Employee Base' },
              { name: 'location', placeholder: 'Location' },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type || 'text'}
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className="w-full px-6 py-3 bg-transparent border border-white/40 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-[#C4E86B] transition-colors text-center"
                required
              />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="text"
              placeholder="Primary Interest"
              value={formData.primaryInterest}
              onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
              className="w-full sm:w-48 px-6 py-3 bg-transparent border border-white/40 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-[#C4E86B] transition-colors text-center"
            />
            <input
              type="text"
              placeholder="Annual Health Spend"
              value={formData.annualHealthSpend}
              onChange={(e) => setFormData({ ...formData, annualHealthSpend: e.target.value })}
              className="w-full sm:w-48 px-6 py-3 bg-transparent border border-white/40 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-[#C4E86B] transition-colors text-center"
            />
          </div>
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#C4E86B] text-[#004D40] px-12 py-3 rounded-full text-base font-semibold hover:bg-[#d4f07d] transition-all transform hover:scale-105"
            >
              Calculate
            </button>
          </div>
          <div className="flex justify-center pt-8">
            <CareRewardsLogo />
          </div>
        </motion.form>
      </div>
    </section>
  );
};

// Health Cost Stats Section
const HealthCostStats = () => {
  const stats = [
    { value: '6-9%', source: 'Mercer', label: '2026 Projected health spend increase', color: '#E53935' },
    { value: '$17k+', source: 'AON', label: '2026 Average health cost per employee', color: '#E53935' },
    { value: '$30k+', source: 'KFF', label: '2026 Average health cost per family', color: '#E53935' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Health Costs Are Draining Employer Budgets
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.source}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Problem Section
const ProblemSection = () => {
  const problems = [
    { icon: EyeOff, label: 'No Visibility', sublabel: '3x rate variance hidden' },
    { icon: DollarSign, label: 'Fixed Co-Pays', sublabel: 'Do not reflect price' },
    { icon: AlertTriangle, label: 'No Action Incentive', sublabel: '' },
    { icon: RefreshCw, label: 'Costs Unchanged', sublabel: '' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Employees Are Not Incentivized To Lower Spend
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full border-2 border-[#004D40] flex items-center justify-center mb-3">
                <problem.icon size={28} className="text-[#004D40]" />
              </div>
              <div className="font-semibold text-[#004D40]">{problem.label}</div>
              {problem.sublabel && (
                <div className="text-sm text-gray-500">{problem.sublabel}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Traditional Solutions Section
const TraditionalSolutions = () => {
  const stats = [
    { label: 'Low Engagement', value: '15%', sublabel: 'industry-average rate', color: '#E53935' },
    { label: 'And Limited Effectiveness', value: '12%', sublabel: 'achieve strong ROI', color: '#E53935' },
    { label: 'Foster Unnecessary Spend', value: '25%+', sublabel: 'of health spend is avoidable', color: '#E53935' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Traditional Solutions Are Not Effective
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-red-50 border border-red-100 rounded-xl p-8 text-center"
            >
              <div className="text-sm font-medium text-red-600 mb-2">{stat.label}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-sm text-red-500">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Solution Flow Section
const SolutionFlow = () => {
  const steps = [
    { icon: Bell, label: 'CareReward Prompt', sublabel: 'Employee receives cost-saving health opportunity notification' },
    { icon: Hand, label: 'Employee Decision', sublabel: 'Employee acts on cost-saving care recommendation' },
    { icon: Brain, label: 'Agentic Referral', sublabel: 'AI agent executes referral & scheduling actions for employee' },
  ];

  const outcomes = [
    { icon: Users, label: 'Employee Reward', sublabel: 'Employer provisions financial reward for employee' },
    { icon: PiggyBank, label: 'Employer Savings', sublabel: 'Employer benefits from lower health spend' },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#004D40] mb-16"
        >
          CareRewards: The Solution You Are Looking For
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center text-center max-w-[200px]"
            >
              <div className="w-20 h-20 rounded-2xl border-2 border-[#004D40] flex items-center justify-center mb-4">
                <step.icon size={36} className="text-[#004D40]" />
              </div>
              <div className="font-semibold text-[#004D40] mb-1">{step.label}</div>
              <div className="text-xs text-gray-500">{step.sublabel}</div>
            </motion.div>
          ))}

          {/* Equals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#004D40] hidden lg:block"
          >
            =
          </motion.div>

          {/* Outcomes */}
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (steps.length + index) * 0.15 }}
              className="flex flex-col items-center text-center max-w-[200px]"
            >
              <div className="w-20 h-20 rounded-full bg-[#004D40] flex items-center justify-center mb-4">
                <outcome.icon size={36} className="text-[#C4E86B]" />
              </div>
              <div className="font-semibold text-[#004D40] mb-1">{outcome.label}</div>
              <div className="text-xs text-gray-500">{outcome.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Comparison Section
const ComparisonSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#004D40] mb-12"
        >
          How CareRewards Succeeds When Others Fail
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
        >
          {/* CareRewards Card */}
          <div className="bg-[#004D40] rounded-2xl p-8 text-center w-full md:w-64">
            <CareRewardsLogo className="justify-center mb-4" />
            <div className="space-y-2">
              <div className="text-[#C4E86B] font-semibold">Proactive</div>
              <div className="text-[#C4E86B] font-semibold">Medical & Rx</div>
              <div className="text-[#C4E86B] font-semibold">Comprehensive</div>
              <div className="text-[#C4E86B] font-semibold">Seamless</div>
            </div>
          </div>

          {/* Comparison Labels */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="text-gray-500 text-sm">Engagement</div>
            <div className="text-gray-500 text-sm">Scope</div>
            <div className="text-gray-500 text-sm">Incentives</div>
            <div className="text-gray-500 text-sm">Integration</div>
          </div>

          {/* Traditional Solutions Card */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center w-full md:w-64">
            <div className="text-red-600 font-bold text-lg mb-4">Traditional Solutions</div>
            <div className="space-y-2">
              <div className="text-red-500 font-semibold">Reactive</div>
              <div className="text-red-500 font-semibold">Medical or Rx</div>
              <div className="text-red-500 font-semibold">Fragmented</div>
              <div className="text-red-500 font-semibold">Friction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ROI Section
const ROISection = () => {
  const stats = [
    { label: 'Improved Engagement', value: '40%+', sublabel: 'incentive program-standard rate', color: '#004D40' },
    { label: 'And Consistently Strong ROI', value: '60%', sublabel: 'incentive programs earning 3.3x ROI (RAND)', color: '#004D40' },
    { label: 'Reliably Reduces Spend', value: '10%', sublabel: 'savings achieved in Cigna incentive program', color: '#004D40' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#004D40] mb-12"
        >
          Key: Incentive-Driven Solutions Drive Savings
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-green-50 border border-green-100 rounded-xl p-8 text-center"
            >
              <div className="text-sm font-medium text-[#004D40] mb-2">{stat.label}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How Everyone Wins Carousel
const HowEveryoneWins = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: 'Employees',
      subtitle: 'Time for Payback',
      description: 'Receive real-time cash rewards for cost-efficient, high quality healthcare',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
    },
    {
      title: 'Employers',
      subtitle: 'Strong ROI. From Day One.',
      description: '3.3x ROI on a no money-down incentive budget. This means you only pay when you save.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop',
    },
    {
      title: 'Benefits',
      subtitle: 'Easy Implementation. Real Benefits.',
      description: 'Go-live in 90 days with no administrative burden in a benefit-rich, high engagement program',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#004D40] mb-12"
        >
          How Everyone Wins
        </motion.h2>

        <div className="relative">
          <div className="flex justify-center gap-6 overflow-x-auto pb-4 snap-x">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex-shrink-0 w-80 bg-white border-2 rounded-2xl overflow-hidden snap-center transition-all ${
                  activeIndex === index ? 'border-[#004D40] shadow-lg' : 'border-gray-200'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-sm font-medium text-gray-700 mb-3">{card.subtitle}</p>
                  <p className="text-sm text-gray-500">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index ? 'bg-[#004D40] w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Get Started CTA Section
const GetStartedCTA = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  if (showThankYou) {
    return (
      <section className="min-h-[60vh] bg-[#004D40] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-4"
        >
          <CareRewardsLogo className="justify-center mb-8" />
          <h2 className="text-white text-xl mb-4">
            Thank you for your interest in our services.
          </h2>
          <p className="text-white/80 mb-2">
            Our availability for a demo has been delivered to your email address.
          </p>
          <p className="text-white/80">We look meeting you soon.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#004D40]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          How To Get Started
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => setShowThankYou(true)}
          className="bg-[#C4E86B] text-[#004D40] px-8 py-3 rounded-full text-base font-semibold hover:bg-[#d4f07d] transition-all transform hover:scale-105"
        >
          Schedule Demo
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <CareRewardsLogo />
        </motion.div>
      </div>
    </section>
  );
};

// How It Works Page Section
const HowItWorksHero = () => {
  return (
    <section className="py-20 bg-[#004D40]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#C4E86B] mb-2">
            Get Rewarded
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            For Smarter Choices
          </h3>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-[#C4E86B] text-[#004D40] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#d4f07d] transition-all mb-8"
        >
          <Play size={16} fill="currentColor" />
          Watch 2-Min Demo
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <CareRewardsLogo />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/80"
        >
          Financial rewards for high quality, cost-efficient care
          <br />
          lowers employer health spend
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white font-medium mt-2"
        >
          A rare win-win
        </motion.p>
      </div>
    </section>
  );
};

// Data Transformation Section
const DataTransformation = () => {
  const inputs = [
    { icon: Shield, label: 'Claims' },
    { icon: Stethoscope, label: 'Quality' },
    { icon: Briefcase, label: 'EHR' },
  ];

  const outputs = [
    { icon: 'heart', label: 'Preventive Care' },
    { icon: 'clipboard', label: 'Care Protocol Compliance' },
    { icon: 'stethoscope', label: 'Site-of-Care Alternatives' },
    { icon: 'tag', label: 'Lower Cost Provider Options' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#004D40] mb-16"
        >
          CareRewards Transforms Data Into Insights
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Inputs */}
          <div className="space-y-4">
            {inputs.map((input, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-6 py-3 shadow-sm"
              >
                <input.icon size={20} className="text-[#004D40]" />
                <span className="font-medium text-[#004D40]">{input.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl text-gray-400 hidden lg:block"
          >
            →
          </motion.div>

          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full bg-[#004D40] flex items-center justify-center"
          >
            <svg viewBox="0 0 40 40" className="w-16 h-16">
              <rect x="4" y="16" width="8" height="20" rx="2" fill="#C4E86B" />
              <rect x="16" y="8" width="8" height="28" rx="2" fill="#C4E86B" />
              <rect x="28" y="20" width="8" height="16" rx="2" fill="#C4E86B" />
            </svg>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl text-gray-400 hidden lg:block"
          >
            →
          </motion.div>

          {/* Outputs */}
          <div className="space-y-3">
            {outputs.map((output, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-[#C4E86B]/20 border border-[#C4E86B] rounded-lg px-6 py-3"
              >
                {output.icon === 'heart' && <span className="text-[#004D40]">❤️</span>}
                {output.icon === 'clipboard' && <span className="text-[#004D40]">📋</span>}
                {output.icon === 'stethoscope' && <Stethoscope size={18} className="text-[#004D40]" />}
                {output.icon === 'tag' && <span className="text-[#004D40]">🏷️</span>}
                <span className="font-medium text-[#004D40]">{output.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Use Case Section
const UseCaseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#004D40] mb-12"
        >
          Use Case: High-cost maternity care referral
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Meet Sarah */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=250&fit=crop"
              alt="Family"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="font-bold text-[#004D40] mb-2">Meet Sarah</h3>
            <div className="inline-block bg-[#C4E86B]/30 text-[#004D40] px-4 py-2 rounded-lg text-sm">
              33 year-old pregnant employee
            </div>
          </motion.div>

          {/* And Her Doctor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=250&fit=crop"
              alt="Doctor"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="font-bold text-[#004D40] mb-2">And Her Doctor</h3>
            <div className="inline-block bg-[#C4E86B]/30 text-[#004D40] px-4 py-2 rounded-lg text-sm">
              who referred Sarah to NYP for care
            </div>
          </motion.div>

          {/* Hospital Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3">
              <Check className="text-green-500" size={20} />
              <span className="font-medium text-gray-700">NewYork-Presbyterian</span>
            </div>
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 opacity-50">
              <X className="text-red-500" size={20} />
              <span className="font-medium text-gray-700">NYU Langone Health</span>
            </div>
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 opacity-50">
              <X className="text-red-500" size={20} />
              <span className="font-medium text-gray-700">NYC Health + Hospitals</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Recommendation Section
const RecommendationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#004D40] mb-12"
        >
          CareRewards recommends NYC H+H
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-64 h-[500px] bg-[#004D40] rounded-[40px] p-3 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#004D40] rounded-full flex items-center justify-center">
                      <span className="text-[#C4E86B] text-xs font-bold">CR</span>
                    </div>
                    <span className="font-semibold text-[#004D40]">CareRewards</span>
                  </div>
                  <div className="bg-[#C4E86B]/20 rounded-xl p-4 mb-4">
                    <div className="text-2xl font-bold text-[#004D40]">3,600 Points</div>
                    <div className="text-sm text-[#004D40]">NYC HEALTH + HOSPITALS</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-xs text-gray-600">
                    Welcome to CareRewards!
                    <br />
                    We help you navigate your care journey
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote and Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[#C4E86B]/20 border-l-4 border-[#C4E86B] p-4 rounded-r-lg">
              <p className="text-[#004D40] italic">
                "NYC H+H is one of the country's best hospitals for maternity care. Choose them and earn 3,600 in cash rewards!"
              </p>
            </div>

            <p className="text-[#004D40] font-semibold">
              CareRewards uncovered pricing differentials with no link to care quality
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3 opacity-50">
                <div className="flex items-center gap-2">
                  <X className="text-red-500" size={18} />
                  <span className="text-sm">NewYork-Presbyterian</span>
                </div>
                <span className="text-red-500 font-bold">$68k</span>
              </div>
              <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3 opacity-50">
                <div className="flex items-center gap-2">
                  <X className="text-red-500" size={18} />
                  <span className="text-sm">NYU Langone Health</span>
                </div>
                <span className="text-purple-600 font-bold">$51k</span>
              </div>
              <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3">
                <div className="flex items-center gap-2">
                  <Check className="text-green-500" size={18} />
                  <span className="text-sm font-medium">NYC Health + Hospitals</span>
                </div>
                <span className="text-[#004D40] font-bold">$32k</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Results Section
const ResultsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#004D40] mb-12"
        >
          Sarah makes the right decision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=300&fit=crop"
              alt="Happy family with newborn"
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="bg-[#004D40] text-white px-6 py-3 rounded-lg font-semibold">
                Employer Savings
              </div>
              <div className="bg-[#C4E86B] text-[#004D40] px-6 py-3 rounded-lg font-bold">
                $32k
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-[#004D40] text-white px-6 py-3 rounded-lg font-semibold">
                Employee Reward
              </div>
              <div className="bg-[#C4E86B] text-[#004D40] px-6 py-3 rounded-lg font-bold">
                $3,600
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-[#004D40] text-white px-6 py-3 rounded-lg font-semibold">
                ROI
              </div>
              <div className="bg-[#C4E86B] text-[#004D40] px-6 py-3 rounded-lg font-bold">
                9:1
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Platform Overview Section
const PlatformOverview = () => {
  return (
    <section id="platform" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#004D40] mb-12"
        >
          Platform Overview
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Employer Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Employer Dashboard</h3>
            <div className="bg-gray-50 rounded-xl p-4 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Employer Dashboard"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center italic">
              Employers monitor PMPM cost, population health and rewards engagement
            </p>
          </motion.div>

          {/* Employee App */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Employee App</h3>
            <div className="bg-gray-50 rounded-xl p-4 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                alt="Employee App"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center italic">
              Employees receive personalized insights, decision support, and cash rewards to drive reduced spend
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: 'What makes CareRewards different from wellness programs?',
      answer: 'CareRewards delivers gold-standard member engagement and cost-savings potential by proactively identifying employee care episodes and financially incentivizing care decisions that reduce employer health spend without sacrificing care quality. Traditional solutions struggle with engagement and cost-savings by offering passive solutions without financial incentives.',
    },
    {
      question: 'How does CareRewards identify savings opportunities?',
      answer: 'CareRewards leverages AI-driven analysis of health plan claims and quality data and provider EMR data to detect care episodes and alert employees in real-time to preventive care, care protocol compliance, site-of-care alternative and lower cost provider options.',
    },
    {
      question: 'What is the return on investment for employers?',
      answer: 'CareRewards projects 3-5x ROI for employers through reduced health spend. Incentives are only paid after employees execute recommended care decisions. This means no upfront CareReward incentive or wellness budget. Employers only spend on incentives when savings are coming.',
    },
    {
      question: 'How do employees earn rewards?',
      answer: 'Employees earn cash rewards, delivered as points that offset premiums, deductibles, or copays, for executing care decisions that reduce spend without sacrificing care quality. Employees receive text or email notifications when opportunities arise, and make voluntary decisions on CareRewards\' recommendations.',
    },
    {
      question: 'What is CareRewards\' implementation timeline?',
      answer: 'Implementation takes 90 days with no custom IT builds required. We use standard HIPAA-compliant data feeds from the employer\'s TPA or health plan. Employees access CareReward through text/email notifications and a simple mobile app. CareRewards\' AI handles the heavy lifting of claims analysis and opportunity identification automatically.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#004D40] mb-12"
        >
          FAQs
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="text-left text-[#004D40] font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

// Schedule Demo Form
const ScheduleDemoForm = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    workEmail: '',
    employer: '',
    employeeBase: '',
    location: '',
    primaryInterest: '',
    annualHealthSpend: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  if (showThankYou) {
    return (
      <section className="min-h-[60vh] bg-[#004D40] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-4"
        >
          <CareRewardsLogo className="justify-center mb-8" />
          <h2 className="text-white text-xl mb-4">
            Thank you for your interest in our services.
          </h2>
          <p className="text-white/80 mb-2">
            Our availability for a demo has been delivered to your email address.
          </p>
          <p className="text-white/80">We look meeting you soon.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#004D40]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'name', placeholder: 'Name' },
              { name: 'title', placeholder: 'Title' },
              { name: 'workEmail', placeholder: 'Work Email', type: 'email' },
              { name: 'employer', placeholder: 'Employer' },
              { name: 'employeeBase', placeholder: 'Employee Base' },
              { name: 'location', placeholder: 'Location' },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type || 'text'}
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className="w-full px-6 py-3 bg-transparent border border-white/40 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-[#C4E86B] transition-colors text-center"
                required
              />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="text"
              placeholder="Primary Interest"
              value={formData.primaryInterest}
              onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
              className="w-full sm:w-48 px-6 py-3 bg-transparent border border-white/40 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-[#C4E86B] transition-colors text-center"
            />
            <input
              type="text"
              placeholder="Annual Health Spend"
              value={formData.annualHealthSpend}
              onChange={(e) => setFormData({ ...formData, annualHealthSpend: e.target.value })}
              className="w-full sm:w-48 px-6 py-3 bg-transparent border border-white/40 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-[#C4E86B] transition-colors text-center"
            />
          </div>
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#C4E86B] text-[#004D40] px-12 py-3 rounded-full text-base font-semibold hover:bg-[#d4f07d] transition-all transform hover:scale-105"
            >
              Schedule Here
            </button>
          </div>
          <div className="flex justify-center pt-8">
            <CareRewardsLogo />
          </div>
        </motion.form>
      </div>
    </section>
  );
};

// Savings Report Modal
const SavingsReportModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const barData = [
    { name: 'Year 0 ($M)', value: 75, color: '#2E7D6B' },
    { name: 'Savings ($M)', value: -3.75, color: '#C4E86B' },
    { name: 'Year 1 ($M)', value: 71, color: '#4DB6AC' },
  ];

  const pieData = [
    { name: 'ER/IP', value: 40, color: '#2E7D6B' },
    { name: 'Cost-Efficient', value: 35, color: '#4DB6AC' },
    { name: 'Other', value: 25, color: '#C4E86B' },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-[#004D40] text-white border-none p-8">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-[#C4E86B]">
            Savings Report
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-4 text-center mb-6">
          <div>
            <div className="text-xs text-white/70">Employer Size: 2,500-4,999 EE</div>
          </div>
          <div>
            <div className="text-xs text-white/70">Location: CA</div>
          </div>
          <div>
            <div className="text-xs text-white/70">Annual Health Spend: $75-99M</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bar Chart */}
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">$3.75M Savings</div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <Bar dataKey="value" fill="#8884d8">
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs mt-2">
              <span>Year 0 ($M)</span>
              <span>Savings ($M)</span>
              <span>Year 1 ($M)</span>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">2x ROI</div>
            <div className="h-40 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Drivers */}
          <div>
            <div className="text-xl font-bold mb-4">Drivers</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-white/10 rounded-full px-4 py-2">
                <div className="flex items-center gap-2">
                  <TrendingDown size={16} className="text-red-400" />
                  <span className="text-sm">ER/IP Utilization</span>
                </div>
                <span className="text-sm font-bold">-1.8%</span>
              </div>
              <div className="flex items-center justify-between bg-white/10 rounded-full px-4 py-2">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-green-400" />
                  <span className="text-sm">Cost-Efficient Care</span>
                </div>
                <span className="text-sm font-bold">-3.2%</span>
              </div>
              <div className="flex items-center justify-between bg-white/10 rounded-full px-4 py-2">
                <div className="flex items-center gap-2">
                  <TrendingDown size={16} className="text-red-400" />
                  <span className="text-sm">Total Savings</span>
                </div>
                <span className="text-sm font-bold">-5%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-white/20">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="px-4 py-2 bg-white/10 border border-white/30 rounded text-white placeholder-white/50 text-sm"
            />
            <input
              type="email"
              placeholder="Email*"
              className="px-4 py-2 bg-white/10 border border-white/30 rounded text-white placeholder-white/50 text-sm"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#C4E86B] text-[#004D40] px-4 py-2 rounded text-sm font-semibold hover:bg-[#d4f07d]">
              <Download size={16} />
              Download Report
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-white/40 rounded text-sm hover:bg-white/10"
            >
              Close
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <CareRewardsLogo />
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#004D40] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <CareRewardsLogo />
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          © 2026 CareRewards. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [showSavingsReport, setShowSavingsReport] = useState(false);

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <HeroSection onCalculateClick={scrollToCalculator} />
        <CalculatorSection />
        <HealthCostStats />
        <ProblemSection />
        <TraditionalSolutions />
        <SolutionFlow />
        <ComparisonSection />
        <ROISection />
        <HowEveryoneWins />
        <GetStartedCTA />
        <HowItWorksHero />
        <DataTransformation />
        <UseCaseSection />
        <RecommendationSection />
        <ResultsSection />
        <PlatformOverview />
        <FAQSection />
        <ScheduleDemoForm />
      </main>

      <Footer />

      <SavingsReportModal
        isOpen={showSavingsReport}
        onClose={() => setShowSavingsReport(false)}
      />
    </div>
  );
}

export default App;
