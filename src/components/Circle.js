import React from 'react';
import './circle.css';

function Circle(props) {
    if(props.hovered==="true")
        return (
            <div className="circle hovered">  
            </div>
        );
    else 
        return (
            <div className="circle">  
            </div>
        );
}

export default Circle;