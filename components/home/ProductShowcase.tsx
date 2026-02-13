'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const products = [
  {
    id: 1,
    title: 'Soggiorno Moderno',
    subtitle: 'Linee pulite e design contemporaneo',
    discount: '-45%',
    image: '/images/hero-1.jpg',
    features: ['Pareti attrezzate', 'Mobili TV', 'Librerie'],
    large: true,
  },
  {
    id: 2,
    title: 'Soggiorno Minimal',
    subtitle: 'Essenzialità e funzionalità',
    discount: '-40%',
    image: '/images/hero-2.jpg',
    features: ['Design scandinavo', 'Colori neutri', 'Spazi aperti'],
    large: false,
  },
  {
    id: 3,
    title: 'Soggiorno Luxury',
    subtitle: 'Eleganza senza compromessi',
    discount: '-35%',
    image: '/images/hero-3.jpg',
    features: ['Materiali pregiati', 'Finiture esclusive', 'Personalizzabile'],
    large: false,
  },
]

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Le Nostre Collezioni
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary font-heading">
              Sconti del Mese
            </h2>
          </div>
          <p className="text-gray-600 max-w-md mt-4 md:mt-0">
            Scopri le nostre offerte esclusive su soggiorni di design Made in Italy
          </p>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Large Featured Product */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2 group cursor-pointer"
          >
            <div className="relative h-full min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={products[0].image}
                alt={products[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
              
              {/* Discount Badge */}
              <div className="absolute top-6 left-6 bg-accent text-white font-bold text-xl py-2 px-5 rounded-full shadow-lg">
                {products[0].discount}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-2 font-heading">
                  {products[0].title}
                </h3>
                <p className="text-white/80 mb-4">{products[0].subtitle}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {products[0].features.map((feature, i) => (
                    <span key={i} className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 bg-white text-secondary font-bold py-3 px-6 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  Scopri la Collezione
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Smaller Products */}
          {products.slice(1).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl bg-white">
                <div className="absolute inset-0 flex">
                  {/* Image Side */}
                  <div className="relative w-1/2 h-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-white font-bold py-1 px-4 rounded-full text-sm shadow-lg">
                      {product.discount}
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="w-1/2 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-secondary mb-2 font-heading">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{product.subtitle}</p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-primary-dark transition-colors">
                      Scopri
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase

