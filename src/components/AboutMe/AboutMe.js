import React, { useState, useEffect } from "react";
import "./AboutMe.css"
import navigate from "../functions/navigate";

const AboutMe = () => {

    // const [offsetY, setOffsetY] = useState(window.pageYOffset)
    // const [innerHeight, setInnerHeight] = useState(window.innerHeight)

    // useEffect(() => {
    //     function handleScroll() {
    //       setOffsetY(window.pageYOffset)
    //     }
    
    //     window.addEventListener('scroll', handleScroll)
    //     window.addEventListener('resize', handleScroll)
    
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll)
    //       window.removeEventListener('resize', handleScroll)
    //     }
    //   }, [offsetY, innerHeight])

    // // opacity = 1 when offsetY/innerheight = 1.3 i.e. visible
    // // opacity = 0 when offsetY/innerheight = 0.8 i.e. invisible
    // const linearSpike = (x) => {
    // if (x >= 0.8 && x < 1.3) {
    //     return (x - 0.8) / (1.3 - 0.8);
    //     } else if (x >= 1.3 && x <= 1.8) {
    //     return (1.8 - x) / (1.8 - 1.3);
    //     } else {
    //     return 0;
    //     }
    // }

    // const calculateZIndex = (opacity) => {
    //     return opacity > 0.86 ? 999 : 9
    // }

    // const textStyle = {
    //     opacity: `${linearSpike(offsetY/innerHeight)}`,
    //     zIndex: `${calculateZIndex((linearSpike(offsetY/innerHeight)))}`
    // }

    return (
        <div className="about-me" 
            //  style={{
            //     marginTop:`${innerHeight*0.3}px`}}
            >
            <p className='about-me__text' 
                // style={textStyle}
            >
                Hi! My name is <span className='-word-highlight'>Darshan</span> and I'm an aspiring Front-End
                Developer. Having studied Mechanical Engineering as an
                undergraduate, I've developed a passion for&nbsp;
                <span className='-word-highlight'>problem-solving</span>
                &nbsp;through creative thinking.
            </p>

            <p  className='about-me__text' 
                // style={textStyle}
                >
                I'm drawn to the world of software development because of
                its <span className='-word-highlight'>fast-paced and 
                &nbsp;innovative</span> nature. 
                I love learning about new technologies and am excited to take 
                the leap into Front-End Development. If you're looking for a 
                dynamic developer to join your team,&nbsp;
                <span 
                    className='word-highlight hover' 
                    onClick={(e) => navigate(e, "contact")}>hit me up</span>
                &nbsp;and let's work on some projects together 
                &nbsp;<span className='-word-highlight rotate'>&#58;&#41;</span>
            </p>
        </div>
    )
}

export default AboutMe