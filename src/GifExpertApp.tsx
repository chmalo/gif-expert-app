import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = ({
  defaultCategory = [],
}: {
  defaultCategory?: string[]
}) => {
  // const [categories, setCategories] = useState(["Rick and Morty"])
  const [categories, setCategories] = useState(defaultCategory)

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category: string) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
