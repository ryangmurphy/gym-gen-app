import React from 'react'

export default function SectionWrapper(props) {
    const { children, header, title, id } = props
  return (
    <section id={id} className='min-h-screen flex flex-col gap-10 pb-8'>
        <div className='bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center rounded-2xl mx-8 md:mx-24'>
            <p className='uppercase font-medium'>{header}</p>
            <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>{title[0]} {title[1]} <span className='uppercase text-red-400'>{title[2]}</span></h2>

        </div>
        <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4'></div>
        {children}
    </section>
  )
}
