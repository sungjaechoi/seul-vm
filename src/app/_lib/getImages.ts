export async function getImages(topic?: string) {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_API_KEY}&query=${topic}&count=28`,
  )

  const data = await res.json()

  if (!res.ok) {
    console.log(res.status)
  }

  return data
}
