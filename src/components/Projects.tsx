import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div id='Projects' className='bg-gradient-to-b from-neutral-700 to-transparent gap-5 py-20 px-5 md:px-20 border-t-2 border-solid border-neutral-600 flex flex-col gap-9'>
            <h1 className="text-3xl font-extrabold text-primary text-center"><u>PROJECTS</u></h1>
            <h1 className='font-bold text-3xl text-white text-center'>Checkout some of my works.</h1>
            <p className='text-center text-bodytext text-xs md:text-lg'>With years of experience and knowledge, I have had the privilege to work across a diverse range of projects. Each service I offer is crafted to bring unique and innovative solutions to your needs. Below are the services I specialize in</p>
            <div className='grid md:grid-cols-2 grid-flow-row gap-9'>
                {/* zoamto_clone */}
                <div className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
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
                        <h1>Zomato Clone</h1>
                    </div>
                </div>

                {/* snake_game */}
                <div className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
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
                        <h1>Snake Game</h1>
                    </div>
                </div>

                {/*book-stack */}
                <div className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
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
                </div>

                {/*turtle_race */}
                <div className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
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
                </div>

                {/* hangman */}
                <div className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
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
                </div>

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
                <div className='hover_reveal-parent' style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%', boxShadow:'1px 1px 10px grey', borderRadius:'30px', overflow:'hidden' }}>
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
                </div>

            </div>

        </div>
    )
}

export default Projects
