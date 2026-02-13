import HeroSection from '@/components/home/HeroCarousel'
import WhoWeAre from '@/components/home/WhoWeAre'
import ProductShowcase from '@/components/home/ProductShowcase'
import CatalogForm from '@/components/home/CatalogForm'
import ServicesGrid from '@/components/home/ServicesGrid'
import Testimonials from '@/components/home/Testimonials'
import StoreLocator from '@/components/home/StoreLocator'

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <ProductShowcase />
      <CatalogForm />
      <ServicesGrid />
      <Testimonials />
      <StoreLocator />
      <CatalogForm variant="bottom" />
    </>
  )
}

