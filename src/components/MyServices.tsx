import React from 'react'

const MyServices = () => {

  const services = [
    {
      title: "Website Development",
    },
    {
      title: "UI/UX Design",
    },
    {
      title: "JavaScript Frameworks and Libraries",
    },
    {
      title: "Performance Optimizations",
    },
    {
      title: "API Integration",
    },
    {
      title: "Version Control",
    },
  ];

  return (
    <div style={{ backgroundColor: '#323946' }} className='service'>
      <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold text-center text-white'>
        My <span className='text-yellow-500'>Services</span>
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {services.map((item) => {
          return (
            <div className="max-w-sm rounded-sm overflow-hidden" style={{ backgroundColor: '#1F242DCC' }} key={item?.title}>
              <h3 className="text-lg font-bold text-white">{item?.title}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default MyServices;