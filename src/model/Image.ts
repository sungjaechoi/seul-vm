export type User = {
  username: string
  name: string
  profile_image: {
    small: string
    large: string
  }
  bio: string
}

export type Image = {
  id: string
  alternative_slugs: {
    ko: string
  }
  created_at: Date
  urls: {
    full: string
    small: string
    thumb: string
    regular: string
  }
  likes: number
  views: number
  user: User
  color: string
  downloads: number
}
