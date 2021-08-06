import React from 'react'
import { VscLoading } from 'react-icons/vsc'

export default function Loading() {
  return (
    <div className="flex h-screen ">
      <p className="m-auto">
        <VscLoading className="text-5xl text-blue-700 icon-spin" />
      </p>
    </div>
  )
}
