import React from 'react'

const Section2 = () => {
  return (
    <div className='flex flex-col sm:flex-row mb-0 sm:mb-96'>
      <img src='image-about-dark.jpg' className='w-auto max-h-[266px]' alt="Dark chairs with Table"></img>
      <section className='flex flex-col justify-center space-y-4 p-8 mx-auto max-h-[266px]'>
        <h2 className='font-spartan font-bold tracking-[.3rem]'>ABOUT OUR FURNITURE</h2>
        <p className='font-spartan text-DarkGray'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
      </section>
      <img src='image-about-light.jpg' className='w-auto max-h-[266px]' alt="White Chair"></img>
    </div>
  )
}

export default Section2