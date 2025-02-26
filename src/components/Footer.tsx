import React from 'react'
import {FaRegCopyright } from 'react-icons/fa'
import { PiLineVerticalBold } from 'react-icons/pi'

const Footer = ({ profileRef, scrollToView }: { profileRef: React.RefObject<HTMLDivElement | null>, scrollToView: (ref: React.RefObject<HTMLDivElement | null>) => void }) => {
    return (
        <div className='py-20 text-center flex justify-around items-center'>
            <div className='bg-black text-bodytext flex gap-2'>
                <div>Copyright</div>
                <div className='flex items-center justify-center'><FaRegCopyright /></div>
                <div className='flex items-center justify-center'><PiLineVerticalBold /></div>
                <div>All rights reserved </div>
                <div className='flex items-center justify-center'><PiLineVerticalBold /></div>
                <div>This is designed by</div>
                <div onClick={()=> scrollToView(profileRef)} className='text-primary'>Dharineesh G G</div>
            </div>
        </div>
    )
}

export default Footer
