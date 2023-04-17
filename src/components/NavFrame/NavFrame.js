import React from 'react'
import './NavFrame.css'
import NavTop from './NavTop';
import NavBottom from './NavBottom';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

const NavFrame = () => {

    const style = {
        fill: "#495057",
        margin: "7px",
        transform: "scale(1)",
        opacity: "0.9"
    }

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