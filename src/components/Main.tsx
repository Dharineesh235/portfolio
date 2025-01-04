import React, { ReactNode } from 'react'

type children = { children: ReactNode; }

const Main: React.FC<children> = ({ children }) => {
  return (
    <main className='main'>
      {children}
    </main>
  );
}

export default Main;
