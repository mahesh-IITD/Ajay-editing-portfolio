'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1495563381401-ecfbcaaa67fb?q=80&w=1400&auto=format&fit=crop"
      >
        <source src="https://cdn.coverr.co/videos/coverr-editing-a-video-0126/1080p.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">Hi, I’m AJAY, a Video Editor</h1>
        <p className="mx-auto mb-8 max-w-xl text-neutral-200">I craft compelling edits for ads, short films, and social media reels.</p>
        <a href="#showreel" className="rounded-md bg-white px-6 py-3 font-semibold text-neutral-900 transition hover:bg-neutral-200">Watch Showreel</a>
      </motion.div>
    </div>
  )
}


