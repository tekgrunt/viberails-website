import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Viberails - Secure Your AI Agents',
  description: 'Secure OpenClaw and other agentic systems by intercepting and validating tool calls before they execute. Be the guardrail between your AI and production systems.',
  openGraph: {
    title: 'Viberails - Secure Your AI Agents',
    description: 'Secure OpenClaw and other agentic systems by intercepting and validating tool calls before they execute.',
    type: 'website',
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
