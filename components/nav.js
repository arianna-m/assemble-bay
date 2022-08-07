import Link from 'next/link'
import { useEffect } from 'react'
import { CgDarkMode } from 'react-icons/cg'
import {useTheme} from 'next-themes'
import Image from 'next/image'
import { IoIosCart } from 'react-icons/io';
import { IoIosAddCircle } from 'react-icons/io';


export default function Nav() {
    const {theme, setTheme} = useTheme()
    return (
        <nav className="dark:text-white">
            <ul className="px-4 flex flex-wrap sm:justify-between items-start sm:items-center mt-2 sm:mt-0">
            <a href="https://airtable.com/shr53jEjWelkD7LXo" target="_blank" className="sm:justify-self-center"><IoIosAddCircle size={50} /></a>
            <img src="https://cloud-eky407qg4-hack-club-bot.vercel.app/0img_0510.jpg" width="400px" height="160px" className="justify-self-center py-5"></img>
            <a href="https://i.pinimg.com/originals/79/58/d6/7958d60d32cbfc6304bba080800f62aa.gif" target="_blank" className="sm:justify-self-center"><IoIosCart size={50} /></a>
            </ul>
        </nav>
    )
}