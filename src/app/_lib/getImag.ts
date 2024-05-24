export default async function getImag(id: string) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    if (!apiKey) {
      throw new Error('API KEY가 존재하지 않습니다')
    }

    const response = await fetch(
      `https://api.unsplash.com/photos/${id}?client_id=${apiKey}`,
    )

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }

    const image = await response.json()

    return image
  } catch (error) {
    console.error('fetchError :', error)
  }
}
