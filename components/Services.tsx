'use client'

import { motion } from 'framer-motion'

const services = [
  { title: 'Ad Editing', desc: 'High-conversion edits for brands and products.' },
  { title: 'YouTube/Post Production', desc: 'Tutorials, vlogs, and long-form pacing.' },
  { title: 'Short Films', desc: 'Narrative cuts, color, and sound design.' },
  { title: 'Social Reels', desc: 'Punchy, trend-aware short-form edits.' }
]

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-4 text-2xl font-semibold">Services</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-neutral-200 p-5 transition dark:border-neutral-800"
          >
            <div className="mb-2 font-semibold">{s.title}</div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


