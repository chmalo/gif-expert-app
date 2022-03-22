import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react"

const AddCategory = ({
  setCategories,
}: {
  setCategories: Dispatch<SetStateAction<string[]>>
}) => {
  const [inputValue, setInputValeu] = useState("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValeu(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats])
      setInputValeu("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  )
}

export default AddCategory
