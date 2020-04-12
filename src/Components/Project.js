import React from 'react'
import '../Styling/project.css'

export const Project = (props) =>{
        return (
        <div className="content">
            <a className="card" href="#!" >
                <div className="front" style={{ backgroundImage:`url(${props.image})`}}>
                    <p>{props.front}</p>
                </div>
                <div className="back">
                    <div>
                        <p>{props.children}</p>
                        <a  href={props.link}><button className="button">View Code</button></a>
                    </div>
                </div>
            </a>
        </div>
        )
    }

export default Project

