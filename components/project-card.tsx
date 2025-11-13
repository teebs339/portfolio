import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-smooth hover:shadow-lg hover:-translate-y-1 group border-none bg-transparent shadow-none">
      <div className="aspect-video relative bg-muted/30 overflow-hidden rounded-t-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain transition-all duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="bg-transparent">
        <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 bg-transparent">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div>
          <h4 className="text-sm font-medium mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="transition-smooth hover:bg-primary/10 hover:border-primary/50">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button size="sm" variant="outline" asChild className="transition-smooth hover:bg-primary hover:text-primary-foreground">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Github className="h-4 w-4" />
                <span>Code</span>
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button size="sm" variant="outline" asChild className="transition-smooth hover:bg-primary hover:text-primary-foreground">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <span>Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

