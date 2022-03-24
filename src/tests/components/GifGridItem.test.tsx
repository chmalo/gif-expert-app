import { describe, expect, test } from "vitest"
import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem"

describe("test GifGridItem", () => {
  const title = "test title"
  const url = "http://localhost/algo.jpg"
  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  test("should GifGridItem correctly", () => {
    expect(wrapper).toMatchSnapshot()
  })

  test("should has paragraph with title", () => {
    const paragraph = wrapper.find("p")

    expect(paragraph.text().trim()).toBe(title)
  })

  test("should has image equal url and alt of props", () => {
    const img = wrapper.find("img")
    const { src, alt } = img.props()

    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test("should has animate__fadeIn", () => {
    const div = wrapper.find("div")
    const className = div.prop("className")
    // @ts-ignore
    expect(className.includes("animate__fadeIn")).toBe(true)
  })
})
