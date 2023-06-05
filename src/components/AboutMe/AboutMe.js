import { useRef, useEffect } from "react";
import "./AboutMe.css"
import navigate from "../functions/navigate";
import { useInView } from "framer-motion";

const AboutMe = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        console.log("Element is in view: ", isInView)
      }, [isInView])

    
    return (
        <div className="about-me" >
            <div className="about-me__main" ref={ref}>
                <p className='about-me__text'>
                    Hi! My name is <span className='-word-highlight'>Darshan</span> and
                    I'm a Front-End
                    Developer. Having studied Mechanical Engineering as an
                    undergraduate, I've developed a passion for&nbsp;
                    <span className='-word-highlight'>problem-solving</span>
                    &nbsp;through creative thinking.
                </p>

                <p className='about-me__text'>
                    I'm drawn to the world of software development because of
                    its <span className='-word-highlight'>fast-paced and 
                    &nbsp;innovative</span> nature. 
                    I love learning about new technologies and am excited to take 
                    the leap into Front-End Development. If you're looking for a 
                    dynamic problem-solver to join your team,&nbsp;
                    <span 
                        className='word-highlight hover' 
                        onClick={(e) => navigate(e, "contact")}>hit me up,</span>
                    &nbsp;and let's work on some projects together 
                    &nbsp;<span className='-word-highlight rotate'>&#58;&#41;</span>
                </p>
            </div>

        </div>
    )
}

export default AboutMe