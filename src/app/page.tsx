import Nav          from '@/components/Nav'
import Hero         from '@/components/Hero'
import Metrics      from '@/components/Metrics'
import Services     from '@/components/Services'
import Team         from '@/components/Team'
import HowItWorks   from '@/components/HowItWorks'
import Cases        from '@/components/Cases'
import Testimonials from '@/components/Testimonials'
import Cta          from '@/components/Cta'
import Footer       from '@/components/Footer'
import SmokeCanvas  from '@/components/SmokeCanvas'

export default function Home() {
  return (
    <>
      <SmokeCanvas />
      <div className="relative mx-auto w-full max-w-[1440px]" style={{ zIndex: 1 }}>
        <Nav />
        <main>
          <Hero />
          <Metrics />
          <Services />
          <Team />
          <HowItWorks />
          <Cases />
          <Testimonials />
          <Cta />
        </main>
        <Footer />
      </div>
    </>
  )
}
