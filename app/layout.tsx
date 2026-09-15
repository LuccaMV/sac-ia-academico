import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "SAC IA Acadêmico",
    template: "%s · SAC IA Acadêmico",
  },
  description: "Resposta com fonte. Assistente virtual de atendimento acadêmico da UNIFENAS, câmpus Alfenas-MG.",
};

// Cor da barra do navegador no modo dia, que é o padrão.
export const viewport: Viewport = {
  themeColor: "#F5F7F8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-theme="light"
      suppressHydrationWarning
      className={`${manrope.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        {/* Aplica o modo noite salvo antes da primeira pintura, para a tela não piscar. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
