'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Francesca Bianchi',
    location: 'Milano',
    text: 'Esperienza fantastica! Il consulente è stato pazientissimo e mi ha aiutata a trovare la cucina perfetta per il mio appartamento. La consegna è stata puntuale e il montaggio impeccabile. Consigliatissimo!',
    rating: 5,
    image: '/images/hero-1.jpg',
  },
  {
    id: 2,
    name: 'Marco Verdi',
    location: 'Roma',
    text: 'Ho apprezzato molto il servizio di rilievo misure a domicilio e la progettazione 3D. Vedere la cucina nel mio ambiente prima dell\'acquisto mi ha tolto ogni dubbio. Qualità eccellente e prezzo competitivo.',
    rating: 5,
    image: '/images/hero-2.jpg',
  },
  {
    id: 3,
    name: 'Anna Colombo',
    location: 'Torino',
    text: 'Terzo acquisto in questo showroom e sempre soddisfatta. Il ritiro della vecchia cucina è stato comodo e veloce. La nuova cucina è ancora più bella di come appariva nei rendering. Top!',
    rating: 5,
    image: '/images/hero-3.jpg',
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={testimonials[current].image}
                    alt="Cliente soddisfatto"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>

            {/* Quote decoration */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
              <FaQuoteRight className="text-white text-3xl" />
            </div>

            {/* Rating badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-accent text-lg" />
                ))}
              </div>
              <p className="text-sm text-gray-600">4.9/5 su 2000+ recensioni</p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Testimonianze
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 leading-tight font-heading">
              Cosa Dicono <span className="text-primary">di Noi</span>
            </h2>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FaStar key={i} className="text-accent text-xl" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-lg">{testimonials[current].name}</p>
                    <p className="text-gray-500">{testimonials[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <FaChevronRight />
              </button>
              <div className="ml-4 text-gray-500">
                <span className="text-secondary font-bold">{current + 1}</span> / {testimonials.length}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

