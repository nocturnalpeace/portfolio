import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'>
      <div>
        <Image src={assets.mohamed_profile} alt='' className='rounded-full w-32'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo' >
            Hi mijn naam is Mohamed Ziani<Image src={assets.hand_icon} alt='' 
        className='w-6'/></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'> 
        Tweedejaars Commmunicatie Multimedia Design student in Amsterdam</h1>
        <p className='max-w-2xl mx-auto font-Ovo' >
           Ik ben een student uit Amsterdam en ben op zoek naar een stage, help je mij? 
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black  
            text-white flex items-center gap-2'
            >contact mij <Image src={assets.right_arrow_white} alt='' 
            className='w-4'/></a>

            <a href="/mohamed-ziani-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex 
            items-center gap-2' >
                mijn C.V. <Image src={assets.download_icon} alt='' 
            className='w-4'/></a>
        </div>
    </div>
  )
}

export default Header
