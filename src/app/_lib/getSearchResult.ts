export default async function getSearchResult(
  page: number,
  searchKeyword: string,
) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    if (!apiKey) {
      throw new Error('API KEY가 잘못되었습니다.')
    }

    const response = await fetch(
      `https://api.unsplash.com/search/photos?client_id=${apiKey}&page=${page}&per_page=30&query=${searchKeyword}`,
    )

    if (!response.ok) {
      throw new Error(`Http Error status: ${response.status}`)
    }
    const searchData = await response.json()
    const imageArray = searchData.results

    return imageArray
  } catch (error) {
    console.error('fetchError :', error)
  }
}
