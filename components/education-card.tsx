import { BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Education } from "@/lib/types"

interface EducationCardProps {
  education: Education
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{education.institution}</CardTitle>
            <CardDescription>{education.location}</CardDescription>
          </div>
          <div className="flex flex-col items-end">
            <Badge>
              {education.startDate} - {education.endDate}
            </Badge>
            <span className="text-xs text-muted-foreground mt-1 mr-1">
              {education.duration}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-medium">{education.degree}</h3>
          {education.gpa && (
            <p className="text-muted-foreground">GPA: {education.gpa}</p>
          )}
        </div>
        {(education.coursework || education.subjects) && (
          <div>
            <h4 className="font-medium">
              {education.coursework ? "Relevant Coursework" : "Relevant Subjects"}
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              {(education.coursework || education.subjects || []).map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

