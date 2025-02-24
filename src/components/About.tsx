import React from 'react'

const About = () => {

    return (
        <div 
        style={{
            margin: '0 auto',
            // borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1))',
            // backgroundImage: `url(${imageUrl})`,
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            transition: 'all 0.1s linear'
          }}
        className='w-full flex flex-col items-center h-lvh bg-gradient-to-b from-neutral-700 to-transparent gap-5 pt-20 md:px-20 border-t-2 border-solid border-neutral-600'>
            <h1 className="text-3xl font-extrabold text-primary"><u>ABOUT</u></h1>
            <div className='flex flex-col items-center gap-10'>
                <h1 className='font-bold text-3xl'>Let me introduce myself.</h1>
                <p className='text-center text-bodytext text-xs md:text-lg'>
                    I am Full stack developer with, with a great interest in Web developing, Network Security, Frontend, Artificial intelligence and software development. I have curiosity to learn new things related to my field and explore further opportunities. Looking for a great intership to achieve my goals in Computer Science Engineering. I have good management and communication skills.
                </p>
                <div className=' grid grid-cols-2 auto-cols-auto text-left gap-y-3'>
                    {/* <div className='flex gap-2 justify-center align-center'> */}
                        <h4 className='font-extrabold text-sm md:text-xl'>Name:</h4>
                        <h4 className='text-xs md:text-xl text-bodytext'>Dharineesh G G</h4>
                    {/* </div> */}
                    {/* <div className='flex gap-2 justify-between align-center'> */}
                        <h4 className='font-extrabold text-xs md:text-xl'>Date Of Birth:</h4>
                        <h4 className='text-xs md:text-xl text-bodytext'>October 11, 2000</h4>
                    {/* </div> */}
                    {/* <div className='flex gap-2 justify-center align-center'> */}
                        <h4 className='font-extrabold text-xs md:text-xl'>Email:</h4>
                        <h4 className='text-xs md:text-xl text-bodytext'>dharineesh235@gmail.com</h4>
                    {/* </div> */}
                    {/* <div className='flex gap-2 justify-center align-center'> */}
                        <h4 className='font-extrabold text-xs md:text-xl'>phone:</h4>
                        <h4 className='text-xs md:text-xl text-bodytext'>+91 6382092908</h4>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default About