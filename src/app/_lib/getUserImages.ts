export default async function getUserImages(userName: string) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    if (!apiKey) {
      throw new Error('API KEY가 잘못되었습니다.')
    }

    const response = await fetch(
      `https://api.unsplash.com/users/${userName}/photos?client_id=${apiKey}&per_page=30`,
    )

    if (!response.ok) {
      throw new Error(`Http Error status: ${response.status}`)
    }
    const imageArray = await response.json()

    return imageArray
  } catch (error) {
    console.error('fetchError :', error)
  }
}
