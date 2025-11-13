import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Code, Mail, Github, Linkedin, Download, Award, FileText, Wrench, MapPin, GraduationCap, MessageSquare, Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactForm from "@/components/contact-form"
import { NeuralBackground } from "@/components/neural-background"
import { personalInfo, contactInfo, experiences, projects, achievements, certifications, technicalSkills, softSkills, aboutSections, educations } from "@/lib/data"

export default function Home() {
  const latestExperience = experiences[0]
  const featuredProjects = projects.slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Interactive Neural Background */}
      <NeuralBackground />


      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            {personalInfo.name}
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/experience" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
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

      <main className="container relative z-10">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 shadow-2xl transition-smooth hover:shadow-2xl hover:scale-105 ring-4 ring-primary/10">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover transition-smooth group-hover:scale-110"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">{personalInfo.title}</p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{personalInfo.bio}</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" className="group transition-smooth hover:bg-primary/90">
              <Link href="/experience">
                View Experience
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group glass-card dark:glass-card-dark transition-smooth hover:!bg-primary hover:!text-primary-foreground hover:border-primary">
              <Link href="/projects">
                <Code className="mr-2 h-4 w-4" />
                View Projects
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group glass-card dark:glass-card-dark transition-smooth hover:!bg-primary hover:!text-primary-foreground hover:border-primary">
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                My Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {contactInfo.socialLinks.linkedin && (
              <Button variant="ghost" size="icon" asChild className="glass-card dark:glass-card-dark hover:scale-110">
                <a href={contactInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            )}
            {contactInfo.socialLinks.github && (
              <Button variant="ghost" size="icon" asChild className="glass-card dark:glass-card-dark hover:scale-110">
                <a href={contactInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About Box - Left */}
            <div className="md:col-span-3 glass-card dark:glass-card-dark p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-4">
                {aboutSections.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Details Box - Right */}
            <div className="glass-card dark:glass-card-dark p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Details</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm font-medium">Location</span>
                  </div>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <GraduationCap className="h-5 w-5" />
                    <span className="text-sm font-medium">Education</span>
                  </div>
                  <p className="font-medium">{personalInfo.education}</p>
                </div>

                <div>
                  <div className="text-muted-foreground mb-3 text-sm font-medium">Interests</div>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.interests.map((interest) => (
                      <Badge key={interest} variant="secondary">{interest}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats / Highlights */}
        <section className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          <Link href="/experience" className="group">
            <div className="glass-card dark:glass-card-dark p-6 rounded-2xl hover:scale-105 transition-smooth cursor-pointer h-full">
              <Briefcase className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground text-sm mb-4">{experiences.length} positions</p>
              <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                <span className="text-sm font-medium">View all</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link href="/projects" className="group">
            <div className="glass-card dark:glass-card-dark p-6 rounded-2xl hover:scale-105 transition-smooth cursor-pointer h-full">
              <Code className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <p className="text-muted-foreground text-sm mb-4">{projects.length} projects</p>
              <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                <span className="text-sm font-medium">View all</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link href="/achievements" className="group">
            <div className="glass-card dark:glass-card-dark p-6 rounded-2xl hover:scale-105 transition-smooth cursor-pointer h-full">
              <Award className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Achievements</h3>
              <p className="text-muted-foreground text-sm mb-4">{achievements.length} achievements</p>
              <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                <span className="text-sm font-medium">View all</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link href="/certifications" className="group">
            <div className="glass-card dark:glass-card-dark p-6 rounded-2xl hover:scale-105 transition-smooth cursor-pointer h-full">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <p className="text-muted-foreground text-sm mb-4">{certifications.length} certifications</p>
              <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                <span className="text-sm font-medium">View all</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

        </section>

        {/* Education Section */}
        <section className="mb-20">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <p className="text-muted-foreground text-lg">Academic background and qualifications</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {educations.map((education, index) => (
              <div key={education.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="glass-card dark:glass-card-dark p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{education.institution}</h3>
                      <p className="text-muted-foreground text-lg mb-1">{education.degree}</p>
                      {education.gpa && (
                        <p className="text-sm text-muted-foreground">GPA: {education.gpa}</p>
                      )}
                    </div>
                    <Badge className="mt-4 md:mt-0 w-fit">{education.startDate} - {education.endDate}</Badge>
                  </div>
                  <p className="text-muted-foreground">{education.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Wrench className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Skills</h2>
            </div>
            <p className="text-muted-foreground text-lg">Technical expertise and professional capabilities</p>
          </div>

          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="glass-card dark:glass-card-dark mb-6">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="technical" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.category} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="glass-card dark:glass-card-dark p-6 rounded-2xl">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl">{skill.category}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item) => (
                            <Badge key={item} variant="outline" className="transition-smooth hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 cursor-pointer">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="soft" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {softSkills.map((skill, index) => (
                  <div key={skill.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="glass-card dark:glass-card-dark p-6 rounded-2xl">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl">{skill.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                      </CardContent>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Latest Experience Preview */}
        {latestExperience && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Latest Experience</h2>
              <Button variant="ghost" asChild>
                <Link href="/experience">
                  View all <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="glass-card dark:glass-card-dark p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{latestExperience.title}</h3>
                  <p className="text-muted-foreground">{latestExperience.company} • {latestExperience.location}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {latestExperience.startDate} - {latestExperience.endDate}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{latestExperience.description}</p>
            </div>
          </section>
        )}

        {/* Featured Projects Preview */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Button variant="ghost" asChild>
              <Link href="/projects">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link key={project.id} href="/projects" className="group">
                <div className="glass-card dark:glass-card-dark p-6 rounded-2xl hover:scale-105 transition-smooth cursor-pointer h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description.substring(0, 100)}...</p>
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Get in Touch</h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass-card dark:glass-card-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card dark:glass-card-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="font-medium hover:text-primary transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {contactInfo.phone && (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Phone</p>
                        <a href={`tel:${contactInfo.phone}`} className="font-medium hover:text-primary transition-colors">
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card dark:glass-card-dark p-8 rounded-2xl">
                <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  {contactInfo.socialLinks.linkedin && (
                    <Button variant="outline" size="icon" asChild className="glass-card dark:glass-card-dark hover:scale-110 transition-smooth hover:bg-primary hover:text-primary-foreground">
                      <a href={contactInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {contactInfo.socialLinks.github && (
                    <Button variant="outline" size="icon" asChild className="glass-card dark:glass-card-dark hover:scale-110 transition-smooth hover:bg-primary hover:text-primary-foreground">
                      <a href={contactInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/20 mt-20 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex gap-4">
            {contactInfo.socialLinks.linkedin && (
              <Button variant="ghost" size="icon" asChild>
                <a href={contactInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            )}
            {contactInfo.socialLinks.github && (
              <Button variant="ghost" size="icon" asChild>
                <a href={contactInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}
