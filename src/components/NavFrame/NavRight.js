import React from "react";
import './NavFrame.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

const NavRight = () => {

    const style = {
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
                onClick={() => window.open("https://www.linkedin.com/in/darshandesai95/", "_blank", "noopener,noreferrer")}
                >
                    <LinkedInIcon
                    style={style} 
                    id="linkedin__icon"/>
                </div>
                
                <div 
                title="GitHub" 
                id="github" 
                className='nav-right__icon'
                onClick={() => window.open("https://github.com/darshandesai1095", "_blank", "noopener,noreferrer")} 
                >
                    <GitHubIcon 
                    style={{...style, transform: "scale(0.95)"}} 
                    id="github__icon" />
                </div>
                
                <div 
                title="Résumé" 
                id="cv" 
                className='nav-right__icon' 
                onClick={() => window.open("Darshan_Desai_Resume.pdf", "_blank", "noopener,noreferrer")}
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