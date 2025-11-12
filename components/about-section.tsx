import { MapPin, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import type { PersonalInfo } from "@/lib/types"

interface AboutSectionProps {
    personalInfo: PersonalInfo
    aboutSections: string[]
}

export function AboutSection({
    personalInfo,
    aboutSections,
}: AboutSectionProps) {
    return (
        <section id="about" className="py-16 scroll-mt-16">
            <SectionHeader icon={User} title="About Me" />
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                    {aboutSections.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Info</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <span className="font-medium">Location:</span>
                            <div className="flex items-center gap-1 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{personalInfo.location}</span>
                            </div>
                        </div>
                        <div>
                            <span className="font-medium">Education:</span>
                            <div className="text-muted-foreground">{personalInfo.education}</div>
                        </div>
                        <div>
                            <span className="font-medium">Interests:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {personalInfo.interests.map((interest) => (
                                    <Badge key={interest} variant="secondary">
                                        {interest}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

