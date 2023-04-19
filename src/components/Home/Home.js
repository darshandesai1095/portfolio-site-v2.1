import React, { useState, useEffect } from "react";
import Scroll from "../Scroll/Scroll";

import "./Home.css"

const Home = () => {

    const [offsetY, setOffsetY] = useState(0);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    const [bkgWidth, setBkgWidth] = useState((700 - window.pageYOffset) / 14)
    const [titleOffsetX, setTitleOffsetX] = useState(window.pageYOffset*1.5 + innerWidth/2.7)

    useEffect(() => {
        function handleScroll() {
          setOffsetY(window.pageYOffset);
          setInnerWidth(window.innerWidth)
          setBkgWidth((700 - offsetY) / 14);
          setTitleOffsetX(window.pageYOffset*1.5+innerWidth/2.7)
        }
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll)
    
        return () => {
          window.removeEventListener('scroll', handleScroll)
          window.removeEventListener('resize', handleScroll)
        };
      }, [offsetY, innerWidth]);

    return (
        <div className="home">
            <div className="home__bkg" style={{width:`${bkgWidth}vw`}}></div>
            <h1 className="home__title" style={{left:`${titleOffsetX}px`}}>
                HE<br/>LLO<span>.</span>
            </h1>
            <Scroll/>
            <p></p>

        </div>

    )
}

export default Home