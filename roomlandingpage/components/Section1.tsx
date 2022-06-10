import { NextComponentType } from 'next'
import React from 'react'

const Section1 = () => {
  return (
    <div className='flex flex-col w-full custom2:flex-row '>
        <div id="section1-background" className='relative min-h-[22.5rem] bg-mobile-image-hero-1 bg-no-repeat bg-cover bg-center sm:bg-desktop-image-hero-1 sm:min-h-[450px] sm:min-w-[50%] custom2:min-h-[534px]  xl:min-w-[834px]'>
            <nav className='w-[calc(50%+32px)] flex flow-row items-center justify-between py-8 pl-6 custom2:justify-start'>
                <img src='icon-hamburger.svg' className='custom2:hidden'></img>
                <h1 className='font-spartan text-3xl text-White custom2:mr-12'>room</h1>
                <ul className='hidden font-spartan text-md text-White  custom2:flex flex-row space-x-8'>
                    <li><a href='#'>home</a></li>
                    <li><a href='#'>shop</a></li>
                    <li><a href='#'>about</a></li>
                    <li><a href='#'>contact</a></li>
                </ul>
            </nav>
            <div className='absolute flex bottom-0 right-0 custom2:left-full'>
                <img src='icon-angle-left.svg'  className='bg-Black w-12 h-12  p-4 sm:p-10'></img>
                <img src='icon-angle-right.svg' className='bg-Black w-12 h-12 p-4 sm:p-10'></img>
            </div>
        </div>
        <section className='flex flex-col place-content-center space-y-4 p-8 mx-auto max-h-[534px] max-w-lg sm:ml-16'>
            <h1 className='font-spartan font-bold text-4xl sm:text-5xl'>Discover innovative ways to decorate</h1>
            <p className='font-spartan text-sm text-DarkGray sm:text-md'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
            <a href='#' className='relative w-fit font-spartan tracking-[.75rem]'>SHOP NOW <img src='icon-arrow.svg' className='absolute top-[25%] left-[120%]'></img></a>
            
        </section>
    </div>
  )
}

export default Section1