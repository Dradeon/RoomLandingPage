import React from 'react'



const Section1 = () => {
  const hamburgerClick = () => {
    const icon = document.getElementById("hamburger");
    const nav = document.getElementById('nav');
    const logo = document.getElementById('weblogo');
    const links = document.getElementById('links');
    
    if(icon?.getAttribute('src') == 'icon-hamburger.svg'){
        icon.setAttribute('src','icon-close.svg');

        nav?.setAttribute('style','background-color:white;width:100%;')
        logo?.setAttribute('style','display:none');
        links?.setAttribute('style','display:flex;color:black;margin-right:1rem;')

    }
    else{
        icon?.setAttribute('src','icon-hamburger.svg');
        nav?.setAttribute('style','background-color:none;')
        logo?.setAttribute('style','display:block');
        links?.setAttribute('style','display:none;color:white;')
    }
};   
  return (
    <div className='flex flex-col w-full sm:flex-row '>
        <div id="section1-background" className='relative min-h-[22.5rem] w-full max-w-[840px]'>
            <nav id = 'nav' className='absolute w-[calc(50%+32px)] flex flow-row items-center justify-between py-8 pl-6 custom2:justify-start'>
                <img id="hamburger" onClick={hamburgerClick} src='icon-hamburger.svg' className='hover:cursor-pointer sm:hidden'></img>
                <h1 id = 'weblogo' className='font-spartan text-3xl text-White md:mr-12'>room</h1>
                <ul id = 'links' className='hidden font-spartan text-md text-White md:flex flex-row space-x-8'>
                    <li><a href='#'>home</a></li>
                    <li><a href='#'>shop</a></li>
                    <li><a href='#'>about</a></li>
                    <li><a href='#'>contact</a></li>
                </ul>
            </nav>
            <div className='absolute flex bottom-0 left-[calc(100%-92px)] custom2:left-full'>
                <img src='icon-angle-left.svg'  className='bg-Black  p-4 '></img>
                <img src='icon-angle-right.svg' className='bg-Black  p-4 '></img>
            </div>
            <img src='mobile-image-hero-1.jpg' className='-z-10 w-full h-[inherit] max-h-[534px] sm:hidden'></img>
            <img src='desktop-image-hero-1.jpg' className='hidden sm:block -z-10'></img>
        </div>
        <section className='flex flex-col place-content-center space-y-4 p-8 mx-auto max-h-[534px] max-w-lg sm:ml-16 sm:w-1/2'>
            <h1 className='font-spartan font-bold text-4xl sm:text-5xl'>Discover innovative ways to decorate</h1>
            <p className='font-spartan text-sm text-DarkGray sm:text-md'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
            <a href='#' className='relative w-fit font-spartan tracking-[.75rem]'>SHOP NOW <img src='icon-arrow.svg' className='absolute top-[25%] left-[120%]'></img></a>
            
        </section>
    </div>
  )
}

export default Section1