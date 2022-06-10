import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'

const Home: NextPage = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Section1></Section1>
      <Section2></Section2>
    </div>
  )
}

export default Home
