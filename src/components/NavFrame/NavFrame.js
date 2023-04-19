import React from 'react'
import './NavFrame.css'
import NavTop from './NavTop';
import NavBottom from './NavBottom';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

const NavFrame = () => {
    
    return (
        <>
            <NavTop/>
            <NavLeft/>
            <NavRight/>
            <NavBottom/>
        </>

    )
}

export default NavFrame