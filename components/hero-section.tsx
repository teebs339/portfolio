import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { PersonalInfo, ContactInfo } from "@/lib/types"

interface HeroSectionProps {
    personalInfo: PersonalInfo
    contactInfo: ContactInfo
}

export function HeroSection({ personalInfo, contactInfo }: HeroSectionProps) {
    return (
        <section
            id="hero"
            className="py-20 md:py-28 flex flex-col md:flex-row items-center gap-8 md:gap-16"
        >
            <div className="flex-1 space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    {personalInfo.name}
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                    {personalInfo.title}
                </h2>
                <p className="text-muted-foreground max-w-md">
                    {personalInfo.bio.includes("Open to Work") ? (
                        <>
                            {personalInfo.bio.split("Open to Work")[0]}
                            <strong>Open to Work</strong>
                            {personalInfo.bio.split("Open to Work")[1]}
                        </>
                    ) : (
                        personalInfo.bio
                    )}
                </p>
                <div className="flex gap-4 pt-4">
                    <Button asChild className="transition-smooth hover:scale-105">
                        <a href="#contact">Get in touch</a>
                    </Button>
                    <Button variant="outline" asChild className="transition-smooth hover:bg-primary hover:text-primary-foreground hover:scale-105">
                        <a href="#projects">View projects</a>
                    </Button>
                    <Button variant="outline" asChild className="transition-smooth hover:bg-primary hover:text-primary-foreground hover:scale-105">
                        <a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            My Resume
                        </a>
                    </Button>
                </div>

                <div className="flex gap-4 pt-2">
                    {contactInfo.socialLinks.linkedin && (
                        <Button variant="outline" asChild className="transition-smooth hover:bg-primary hover:text-primary-foreground hover:scale-105">
                            <a
                                href={contactInfo.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                            >
                                <Linkedin className="h-4 w-4" />
                                <span>Follow LinkedIn</span>
                            </a>
                        </Button>
                    )}

                    {contactInfo.socialLinks.github && (
                        <Button variant="outline" asChild className="transition-smooth hover:bg-primary hover:text-primary-foreground hover:scale-105">
                            <a
                                href={contactInfo.socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                            >
                                <Github className="h-4 w-4" />
                                <span>Follow GitHub</span>
                            </a>
                        </Button>
                    )}
                </div>
            </div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-background shadow-xl transition-smooth hover:shadow-2xl hover:scale-105 ring-4 ring-primary/10">
                <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover transition-smooth hover:scale-110"
                    priority
                />
            </div>
        </section>
    )
}

