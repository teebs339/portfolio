import { ExternalLink, Link as LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Achievement } from "@/lib/types"

interface AchievementCardProps {
  achievement: Achievement
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{achievement.title}</CardTitle>
        <CardDescription>{achievement.organization}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{achievement.description}</p>

        <div className="flex gap-2 mt-4">
          {achievement.link && (
            <Button size="sm" variant="outline" asChild>
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                <span>{achievement.linkText || "View"}</span>
              </a>
            </Button>
          )}
          {achievement.links?.map((link, index) => (
            <Button key={index} size="sm" variant="outline" asChild>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <LinkIcon className="h-4 w-4" />
                <span>{link.text}</span>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

