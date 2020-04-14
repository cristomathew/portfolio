import React from 'react';
import '../Styling/card.css'
import '../Styling/css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
export const Card = (props) => {
    return (
        <>
            <div className="row intro grid-item"><h2>Cristo Mathew</h2>
            
            </div>
            <div className="row grid-item"><FontAwesomeIcon icon={faPhoneAlt} size="2x" /> :::<h3>9383409181</h3></div>
            <div className="row footer grid-item">
                <h4>find me at:</h4>&nbsp;
                <a class="About-links" target="_blank" rel="noopener noreferrer" href="https://github.com/cristomathew"><FontAwesomeIcon icon={faGithub} size="3x" spin /></a>	&nbsp; &nbsp; &nbsp; &nbsp;
                <a class="About-links" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cristo-mathew-6b145a160/"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>	&nbsp; &nbsp; &nbsp;
                <a class="About-links" target="_blank" rel="noopener noreferrer" href="https://instagram.com/cris00707"><FontAwesomeIcon icon={faInstagram} size="3x" spin/> </a>	&nbsp;
                
                
            </div>


        </>
    )
}
export default Card
