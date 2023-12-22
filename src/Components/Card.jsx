import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { LuDownload } from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'

const Card = ({data}) => {
    return (
        <div className='relative w-60 h-72 flex-shrink-0 rounded-[30px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between mb-5 py-3 px-8'>
                    <h5>{data.filesize}</h5>
                    <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoClose size={"0.8em"} color='#fff'/> : <LuDownload size={"0.8em"} color='#fff'/>}
                    </span>
                </div>

                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Card