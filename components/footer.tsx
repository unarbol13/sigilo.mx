export function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-mono text-sm font-bold tracking-wider text-neutral-400 uppercase">
            Estudio_
          </span>
          <p className="text-xs text-neutral-600 mt-1">
            Software a la medida · Salamanca, Gto.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-neutral-500">
          <a
            href="mailto:contacto@prisma360solutions.com"
            className="hover:text-neutral-300 transition-colors"
          >
            Email
          </a>
          <a
            href="https://wa.me/524641936003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors"
          >
            WhatsApp
          </a>
          <span className="text-neutral-700">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
