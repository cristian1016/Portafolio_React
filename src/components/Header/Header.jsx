import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'


export const Header = () => {
    return (
        <>
            <header className='header-bar'>
                <div className='title'>
                    <h1 className='text-3xl'>PORTFOLIO</h1>
                </div>
                    <Navbar/>
            </header>
            <div className='center_hr'>
                <hr/>
            </div>
        </>
    )
}