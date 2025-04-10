"use client"

import EclipseSpinner from '@/app/loaders/EclipseSpinner';
import React, { useRef, useState } from 'react'

const Contact = ({ contactRef }: { contactRef: React.RefObject<HTMLDivElement | null> }) => {

  const [loader, setLoader] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (): Promise<void> => {
    setLoader(true);
    const name: string | null = nameRef?.current?.value ?? null;
    const email: string | null = emailRef?.current?.value ?? null;
    const subject: string | null = subjectRef?.current?.value ?? null;
    const message: string | null = messageRef?.current?.value ?? null;

    const print = console.log;
    print(name, email, subject);

    if (name && email && subject && message) {
      try {
        const res = await fetch('/api/mail',
          {
            method: "POST",
            body: JSON.stringify({
              name, email, subject, message
            })

          });
        const data = await res.json();
        console.log(data);
        window.alert('Mail sent successfully');
      } catch (err) {
        console.log(err);
        window.alert("Failed sending mail!")
      } finally {
        setLoader(false);
      }
    } else {
      window.alert("All Fields are required !")
    }
  }

  return (
    <div
      ref={contactRef}
      style={{
        margin: '0 auto',
        // borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1))',
        // backgroundImage: `url(${imageUrl})`,
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        transition: 'all 0.1s linear',
        // paddingBottom:"30px"
      }}
      className='w-full flex flex-col items-center h-lvh bg-gradient-to-b from-neutral-700 to-transparent gap-5 pt-20 md:px-20 border-t-2 border-solid border-neutral-600 relative'>
      {loader && <div className='flex align-center justify-center absolute ' style={{ width: "100%", height: "110%", background: "rgba(85, 84, 84, 0.7)", top: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <EclipseSpinner />
      </div>}
      <h1 className="text-3xl font-extrabold text-primary"><u>CONTACT</u></h1>
      <div className='flex flex-col items-center gap-10'>
        <h1 className='font-bold text-3xl'>{`I'd`} Love to hear from you.</h1>
        <p className='text-center text-bodytext text-xs md:text-lg'>
          Send a mail
        </p>
        <div className='flex flex-col w-full gap-10'>
          <div className='flex justify-center items-center'>
            <input ref={nameRef} type='text' className='input w-full bg-transparent p-3' placeholder='Your good name' />
          </div>
          <div className=' flex justify-center items-center'>
            <input ref={emailRef} type='text' className='input w-full bg-transparent p-3' placeholder='Your email id' />
          </div>
          <div className=' flex justify-center items-center'>
            <input ref={subjectRef} type='text' className=' input w-full bg-transparent p-3' placeholder='Subject' />
          </div>
          <div className='flex justify-center items-center'>
            <textarea ref={messageRef} className=' input w-full bg-transparent p-3 h-90' placeholder="What's in your mind?" />
          </div>
          <div className='flex justify-center items-center'>
            {/* <textarea className=' input w-full bg-transparent p-3 h-70' placeholder='Message'/> */}
            <button onClick={handleSubmit} className='bg-primary w-full p-3'>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
