'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    title: 'OLTRE 40 MOSTRE ESPOSITIVE IN TUTTA ITALIA',
    description: 'Compila il modulo contatti per sapere qual è la sede più vicina a te, vieni a trovarci. Numerose sorprese come un arredatore a te dedicato per il tempo che desideri',
    cta: 'SCOPRI DI PIÙ',
    bgGradient: 'from-primary/90 to-primary-dark/90',
  },
  {
    id: 2,
    title: 'CUCINE PRESTIGIOSE A PREZZI SCONTATI',
    description: 'Vieni a scoprire la tua nuova cucina, fatta con materiali di prima qualità, MADE IN ITALY a prezzi da ingrosso nate da una attenta selezione con i migliori produttori',
    cta: 'SCOPRI DI PIÙ',
    bgGradient: 'from-secondary/90 to-secondary-dark/90',
  },
  {
    id: 3,
    title: "L'ALTA QUALITÀ DEL MADE IN ITALY A PREZZI ACCESSIBILI A TUTTI",
    description: 'Siamo convinti che la manodopera degli artigiani Italiani sia un valore aggiunto per una cucina che deve avere standard elevati di qualità e robustezza. Collaboriamo solo con produttori ITALIANI!',
    cta: 'SCOPRI DI PIÙ',
    bgGradient: 'from-accent/90 to-accent-dark/90',
  },
  {
    id: 4,
    title: 'RICHIEDI SUBITO IL TUO BUONO SCONTO',
    description: "Compilando il modulo contatti, subito per te un buono sconto di 1000 euro che potrai utilizzare per l'acquisto della tua cucina in uno dei nostri punti vendita",
    cta: 'SCOPRI DI PIÙ',
    bgGradient: 'from-primary-light/90 to-primary/90',
  },
]

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden mt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgGradient}`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Content */}
          <div className="relative container-custom h-full flex items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight font-heading">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 max-w-3xl leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <Link href="#catalog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg shadow-2xl transition-all duration-300"
                >
                  {slides[currentSlide].cta}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-white w-10'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 text-white font-semibold text-lg z-10">
        <span className="text-2xl">{currentSlide + 1}</span> / {slides.length}
      </div>
    </section>
  )
}

export default HeroCarousel

