import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "OTTplay - Watch 2025 Asia Cup Live | Cricket Streaming",
  description:
    "Watch cricket matches live on OTTplay. Stream the 2025 Asia Cup and more cricket content with live scores, news, and match highlights.",
  keywords: "cricket, live streaming, Asia Cup 2025, OTTplay, cricket matches, live scores",
  openGraph: {
    title: "OTTplay - Watch 2025 Asia Cup Live",
    description: "Stream live cricket matches including the 2025 Asia Cup on OTTplay",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
