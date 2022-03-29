import { shallow } from "enzyme"
import { describe, expect, test, vi } from "vitest"
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"
vi.mock("../../hooks/useFetchGifs")

describe("Testing GifGrid", () => {
  const category = "Goku"

  test("it should show correctly", () => {
    // @ts-ignore
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    })

    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })

  test("it should show items when images are loaded", () => {
    const gifs = [
      {
        id: "ABC",
        url: "http://localhost/cualquier_cosa.jpg",
        title: "Cualquier cosa",
      },
    ]
    // @ts-ignore
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    })
    const wrapper = shallow(<GifGrid category={category} />)

    // expect(wrapper).toMatchSnapshot()
    expect(wrapper.find("p").exists()).toBe(false)
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length)
  })
})
