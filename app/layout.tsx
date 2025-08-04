import type { Metadata } from "next";
import { Lora, Roboto_Condensed, Kablammo, Cormorant, Montserrat } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from '@/lib/constants'
import { ThemeProvider } from 'next-themes'


const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Elige los pesos que vayas a usar
  variable: '--font-lora', // Para usarlo en Tailwind
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Elige los pesos que vayas a usar
  variable: '--font-roboto-condensed', // Para usarlo en Tailwind
});

const kablammo = Kablammo({
  subsets: ['latin'],
  weight: '400', // Kablammo solo tiene un peso disponible
  variable: '--font-kablammo', // CSS variable para usar en Tailwind
});

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: '400', // Kablammo solo tiene un peso disponible
  variable: '--font-cormorant', // CSS variable para usar en Tailwind
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400', // Kablammo solo tiene un peso disponible
  variable: '--font-montserrat', // CSS variable para usar en Tailwind
});

export const metadata: Metadata = {
  title: {
    template: `%s | Prostore`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lora.variable} ${robotoCondensed.variable} ${kablammo.variable} ${cormorant.variable} ${montserrat.variable}  antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
