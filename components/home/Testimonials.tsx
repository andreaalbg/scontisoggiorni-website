'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Rosetta Pieri',
    text: 'Cucina meravigliosa! Ottima qualità e servizio di montaggio efficientissimo. I due ragazzi che sono venuti per montare la cucina sono stati bravissimi e gentilissimi. Lavoro fatto con cura e precisione e pulizia.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Concetta Barbone',
    text: 'Personale qualificato, gentilissimo, disponibile. Sin da subito ci siamo trovati benissimo. Cortesia e impegno da parte del Sig. Raffaele per accogliere le nostre esigenze su come comporre la nostra cucina e che colori abbinare. Puntualità e professionalità anche con gli addetti al montaggio. Consiglio',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-secondary">CHI CI CONOSCE DICE DI NOI</h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <FaQuoteLeft className="text-5xl" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-accent text-xl" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-secondary text-lg">
                  {testimonial.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#stores"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            CLICCA QUI PER VEDERE I NOSTRI PUNTI VENDITA
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

