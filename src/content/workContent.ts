export interface PublishedWorkProject {
  slug: string
  title: string
  sector: string
  status: 'Demonstration / Prototype' | 'Academic & Research Project'
  featuredImage: string
  technologies: string[]
  repoUrl?: string
}

export const PUBLIC_WORK_PROJECTS: PublishedWorkProject[] = []
