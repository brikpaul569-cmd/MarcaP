export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link: string
  image: string
  featured: boolean
}

export interface TimelineEvent {
  year: number
  title: string
  description: string
  type: 'code' | 'music' | 'ai' | 'milestone'
}

export interface MusicRelease {
  id: string
  title: string
  releaseDate: string
  artwork: string
  spotifyUrl: string
  genre: string
  bpm: number
  key: string
}
