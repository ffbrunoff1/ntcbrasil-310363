import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Target } from 'lucide-react';

export default function About() {
  const imageUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-about.jpg';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: 'beforeChildren' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <Target size={32} className="text-primary" />,
      title: 'Nossa Missão',
      description:
        'Transformar as visões de nossos clientes em realidade através de soluções de construção inovadoras, seguras e de alta qualidade, superando expectativas a cada projeto.',
    },
    {
      icon: <Building size={32} className="text-primary" />,
      title: 'Nossa Visão',
      description:
        'Ser a empresa de construção referência no Brasil, reconhecida pela excelência, integridade e compromisso com a sustentabilidade e o desenvolvimento comunitário.',
    },
    {
      icon: <Users size={32} className="text-primary" />,
      title: 'Nossos Valores',
      description:
        'Qualidade, Confiança, Inovação e Segurança. Pilares que sustentam cada tijolo que assentamos e cada relação que construímos.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-light-bg">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={imageVariants}>
            <img
              src={imageUrl}
              alt="Equipe de construção da NTC Brasil trabalhando em um projeto moderno"
              className="rounded-2xl shadow-card w-full h-auto object-cover aspect-square"
            />
          </motion.div>
          <motion.div variants={textVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">
              Sua Visão, <span className="gradient-text">Nossa Construção</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Na NTC Brasil, acreditamos que cada projeto é mais do que uma
              estrutura; é a materialização de um sonho. Com anos de experiência
              no setor da construção, nossa equipe dedicada combina técnica
              apurada com materiais de ponta para entregar resultados que não
              apenas atendem, mas encantam.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: i => ({
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: i * 0.2 },
                    }),
                  }}
                >
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-dark-text">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
