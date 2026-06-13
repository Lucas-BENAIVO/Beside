import type { HeaderData } from "@/types/navigation";

export const headerData: HeaderData = {
  brand: {
    name: "Beside",
    tagline: "pour les aidants",
    href: "/",
  },
  navItems: [
    { label: "Fonctionnalités", href: "/#fonctionnalites" },
    { label: "Mutuelles", href: "/#mutuelles", count: 12 },
    { label: "Entreprises", href: "/#entreprises", count: 8 },
    { label: "Nous contacter", href: "/contact", underlined: true },
  ],
  authActions: [
    { label: "Connexion", href: "/connexion", variant: "ghost" },
    { label: "S'inscrire", href: "/inscription", variant: "primary" },
  ],
};
