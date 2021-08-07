import React from 'react'

const Image = ({ image, show, index }) => {
  return (
    <div className="flex m-2">
      <img
        src={image}
        onClick={show}
        width="100%"
        height="auto"
        crossOrigin="anonymous"
      />
    </div>
  )
}

export default Image
