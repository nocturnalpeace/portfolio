import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo' >Introductie</motion.h4>
        <motion.h2
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo' >Over mij</motion.h2>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.aboutmohamed} alt='profiel' className='w-full 
                rounded-3xl'/>
                </motion.div>
                <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 0.8}}
                className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo' >Mijn naam is Mohamed Ziani  en ben op dit moment een 2e jaars student Communicatie Multimedia Design op de Hogeschool van Amsterdam. 
                        Daarnaast ben ik als studentenassessor op mijn opleiding bezig als vertegenwoordiger. 
                        Ik ben altijd een leergierig persoon die graag verder kijkt en het belangrijk vind om mezelf verder te ontwikkelen bij een bedrijf dat zowel visueel en technisch gebied werkzaam is. 
                        Ik ben geïnteresseerd in de UX/UI design, interactiviteit en frontend development. 
                        Ik op zoek naar een stage die mij verder helpt om mijn vaardigheden verder te ontwikkelen en waar ik mezelf kan professionaliseren. 
                        In mijn vrije tijd sport ik graag, hou van fotografie en kijk veel films. Daarnaast luister ik graag muziek en wil ik vinyl leren mixen.</p>
                    <motion.ul
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.8, delay: 1}}
                    className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, iconDark, title, description}, 
                        index)=>(
                            <motion.li
                            whileHover={{scale: 1.05}}
                            className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover
                            hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' 
                            key={index}>
                                <Image src={isDarkMode ? iconDark : icon} alt='title' className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white' >{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{duration: 1.3, delay: 0.5 }}
                    className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Programma's die ik gebruik</motion.h4>

                    <motion.ul
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1 }}
                    transition={{duration: 1.5, delay: 0.6 }}
                    className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool,index)=>(
                            <motion.li
                            whileHover={{ scale: 1.1 }}
                            className='flex items-center justify-center 
                            w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer hover:-translate-y-1 
                            duration-500' key={index} >
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>


            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About
