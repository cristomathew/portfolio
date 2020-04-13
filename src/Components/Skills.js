import React, {useEffect,useState} from 'react';
import '../Styling/skills.css';


// export default class Skills extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { collapsed: true };       
//     }
    
//     componentDidMount() {
//       setTimeout(() => {
//         this.setState({ collapsed: false })
//       }, 800);
//     }
  
//     render() {
//       const { collapsed } = this.state;
//       const { hue, saturation, skills } = this.props;
  
//       return(  
//         <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>
//           <h1>Skills</h1><hr/>
//           <ul className="skills">
//             {skills.map((skill, index) => 
//               <li
//                 key={skill.type}
//                 style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}
//               >
//                 <p>{skill.type}<span>{skill.level}</span></p>
//               </li>
//             )}
//           </ul>
//         </div>
//       )
//     }
//   }
  
export const Skills = (props) => {
  const[collapsed, setcollapsed] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setcollapsed(false)
    }, 1000)},[]);
    
  const { hue, saturation, skills } = props;
  return(
    <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>
    <h1>Skills</h1><hr/>
    <ul className="skills">
      {skills.map((skill, index) => 
        <li
          key={skill.type}
          style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}
        >
          <p>{skill.type}<span>{skill.level}</span></p>
        </li>
      )}
    </ul>
  </div>
  );

  };
export default Skills