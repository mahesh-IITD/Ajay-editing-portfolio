'use client'

import { useEffect, useRef, useState } from 'react'

export default function Showreel() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setReady(true)
    }, { rootMargin: '200px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-4 text-2xl font-semibold">Showreel</h2>
      <p className="mb-6 text-neutral-600 dark:text-neutral-300">A quick glimpse of my recent work.</p>
      <div ref={ref} className="aspect-video w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        {ready ? (
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/ysz5S6PUM-U?rel=0&autoplay=0&modestbranding=1"
            title="Showreel"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setReady(true)}
            className="flex h-full w-full items-center justify-center bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300"
          >
            ▶ Play Showreel
          </button>
        )}
      </div>
    </div>
  )
}


