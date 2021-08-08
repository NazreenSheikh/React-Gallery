import React, { useRef, useState } from 'react'
import { HiDownload, HiOutlineInformationCircle } from 'react-icons/hi'
import { saveAs } from 'file-saver'
import useTFClassify from '../hooks/useTFClassify'

const Image = ({ image, show, index, originalImage }) => {
  const [hovering, setHovering] = useState(false)
  const imageRef = useRef()
  const [predict, predictions, setPredictions, isLoading] = useTFClassify()
  function handleDownload(image) {
    saveAs(image, 'image.jpeg')
  }

  return (
    <div
      onMouseEnter={() => {
        setHovering(true)
      }}
      onMouseLeave={() => {
        setHovering(false)
      }}
      className="relative flex m-2"
    >
      <img
        src={image}
        onClick={show}
        width="100%"
        height="auto"
        crossOrigin="anonymous"
        ref={imageRef}
      />

      {hovering && (
        <div className="container bg-gray-600 absolute w-full bottom-0 h-1/6 opacity-50">
          <HiOutlineInformationCircle
            onClick={() => predict(imageRef.current)}
            className="cursor-pointer absolute  left-2 font-extrabold bottom-2 text-white text-2xl"
          />
          <HiDownload
            onClick={() => handleDownload(originalImage)}
            className="cursor-pointer absolute right-2 bottom-2 font-extrabold text-white text-2xl"
          />
        </div>
      )}
      {(predictions.length > 0 || isLoading) && (
        <span
          onClick={() => {
            setPredictions([])
          }}
          className="absolute bg-gray-800 text-white rounded-lg
                shadow px-2 left-0 bottom-3 "
        >
          {isLoading && <p>Fetching results...</p>}
          {predictions.map((prediction) => {
            return (
              <div className="flex justify-between text-sm">
                <p>{prediction.className}</p>
                <p>{Math.floor(prediction.probability * 100) + '%'}</p>
              </div>
            )
          })}
        </span>
      )}
    </div>
  )
}

export default Image
