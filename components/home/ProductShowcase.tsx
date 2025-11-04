'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    id: 1,
    title: 'Stile SHABBY CHIC',
    discount: '-30%',
    image: '/images/shabby-chic.jpg',
    alt: 'Cucina Stile Shabby Chic',
  },
  {
    id: 2,
    title: 'STILE RUSTICO',
    discount: '-40%',
    image: '/images/rustico.jpg',
    alt: 'Cucina Stile Rustico',
  },
  {
    id: 3,
    title: 'STILE MODERNO',
    discount: '-45%',
    image: '/images/moderno.jpg',
    alt: 'Cucina Stile Moderno',
  },
]

const ProductShowcase = () => {
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
          <h2 className="section-title text-secondary">ALCUNI SCONTI DEL MESE</h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden bg-gray-200">
                {/* Placeholder for image - replace with actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-semibold">
                    {product.title}
                  </span>
                </div>
                
                {/* Discount Badge */}
                <div className="discount-badge">
                  {product.discount}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-secondary font-bold py-3 px-8 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    SCOPRI DI PIÙ
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-secondary uppercase tracking-wide text-center">
                  {product.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase

