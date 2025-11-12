import { Braces, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import type { Experience } from "@/lib/types"

interface ExperienceCardProps {
    experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>{experience.title}</CardTitle>
                        <CardDescription>
                            {experience.company} ({experience.location})
                        </CardDescription>
                    </div>
                    <div className="flex flex-col items-end">
                        <Badge>
                            {experience.startDate} - {experience.endDate}
                        </Badge>
                        <span className="text-xs text-muted-foreground mt-1 mr-1">
                            {experience.duration}
                        </span>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <p className="text-muted-foreground">{experience.description}</p>
                    <hr className="h-px bg-gray-200 dark:bg-gray-500 border-0 my-3" />
                    <ul className="list-disc list-inside text-muted-foreground space-y-0">
                        {experience.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium text-sm uppercase tracking-wide text-primary">
                        Tools & Technologies
                    </h4>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                        {experience.tools.map((tool) => (
                            <li key={tool} className="flex items-center gap-2">
                                <Braces className="h-4 w-4 text-primary" />
                                <span>{tool}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium text-sm uppercase tracking-wide text-primary">
                        Programming Languages
                    </h4>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                        {experience.languages.map((lang) => (
                            <li key={lang} className="flex items-center gap-2">
                                <Code className="h-4 w-4 text-primary" />
                                <span>{lang}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}

