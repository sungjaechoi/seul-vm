export async function getImages(topic?: string) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    if (!apiKey) {
      throw new Error('API KEY가 존재하지 않습니다.')
    }

    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${apiKey}&query=${topic}&count=30`,
    )

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }

    const imageArray = await response.json()

    return imageArray
  } catch (error) {
    console.error('fetchError :', error)
  }
}
