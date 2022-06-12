import React, { SyntheticEvent, useState } from 'react'



const Section1 = () => {
  const [index,setIndex] = useState(1);

  const switchIndex = (e: SyntheticEvent) => {

    const buttonPressed = e.currentTarget.getAttribute('id')

    const mobile = document.getElementById('mobilebg');
    const desktop = document.getElementById('desktopbg');

    if(index && mobile && desktop && buttonPressed){
        if(index >= 3 && buttonPressed == 'right'){
            setIndex(1);
        }
        else if(index <= 1 && buttonPressed == 'left'){
            setIndex(3);
        }
        else{
            if(buttonPressed == 'left'){
                setIndex(index-1);
            }
            else{
                setIndex(index+1);
            }
        }
        mobile.setAttribute('src',`mobile-image-hero-${String(index)}.jpg`);
        desktop.setAttribute('src',`desktop-image-hero-${String(index)}.jpg`);
        
    }
  };

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
  
  const changeSVGToGray = (e:SyntheticEvent) => {
    const arrow = document.getElementById('arrow');
    if(arrow && e){
        arrow.setAttribute('style','fill:hsl(0,0%,63%);');
    }
  }

  const changeSVGToBlack = (e:SyntheticEvent) => {
    const arrow = document.getElementById('arrow');
    if(arrow && e){
        arrow.setAttribute('style','fill:#000;');
    }
  }


  return (
    <div className='flex flex-col w-full sm:flex-row '>
        <div id="section1-background" className='relative min-h-[22.5rem] w-full max-w-[840px]'>
            <nav id = 'nav' className='absolute w-[calc(50%+32px)] flex flow-row items-center justify-between py-8 pl-6 md:justify-start'>
                <img id="hamburger" onClick={hamburgerClick} src='icon-hamburger.svg' className='hover:cursor-pointer sm:hidden' alt="Mobile Menu"></img>
                <h1 id = 'weblogo' className='font-spartan text-3xl text-White md:mr-16'>room</h1>
                <ul id = 'links' className='hidden font-spartan text-md text-White md:flex flex-row flex-nowrap space-x-8 '>
                    <li className='relative'>
                        <a href='#' className='pb-2 peer'>home</a>
                        <div className='absolute top-1/4 left-1/4 w-1/2 h-full mx-auto peer-hover:border-b-2'></div>
                    </li>
                    <li className='relative'>
                        <a href='#' className='pb-2 peer'>shop</a>
                        <div className='absolute top-1/4 left-1/4 w-1/2 h-full mx-auto peer-hover:border-b-2'></div>
                    </li>
                    <li className='relative'>
                        <a href='#' className='pb-2 peer'>about</a>
                        <div className='absolute top-1/4 left-1/4 w-1/2 h-full mx-auto peer-hover:border-b-2'></div>
                    </li>
                    <li className='relative'>
                        <a href='#' className='pb-2 peer'>contact</a>
                        <div className='absolute top-1/4 left-1/4 w-1/2 h-full mx-auto peer-hover:border-b-2'></div>
                    </li>
                </ul>
            </nav>
            <div className='absolute flex bottom-0 left-[calc(100%-92px)] custom2:left-full'>
                <img id='left' src='icon-angle-left.svg' onClick={switchIndex}  className='bg-Black  p-4 hover:cursor-pointer sm:p-8 hover:bg-VeryDarkGray' alt="Left Arrow"></img>
                <img id='right' src='icon-angle-right.svg' onClick={switchIndex} className='bg-Black  p-4 hover:cursor-pointer sm:p-8 hover:bg-VeryDarkGray' alt = "Right Arrow"></img>
            </div>
            <img id = 'mobilebg' src='mobile-image-hero-1.jpg' className='-z-10 w-full h-[inherit] max-h-[534px] sm:hidden' alt='Mobile Background'></img>
            <img id = 'desktopbg' src='desktop-image-hero-1.jpg' className='hidden sm:block -z-10' alt="Desktop Background"></img>
        </div>
        <section className='flex flex-col place-content-center space-y-4 p-8 mx-auto max-h-[534px] max-w-lg sm:ml-16 sm:w-1/2'>
            <h1 className='font-spartan font-semibold text-4xl sm:text-5xl'>Discover innovative ways to decorate</h1>
            <p className='font-spartan text-sm text-DarkGray sm:text-md'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
            <a href='#' className='inline-block space-x-4 hover:text-DarkGray' onMouseOver={changeSVGToGray} onMouseLeave={changeSVGToBlack}>
                <span className='peer text-sm font-spartan tracking-[.75rem]'>SHOP NOW</span>
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path id = 'arrow' d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fillRule="nonzero"/></svg>
            </a>
            

            
        </section>
    </div>
  )
}

export default Section1