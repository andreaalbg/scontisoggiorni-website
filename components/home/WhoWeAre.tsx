'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const benefits = [
  'Progettazione 3D gratuita del tuo ambiente',
  'Rilievo misure gratuito a domicilio',
  'Extra sconto immediato fino a 2000 Euro',
  'Consegna e montaggio sempre inclusi',
  'Ritiro e smaltimento vecchia cucina',
  'Finanziamento a interessi zero',
]

const WhoWeAre = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image with overlay card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-2.jpg"
                alt="Showroom Cucine"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-2xl"
            >
              <div className="text-5xl font-bold mb-2">40+</div>
              <div className="text-lg font-medium opacity-90">Showroom in Italia</div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary/30 rounded-2xl" />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Chi Siamo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight font-heading">
              Su Misura è <span className="text-primary">di Casa</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Con oltre <strong className="text-secondary">40 showroom</strong> distribuiti in tutta Italia, 
              siamo il punto di riferimento per chi cerca cucine di qualità <strong className="text-secondary">MADE IN ITALY</strong> a prezzi accessibili. 
              Selezioniamo le migliori materie prime per garantirti prodotti che durano nel tempo.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              La nostra missione è semplice: accompagnarti nella scelta della cucina perfetta, 
              con una consulenza personalizzata e servizi pensati per rendere l&apos;esperienza d&apos;acquisto semplice e senza pensieri.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <FaCheck className="text-primary text-xs" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Scopri le Cucine
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre

