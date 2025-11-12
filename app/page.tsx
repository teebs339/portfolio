import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Download, ChevronUp, Code, Award, Briefcase, GraduationCap, FileText } from "lucide-react"
import Navigation from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectCard } from "@/components/project-card"
import { ExperienceCard } from "@/components/experience-card"
import { EducationCard } from "@/components/education-card"
import { AchievementCard } from "@/components/achievement-card"
import { CertificationCard } from "@/components/certification-card"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { SectionHeader } from "@/components/section-header"
import {
  personalInfo,
  aboutSections,
  experiences,
  educations,
  projects,
  achievements,
  certifications,
  technicalSkills,
  softSkills,
  contactInfo,
} from "@/lib/data"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold">
            {personalInfo.name}
          </Link>
          <div className="flex items-center gap-4">
            <Navigation />
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="container pb-16">
        <HeroSection personalInfo={personalInfo} contactInfo={contactInfo} />

        <AboutSection personalInfo={personalInfo} aboutSections={aboutSections} />

        {/* Experience Section */}
        <section id="experience" className="py-16 scroll-mt-16">
          <SectionHeader icon={Briefcase} title="Experience" />
          <div className="space-y-6">
            {experiences.map((experience) => (
              <div key={experience.id}>
                <ExperienceCard experience={experience} />
                {experience.id !== experiences[experiences.length - 1].id && (
                  <hr className="h-px bg-gray-200 dark:bg-gray-500 border-0 my-3" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 scroll-mt-16">
          <SectionHeader icon={GraduationCap} title="Education" />
          <div className="space-y-6">
            {educations.map((education, index) => (
              <div key={education.id}>
                <EducationCard education={education} />
                {index < educations.length - 1 && (
                  <hr className="h-px bg-gray-200 dark:bg-gray-500 border-0 my-3" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-16">
          <SectionHeader icon={Code} title="Projects" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Achievements & Awards Section */}
        <section id="achievements" className="py-16 scroll-mt-16">
          <SectionHeader icon={Award} title="Achievements & Awards" />
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </section>

        <SkillsSection technicalSkills={technicalSkills} softSkills={softSkills} />

        {/* Certifications Section */}
        <section id="certifications" className="py-16 scroll-mt-16">
          <SectionHeader icon={FileText} title="Certifications" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <CertificationCard
                key={certification.id}
                certification={certification}
              />
            ))}
          </div>
        </section>

        <ContactSection contactInfo={contactInfo} />
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-2"></div>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://drive.google.com/uc?export=download&id=1nVSjdQVcGIQAtv2TtZajffxZmibRz8gm"
                download
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="#hero" className="scroll-smooth" aria-label="Back to top">
                <ChevronUp className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
