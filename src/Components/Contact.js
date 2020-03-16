import React from 'react'
import Card from './Card';

var i = 0;
var txt = 'Hi I like to Devolop, Code, Create'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typenew() {
    
    if(i >= txt.length){
      i= txt.length;
    }
    else{
    typeWriter();
    }
    
}
function typeWriter() {
    
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

export const Contact = () => (
    <div onMouseOver={typenew} style={{display: 'flex', justifyContent: 'center'}}>
        <Card date="9383049181" head="Cristo Mathew" git="https://www.github.com/cristomathew" views="43" statsvalue="none"
        insta="https://www.instagram.com/cris00707/" linkdin="https://www.linkedin.com/in/cristo-mathew-6b145a160/"
        
        >
        <p id="demo"></p> 
        </Card>
       
    </div>
)
