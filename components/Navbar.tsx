'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'showreel', label: 'Showreel' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handle = () => setOpen(false)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur dark:bg-neutral-950/70">
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="#home" className="font-semibold tracking-wide">AJAY</Link>
        <nav className="hidden gap-6 md:flex">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} className="text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            className="rounded-md border border-neutral-200 p-2 dark:border-neutral-800"
            onClick={() => setTheme((resolvedTheme === 'dark' ? 'light' : 'dark'))}
          >
            {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu">
            <span className="i">☰</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
          <div className="flex flex-col gap-3">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="py-1 text-neutral-700 dark:text-neutral-200">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}


