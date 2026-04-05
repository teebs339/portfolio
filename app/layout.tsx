import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"

const inter = Inter({ subsets: ["latin"] })

// Base path for GitHub Pages deployment
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

export const metadata = {
  title: "Ateeb Shahid - Automation Engineer | n8n, RPA, React",
  description:
    "AI Automation Engieer with 3+ years building production-grade automation systems using n8n, UiPath, React, and Python. Specializing in enterprise RPA, CRM integrations, and AI/ML workflows. Based in Dubai, UAE.",
  keywords: [
    "AI Automation Engineer",
    "Software Engineer",
    "RPA Developer",
    "n8n Expert",
    "UiPath Developer",
    "Power Automate",
    "React Developer",
    "Python Automation",
    "CRM Integration",
    "Enterprise Automation",
    "Machine Learning",
    "Process Automation",
    "Dubai UAE",
    "Workflow Automation",
  ],
  authors: [{ name: "Ateeb Shahid" }],
  creator: "Ateeb Shahid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ateebshahid.com",
    title: "Ateeb Shahid | AI Automation Engieer",
    description:
      "Building production-grade automation systems with n8n, UiPath, React, and Python. Enterprise RPA, CRM integrations, and AI/ML workflows.",
    siteName: "Ateeb Shahid Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ateeb Shahid | AI Automation Engieer",
    description:
      "Building production-grade automation systems with n8n, UiPath, React, and Python. Enterprise RPA, CRM integrations, and AI/ML workflows.",
  },
  icons: {
    icon: [
      // Next.js automatically serves favicon.ico from app directory
      // For GitHub Pages with basePath, we need to reference it correctly
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/pfp-icon.ico`, sizes: "any", type: "image/x-icon" },
    ],
    apple: `${basePath}/pfp-icon.ico`,
    shortcut: `${basePath}/favicon.ico`,
  },
  manifest: `${basePath}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}