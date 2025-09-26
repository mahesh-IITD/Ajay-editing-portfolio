'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  { name: 'Riya S.', role: 'Brand Manager', text: 'Ajay delivered edits that lifted our CTR by 38%. Fast and collaborative.' },
  { name: 'Karan M.', role: 'Director', text: 'Tight storytelling instincts. The color pass elevated the entire short.' },
  { name: 'Maya D.', role: 'Creator', text: 'Clean YouTube edits with motion callouts. My watch-time went up noticeably.' }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const x = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })

  const next = () => setIndex(i => (i + 1) % testimonials.length)
  const prev = () => setIndex(i => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-semibold">Testimonials</h2>
      <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <motion.div
          key={index}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="p-6"
        >
          <p className="mb-4 text-lg">“{testimonials[index].text}”</p>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">{testimonials[index].name} — {testimonials[index].role}</div>
        </motion.div>
        <div className="flex items-center justify-between border-t border-neutral-200 p-3 dark:border-neutral-800">
          <button onClick={prev} className="rounded-md border px-3 py-1 text-sm dark:border-neutral-800">Prev</button>
          <div className="flex gap-1">
            {testimonials.map((_, i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-neutral-900 dark:bg-white' : 'bg-neutral-300 dark:bg-neutral-700'}`} />
            ))}
          </div>
          <button onClick={next} className="rounded-md border px-3 py-1 text-sm dark:border-neutral-800">Next</button>
        </div>
      </div>
    </div>
  )
}


