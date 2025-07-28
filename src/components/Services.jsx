import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, HardHat, Clock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: 'Qualidade Incomparável',
      description:
        'Utilizamos os melhores materiais e processos rigorosos de controle para garantir que cada detalhe do seu projeto seja executado com perfeição e durabilidade.',
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-primary" />,
      title: 'Inovação e Tecnologia',
      description:
        'Incorporamos as mais recentes tecnologias e métodos construtivos para otimizar a eficiência, reduzir custos e entregar projetos modernos e sustentáveis.',
    },
    {
      icon: <HardHat className="h-12 w-12 text-primary" />,
      title: 'Segurança em Primeiro Lugar',
      description:
        'Nossa prioridade máxima é a segurança de todos os envolvidos. Seguimos normas rígidas e promovemos uma cultura de prevenção em todos os nossos canteiros de obras.',
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: 'Compromisso com Prazos',
      description:
        'Entendemos a importância do seu tempo. Nosso planejamento meticuloso e gestão eficiente garantem a entrega do seu projeto dentro do cronograma acordado.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            Nossos Pilares de <span className="gradient-text">Excelência</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-16">
            Estes são os valores fundamentais que guiam cada decisão e ação na
            NTC Brasil, garantindo a satisfação total de nossos clientes.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-light-bg p-8 rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
              variants={cardVariants}
            >
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
