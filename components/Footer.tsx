export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 py-10 text-center text-sm text-neutral-500 dark:border-neutral-800">
      <div className="container-max">
        © {new Date().getFullYear()} AJAY. All rights reserved.
      </div>
    </footer>
  )
}


