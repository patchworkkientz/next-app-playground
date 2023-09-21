"use client"
import React, { useState } from 'react'

export default function SlidingMenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <button className="menu-button" onClick={toggleMenu}>
                {isMenuOpen ? 'Close Menu' : 'Open Menu'}
            </button>
            <div className={`sliding-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
            </div>
        </>
    )
}

