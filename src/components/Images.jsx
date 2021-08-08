import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import useFetchImage from '../hooks/useFetchImage'
import Loading from './Loading'
import Image from './Image'

const Images = () => {
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState(null)
  const [showPreview, setShowPreview] = useState(null)
  const [images, setImages, error, isLoading, fetch] = useFetchImage(
    page,
    searchTerm,
  )

  function handleInput(e) {
    setSearchTerm(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch(page, searchTerm)
  }
  return (
    <div>
      <div className="my-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleInput}
            value={searchTerm}
            className="w-full p-2 border rounded shadow"
            placeholder="Search Photos"
          />
        </form>
      </div>

      {error && (
        <div className="flex h-screen">
          <p className="m-auto">{error}</p>
        </div>
      )}
      <InfiniteScroll
        dataLength={images.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        className="flex flex-wrap justify-center text-center"
      >
        {images.map((img, index) => (
          <Image
            image={img.src.tiny}
            originalImage={img.src.original}
            key={index}
            index={index}
            show={() => setShowPreview(index)}
          />
        ))}
      </InfiniteScroll>

      {showPreview && (
        <div
          className="absolute top-20 left-1/3 z-40 flex justify-center w-90 h-40 items-center"
          onClick={() => setShowPreview(false)}
        >
          <div className="my-auto bg-white">
            <img
              src={images[showPreview].src.original}
              width="600"
              height="200"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
      {isLoading && <Loading />}
    </div>
  )
}

export default Images
