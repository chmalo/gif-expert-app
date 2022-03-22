import GifGridItem from "./GifGridItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({ category }: { category: string }) => {
  const { data: images, loading } = useFetchGifs(category)

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {category} </h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid animate__animated animate__fadeIn">
        {images.map((img: { id: string; title: string; url: string }) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  )
}

export default GifGrid
