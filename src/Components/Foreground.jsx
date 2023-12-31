import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null);

    const data = [
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green",
            }
        },
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".4mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Save Now",
                tagColor: "blue",
            }
        },
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".7mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Delete Now",
                tagColor: "red",
            }
        },
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".7mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Remove Now",
                tagColor: "yellow",
            }
        },
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".8mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Delete Now",
                tagColor: "red",
            }
        },
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".3mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Delete Now",
                tagColor: "red",
            }
        },
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".7mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green",
            }
        },
    ]
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card key={index} data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground