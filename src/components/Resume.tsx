"use client"

import React from 'react'

type resumeProps={
    resumeRef:React.RefObject<HTMLDivElement | null>
}

const Resume:React.FC<resumeProps> = ({resumeRef}) => {
    const handleDownload = () => {
        const filePath = "/resume/dharineesh_resume.pdf"; // Path relative to the `public` folder
        const link = document.createElement("a");
        link.href = filePath;
        link.download = "dharineesh_resume.pdf"; // Suggested file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div ref={resumeRef} className='bg-gradient-to-b from-neutral-700 to-transparent gap-5 py-20 px-5 md:px-20 border-t-2 border-solid border-neutral-600 flex flex-col gap-9'>
            <h1 className="text-3xl font-extrabold text-primary text-center"><u>RESUME</u></h1>
            <h1 className='font-bold text-3xl text-white text-center'>Have a look at my experience</h1>
            <p className='text-center text-bodytext text-xs md:text-lg'>
                With a passion for continuous learning and growth, I strive to bring value through dedication, adaptability, and a strong work ethic. I aim to contribute meaningfully in every opportunity while evolving both personally and professionally.
            </p>
            <div className='grid md:grid-cols-2 gap-9'>
                {/* HASHh Automations */}
                <div className='flex flex-col gap-3 bg-dark_transparent rounded p-10 h-fit'>
                    <h1 className='text-primary text-2xl font-extrabold'>October 2023 - Present</h1>
                    <h2 className='text-texthead text-2xl'>Full Stack Developer</h2>
                    <h3 className='text-bodytext text-lg font-mono pt-2'>HASHh Iot Labs Private Limited</h3>
                    <p className='text-bodytext pt-4'>
                        As a Backend Developer with significant experience in full-stack development, my skills include making scalable web applications using modern frameworks and tools. My strengths include developing RESTful APIs and implementing payment gateways. Tools such as Agenda.js and BullMQ are experienced for optimizing back-end processes. My background lies in database management, with work experience in both SQL (PostgreSQL) and NoSQL databases (MongoDB, Redis).
                        <br /><br />
                        This further includes hands-on experience in making dynamic, reusable front-end components using React.js and Next.js, along with the help of TypeScript to ensure robust, type-safe development. My job consists of containerized deployments using Docker, automation via CI/CD pipelines, and system monitoring via tools like Grafana and Prometheus.
                        <br /><br />
                        With an all-rounded backend development, integration with the frontend, and an optimization of systems, I give solutions that achieve a balance of performance, scalability, and user experience.

                    </p>
                </div>
                {/* Edureka minternship */}
                <div className='flex flex-col gap-3 bg-dark_transparent rounded p-10 h-fit'>
                    <h1 className='text-primary text-2xl font-extrabold'>October 2022 - March 2023</h1>
                    <h2 className='text-texthead text-2xl'>Full Stack Web Developement Internship</h2>
                    <h3 className='text-bodytext text-lg font-mono pt-2'>Edureka</h3>
                    <p className='text-bodytext pt-4'>
                        During this internship, I developed a number of projects based on the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. Here, I made contributions to front-end and back-end development in creating dynamic user interfaces with React.js and robust server-side functionality using Node.js and Express.js.

                        I developed responsive and feature-rich web applications, utilizing React hooks and reusable components to simplify development. These projects ranged from single-page applications to more complex systems, emphasizing performance and scalability.
                        <br/><br/>
                        This internship gave the experience of end-to-end management of development processes, API integration, and user-centric solutions.
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center pt-9'>
                <div 
                    className='py-3 px-5 bg-primary rounded-full'
                    onClick={handleDownload}
                >
                    Download CV
                </div>
            </div>

        </div>
    )
}

export default Resume
