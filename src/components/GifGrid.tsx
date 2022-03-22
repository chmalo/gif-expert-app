import { useEffect, useState } from "react"
import GifGridItem from "./GifGridItem"

const GifGrid = ({ category }: { category: string }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs()
  }, [])

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=rMr9AzqzYbnJiBtEuJOKTN77v6vJN97S`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map((img: any) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }
    })

    setImages(gifs)
  }

  return (
    <>
      <h3> {category} </h3>
      <div className="card-grid">
        {images.map((img: { id: string; title: string; url: string }) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  )
}

export default GifGrid
