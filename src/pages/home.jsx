import React from 'react'
import Images from '../components/Images'

export default function Home() {
  return (
    <>
      <h1 className="m-auto mb-3 text-3xl text-center mt-7">
        Welcome To NG Gallery
      </h1>
      <section className="flex justify-center mx-auto text-center">
        <div className="w-10/12">
          <div className="text-center">
            <Images />
          </div>
        </div>
      </section>
    </>
  )
}
