import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase } from "lucide-react"
import { ExperienceCard } from "@/components/experience-card"
import { experiences } from "@/lib/data"
import { personalInfo } from "@/lib/data"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            {personalInfo.name}
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/experience" className="px-3 py-2 text-sm font-medium text-primary bg-primary/10 rounded-md">
                Experience
              </Link>
              <Link href="/projects" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Projects
              </Link>
              <Link href="/achievements" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Achievements
              </Link>
              <Link href="/certifications" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Certifications
              </Link>
              <Link href="/education" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Education
              </Link>
            </nav>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="container relative z-10 py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Experience</h1>
          </div>
          <p className="text-muted-foreground text-lg">My professional journey and career milestones</p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glass-card dark:glass-card-dark rounded-2xl p-8">
                <ExperienceCard experience={experience} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

