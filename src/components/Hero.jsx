"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { useRef } from 'react'

function Herosection() {

  const ImageRef = useRef(null)

  useEffect(()=> {
    const imageElement = ImageRef.current
    
    const scrollThreshold = 100
    const handleScroll = () => {

      const scrollPos = window.scrollY
    if(scrollPos > scrollThreshold) {
      imageElement.classList.add("scrolled")
    }else{
      imageElement.classList.remove("scrolled")
    }
  }
  window.addEventListener('scroll', handleScroll)
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
  }, [])

  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
      <div className='space-y-6 text-center'>
        <div className='space-y-6 mx-auto'> {/* Fixed "mmx-auto" to "mx-auto" */}
          <h1 className='gradient-title text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl'>
            Your AI Career Coach for <br /> Professional Success
          </h1>
          <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        <div className='flex justify-center space-x-4'>
          <Link href={'/dashboard'}>
            <Button size="lg" className="px-8"> Get Started </Button>
          </Link>
          <Link href={'/dashboard'}>
            <Button size="lg" className="px-8" variant="outline"> Get Started </Button>
          </Link>
        </div>

        {/* Banner Image */}
        <div className='hero-image-wrapper mt-3 md:mt-0'>
          <div ref={ImageRef} className="flex justify-center items-center w-full hero-image">
            <Image 
              src={'/banner1.jpg'}
              width={1280}
              height={720}
              alt="Dashboard preview"
              className='rounded-lg shadow-2xl border mx-auto object-cover max-w-full'
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection
