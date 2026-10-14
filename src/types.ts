export type ProjectCategory =
  | 'Frontend'
  | 'Backend'
  | 'Full Stack'
  | 'Automatización'
  | 'Sistemas'

export type ProjectLink = {
  label: string
  href: string
  kind: 'code' | 'demo'
}

export type Project = {
  id: string
  number: string
  title: string
  shortTitle: string
  summary: string
  type: string
  visibility: string
  categories: ProjectCategory[]
  technologies: string[]
  contribution: string
  problem: string
  objective: string
  architecture: string[]
  challenges: Array<{ title: string; solution: string }>
  results: string[]
  links: ProjectLink[]
  accent: 'blue' | 'violet' | 'cyan' | 'orange' | 'green'
  visual: 'flow' | 'inventory' | 'mobile' | 'changes' | 'bot' | 'face' | 'tickets'
}

export type TechnologyGroup = {
  id: string
  title: string
  eyebrow: string
  description: string
  items: Array<{ name: string; use: string }>
}

export type ExperienceItem = {
  index: string
  title: string
  context: string
  description: string
  points: string[]
}
