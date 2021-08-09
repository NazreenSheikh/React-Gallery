import { useEffect, useState } from 'react'
import Axios from 'axios'

const api = import.meta.env.VITE_API_URL
const api_key = import.meta.env.VITE_API_KEY
const headers = { Authorization: api_key }

export default function useFetchImage(page, searchTerm) {
  const [images, setImages] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function fetch() {
    const url = searchTerm === null ? 'curated' : `search?query=${searchTerm}`
    Axios.get(`${api}${url}?per_page=25&page=${page}`, {
      headers: headers,
    })
      .then((response) => {
        searchTerm === null
          ? fetchRandom(response.data)
          : fetchSearch(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
      })
  }
  function fetchRandom(data) {
    setImages([...images, ...data.photos])
  }
  function fetchSearch(data) {
    if (page > 1) {
      setImages([...images, ...data.photos])
    } else {
      setImages([...data.photos])
    }
  }
  useEffect(() => {
    setIsLoading(true)
    fetch(page, searchTerm)
    return () => {
      setIsLoading(false)
    }
  }, [page, searchTerm])
  return [images, setImages, error, isLoading]
}
