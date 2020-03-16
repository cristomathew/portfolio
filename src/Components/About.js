import React from 'react'
import Skills from './Skills';
import '../Styling/scroll.css'
const SKILLS = [
    {type: "JavaScript", level: 84},
    {type: "React.js", level: 87},
    {type: "Vue.js", level:81},
    {type: "Django", level: 90},
    {type: "Python", level: 85},
    {type: "Ionic", level: 70},
    {type: "HTML", level: 99},
    {type: "CSS", level: 90}
  ];
export const About = () => (
    <div>
        <h1>About Me</h1>
        <h4>I am a 3rd year student at  Model Engineering College, Kerala, India,
             pursuing a Bachelor’s degree in Computer Science. I have had a passion 
             for coding for several years and started by making small websites using 
             Html,Css almost 5 years ago.After which I started using Django for 
             the last 2 years and has remained my programming language of choice 
             ever since.I’m also enthusiastic about React Vue and Ionic and has used 
             it to make Web apps. 
             </h4>
        <Skills skills={SKILLS} width="89%" />
    </div>
)