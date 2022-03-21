const GifGridItem = ({ title, url }: { title: string; url: string }) => {
  return (
    <div>
      <img src={url} alt={title} />
    </div>
  )
}

export default GifGridItem
