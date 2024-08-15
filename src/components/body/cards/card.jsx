import React from "react";
import {Link} from "react-router-dom";

import "./card.css"


 export const  BigCard = (props) => {
    

    const backgroundImageUrl = props.img;  /* big post image */

    

// bigPost background styling
    const divStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const url = props.url.split('/').join('`');
    
    return (
        <Link to={`/fullpost/${url}`} className="big_card" style={divStyle}>
                <div className="bigcard_content">
                    <h3>{props.topic}</h3>
                </div>
            </Link>
    );
};


 export const SmallCard = (props)=> {

    const smallImagUrl = props.img;  /* small post image */


    // smallPost  background stling
    const smallDivStyle = {
        backgroundImage: `url(${smallImagUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const url = props.url.split('/').join('`');

    return (

        
        <Link to={`/fullpost/${url}`} className="small_card">
      
                        <div className="img" style={smallDivStyle}></div>
                    <div className="content">
                        <h3 className="topic">{props.topic}</h3>
                    </div>
                  
    </Link>
    )
};


