"use client";

import { PricingSection } from '@/components/PricingSection';
import { TypewriterEffect } from '@/components/TypewriterEffect';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { 
  Hammer, Users, Award, Shield, Building2, Home, Factory
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { VideoModal } from '@/components/VideoModal';

const projectSteps = [
  {
    title: "Consultation",
    description: "We meet to discuss your vision and requirements",
    icon: Users,
  },
  {
    title: "Planning",
    description: "Detailed blueprints and project timeline creation",
    icon: Building2,
  },
  {
    title: "Construction",
    description: "Professional building with quality materials",
    icon: Hammer,
  },
  {
    title: "Completion",
    description: "Final inspection and handover to you",
    icon: Award,
  }
];

const workflowSections = [
  {
    id: "home",
    title: "Home",
    description: "Welcome to BuildPro Construction",
    bgColor: "bg-white dark:bg-[#0B1120]"
  },
  {
    id: "services",
    title: "Services",
    description: "Comprehensive construction solutions",
    bgColor: "bg-slate-50 dark:bg-[#0B1120]",
  },
  {
    id: "projects",
    title: "Projects",
    description: "Our completed work",
    bgColor: "bg-white dark:bg-[#0B1120]",
  },
  {
    id: "about",
    title: "About",
    description: "20+ years of excellence",
    bgColor: "bg-slate-50 dark:bg-[#0B1120]",
    metrics: [
      { label: "Years Experience", value: "20+" },
      { label: "Projects Completed", value: "500+" },
      { label: "Client Satisfaction", value: "98%" }
    ]
  },
  {
    id: "pricing",
    title: "Pricing",
    description: "Transparent pricing for your project",
    bgColor: "bg-white dark:bg-[#0B1120]"
  }
];

const services = [
  {
    title: "Residential Construction",
    description: "Custom homes built to your specifications",
    icon: Home,
    bgGradient: "from-orange-500/10 to-red-500/10"
  },
  {
    title: "Commercial Projects",
    description: "Office buildings and retail spaces",
    icon: Building2,
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Industrial Construction",
    description: "Warehouses and manufacturing facilities",
    icon: Factory,
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    title: "Renovation & Remodeling",
    description: "Transform your existing space",
    icon: Hammer,
    bgGradient: "from-purple-500/10 to-pink-500/10"
  },
];

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] relative">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-darker/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 overflow-x-auto hide-scrollbar">
            {workflowSections.map((section, index) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={() => setActiveSection(section.id)}
                className={`flex items-center cursor-pointer group min-w-fit mx-4 first:ml-0 last:mr-0`}
              >
                <div className="relative">
                  <span 
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 transition-all duration-300
                      ${activeSection === section.id 
                      ? 'bg-primary dark:bg-primary-light text-white' 
                      : 'bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light group-hover:bg-primary/20 dark:group-hover:bg-primary-light/20'}`}
                  >
                    {index + 1}
                  </span>
                </div>
                <span 
                  className={`text-sm font-medium transition-colors duration-300 hidden md:block whitespace-nowrap
                    ${activeSection === section.id 
                    ? 'text-primary dark:text-primary-light' 
                    : 'text-slate-600 dark:text-slate-300 group-hover:text-primary dark:group-hover:text-primary-light'}`}
                >
                  {section.title}
                </span>
              </ScrollLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-accent-light/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-20 pb-16 sm:pb-24">
            {/* Header Content */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
                  <span className="block">Building Your Dreams</span>
                  <span className="block text-primary dark:text-primary-light">One Project at a Time</span>
                </h1>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300"
              >
                Professional construction services with over 20 years of experience. We deliver quality, on time, every time.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex gap-4 justify-center flex-wrap"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  View Our Work
                </motion.button>
                <ScrollLink
                  to="pricing"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-white dark:bg-neutral-dark hover:bg-slate-50 dark:hover:bg-neutral-darker text-primary dark:text-primary-light border-2 border-primary dark:border-primary-light rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Get a Quote
                  </motion.button>
                </ScrollLink>
              </motion.div>
            </div>

            {/* Project Steps */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="relative p-6 bg-white dark:bg-neutral-dark border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm rounded-xl shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
                  >
                    <div className="absolute -top-4 left-6 w-8 h-8 bg-primary dark:bg-primary-light text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <Icon className="h-10 w-10 text-primary dark:text-primary-light mb-4" />
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <motion.section
        id="services"
        ref={servicesRef}
        className="py-20 bg-slate-50 dark:bg-[#0B1120]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        onViewportEnter={() => setActiveSection("services")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Comprehensive construction solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className={`relative p-6 bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                >
                  <Icon className="h-12 w-12 text-primary dark:text-primary-light mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 bg-white dark:bg-[#0B1120]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        onViewportEnter={() => setActiveSection("projects")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              See what we've built for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project, i) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
              >
                <div className="aspect-video bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                  <Building2 className="h-24 w-24 text-slate-400 dark:text-slate-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Modern Office Complex
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {i === 0 && "5-story commercial building in downtown"}
                    {i === 1 && "Luxury residential development"}
                    {i === 2 && "Industrial warehouse facility"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-slate-50 dark:bg-[#0B1120]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        onViewportEnter={() => setActiveSection("about")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Why Choose BuildPro?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Excellence in construction since 2004
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {workflowSections[3].metrics?.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-dark backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700"
              >
                <div className="text-4xl font-bold text-primary dark:text-primary-light mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-dark rounded-xl p-8 border border-slate-200 dark:border-slate-700"
            >
              <Shield className="h-12 w-12 text-primary dark:text-primary-light mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Quality Guaranteed
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                We use only the highest quality materials and employ experienced craftsmen to ensure your project exceeds expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-dark rounded-xl p-8 border border-slate-200 dark:border-slate-700"
            >
              <Award className="h-12 w-12 text-primary dark:text-primary-light mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Award-Winning Team
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Our team has been recognized with multiple industry awards for excellence in construction and customer service.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        className="py-20 bg-white dark:bg-[#0B1120]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        onViewportEnter={() => setActiveSection("pricing")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Service Packages
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Transparent pricing for your construction needs
            </p>
          </div>
          <PricingSection />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-accent-light/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white dark:bg-neutral-dark rounded-xl shadow-xl p-12 border border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <motion.h2 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-slate-900 dark:text-white"
              >
                Ready to Start Your Project?
              </motion.h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Contact us today for a free consultation and quote
              </p>
              
              <div className="mt-10 flex gap-4 justify-center flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  View Portfolio
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white dark:bg-neutral-darker hover:bg-slate-50 dark:hover:bg-neutral text-primary dark:text-primary-light border-2 border-primary dark:border-primary-light rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Contact Us
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="mt-12 flex justify-center gap-6">
                {[
                  { icon: FaFacebookF, label: 'Facebook' },
                  { icon: FaInstagram, label: 'Instagram' },
                  { icon: FaLinkedinIn, label: 'LinkedIn' },
                  { icon: FaYoutube, label: 'YouTube' },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-primary/10 dark:bg-primary-light/10 hover:bg-primary dark:hover:bg-primary-light text-primary dark:text-primary-light hover:text-white rounded-full flex items-center justify-center transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-neutral-darker text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400">
              © 2024 BuildPro Construction. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="dQw4w9WgXcQ"
      />

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}