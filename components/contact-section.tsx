import { Github, Linkedin, Mail, MapPin, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import ContactForm from "@/components/contact-form"
import type { ContactInfo } from "@/lib/types"

interface ContactSectionProps {
  contactInfo: ContactInfo
}

export function ContactSection({ contactInfo }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 scroll-mt-16">
      <SectionHeader icon={MessageSquare} title="Contact" />
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Fill out the form and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Feel free to reach out through any of these channels.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:underline"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{contactInfo.location}</span>
            </div>
            {contactInfo.phone && (
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href={`tel:${contactInfo.phone}`} className="hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
            )}
            <div className="pt-4">
              <h3 className="font-medium mb-3">Connect with me</h3>
              <div className="flex gap-4">
                {contactInfo.socialLinks.linkedin && (
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={contactInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                {contactInfo.socialLinks.github && (
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={contactInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                {contactInfo.phone && (
                  <Button variant="outline" size="icon" asChild>
                    <a href={`tel:${contactInfo.phone}`} aria-label="Phone">
                      <Phone className="h-5 w-5" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

