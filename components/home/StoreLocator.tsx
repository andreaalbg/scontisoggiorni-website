'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'

const StoreLocator = () => {
  return (
    <section id="stores" className="py-20 bg-secondary text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase font-heading">
            SCOPRI LO SHOWROOM PIÙ VICINO A TE
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Oltre 40 mostre espositive in tutta Italia pronte ad accoglierti con 
            un arredatore dedicato e numerose sorprese
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">40+ Showroom</h3>
              <p className="text-white/80">In tutta Italia</p>
            </div>

            <div className="flex flex-col items-center">
              <FaClock className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Aperto 7/7</h3>
              <p className="text-white/80">Quando vuoi tu</p>
            </div>

            <div className="flex flex-col items-center">
              <FaPhone className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Prenota Ora</h3>
              <p className="text-white/80">Consulenza gratuita</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#showroom"
              className="bg-white text-secondary hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              CERCA LO SHOWROOM
            </a>
            <a
              href="#catalog"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              RICHIEDI IL CATALOGO
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-lg text-white/90">
              🎁 Ricevi subito un <span className="text-primary font-bold">BUONO SCONTO da 1000€</span> compilando il modulo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StoreLocator

