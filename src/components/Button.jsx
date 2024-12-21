import React from 'react'

export default function Button(props) {
    const { text, func } = props
  return (
    <button onClick={func} className='mx-auto px-8 py-4 mb-24 rounded-md border-[2px] bg-slate-950 border-red-400 border-solid redShadow duration-200'>
    <p>{text}</p>
    </button>
  )
}
