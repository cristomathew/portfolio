import React from 'react';
import '../Styling/card.css'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-image" />
            <div className="card-text">
                <span className="date">{props.date}</span>
                <h2>{props.head}</h2>
                <p>{props.children}</p>
            </div>
            <div className="card-stats">
                <a href={props.git}  id="gitimage" >
                <div className="stat">
                </div>
                </a>
                <a href={props.insta}  id="image" >
                <div className="stat-border"/>
                </a>
                <a href={props.linkdin}  id="linkdin" >
                <div className="stat" />
                </a>
            </div>

    </div>
    )
}

