import { shallow } from "enzyme"
import { beforeEach, describe, expect, test, vi } from "vitest"
import AddCategory from "../../components/AddCategory"

describe("Testing AddCategory", () => {
  const setCategories = vi.fn(() => {})
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  beforeEach(() => {
    vi.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test("it should show correctly ", () => {
    expect(wrapper).toMatchSnapshot()
  })

  test("it should change the text box", () => {
    const input = wrapper.find("input")
    const value = "hola christian"
    input.simulate("change", { target: { value } })

    expect(wrapper.find("p").text().trim()).toBe(value)
  })

  test("it should not the information with submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} })

    expect(setCategories).not.toHaveBeenCalled()
  })

  test("it should call setcategories and clear the text box", () => {
    const input = wrapper.find("input")
    const value = "hola christian"
    input.simulate("change", { target: { value } })

    const form = wrapper.find("form")
    form.simulate("submit", { preventDefault: () => {} })

    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledTimes(1)
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

    expect(input.prop("value")).toBe("")
  })
})
