'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaClock, FaUserTie, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

const cities = [
  'Milano', 'Roma', 'Torino', 'Napoli', 'Bologna', 'Firenze', 
  'Palermo', 'Genova', 'Venezia', 'Verona', 'Bari', 'Catania'
]

const features = [
  { icon: FaMapMarkerAlt, title: '40+ Showroom', desc: 'In tutta Italia' },
  { icon: FaClock, title: 'Aperto 7/7', desc: 'Orari flessibili' },
  { icon: FaUserTie, title: 'Consulente Dedicato', desc: 'Sempre a disposizione' },
  { icon: FaPhone, title: 'Prenota Subito', desc: 'Visita gratuita' },
]

const StoreLocator = () => {
  return (
    <section id="stores" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              I Nostri Showroom
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight font-heading">
              Vieni a <span className="text-primary">Trovarci</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Oltre 40 showroom distribuiti in tutta Italia, pronti ad accoglierti con consulenti esperti 
              e un&apos;ampia esposizione di cucine. Prenota la tua visita gratuita e scopri la cucina perfetta per te.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary text-sm">{feature.title}</p>
                    <p className="text-gray-500 text-xs">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#showroom"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300"
              >
                Trova lo Showroom
                <FaArrowRight />
              </a>
              <a
                href="tel:+390000000000"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300"
              >
                <FaPhone />
                Chiamaci
              </a>
            </div>
          </motion.div>

          {/* Right - Map/Image with Cities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image with Map Overlay */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                src="/images/hero-1.jpg"
                alt="Showroom Cucine"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-secondary/80" />
              
              {/* Cities Grid Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <h3 className="text-white text-2xl font-bold mb-6 text-center">Siamo presenti in:</h3>
                <div className="grid grid-cols-3 gap-3">
                  {cities.map((city, index) => (
                    <motion.div
                      key={city}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-3 px-4 text-center hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <span className="text-white font-medium">{city}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-white/70 text-center mt-6">...e molte altre città!</p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-3xl font-bold">7/7</div>
              <div className="text-sm opacity-90">Sempre aperti</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StoreLocator

