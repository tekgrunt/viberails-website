import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.viberails.io'),
  title: 'Viberails - Secure Your AI Agents',
  description: 'Secure agentic systems by intercepting, auditing and validating tool calls before they execute.',
  openGraph: {
    title: 'Viberails - Secure Your AI Agents',
    description: 'Secure agentic systems by intercepting, auditing and validating tool calls before they execute.',
    type: 'website',
    url: 'https://www.viberails.io',
    images: [
      {
        url: 'https://www.viberails.io/og-viberails.png',
        width: 1200,
        height: 630,
        alt: 'Viberails - Secure Your AI Agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viberails - Secure Your AI Agents',
    description: 'Secure agentic systems by intercepting, auditing and validating tool calls before they execute.',
    images: ['https://www.viberails.io/og-viberails.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
