import React from 'react'

const Section2 = () => {
  return (
    <div className='flex flex-col sm:flex-row max-h-[266px]'>
      <img src='image-about-dark.jpg' className='h-max-[266px]'></img>
      <div className='flex flex-col justify-center space-y-4 p-8 mx-auto'>
        <h2 className='font-spartan font-bold tracking-[.3rem]'>ABOUT OUR FURNITURE</h2>
        <p className='font-spartan text-DarkGray'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>
      <img src='image-about-light.jpg' className='h-max-[266px]'></img>
    </div>
  )
}

export default Section2