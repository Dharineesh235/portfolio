import React from 'react'

const Profile = () => {
  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/portfolio-bg-img.png')`, objectFit: 'contain', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
      <div className='sm:flex justify-between items-center profile text-white'>
        <div className='col-span-8'>
          <p className='text-yellow-500 text-xl font-semibold'>Hello!</p>
          <h1 className='profile-name text-2xl md:text-4xl lg:text-6xl font-bold my-3 md:my-4'>I'm <span className='text-yellow-500'>Lakshmi Narasimman V</span></h1>
          <h2 className='profile-tech text-xl md:text-3xl lg:text-5xl font-semibold my-3 md:my-4'>A Frontend Developer</h2>
        </div>
        <div className='sm:text-right sm:ps-3 col-span-4'>
          <button className="bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 active:bg-yellow-700 px-5 py-2 rounded-full font-semibold text-white mt-4 sm:mt-0 sm:mb-3">
            Download CV
          </button>
          <button className="border-2 border-yellow-500 font-semibold text-white px-8 py-2 rounded-full hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 ms-3">
            My Works
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
