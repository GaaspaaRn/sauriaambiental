import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sáuria | Consultoria Ambiental em Joinville, SC',
  description: 'Sáuria - Consultoria Ambiental, Cultural e Arqueológica em Joinville, SC. Especialistas em licenciamento ambiental, EIA/RIMA e gestão de patrimônio.',
  keywords: 'consultoria ambiental, licenciamento ambiental, arqueologia, patrimônio cultural, estudos de impacto ambiental, EIA, RIMA, Joinville, Santa Catarina',
  authors: [{ name: 'Sáuria Consultoria Ambiental' }],
  openGraph: {
    type: 'website',
    url: 'https://sauriaconsultoria.com.br/',
    title: 'Sáuria | Consultoria Ambiental em Joinville, SC',
    description: 'Soluções integradas em meio ambiente, patrimônio cultural e arqueologia. Atendemos Joinville e toda Santa Catarina.',
    siteName: 'Sáuria Consultoria Ambiental',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#006400" />
        <meta name="theme-color" content="#006400" />
      </head>
      <body className="flex flex-col min-h-screen bg-light text-dark font-sans">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
