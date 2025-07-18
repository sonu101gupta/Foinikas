import React from 'react'
import './hoverCards.css'

const HoverCards = ({ src, title, subtitle, svg, text, points }) => {
  return (
    <div className='min-w-[70px] h-full flex items-center justify-center overflow-hidden relative hover-card'>
      <img src={src} alt="" className=' object-cover blend-image overlay' />

      <div className='h-[100px] w-[2px] bg-[#fff] absolute z-[3] top-[0] collapse-line'></div>
      {/* <p className='absolute z-[3] text-[20px] text-white [writing-mode:vertical-rl] top-[115px] collapse-title'>{title}</p> */}
      <p className='absolute z-[3] text-[20px] text-white top-[115px] collapse-title text-center'>{title}</p>
      <div className='backdrop absolute z-[2] h-[100%] w-[100%]'></div>
      <div className='absolute z-[3] bottom-[20px] collapse-svg'>{svg}</div>
      <div className='absolute z-[3] expand-content gap-[20px] w-[90%] h-[55%] bottom-[30px] flex justify-center items-start flex-col px-[20px] bg-[rgba(0,0,0,0.5)] backdrop-blur-[15px] rounded-[12px] shadow-lg'>
        <h3 className='secondaryTitle text-white'>{title}</h3>
        <p className='text-[1rem] text-white'> <span className='text-[1.3rem] font-[700]'>{subtitle[0]}</span> {text}</p>
        <ul className='pl-[3rem]' style={{ listStyleType: "disc" }}>
          {points && points.map((element, index) => (
            <li key={index} className='text-white'>{element}</li>
          ))}
        </ul>
        <p className='text-[1.3rem] font-[700] text-white'>{subtitle[1]}</p>
      </div>
    </div>
  )
}

export default HoverCards
