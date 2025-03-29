import { assets, skillsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Vaardigheden = () => {
  return (
    <div id='vaardigheden' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo' >Waar wil ik mezelf in ontwikkelen?</h4>
        <h2 className='text-center text-5xl font-Ovo' >Mijn vaardigheden</h2>
      
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo' >In deze vakgebieden wil ik mezelf graag verdiepen en meer ervaring opdoen. 
        Met projecten heb ik al kennis gemaakt met deze vakgebieden en leergierig gemaakt om een verbeteringslag te maken.</p>

<div className='grid grid-cols-auto gap-6 my-10'>
    {skillsData.map(({icon, title, description, link}, index)=>(
        <div 
        key={index} 
        className='border border-gray-400 rounded-lg px-8 py-12 
          hover:shadow-black cursor-pointer hover:bg-lightHover 
          hover:-translate-y-1 duration-500'>
            <Image src={icon} alt='titel' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5' >
                {description}
            </p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                Lees meer <Image src={assets.right_arrow} alt='pijltje' className='w-4'/>
            </a>
        </div>
        ))}
</div>

    </div>
  )
}

export default Vaardigheden
