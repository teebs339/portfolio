import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Code, Github } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { projects, contactInfo } from "@/lib/data"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
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
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
          </div>
          <p className="text-muted-foreground text-lg">A collection of my work and side projects</p>
          <Button asChild className="mt-4 group transition-smooth hover:bg-primary/90">
            <a href={contactInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glass-card dark:glass-card-dark rounded-2xl overflow-hidden">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

