import React from 'react'
import Card from './Card';
import ContactForm from './email'
// var i = 0;
// var txt = 'Hi I like to Devolop, Code, Create'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typenew() {
    
//     if(i >= txt.length){
//       i= txt.length;
//     }
//     else{
//     typeWriter();
//     }
    
// }
// function typeWriter() {
    
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

export const Contact = () => (
        <div className="container">
            <div className="row contactrow">
            <div className="Card col-xs-5 col-sm-6 col-lg-4"><Card /></div>
            <div className="col-xs-7 col-sm-6 col-lg-8 contact"><ContactForm /></div>
            </div>
        </div>
)
