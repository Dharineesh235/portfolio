import Image from 'next/image'
import React from 'react'

const Projects = () => {
    const data = [
        {
            name:"Zomato Clone", 
            description:"During my internship, I developed a Zomato Clone, a full-stack food ordering web application designed to provide a seamless experience for users to browse restaurants, explore menus, and place orders online.",
            url:"/images/zomato_clone.jpeg",
            visit:"https://github.com/Dharineesh235"
        },
        {
            name:"Snake Game", 
            description:"During my internship, I developed a Zomato Clone, a full-stack food ordering web application designed to provide a seamless experience for users to browse restaurants, explore menus, and place orders online.",
            url:"/images/snake_game.jpeg"
        },
        {
            name:"Book Stack", 
            description:"During my internship, I developed a Zomato Clone, a full-stack food ordering web application designed to provide a seamless experience for users to browse restaurants, explore menus, and place orders online.",
            url:"/images/book_stack.jpeg"
        },
        {
            name:"Turtle Race",
            description:"During my internship, I developed a Zomato Clone, a full-stack food ordering web application designed to provide a seamless experience for users to browse restaurants, explore menus, and place orders online.",
            url:"/images/turtle_race.jpeg"
        },
        {
            name:"Day Light Automator", 
            description:"During my internship, I developed a Zomato Clone, a full-stack food ordering web application designed to provide a seamless experience for users to browse restaurants, explore menus, and place orders online.",
            url:"/images/day-light.jpg"
        },
    ]
    return (
        <div id='Projects' className='bg-gradient-to-b from-neutral-700 to-transparent gap-5 py-20 px-5 md:px-20 border-t-2 border-solid border-neutral-600 flex flex-col gap-9'>
            <h1 className="text-3xl font-extrabold text-primary text-center"><u>PROJECTS</u></h1>
            <h1 className='font-bold text-3xl text-white text-center'>Checkout some of my works.</h1>
            <p className='text-center text-bodytext text-xs md:text-lg'>With years of experience and knowledge, I have had the privilege to work across a diverse range of projects. Each service I offer is crafted to bring unique and innovative solutions to your needs. Below are the services I specialize in</p>
            <div className='grid md:grid-cols-2 grid-flow-row gap-9'>
                {data.map((item, index)=><div key={"projects"+index} className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
                    <Image src={item.url} alt="Description of image" style={{ width: '100%', height: 'auto', display: 'block' }}  width={100} height={100}/>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)' // Example overlay
                    }}></div>
                    <div className='hover_reveal-child'>
                        <div className='flex flex-col gap-10 justify-center items-center'>
                            <h1 className='text-3xl font-black'>{item.name}</h1>
                            <p className='text-center text-bodytext text-xs md:text-lg'>{item.description}</p>
                            <div className='bg-primary_transparent p-2 rounded w-1/6 text-center'><a href="https://google.com" target='_blank'>VIEW</a></div>
                        </div>
                    </div>
                </div>)}
                {/* zoamto_clone */}
                {/* <div className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
                    <Image src="/images/zomato_clone.jpeg" alt="Description of image" style={{ width: '100%', height: 'auto', display: 'block' }}  width={100} height={100}/>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)' // Example overlay
                    }}></div>
                    <div className='hover_reveal-child'>
                        <div className='flex flex-col gap-10 justify-center items-center'>
                            <h1 className='text-3xl font-black'>Zomato Clone</h1>
                            <p className='text-center text-bodytext text-xs md:text-lg'>During my internship, I developed a Zomato Clone, a full-stack food ordering web application designed to provide a seamless experience for users to browse restaurants, explore menus, and place orders online.</p>
                            <div className='bg-primary_transparent p-2 rounded w-1/6 text-center'><a href="https://google.com" target='_blank'>VIEW</a></div>
                        </div>
                    </div>
                </div> */}

                {/* snake_game */}
                {/* <div className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
                    <Image src="/images/snake_game.jpeg" alt="Description of image" style={{ width: '100%', height: 'auto', display: 'block' }}  width={100} height={100}/>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)' // Example overlay
                    }}></div>
                    <div className='hover_reveal-child'>
                        <h1 className='font-black'>Snake Game</h1>
                    </div>
                </div> */}

                {/*book-stack */}
                {/* <div className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
                    <Image src="/images/book_stack.jpeg" alt="Description of image" style={{ width: '100%', height: 'auto', display: 'block' }}  width={100} height={100}/>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)' // Example overlay
                    }}></div>
                    <div className='hover_reveal-child'>
                        <h1>Book Stack</h1>
                    </div>
                </div> */}

                {/*turtle_race */}
                {/* <div className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
                    <Image src="/images/turtle_race.jpeg" alt="Description of image" style={{ width: '100%', height: 'auto', display: 'block' }}  width={100} height={100}/>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)' // Example overlay
                    }}></div>
                    <div className='hover_reveal-child'>
                        <h1>Turtle Race</h1>
                    </div>
                </div> */}

                {/* hangman */}
                {/* <div className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
                    <Image src="/images/hangman.jpeg" alt="Description of image" style={{ width: '100%', height: 'auto', display: 'block' }}  width={100} height={100}/>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)' // Example overlay
                    }}></div>
                    <div className='hover_reveal-child'>
                        <h1>Hangman</h1>
                    </div>
                </div> */}

                {/*coffee-machine */}
                {/* <div className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
                    <Image src="/images/coffee_machine.jpeg" alt="Description of image" style={{ width: '100%', height: 'auto', display: 'block' }}  width={100} height={100} />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)' // Example overlay
                    }}></div>
                    <div className='hover_reveal-child'>
                        <h1>Coffee Machine</h1>
                    </div>
                </div> */}

                {/*day-light automator */}
                {/* <div className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
                    <Image src="/images/day-light.jpg" alt="Description of image" style={{ width: '100%', height: 'auto', display: 'block' }}  width={100} height={100} />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)' // Example overlay
                    }}></div>
                    <div className='hover_reveal-child'>
                        <h1>Day Light Automator</h1>
                    </div>
                </div> */}

            </div>

        </div>
    )
}

export default Projects
