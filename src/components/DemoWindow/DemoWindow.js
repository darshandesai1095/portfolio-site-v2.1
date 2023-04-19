import React from "react";
import "./DemoWindow.css"
import { useSelector } from 'react-redux'

const DemoWindow = (props) => {

    const gifUrl = useSelector((state) => state.GIFPlayback.value.gif)

    return (
        <div className="demo-window">
            <img src={`${gifUrl}`} alt={props.altText}/>
        </div>
    )
}

export default DemoWindow