import React from "react";
import './NavFrame.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

const NavRight = () => {

    const style = {
        fill: "#495057",
        margin: "7px",
        transform: "scale(1)",
        opacity: "0.9"
    }

    return (
        <div className="nav-right">
            <div className='nav-right__icons'>
                <div className='nav-right__icon'>
                    <LinkedInIcon style={style}/>
                </div>
                
                <div className='nav-right__icon'>
                    <GitHubIcon style={{...style, transform: "scale(0.95)"}}/>
                </div>
                
                <div className='nav-right__icon'>
                    <ArticleIcon style={style}/>
                </div>
            </div>
        </div>
    )
}

export default NavRight