import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import {FaGithub} from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <div className='relative max-w-[1440px] mx-auto'>
      <Section1></Section1>
      <Section2></Section2>
      <footer className='flex justify-center relative sm:fixed sm:bottom-0 sm:left-[calc(50%-15px)] mx-auto text-center text-xl font-spartan font-bold p-4'>
        <a href='https://github.com/Dradeon/RoomLandingPage' target={'_blank'} rel='noopener' ><FaGithub size={'30px'}/></a>
      </footer>
    </div>
  )
}

export default Home
