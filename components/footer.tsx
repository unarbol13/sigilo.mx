import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/sigilo_logo.png"
            alt="Sigilo"
            width={24}
            height={24}
            className="rounded"
          />
          <div>
            <span className="font-display text-sm font-bold tracking-wider text-foreground uppercase">
              Sigilo
            </span>
            <p className="text-xs text-muted mt-0.5">
              Software a la medida · Salamanca, Gto.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted">
          <a
            href="mailto:contacto@sigilo.mx"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="https://wa.me/524641936003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            WhatsApp
          </a>
          <span className="text-border-strong">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
