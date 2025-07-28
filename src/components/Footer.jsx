import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1752817280599_0.png';

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossos Valores', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-dark-text text-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
    >
      <div className="container mx-auto section-padding !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#hero" className="inline-block mb-6">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-14 w-auto"
              />
            </a>
            <p className="text-gray-400">
              Construindo sonhos e edificando o futuro com qualidade, confiança
              e inovação.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Navegação</h4>
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="tel:+5544991040774"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +55 44 99104-0774
                </a>
              </li>
              <li>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="hover:text-primary transition-colors duration-300 break-all"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </li>
              <li>Rua Padre Lebret, 801, G05 Bloco 03</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Vamos Conversar?
            </h4>
            <p className="text-gray-400 mb-6">
              Pronto para iniciar seu próximo projeto? Fale conosco.
            </p>
            <a
              href="#contact"
              className="bg-primary text-secondary px-6 py-3 rounded-full font-bold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
