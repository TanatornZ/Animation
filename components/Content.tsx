import React from 'react'

type Props = {}

function Content({}: Props) {
  return (
    <div className="bg-white p-24 rounded-lg drop-shadow-md animate__animated animate__zoomInDown ">
        <h1 className="text-3xl text-green-500 font-bold text-center drop-shadow-lg">
            Loading Success !
        </h1>
    </div>
  )
}

export default Content