import React, { ReactNode } from 'react'

type children = { children: ReactNode; }

const Main: React.FC<children> = ({ children }) => {
  return (
    <div className='w-full'>
      <div style={{ margin: '0 auto' }}
        className='min-w-80 lg:w-4/5 md:w-4/5 max-w-screen-2xl'
      >
        {children}
      </div>
    </div>
  )
}

export default Main
