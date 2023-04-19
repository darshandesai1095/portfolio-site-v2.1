import React from 'react';
import './ProjectsPage.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from "../../data/ProjectInfo.js"
import DemoWindow from '../DemoWindow/DemoWindow';
import { useSelector } from 'react-redux'

function ProjectsPage() {

    const playbackSelected = useSelector((state) => state.GIFPlayback.value.playback)

    const cards = projects.map( (project,i) => {
        return (
            <ProjectCard
                gif     = {project.gif}
                altText = {project.alt}
                desc    = {project.desc}
                title   = {project.title}
                react   = {project.react}
                redux   = {project.redux}
                router  = {project.router}
                site    = {project.site}
                id = {`project-card__${i}`}
            />
        )
    })

  return (

    <div className={`projects-page`}>
        {cards}
        {playbackSelected ? <DemoWindow/> : null}
    
    </div>
  );
}

export default ProjectsPage;
