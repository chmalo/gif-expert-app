const GifGridItem = ({ title, url }: { title: string; url: string }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  )
}

export default GifGridItem
