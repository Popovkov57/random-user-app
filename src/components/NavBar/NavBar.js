import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const catMenu = useRef(null)

    const displayResponsiveMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeOpenMenus = (e)=>{
        if(catMenu.current && isOpen && !catMenu.current.contains(e.target)){
            setIsOpen(false)
        }
    }

    document.addEventListener('mousedown',closeOpenMenus)

    return (
        <nav>
            <div className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span className="font-semibold text-xl tracking-tight ml-2">Random User App</span>
                </div>
                <div className="block lg:hidden">
                    <button onClick={displayResponsiveMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        {
                            !isOpen ?
                                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                        }
                    </button>
                </div>
                <div className="w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto hidden">
                    <div className="text-lg lg:flex-grow">
                        <Link to="/users" className="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Users
                        </Link>
                    </div>
                </div>
            </div>
            {
                isOpen ?
                    <div className="flex items-center justify-between flex-wrap bg-teal-500 pl-6 pt-2 pb-2" ref={catMenu}>
                        <ul>
                            <li>
                                <Link to="/users" className="block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                    Users
                                </Link>
                            </li>
                        </ul>
                    </div> : null
            }
        </nav>
    )
}

export default NavBar
