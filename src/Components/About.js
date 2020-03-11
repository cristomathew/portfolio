import React from 'react'
import Skills from './Skills';
const SKILLS = [
    {type: "JavaScript", level: 84},
    {type: "React.js", level: 87},
    {type: "Django", level: 90},
    {type: "Python", level: 85},
    {type: "Ionic", level: 70},
    {type: "HTML", level: 99},
    {type: "CSS", level: 90}
  ];
  
export const About = () => (
    <div>
        <h2>About Me</h2>
        <Skills skills={SKILLS} width="89%" />
    </div>
)