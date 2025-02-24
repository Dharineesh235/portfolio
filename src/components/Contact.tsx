import React from 'react'

const Contact = () => {
  return (
    // <div>
    //         <h1 className="text-3xl font-extrabold text-primary text-center"><u>ABOUT</u></h1>
    //         <div className='flex flex-col items-center gap-10'>
    //             <h1 className='font-bold text-3xl'>I'd like to hear from you.</h1>
    //             <p className='text-center text-bodytext text-xs md:text-lg'>
    //                 I am studying in computer science engineering, with a great interest in Web developing, Network Security, Frontend, Artificial intelligence and software development. I have curiosity to learn new things related to my field and explore further opportunities. Looking for a great intership to achieve my goals in Computer Science Engineering. I have good management and communication skills.
    //             </p>
                
    //         </div>
    // </div>
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
            <h1 className="text-3xl font-extrabold text-primary"><u>CONTACT</u></h1>
            <div className='flex flex-col items-center gap-10'>
                <h1 className='font-bold text-3xl'>{`I'd`} Love to hear from you.</h1>
                <p className='text-center text-bodytext text-xs md:text-lg'>
                    Send a mail
                </p>
                <div className='flex flex-col w-full gap-10'>
                    <div className='flex justify-center items-center'>
                      <input type='text' className='input w-full bg-transparent p-3' placeholder='Name'/>
                    </div>
                    <div className=' flex justify-center items-center'>
                      <input type='text' className='input w-full bg-transparent p-3' placeholder='E-mail'/>
                    </div>
                    <div className=' flex justify-center items-center'>
                      <input type='text' className=' input w-full bg-transparent p-3' placeholder='Subject'/>
                    </div>
                    <div className='flex justify-center items-center'>
                      <textarea className=' input w-full bg-transparent p-3 h-70' placeholder='Message'/>
                    </div>
                    <div className='flex justify-center items-center'>
                      {/* <textarea className=' input w-full bg-transparent p-3 h-70' placeholder='Message'/> */}
                      <button className='bg-primary w-full p-3'>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact
