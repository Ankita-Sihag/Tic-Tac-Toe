import React from 'react';
import './cross.css';

function Cross(props) {
    if(props.hovered==="true"){
        return (
            <div className="cross hovered">
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
        );
    }

    else{
        return (
            <div className="cross">
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
        );
        
    }       

}

export default Cross;