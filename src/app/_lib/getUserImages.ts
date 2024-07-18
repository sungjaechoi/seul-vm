export default async function getUserImages(userId: string) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    if (!apiKey) {
      throw new Error('API KEY가 잘못되었습니다.')
    }

    const response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${userId}&image_type=photo&per_page=30`,
    )

    if (!response.ok) {
      throw new Error(`Http Error status: ${response.status}`)
    }
    const imageObject = await response.json()
    const imageArray = imageObject.hits

    return imageArray
  } catch (error) {
    console.error('fetchError :', error)
  }
}
