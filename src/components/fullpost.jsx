import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";

import "./fullpost.css";
import Spinner from "../ui/spinner";


const FullPost = (props) => { 
    const [postContent, setPostContent] = useState(null);
    const [errMessage, setErrMessage] = useState(null);

   const {id} = useParams();
    const postUrl = id.split('`').join('/');

    useEffect(() => {
       
       

        axios.post("https://news-scrapper-server.onrender.com/", {url: postUrl})
    .then(response => {
        setPostContent([response.data])
    })
    .catch(error => {

        const errText = "Network error. Please check your internet connection or try again later."   
        setErrMessage(errText)
        console.error("Error fetching data:", error.message);
    });
}, [postUrl]);

    

    if(!postContent){
        if(errMessage){
            return (
            <div className="body">
                <h1 className="err-text">{errMessage}</h1>
            </div>
            )
        }else{return <Spinner />}
        
    }else {
        return (
            <div className="contents">

                <h4>News</h4>
                <h3>{postContent[0].title}</h3>

                <div className="details">
                <img src={postContent[0].headlineImg} alt=""  className="post-img"/>
                <div className="pages">
                    {postContent[0].content.map( content => (
                        <p  key={content.slice(5,20)}>{content}</p>
                    )
                    )}
                    </div>
                </div>
        
            </div>
        )
       
    }
    




    // return (
    //         <div className="contents">

    //             <h4>News</h4>
    //             <h3>just an example</h3>

    //             <div className="details">
    //             <img src={gspimg} alt=""  className="post-img"/>
    //             <div className="pages">
                   
    //                     <p>
    //                     </p>
                 
    //                 </div>
    //             </div>
        
    //         </div>
    //     )

    };
export default FullPost;