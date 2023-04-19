import React from "react";
import "./ProjectCard.css"
import { useDispatch } from 'react-redux'
import { toggle } from '../../redux/features/GIFPlaybackSlice'

const ProjectCard = (props) => {

    const dispatch = useDispatch()

    return (
        <div className="project-card" id={`${props.id}`}>
            <h4 className="project-card__heading">{props.title}</h4>
            <p className="project-card__text">
                {props.desc}
            </p>
            <div className="project-card__buttons">
                <button 
                    className="project-card__gif"
                    onClick={() => dispatch(toggle(props.gif))}>
                        See GIF
                </button>
                <button
                    className="project-card__link-to-site"
                    onClick={() => window.open(props.site, "_blank", "noopener,noreferrer")}>
                        Go To Site!
                </button>
            </div>
        </div>
    )
}

export default ProjectCard