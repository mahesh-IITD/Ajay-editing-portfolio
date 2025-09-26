'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Project = {
  id: string
  title: string
  thumbnail: string
  category: string
  videoUrl: string
  description: string
}

const categories = ['All', 'YouTube', 'Ads', 'Short Films', 'Reels']

export default function Gallery() {
  const [projects, setProjects] = useState<Project[]>([])
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState<Project | null>(null)

  useEffect(() => {
    fetch('/data/projects.json')
      .then(r => r.json())
      .then(setProjects)
      .catch(() => setProjects([]))
  }, [])

  const visible = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter(p => p.category === active)
  }, [projects, active])

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-sm transition ${active === cat ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900' : 'border-neutral-200 text-neutral-600 hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {visible.map(p => (
            <motion.button
              key={p.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(p)}
              className="group overflow-hidden rounded-xl border border-neutral-200 text-left transition hover:shadow-lg dark:border-neutral-800"
            >
              <div className="relative aspect-video w-full">
                <Image src={p.thumbnail} alt={p.title} fill className="object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{p.category}</div>
                <div className="font-semibold">{p.title}</div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-3xl overflow-hidden rounded-xl bg-white dark:bg-neutral-950"
              onClick={e => e.stopPropagation()}
            >
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={toEmbedUrl(selected.videoUrl)}
                  title={selected.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{selected.category}</div>
                <div className="mb-2 font-semibold">{selected.title}</div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function toEmbedUrl(url: string) {
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtube.com') || u.hostname.includes('youtu.be')) {
      const id = u.searchParams.get('v') || u.pathname.replace('/', '')
      return `https://www.youtube.com/embed/${id}`
    }
    if (u.hostname.includes('vimeo.com')) {
      const id = u.pathname.replace('/', '')
      return `https://player.vimeo.com/video/${id}`
    }
    return url
  } catch {
    return url
  }
}


