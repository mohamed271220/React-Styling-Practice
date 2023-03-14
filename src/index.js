//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from 'react';
import ReactDOM from 'react-dom';

const date= new Date();
 var title;
 const cutomStyle ={
   color:'',

 }
const currentTime=date.getHours();
if (currentTime>12){
   title= "gn"
   cutomStyle.color="red"
} else {
  title="gm"
  cutomStyle.color="blue"
}


ReactDOM.render(<div>
<h1 className="heading" style={cutomStyle}>{title}</h1>
</div>,
document.getElementById('root'));
