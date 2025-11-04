'use client'

import { motion } from 'framer-motion'
import { FaUserTie, FaTag, FaTruck } from 'react-icons/fa'

const features = [
  {
    icon: FaUserTie,
    title: 'ARREDATORE DEDICATO',
    description: 'Avrai a disposizione per tutto il tempo che desideri un arredatore dedicato a te, che ti aiuterà a realizzare il progetto della tua cucina anche in grafica 3D!',
  },
  {
    icon: FaTag,
    title: 'BUONO SCONTO',
    description: 'Approfitta subito di un buono sconto di 1000 Euro per la tua nuova cucina. In più per te 5 anni di garanzia senza spese aggiuntive.',
  },
  {
    icon: FaTruck,
    title: 'TRASPORTO E MONTAGGIO INCLUSI',
    description: 'Il trasporto e montaggio della tua nuova cucina saranno compresi nel prezzo! Inoltre, lo smaltimento della tua vecchia cucina è tutto a nostro carico.',
  },
]

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-secondary">CHI SIAMO?</h2>
          <p className="section-subtitle">
            Siamo un grande gruppo di produttori e distributori di cucine MADE IN ITALY 
            con lo scopo di dare al cliente la cucina che desidera al prezzo più conveniente, 
            mantenendo alta la qualità, e fornendo supporto, servizi e agevolazioni privilegiate
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white mb-6 shadow-lg">
                <feature.icon className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre

