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
      `https://pixabay.com/api/?key=${apiKey}&q=${searchKeyword}&lang=ko&page=${page}&per_page=30`,
    )

    if (!response.ok) {
      throw new Error(`Http Error status: ${response.status}`)
    }
    const searchData = await response.json()

    return searchData
  } catch (error) {
    console.error('fetchError :', error)
  }
}
