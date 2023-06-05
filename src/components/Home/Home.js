import React, { useState, useEffect } from "react";
import Scroll from "../Scroll/Scroll";
import "./Home.css"
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {

  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
      const handleScroll = () => setInnerWidth(window.innerWidth)
  
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleScroll)
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
      }
    }, [innerWidth])

  const { scrollYProgress } = useScroll()
  const xTitle = useTransform(scrollYProgress, [0, 0.25], [0, innerWidth])
  const xBkg = useTransform(scrollYProgress, [0, 0.3], [0, -innerWidth])

  return (
      <div className="home">
          <motion.div  className="home__bkg" 
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