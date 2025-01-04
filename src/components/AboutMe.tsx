import React from 'react'
import Link from 'next/link';
import { HiExternalLink } from "react-icons/hi";

export const AboutMe = () => {
  const details = [
    {
      buttonName: 'Work Experience',
      title1: 'Bachelor\'s in Electrical and Electronics Engineering',
      title2: 'Higher Secondary Certificate (HSC)',
      title3: 'Secondary School Certificate (SSC)',
      institue1: 'VSB Engineering College',
      institue2: 'Jayam Vidhya Bhavan Higher Secondary School',
      institue3: 'Jayam Vidhya Bhavan Higher Secondary School',
      duration1: '2018 - 2022',
      duration2: '2016 - 2018',
      duration3: '2015 - 2016',
      cgpa1: '8.5',
      percentage2: '68.75',
      percentage3: '97.8'
    },
    {
      buttonName: 'Educational Qualification',
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
      title: 'Personal Details',
      name: 'Lakshmi Narasimman V',
      email: 'lakshmisudharsan2508@gmail.com',
      phone: '+91 6380398339',
      linkedin: 'https://www.linkedin.com/in/lakshmi-narasimman-v-a38874175/',
      github: 'https://github.com/dev-sudharsan08',
    },
  ]

  return (
    <div style={{ backgroundColor: '#323946' }} className='about-me'>
      <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold text-center text-white'>
        About <span className='text-yellow-500'>Me</span>
      </h2>
      <p className='text-white text-base md:text-lg my-6 md:my-8 about-me-content'>Highly skilled in building responsive web applications using React.js, Next.js, JavaScript, and CSS. Proven ability to collaborate in Agile teams and deliver high-quality user experiences.</p>

      <div className=''>
        <h3 className='text-yellow-500 font-semibold'>Bachelor's in Electrical and Electronics Engineering</h3>
        <div className='text-white md:text-sm mb-3'>
          <p>Institue: VSB Engineering College</p>
          <p>CGPA: 8.5</p>
          <p>Duration: 2018 - 2022</p>
        </div>
        <h3 className='text-yellow-500 font-semibold'>Higher Secondary Certificate (HSC)</h3>
        <div className='text-white md:text-sm mb-3'>
          <p>Institue: Jayam Vidhya Bhavan Higher Secondary School</p>
          <p>Percentage: 68.75</p>
          <p>Duration: 2016 - 2018</p>
        </div>
        <h3 className='text-yellow-500 font-semibold'>Secondary School Certificate (SSC)</h3>
        <div className='text-white md:text-sm mb-3'>
          <p>Institue: Jayam Vidhya Bhavan Higher Secondary School</p>
          <p>Percentage: 97.8</p>
          <p>Duration: 2015 - 2016</p>

        </div>
      </div>
      <div className=''>
        <h3 className='text-yellow-500 font-semibold'>React Js Developer</h3>
        <div className='text-white md:text-sm mb-3'>
          <p>Designation: Programmer Analyst</p>
          <p>Organization: Cognizant Technology Solutions</p>
          <p>Duration: 09/2023 - Present</p>
        </div>
        <h3 className='text-yellow-500 font-semibold'>React Js Developer</h3>
        <div className='text-white md:text-sm mb-3'>
          <p>Designation: Programmer Analyst Trainee</p>
          <p>Organization: Cognizant Technology Solutions</p>
          <p>Duration: 09/2022 - 09/2023</p>
        </div>
        <h3 className='text-yellow-500 font-semibold'>Internship Trainee</h3>
        <div className='text-white md:text-sm mb-3'>
          <p>Designation: Intern</p>
          <p>Organization: Cognizant Technology Solutions</p>
          <p>Duration: 04/2022 - 09/2022</p>
        </div>
      </div>
      <div className=''>
        <div className='text-white md:text-sm mb-3'>
          <p>Name: Lakshmi Narasimman V</p>
          <p>E-mail: <a href="mailto:lakshmi@example.com" className='underline'>lakshmisudharsan2508@gmail.com</a></p>
          <p>Phone: <a href="tel:+916380398339" className='underline'>+91 6380398339</a></p>
          <Link href='https://www.linkedin.com/in/lakshmi-narasimman-v-a38874175/' target='_blank' className='flex items-center gap-0.5 underline'><span>LinkedIn</span><HiExternalLink /></Link>
          <Link href='https://github.com/dev-sudharsan08' target='_blank' className='flex items-center gap-0.5 underline'><span>GitHub</span><HiExternalLink /></Link>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;