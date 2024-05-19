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
  }
  likes: number
  views: number
}
