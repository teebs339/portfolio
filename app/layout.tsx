import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// Base path for GitHub Pages deployment
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

export const metadata = {
  title: "Ateeb Shahid | Automation Engineer | RPA/IPA Engineer",
  description:
    "Automation and Machine Learning Engineer specializing in RPA, IPA, and intelligent automation. Expert in UiPath, Power Automate, Python, and Node.js. Open to work in UAE.",
  keywords: [
    "Automation Engineer",
    "RPA Engineer",
    "IPA Engineer",
    "UiPath",
    "Power Automate",
    "Python",
    "Machine Learning",
    "AI Automation",
    "Process Automation",
  ],
  authors: [{ name: "Ateeb Shahid" }],
  creator: "Ateeb Shahid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ateebshahid.com",
    title: "Ateeb Shahid | Automation Engineer",
    description:
      "Automation and Machine Learning Engineer specializing in RPA, IPA, and intelligent automation.",
    siteName: "Ateeb Shahid Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ateeb Shahid | Automation Engineer",
    description:
      "Automation and Machine Learning Engineer specializing in RPA, IPA, and intelligent automation.",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}