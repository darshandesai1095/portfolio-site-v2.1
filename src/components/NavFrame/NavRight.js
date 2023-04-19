import React from "react";
import './NavFrame.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

// import { Tooltip } from "@mui/material";

const NavRight = () => {

    const style = {
        // fill: "#495057",
        margin: "5px",
        transform: "scale(1)",
        opacity: "1"
    }



    return (
        <div className="nav-right">
            <div className='nav-right__icons'>

                <div 
                title="LinkedIn" 
                id="linkedin" 
                className='nav-right__icon'
                onClick={window.open()}
                >
                    <LinkedInIcon
                    style={style} 
                    id="linkedin__icon"/>
                </div>
                
                <div 
                title="GitHub" 
                id="github" 
                className='nav-right__icon'
                onClick={window.open()} 
                >
                    <GitHubIcon 
                    style={{...style, transform: "scale(0.95)"}} 
                    id="github__icon" />
                </div>
                
                <div 
                title="Résumé" 
                id="cv" 
                className='nav-right__icon' 
                onClick={window.open()}
                >
                    <ArticleIcon 
                    style={style}
                    id="cv__icon" />
                </div>

            </div>
        </div>
    )
}

export default NavRight