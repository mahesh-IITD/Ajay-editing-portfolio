'use client'

import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  async function onSubmit(formData: FormData) {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        })
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
      <p className="mb-6 text-neutral-600 dark:text-neutral-300">Let’s collaborate. I’ll reply within 24h.</p>
      <form
        action={onSubmit}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        <input required name="name" placeholder="Your Name" className="rounded-md border border-neutral-300 bg-transparent p-3 dark:border-neutral-700 md:col-span-1" />
        <input required type="email" name="email" placeholder="Email" className="rounded-md border border-neutral-300 bg-transparent p-3 dark:border-neutral-700 md:col-span-1" />
        <textarea required name="message" placeholder="Message" rows={5} className="rounded-md border border-neutral-300 bg-transparent p-3 dark:border-neutral-700 md:col-span-2" />
        <div className="md:col-span-2 flex items-center gap-3">
          <button disabled={status==='loading'} className="rounded-md bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-800 disabled:opacity-60 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">Send</button>
          {status==='success' && <span className="text-sm text-green-600">Message sent!</span>}
          {status==='error' && <span className="text-sm text-red-600">Something went wrong.</span>}
        </div>
      </form>
      <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-300">
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="underline">YouTube</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="underline">Instagram</a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="underline">TikTok</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
      </div>
    </div>
  )
}


