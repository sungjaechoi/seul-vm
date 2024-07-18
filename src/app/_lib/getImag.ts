export default async function getImage(id: string) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    if (!apiKey) {
      throw new Error('API KEY가 존재하지 않습니다')
    }

    const response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&id=${id}`,
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
