'use client'

import { motion } from 'framer-motion'
import { FaFlag, FaGift, FaBolt, FaClock, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa'

const services = [
  {
    icon: FaFlag,
    title: 'Made in Italy',
    description: 'Produzione 100% italiana',
  },
  {
    icon: FaGift,
    title: 'Extra Sconto 2000€',
    description: 'Sconto immediato garantito',
  },
  {
    icon: FaBolt,
    title: 'Promo Elettrodomestici',
    description: 'Sconti su tutti i brand',
  },
  {
    icon: FaClock,
    title: 'Aperto 7/7',
    description: 'Sempre a disposizione',
  },
  {
    icon: FaCalendarCheck,
    title: 'Rilievo Misure',
    description: 'Gratuito a domicilio',
  },
  {
    icon: FaShieldAlt,
    title: 'Garanzia 5 Anni',
    description: 'Qualità garantita',
  },
]

const highlights = [
  { number: '40+', label: 'Showroom in Italia' },
  { number: '15K+', label: 'Clienti Soddisfatti' },
  { number: '5', label: 'Anni di Garanzia' },
  { number: '2000€', label: 'Extra Sconto' },
]

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      {/* Services Marquee */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex overflow-hidden"
        >
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 pr-8"
          >
            {[...services, ...services, ...services].map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 min-w-fit"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{service.title}</h4>
                  <p className="text-white/70 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              I Nostri Servizi
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-heading">
              Sempre al Tuo <span className="text-primary">Fianco</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Dall&apos;ideazione alla consegna, ti accompagniamo in ogni fase con servizi pensati 
              per rendere l&apos;acquisto della tua cucina un&apos;esperienza semplice e senza pensieri. 
              Dal rilievo misure alla consegna, siamo sempre al tuo fianco.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300"
              >
                Richiedi Catalogo
              </a>
              <a
                href="#stores"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300"
              >
                Trova Showroom
              </a>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.number}</div>
                <div className="text-white/80">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid

