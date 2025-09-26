'use client'

import { motion } from 'framer-motion'

const skills = [
  'Premiere Pro',
  'After Effects',
  'DaVinci Resolve',
  'Color Grading',
  'Sound Design',
  'Motion Graphics'
]

export default function About() {
  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-4 text-2xl font-semibold">About</h2>
      <p className="mb-6 text-neutral-600 dark:text-neutral-300">
        I’m AJAY, a video editor focused on storytelling and rhythm. I craft edits for brands, filmmakers, and creators, blending pace, color, and sound to move audiences.
      </p>
      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-full border border-neutral-200 px-3 py-1 text-sm dark:border-neutral-800"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </div>
  )
}


