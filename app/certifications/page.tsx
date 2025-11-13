import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { certifications } from "@/lib/data"
import { personalInfo } from "@/lib/data"

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            {personalInfo.name}
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/experience" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Experience
              </Link>
              <Link href="/projects" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Projects
              </Link>
              <Link href="/achievements" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Achievements
              </Link>
              <Link href="/certifications" className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-md">
                Certifications
              </Link>
              <Link href="/education" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Education
              </Link>
            </nav>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="container relative z-10 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Certifications</h1>
          </div>
          <p className="text-muted-foreground text-lg">Professional certifications and credentials</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <div key={certification.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glass-card dark:glass-card-dark p-6 rounded-2xl h-full flex flex-col">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl mb-2">{certification.title}</CardTitle>
                  <CardDescription>{certification.issuer}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 flex-grow flex flex-col justify-between">
                  <Badge className="w-fit mb-4">{certification.date}</Badge>
                  {certification.url && (
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a
                        href={certification.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>View Certification</span>
                      </a>
                    </Button>
                  )}
                </CardContent>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

