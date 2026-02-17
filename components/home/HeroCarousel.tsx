'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaRulerCombined, FaStar, FaTruck, FaShieldAlt } from 'react-icons/fa'

const features = [
  { icon: FaRulerCombined, text: 'Su Misura' },
  { icon: FaStar, text: 'Made in Italy' },
  { icon: FaTruck, text: 'Consegna Inclusa' },
  { icon: FaShieldAlt, text: 'Garanzia 5 Anni' },
]

const HeroSection = () => {
  const [activeImage, setActiveImage] = useState(0)
  const images = ['/images/hero-1.jpg', '/images/hero-2.jpg', '/images/hero-3.jpg']

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="relative min-h-screen mt-16 overflow-hidden">
      {/* Split Layout */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-secondary via-secondary to-secondary-dark flex items-center py-16 lg:py-0">
          <div className="container-custom lg:pl-12 xl:pl-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary/20 text-primary-light px-4 py-2 rounded-full mb-6"
              >
                <FaStar className="text-accent" />
                <span className="text-sm font-semibold uppercase tracking-wider">Oltre 40 Showroom in Italia</span>
              </motion.div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight font-heading">
                La Cucina dei Tuoi <span className="text-primary">Sogni</span>, Oggi Realtà
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Creiamo cucine su misura Made in Italy, dove design e funzionalità si incontrano. 
                Dalla progettazione 3D alla consegna, realizziamo il cuore della tua casa con sconti fino al <span className="text-primary font-bold">45%</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="#catalog">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-all duration-300"
                  >
                    RICHIEDI IL CATALOGO
                  </motion.button>
                </Link>
                <Link href="#stores">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                  >
                    TROVA SHOWROOM
                  </motion.button>
                </Link>
              </div>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 gap-3"
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3"
                  >
                    <feature.icon className="text-primary text-xl" />
                    <span className="text-white text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Image Gallery */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          {/* Main Image */}
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeImage === index ? 1 : 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={`Cucina di design ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-secondary/20" />
            </motion.div>
          ))}

          {/* Image Navigation Dots */}
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeImage === index ? 'bg-primary w-6' : 'bg-white/70 hover:bg-white'
                }`}
                aria-label={`Vai all'immagine ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

