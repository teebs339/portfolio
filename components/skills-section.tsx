import { Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeader } from "@/components/section-header"
import type { Skill } from "@/lib/types"

interface SkillsSectionProps {
    technicalSkills: Skill[]
    softSkills: Array<{ title: string; description: string }>
}

export function SkillsSection({
    technicalSkills,
    softSkills,
}: SkillsSectionProps) {
    return (
        <section id="skills" className="py-16 scroll-mt-16">
            <SectionHeader icon={Code} title="Skills" />

            <Tabs defaultValue="technical" className="w-full">
                <TabsList className="grid w-full md:w-[400px] grid-cols-2">
                    <TabsTrigger value="technical">Technical Skills</TabsTrigger>
                    <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="technical" className="mt-6">
                    <div className="grid gap-8 md:grid-cols-2">
                        {technicalSkills.map((skill) => (
                            <Card key={skill.category}>
                                <CardHeader>
                                    <CardTitle>{skill.category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.items.map((item) => (
                                            <Badge key={item}>{item}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="soft" className="mt-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        {softSkills.map((skill) => (
                            <Card key={skill.title}>
                                <CardHeader>
                                    <CardTitle>{skill.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{skill.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

