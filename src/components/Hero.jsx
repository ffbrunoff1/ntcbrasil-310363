import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-blue-600 to-accent text-secondary overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <motion.div
        className="relative z-10 text-center section-padding"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          variants={itemVariants}
        >
          Construímos <span className="text-white drop-shadow-lg">sonhos</span>,
          <br />
          edificamos o <span className="text-white drop-shadow-lg">futuro</span>
          .
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-blue-100 mb-12"
          variants={itemVariants}
        >
          Qualidade e confiança na construção de seus sonhos. Sua visão é a
          nossa inspiração para criar espaços que duram gerações.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          variants={itemVariants}
        >
          <a
            href="#about"
            className="w-full sm:w-auto bg-secondary text-primary px-8 py-4 rounded-full text-lg font-bold border-2 border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary transition-all duration-300 shadow-card transform hover:scale-105"
          >
            Explore as Possibilidades
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-transparent text-secondary px-8 py-4 rounded-full text-lg font-bold border-2 border-secondary hover:bg-secondary hover:text-primary transition-all duration-300 shadow-card transform hover:scale-105"
          >
            Fale Conosco
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a href="#about" aria-label="Rolar para a próxima seção">
          <ArrowDown className="h-8 w-8 text-secondary/70" />
        </a>
      </motion.div>
    </section>
  );
}
