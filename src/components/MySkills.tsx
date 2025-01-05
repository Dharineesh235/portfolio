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
      progress: 80,
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
    <div style={{ backgroundColor: '#1F242D' }}>
      <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold text-center text-white'>My <span className='text-yellow-500'>Skills</span></h2>
      <>
        {skills.map((item) => (
          <ProgressBar skill={item?.skill} progress={item?.progress} />
        ))}
      </>
    </div>
  );
}

export default MySkills;
