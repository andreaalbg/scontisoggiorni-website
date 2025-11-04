'use client'

import { motion } from 'framer-motion'
import { FaFlag, FaGift, FaBolt, FaClock, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa'

const services = [
  {
    icon: FaFlag,
    title: 'MADE IN ITALY',
    description: 'Un valore che riteniamo importante è quello del MADE IN ITALY, sempre caratteristica fondamentale di tutti i nostri prodotti.',
  },
  {
    icon: FaGift,
    title: 'BUONO DA 1000 EURO',
    description: 'Compilando il modulo per ricevere il catalogo, subito per te anche un fantastico BUONO da 1000 EURO per la tua nuova cucina',
  },
  {
    icon: FaBolt,
    title: 'PROMO ELETTRODOMESTICI',
    description: 'Per completare la tua cucina, da noi trovi sempre promozioni per avere sconti eccezionali su tutti gli elettrodomestici',
  },
  {
    icon: FaClock,
    title: 'APERTO 7 su 7',
    description: 'Diamo valore al tuo tempo, per questo abbiamo ampliato i nostri orari, ti diamo così la possibilità di venirci a trovare quando sarà più comodo per te',
  },
  {
    icon: FaCalendarCheck,
    title: 'PRENOTA LA TUA VISITA',
    description: 'Richiedi la visita presso lo showroom più vicino a casa tua, ti accoglierà un arredatore dedicato a te, che ti assisterà per tutto il tempo che desideri',
  },
  {
    icon: FaShieldAlt,
    title: 'GARANZIA 5 ANNI',
    description: 'Sconti cucine ha scelto di garantire tutte le sue cucine per 5 anni con l\'obiettivo di fornire al proprio cliente la massima serenità e fiducia nell\'acquisto.',
  },
]

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-secondary">I NOSTRI SERVIZI</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <service.icon className="text-3xl" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-4 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid

