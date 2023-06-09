import React from 'react'
import mp2 from '../image/mp2.png'
import litrato from '../image/litrato.png'
import heromp1 from '../image/heromp1.png'
import fullStack from '../image/fullStack.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: heromp1,
            href: 'https://liza-diata.github.io/GreenPillarDC.github.io/',
            code: 'https://green-pillar-dc-github-io.vercel.app/'
        },
        {
            id: 2,
            src: mp2,
            href:'https://mp-2-github-io.vercel.app/',
            code:'https://github.com/Liza-Diata/mp-2.github.io.git'
        },
        {
            id: 3,
            src: litrato,
            href: 'https://litrato-9a0a8.web.app/',
            code: 'https://github.com/Liza-Diata/Litrato'
        },
        {
            id: 4,
            src: fullStack,
            href: 'https://fullstack-vue-project.onrender.com',
            code: 'https://github.com/Liza-Diata/FullStack-Vue'
        }
    ]

  return (
    <div name='portfolio' className="w-full text-white bg-[#1d2733] md:h-screen min-h-screen pt-20">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full px-20 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 mx-auto'>Portfolio</p>
                <p className='py-2 mx-auto'>Check out some of my work right here</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 pt-20'>
                {
                portfolios.map(({id, src, href, code}) => ( 
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt='...' className='h-40 w-full' />
                        <div className='flex items-center justify-between px-5'>
                            <a href={href}>
                            <button className='hover:scale-105 pt-3'>Demo</button></a>
                            <a href={code}>
                            <button className='hover:scale-105 pt-3'>Code</button></a>
                        </div>
                    </div>
                ))
                }
            </div>   
        </div>
    </div>
  )
}

export default Portfolio
