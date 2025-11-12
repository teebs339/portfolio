import { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  icon: LucideIcon
  title: string
}

export function SectionHeader({ icon: Icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-8">
      <Icon className="h-6 w-6 text-primary" />
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  )
}

