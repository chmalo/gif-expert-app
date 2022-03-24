import { describe, expect, test } from "vitest"
import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem"

describe("test GifGridItem", () => {
  test("should GifGridItem correctly", () => {
    const wrapper = shallow(<GifGridItem />)

    expect(wrapper).toMatchSnapshot()
  })
})
