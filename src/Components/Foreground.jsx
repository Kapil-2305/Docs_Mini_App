import React from 'react'
import Card from './Card'

const Foreground = () => {
    const data = [
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green-600",
            }
        },
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Save Now",
                tagColor: "zinc-600",
            }
        },
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".7mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Delete Now",
                tagColor: "red-600",
            }
        }
    ]
    return (
        <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </div>
    )
}

export default Foreground