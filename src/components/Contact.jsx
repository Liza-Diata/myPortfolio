import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1d2733] text-gray-300 pt-32'>
       <div className='pg-8 text-center'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'> Contact</p>
            <p className='py-2'>Submit the form below to get in touch with me</p>
        </div>
        <div>
            <form action='https://getform.io/f/65a37142-ba33-46a5-8e02-03eefa8fa93b' method='POST' className='flex flex-col md:w-1/2 px-10 mx-auto pt-20 w-8/12 gap-y-2'>
                <input type="text" name='name' placeholder='Enter your Name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input type="email" name='email' placeholder='Enter your Email' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <textarea name='message' rows='10' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                </textarea>
                <button className='text-white bg-gray-500  rounded-xl w-32 font-bold p-2 mt-3 mx-auto'>Let's talk</button>
            </form>
        </div>
    </div>
   )
}

export default Contact