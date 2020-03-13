import React from 'react';
import '../Styling/card.css'
import '../Styling/css/style.css'

export default function Card(props) {
    return (
        <div className="infocard">
            <div className="infocard-image" />
            <div className="infocard-text">
                <span className="date">{props.date}</span>
                <h2>{props.head}</h2>
                <p>{props.children}</p>
            </div>
            <div className="infocard-stats notfound notfound-social">
                <a href="https://www.instagram.com/cris00707/"><i class="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/cristo-mathew-6b145a160/"><i class="fa fa-linkedin"></i></a>
                <a href="https://www.github.com/cristomathew"><i class="fa fa-github"></i></a>
            </div>

    </div>
    )
}

