import React, {Component} from 'react';
import PROJECTS from './data/project.js';


class Project extends Component{

    render()
    {
        const {title , description, image, link} = this.props.project;
        return(
            <div style={{display: 'inline-block' , width: 600, margin: 10}}>
                <h3>{title}</h3>
                <img src={image} alt="Project" style={{height: 250,width:400}}></img>
                <p>{description}</p>
                <a href={link}>{title}</a>
            </div>
        );
    }
}

class Projects extends Component
{ 
    render() {
        return(
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                {
                PROJECTS.map(PROJECT => {
                return(
                <Project key={PROJECT.id} project={PROJECT}/>
                )})
                }
                </div>
            </div>
        );
    }
}

export default Projects;