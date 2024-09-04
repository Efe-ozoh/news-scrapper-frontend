import React from "react";

import "./spinner.css";


const Loader = () => {
    return (
        <div className="spinner">
    <div className="loader"></div>
    <h2 className="loading">Loading</h2>
    </div>
    )
};

export default Loader;