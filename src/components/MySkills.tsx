import React from 'react'
import ProgressBar from './reusable/ProgressBar';

const MySkills = () => {

  const skills = [
    {
      skill: 'HTML5',
      progress: 85,
    },
    {
      skill: 'CSS3, SCSS, Bootstrap, Tailwind CSS',
      progress: 80,
    },
    {
      skill: 'JavaScript TypeScript',
      progress: 75,
    },
    {
      skill: 'React JS',
      progress: 80,
    },
    {
      skill: 'State Management (Redux, Context API)',
      progress: 75,
    },
    {
      skill: 'Rest API\'s',
      progress: 70,
    },
    {
      skill: 'Jest, React Testing Library',
      progress: 70,
    },
    {
      skill: 'GIT',
      progress: 70,
    },
    {
      skill: 'ADA, Web Accessibility',
      progress: 70,
    },
  ];

  return (
    <div style={{ backgroundColor: '#1F242D' }} className='skill'>
      <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold text-center text-white'>My <span className='text-yellow-500'>Skills</span></h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-3 mt-6 lg:mt-16'>
        {skills.map((item) => {
          return (
            <div key={item?.skill} className='mb-3 lg:mb-0' >
              <ProgressBar skill={item?.skill} progress={item?.progress} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MySkills;
