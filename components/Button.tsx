import React from 'react'

type Props = {
    text : string,
}

function Button({text}: Props) {
  return (
    <button className="py-4 px-6 bg-orange-600 rounded-lg drop-shadow-lg font-bold text-white">{text}</button>
  )
}

export default Button