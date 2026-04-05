import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { educations } from "@/lib/data"

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <main className="container relative z-10 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Education</h1>
          </div>
          <p className="text-muted-foreground text-lg">Academic background and qualifications</p>
        </div>

        <div className="space-y-6">
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
      </main>
    </div>
  )
}

