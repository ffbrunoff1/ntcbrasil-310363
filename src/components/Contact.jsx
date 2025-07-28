<ctrl60>import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const companyEmail = "ffbrunoff@yahoo.com.br";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contato do Site - ${formData.name}`;
    const body = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefone: ${formData.phone}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`;
    window.location.href = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    alert('Obrigado pelo seu contato! Você será redirecionado para o seu cliente de e-mail para enviar a mensagem.');
  };

  const contactInfo = [
    { icon: <Phone size={24} className="text-primary" />, text: "+55 44 99104-0774", href: "tel:+5544991040774" },
    { icon: <Mail size={24} className="text-primary" />, text: companyEmail, href: `mailto:${companyEmail}` },
    { icon: <MapPin size={24} className="text-primary" />, text: "Rua Padre Lebret, 801, G05 Bloco 03", href: "#" },
  ];

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section id="contact" className="section-padding bg-light-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            Vamos <span className="gradient-text">Construir Juntos</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Tem uma ideia ou um projeto em mente? Entre em contato e nossa equipe de especialistas ajudará a transformá-lo em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={infoVariants}
          >
            <h3 className="text-2xl font-semibold text-dark-text">Informações de Contato</h3>
            {contactInfo.map((item, index) => (
              <a href={item.href} key={index} className="flex items-center gap-4 group">
                <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary transition-colors duration-300">
                  {React.cloneElement(item.icon, { className: 'text-primary group-hover:text-white transition-colors duration-300' })}
                </div>
                <span className="text-lg text-gray-700 group-hover:text-primary transition-colors duration-300">{item.text}</span>
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-card space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Sua Mensagem</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"></textarea>
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-secondary px-6 py-4 rounded-full font-bold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Send size={20} />
              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}