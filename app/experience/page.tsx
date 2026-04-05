import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase, Linkedin, Download } from "lucide-react"
import { ExperienceCard } from "@/components/experience-card"
import { experiences, contactInfo, personalInfo } from "@/lib/data"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      </div>

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
          <p className="text-muted-foreground text-lg">From enterprise RPA to AI-driven automation systems across the UAE and beyond</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Button asChild className="group transition-smooth hover:bg-primary/90">
              <a href={contactInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                View LinkedIn Profile
              </a>
            </Button>
            <Button asChild variant="outline" className="group transition-smooth hover:bg-primary hover:text-primary-foreground hover:border-primary">
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
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

