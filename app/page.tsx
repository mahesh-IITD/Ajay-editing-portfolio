'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Showreel from '../components/Showreel'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Page() {
  return (
    <div>
      <Navbar />
      <main className="space-y-24">
        <section id="home" className="min-h-[90vh]">
          <Hero />
        </section>
        <section id="showreel" className="container-max">
          <Showreel />
        </section>
        <section id="portfolio" className="container-max">
          <Gallery />
        </section>
        <section id="about" className="container-max">
          <About />
        </section>
        <section id="services" className="container-max">
          <Services />
        </section>
        <section id="testimonials" className="container-max">
          <Testimonials />
        </section>
        <section id="contact" className="container-max">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}


