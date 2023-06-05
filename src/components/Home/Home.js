import React, { useState, useEffect } from "react";
import Scroll from "../Scroll/Scroll";
import "./Home.css"
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {

  const [offsetY, setOffsetY] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [bkgWidth, setBkgWidth] = useState((700 - window.pageYOffset) / 14)
  const [titleOffsetX, setTitleOffsetX] = useState(window.pageYOffset*1.5 + innerWidth/2.7)

  useEffect(() => {
      function handleScroll() {
        setOffsetY(window.pageYOffset)
        setInnerWidth(window.innerWidth)
        setBkgWidth((700 - offsetY) / 14)
        setTitleOffsetX(window.pageYOffset*1.5+innerWidth/2.7)
      }
  
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleScroll)
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
      }
    }, [offsetY, innerWidth])

  const { scrollYProgress } = useScroll()
  const xTitle = useTransform(scrollYProgress, [0, 0.25], [0, innerWidth])
  const xBkg = useTransform(scrollYProgress, [0, 0.3], [0, -innerWidth])

  return (
      <div className="home">
          <motion.div  className="home__bkg" 
                // style={{width:`${bkgWidth}vw`}}
                style={{ x: xBkg }}
          />
          <motion.h1 className="home__title" style={{ x: xTitle }}>
              HE<br/>LLO<span>.</span>
          </motion.h1>
          <Scroll/>
          <p></p>
      </div>

  )
}

export default Home