import React from "react";
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import "./Scroll.css"
import navigate from "../functions/navigate";

const Scroll = () => {

    const style = {
        fill: "#f8f8f8",
        transform: "scale(0.8)",
    }

    return (
        <div className="scroll" onClick={(e) => navigate(e, "about")}>
            <div className="scroll__main">
                <p className="scroll__text">Scroll</p>
                <ArrowDownwardSharpIcon style={style}/>
            </div>
        </div>
    )
}

export default Scroll