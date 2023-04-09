import {useState, useEffect, useCallback} from "react"
import axios from "axios";

/**
 * Used for request that is sent at the page load time
 *
 * @param url the url of the resource, should include base url
 * @param headers an object contains all the header, for example, { Authorization: "Bearer abcde" }
 * @returns {{
 *   isLoading: boolean,
 *   isError: boolean,
 *   data: any,
 *   error: {status: number, message: string},
 *   reFetch: ((function(): Promise<void>))
 * }}
 */
export const useFetch = (url, headers) => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const fetch = useCallback(async() => {
    setData(null)
    setError(null)
    try {
      const res = await axios.get(url, { headers })
      setData(res.data)
    } catch(e) {
      console.error(e)
      setError({
        status: e.response.status,
        message: e.response.data,
      })
    }
  }, [url, headers])

  useEffect(() => {
    ;(async() => await fetch())()
  }, [fetch])

  return {
    data,
    error,
    isError: error !== null,
    isLoading: data === null && error === null,
    reFetch: fetch
  }

}