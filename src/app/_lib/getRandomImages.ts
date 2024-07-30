export async function getRandomImages(page: 1 | number) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    if (!apiKey) {
      throw new Error('API KEY가 존재하지 않습니다.')
    }

    const response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&category=feelings&image_type=photo&page=${page}&per_page=30`,
    )

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }

    const imageObject = await response.json()
    const imageArray = imageObject.hits

    return imageArray
  } catch (error) {
    console.error('fetchError :', error)
  }
}
