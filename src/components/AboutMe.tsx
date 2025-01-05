'use client';

import React, { useState } from 'react'
import Link from 'next/link';
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";

export const AboutMe = () => {
  const [activeTab, setActiveTab] = useState(0);

  const details = [
    {
      buttonName: 'Work Experience',
      title1: 'React Js Developer',
      title2: 'React Js Developer',
      title3: 'Internship Trainee',
      designation1: 'Programmer Analyst',
      designation2: 'Programmer Analyst Trainee',
      designation3: 'Intern',
      organization1: 'Cognizant Technology Solutions',
      organization2: 'Cognizant Technology Solutions',
      organization3: 'Cognizant Technology Solutions',
      duration1: '09/2023 - Present',
      duration2: '09/2022 - 09/2023',
      duration3: '04/2022 - 09/2022'
    },
    {
      buttonName: 'Educational Qualification',
      title1: 'Bachelor\'s in Electrical and Electronics Engineering',
      title2: 'Higher Secondary Certificate (HSC)',
      title3: 'Secondary School Certificate (SSC)',
      institue1: 'VSB Engineering College',
      institue2: 'Jayam Vidhya Bhavan Higher Secondary School',
      institue3: 'Jayam Vidhya Bhavan Higher Secondary School',
      duration1: '2018 - 2022',
      duration2: '2016 - 2018',
      duration3: '2015 - 2016',
      percentage1: '8.5',
      percentage2: '68.75',
      percentage3: '97.8'
    },
    // {
    //   buttonName: 'Personal Details',
    //   name: 'Lakshmi Narasimman V',
    //   email: 'lakshmisudharsan2508@gmail.com',
    //   phone: '+91 6380398339',
    //   linkedin: 'https://www.linkedin.com/in/lakshmi-narasimman-v-a38874175/',
    //   github: 'https://github.com/dev-sudharsan08',
    // },
  ]

  function handleKeyDown(e: any, index: number) {
    if (e.key === 'Enter' || e.key === ' ') handleDetails(index)
  }

  function handleDetails(index: number) {
    setActiveTab(index);
  }

  return (
    <div style={{ backgroundColor: '#323946' }} className='about-me'>
      <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold text-center text-white'>
        About <span className='text-yellow-500'>Me</span>
      </h2>
      <div className='lg:grid grid-cols-12 gap-6 mt-6 lg:mt-16'>
        <div className='col-span-7'>
          <p className='text-white text-base md:text-lg about-me-content'>Highly skilled in building responsive web applications using React.js, Next.js, JavaScript, and CSS. Proven ability to collaborate in Agile teams and deliver high-quality user experiences.</p>
          <div className='text-white md:text-lg mt-6 mb-10 lg:mt-8 lg:mb-0 font-semibold'>
            <p className='my-2'><span className='text-yellow-500'>Name:</span> Lakshmi Narasimman V</p>
            <p className='my-2'><span className='text-yellow-500'>E-mail:</span> <a href="mailto:lakshmisudharsan2508@gmail.com" className='underline'>lakshmisudharsan2508@gmail.com</a></p>
            <p className='my-2'><span className='text-yellow-500'>Phone:</span> <a href="tel:+916380398339" className='underline'>+91 6380398339</a></p>
            <div className="flex gap-6 mt-8 justify-center lg:justify-normal">
              <Link
                href="https://www.linkedin.com/in/lakshmi-narasimman-v-a38874175/"
                target="_blank"
                className="inline-flex items-center gap-0.5 underline"
              >
                <div className='icon rounded-md' style={{ color: "rgb(221, 221, 221)", backgroundColor: "rgb(51, 51, 51)" }}>
                  <ImLinkedin className='text-4xl lg:text-5xl rounded-md' />
                </div>
              </Link>
              <Link
                href="https://github.com/dev-sudharsan08"
                target="_blank"
                className="inline-flex items-center gap-0.5 underline"
              >
                <div className='icon rounded-full' style={{ color: "rgb(221, 221, 221)", backgroundColor: "rgb(51, 51, 51)" }}>
                  <ImGithub className='text-4xl lg:text-5xl rounded-full' />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-8 lg:mt-0 col-span-5'>
          <div className='flex about-me-button-wrapper'>
            {details.map((detail, index) => {
              return (
                <button
                  className={`${activeTab === index ? 'border-b-2 border-b-yellow-500 text-yellow-500' : 'text-white  hover:text-white focus:border-b-2 focus:border-b-yellow-300 hover:border-b-2 hover:border-b-yellow-300'} font-bold py-1 focus:outline-none ${index === 0 ? 'me-8' : ''} lg:grow text-xl`}
                  onClick={() => handleDetails(index)}
                  key={detail?.buttonName}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                >
                  {detail?.buttonName}
                </button>
              );
            })}
          </div>
          <div className='mt-4 lg:mt-8'>
            {details[activeTab]?.title1 && <h3 className='text-yellow-500 font-semibold'>{details[activeTab]?.title1}</h3>}
            <div className='text-white md:text-sm mb-3'>
              {(details[activeTab]?.institue1 || details[activeTab]?.designation1) && <p>{`${details[activeTab]?.institue1 ? 'Institue' : 'Designation'}: ${details[activeTab]?.institue1 || details[activeTab]?.designation1}`}</p>}
              {(details[activeTab]?.percentage1 || details[activeTab]?.organization1) && <p>{`${details[activeTab]?.percentage1 ? 'Percentage' : 'Organization'}: ${details[activeTab]?.percentage1 || details[activeTab]?.organization1}`}</p>}
              {details[activeTab]?.duration1 && <p>Duration: {details[activeTab]?.duration1}</p>}
            </div>
            {details[activeTab]?.title2 && <h3 className='text-yellow-500 font-semibold'>{details[activeTab]?.title2}</h3>}
            <div className='text-white md:text-sm mb-3'>
              {(details[activeTab]?.institue2 || details[activeTab]?.designation2) && <p>{`${details[activeTab]?.institue2 ? 'Institue' : 'Designation'}: ${details[activeTab]?.institue2 || details[activeTab]?.designation2}`}</p>}
              {(details[activeTab]?.percentage2 || details[activeTab]?.organization2) && <p>{`${details[activeTab]?.percentage2 ? 'Percentage' : 'Organization'}: ${details[activeTab]?.percentage2 || details[activeTab]?.organization2}`}</p>}
              {details[activeTab]?.duration2 && <p>Duration: {details[activeTab]?.duration2}</p>}
            </div>
            {details[activeTab]?.title3 && <h3 className='text-yellow-500 font-semibold'>{details[activeTab]?.title3}</h3>}
            <div className='text-white md:text-sm mb-3'>
              {(details[activeTab]?.institue3 || details[activeTab]?.designation3) && <p>{`${details[activeTab]?.institue3 ? 'Institue' : 'Designation'}: ${details[activeTab]?.institue3 || details[activeTab]?.designation3}`}</p>}
              {(details[activeTab]?.percentage3 || details[activeTab]?.organization3) && <p>{`${details[activeTab]?.percentage3 ? 'Percentage' : 'Organization'}: ${details[activeTab]?.percentage3 || details[activeTab]?.organization3}`}</p>}
              {details[activeTab]?.duration3 && <p>Duration: {details[activeTab]?.duration3}</p>}
            </div>
          </div>
        </div>
      </div >
    </div >

  );
}

export default AboutMe;