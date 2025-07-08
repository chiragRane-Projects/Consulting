'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "@/public/logo.png"
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsOpen((prev) => !prev)
    }
    return (
        <nav className="flex items-center justify-between px-6 py-4 w-full text-white z-30 ">
            {/* Logo */}
            <div className="flex items-center">
                <Image src={Logo} alt="Logo" width={120} height={40} />
            </div>

            {/* Nav Links + Button */}
            <div className="hidden md:flex items-center gap-6">
                <ul className="flex gap-6 text-sm text-gray-300">
                    <li className="hover:text-white transition-colors cursor-pointer">Home</li>
                    <li className="hover:text-white transition-colors cursor-pointer">About</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Services</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                </ul>
                <Button className="ml-4 rounded-full px-6 py-6 border border-gray-400 backdrop-blur bg-white/10 text-white hover:bg-white/20 hover:border-gray-300 transition-colors duration-200 cursor-pointer">
                    Get an audit
                </Button>
            </div>

            {/* Mobile Menu Placeholder (future) */}
            <div className="md:hidden">
                <button
                    aria-label="Click to go through checkpoints"
                    onClick={handleMenuToggle}
                    className="relative w-8 h-8 z-30"
                >
                    {/* Hamburger Icon */}
                    <span
                        className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-0 scale-90 rotate-45' : 'opacity-100 scale-100 rotate-0'
                            }`}
                    >
                        <Menu size={28} />
                    </span>

                    {/* Close Icon */}
                    <span
                        className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 -rotate-45'
                            }`}
                    >
                        <X size={28} />
                    </span>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute top-16 right-4 bg-white text-black px-8 py-6 rounded-xl shadow-xl flex flex-col space-y-4 items-center z-20 transition-all duration-300 ease-in-out">
                        <a href="#" className="hover:text-blue-600 transition">Home</a>
                        <a href="#" className="hover:text-blue-600 transition">About</a>
                        <a href="#" className="hover:text-blue-600 transition">Services</a>
                        <a href="#" className="hover:text-blue-600 transition">Blog</a>
                        <button className="mt-4 px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
                            Get an audit
                        </button>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default Navbar
