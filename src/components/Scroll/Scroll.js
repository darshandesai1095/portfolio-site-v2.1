import React from "react";
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import "./Scroll.css"
import navigate from "../functions/navigate";
import { motion, useScroll, useTransform } from "framer-motion";

const Scroll = () => {

    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0,0.001], [1,0])

    const style = {
        fill: "#f8f8f8",
        transform: "scale(0.8)",
    }

    return (
        <div className="scroll" onClick={(e) => navigate(e, "about")}>
            <motion.div className="scroll__main" style={{opacity}}>
                <p className="scroll__text">Scroll</p>
                <ArrowDownwardSharpIcon style={style}/>
            </motion.div>
        </div>
    )
}

export default Scroll