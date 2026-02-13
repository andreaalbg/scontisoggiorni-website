'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { FaGift, FaTruck, FaShieldAlt, FaCheck } from 'react-icons/fa'

interface CatalogFormProps {
  variant?: 'top' | 'bottom'
}

const perks = [
  { icon: FaGift, text: 'Buono 1000€ incluso' },
  { icon: FaTruck, text: 'Spedizione gratuita' },
  { icon: FaShieldAlt, text: 'Garanzia 5 anni' },
]

const CatalogForm = ({ variant = 'top' }: CatalogFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    privacy: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert("Grazie! Riceverai il catalogo all'indirizzo email fornito.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  if (variant === 'bottom') {
    return (
      <section className="py-24 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Inizia a Progettare il Tuo Soggiorno Ideale
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Richiedi una consulenza gratuita con i nostri esperti. Riceverai il catalogo completo 
              e un buono sconto di 1000€ da utilizzare nei nostri showroom.
            </p>
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300"
            >
              Richiedi il Catalogo Gratuito
            </a>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="catalog" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left - Image & Info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-3.jpg"
                alt="Catalogo Soggiorni"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-secondary mb-4">Cosa riceverai:</h3>
                  <ul className="space-y-3">
                    {perks.map((perk, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <perk.icon className="text-primary text-sm" />
                        </div>
                        <span className="text-gray-700">{perk.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Catalogo Gratuito
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 leading-tight font-heading">
              Ricevi il Catalogo <span className="text-primary">2026</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Compila il modulo per ricevere il nostro catalogo completo con tutte le collezioni 
              e un esclusivo buono sconto di 1000€.
            </p>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Mario Rossi"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="mario@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+39 333 1234567"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    Città
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Milano"
                  />
                </div>
              </div>

              {/* Privacy */}
              <label className="flex items-start gap-3 cursor-pointer mb-6">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-primary rounded focus:ring-primary"
                />
                <span className="text-sm text-gray-600">
                  Ho letto l&apos;informativa privacy e acconsento al trattamento dei miei dati personali
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaCheck />
                Richiedi il Catalogo Gratuito
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CatalogForm

