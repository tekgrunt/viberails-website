import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.viberails.io'),
  title: 'Viberails - Secure Your AI Agents',
  description: 'Viberails intercepts, audits and validates tool calls from OpenClaw and other agentic systems before execution.',
  openGraph: {
    title: 'Viberails - Secure Your AI Agents',
    description: 'Viberails intercepts, audits and validates tool calls from OpenClaw and other agentic systems before execution.',
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
    description: 'Viberails intercepts, audits and validates tool calls from OpenClaw and other agentic systems before execution.',
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
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5TVL6K7X');`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TVL6K7X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
