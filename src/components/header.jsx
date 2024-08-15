import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header  = () => {

    const [hideTaskbar, setHideTaskbar] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = currentScrollPos < 70; // Adjust this value according to your taskbar height
        setHideTaskbar(!visible);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    return (
        
        <div className={`header ${hideTaskbar ? "hide" : ""}`}> 
            <h2>feel</h2>
         <div className="header_info">
            <b><Link  to="/">Home</Link></b>
            <b><Link  to="/about">About</Link></b>
        </div>
        </div>
    );
};



export default Header;