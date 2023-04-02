import React from 'react'


const SocialLinks = () => {

    const social_media =[
        {
            id: 1,
            title: 'LinkedIn',
            logo: 'logo-linkedin',
            href: 'https://www.linkedin.com/in/ediliza-diata-27257a270/'

        },
        {
            id: 2,
            title: 'GitHub',
            logo: 'logo-github',
            href: 'https://www.linkedin.com/in/ediliza-diata-27257a270/'
        },
        {
            id: 3,
            title:'Mail',
            logo: 'mail-outline',
            href: 'mailto:elise.diata15@gmail.com'
        },
        {
            id: 4,
            title: 'Resume',
            logo: 'document-outline',
            href: 'https://www.linkedin.com/in/ediliza-diata-27257a270/',
            download: true
        }        
         
      ] 
  return (
    <section className='flex flex-col top-[35%] left-0 fixed'>
        <ul>
        {social_media?.map(({id, title, logo, href}) => (
                <li key={id} 
                className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md  duration-300 bg-[#1d2733]'>
                <a href={href} className='flex justify-between items-center w-full text-gray-500 hover:text-gray-300'>
                {title}<ion-icon name={logo} size="large"></ion-icon>               
                </a>
                </li>
             ))}
        </ul>

    </section>
  )
}

export default SocialLinks