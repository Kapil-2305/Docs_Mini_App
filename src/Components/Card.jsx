import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { LuDownload } from 'react-icons/lu'

const Card = () => {
    return (
        <div className='relative w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between mb-5 py-3 px-8'>
                    <h5>.4mb</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        <LuDownload size={"0.8em"} color='#fff'/>
                    </span>
                </div>

                <div className='tag w-full py-4 bg-sky-200'>

                </div>
            </div>
        </div>
    )
}

export default Card