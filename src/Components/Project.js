import React, { Component } from 'react'
import '../Styling/project.css'

export class Project extends Component {
    render(props) {
        
        return (
        <div className="content">
            <a className="card" href="#!">
                <div className="front" style={{ backgroundImage:`url(${this.props.image})`}}>
                    <p>{this.props.front}</p>
                </div>
                <div className="back">
                    <div>
                        <p>{this.props.children}</p>
                        <a  href={this.props.link}><button className="button">View Code</button></a>
                    </div>
                </div>
            </a>
        </div>
        )
    }
}

export default Project

