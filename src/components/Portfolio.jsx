import React from 'react'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: 'https://tse3.mm.bing.net/th?id=OIP.VMBOkvCLQViRxZzyzd5COAHaEK&pid=Api&P=0'
        },
        {
            id: 2,
            src: 'https://tse1.mm.bing.net/th?id=OIP.0SvdLkqEk44xY6sz3Yn-nQHaHN&pid=Api&P=0'
        },
        {
            id: 3,
            src: 'https://tse1.mm.bing.net/th?id=OIP.LskQ7SN-4_O66dXJFJr-yQHaDz&pid=Api&P=0'
        }
    ]

  return (
    <div name='portfolio' className="w-full text-white bg-[#1d2733] md:h-screen min-h-screen pt-20">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full px-20 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 mx-auto'>Portfolio</p>
                <p className='py-2 mx-auto'>Check out some of my work right here</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 pt-20'>
                {
                portfolios.map(({id, src}) => ( 
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} className='h-40 w-full' />
                        <div className='flex items-center justify-between px-5'>
                            <button className='hover:scale-105 pt-3'>Demo</button>
                            <button className='hover:scale-105 pt-3'>Code</button>
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