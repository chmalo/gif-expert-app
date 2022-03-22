export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=rMr9AzqzYbnJiBtEuJOKTN77v6vJN97S`
  const resp = await fetch(url)
  const { data } = await resp.json()
  const gifs = data.map((img: any) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  })

  return gifs
}
