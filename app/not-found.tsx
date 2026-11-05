import Link from "next/link";
import { siteConfig } from "@/config/site.config";

const locale = siteConfig.site.defaultLocale;

const content = {
  es: {
    title: "Página no encontrada",
    description: "La página que buscás no existe o fue movida.",
    cta: "Volver al presupuesto",
  },
  en: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has been moved.",
    cta: "Back to the proposal",
  },
};

export default function NotFound() {
  const text = content[locale];

  return (
    <main className="tone-dark flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-heading text-8xl font-black italic text-brand">404</p>
      <h1 className="mt-4 font-heading text-4xl font-black uppercase italic text-fg">{text.title}</h1>
      <p className="mt-3 max-w-md text-base text-fg-muted">{text.description}</p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 skew-x-[-12deg] items-center bg-brand px-8 text-sm font-bold uppercase tracking-[0.15em] text-bone transition-opacity hover:opacity-90"
      >
        <span className="skew-x-[12deg]">{text.cta}</span>
      </Link>
    </main>
  );
}
