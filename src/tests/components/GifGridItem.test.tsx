import { describe, expect, test } from "vitest"
import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem"

describe("test GifGridItem", () => {
  const title = "test title"
  const url = "http://localhost/algo.jpg"

  test("should GifGridItem correctly", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    expect(wrapper).toMatchSnapshot()
  })
})
