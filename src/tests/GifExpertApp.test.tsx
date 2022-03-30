import { shallow } from "enzyme"
import { describe, expect, test } from "vitest"
import GifExpertApp from "../GifExpertApp"

describe("testing GifExpertApp", () => {
  test("it should show correctly", () => {
    const wrapper = shallow(<GifExpertApp />)

    expect(wrapper).toMatchSnapshot()
  })

  test("it should show a categories list", () => {
    const categories = ["One Punch", "Dragon Ball"]
    const wrapper = shallow(<GifExpertApp defaultCategory={categories} />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find("GifGrid").length).toBe(categories.length)
  })
})
