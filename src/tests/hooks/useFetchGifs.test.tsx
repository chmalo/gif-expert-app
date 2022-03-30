import { describe, expect, test } from "vitest"
import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from "@testing-library/react-hooks"

describe("testing in useFetchGifs", () => {
  test("it should return initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Goku"))
    const { data, loading } = result.current
    await waitForNextUpdate()

    expect(data).toEqual([])
    expect(loading).toBe(true)
  }, 30000)

  test("it should return a img array and loading false", async () => {
    const { result, waitForNextUpdate } = await renderHook(() =>
      useFetchGifs("Goku")
    )
    await waitForNextUpdate()

    const { data, loading } = result.current

    expect(data.length).toBe(10)
    expect(loading).toBe(false)
  }, 30000)
})
