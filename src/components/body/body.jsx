import React, { useEffect, useState } from "react";
import { BigCard, SmallCard } from "./cards/card";
import Spinner from "../../ui/spinner";
import axios from "axios";

import "./body.css";

const Body = () => {

    //    useStates stores the data recieved from the server
    let [BigPosts, setBigPosts] = useState(null);  /* server data is sliced  0 to 2  */
    let [smallPosts, setSmallPosts] = useState(null);
    let [errMessage, setErrMessage] = useState(null);


    // useEffect hook for getting request from srver with axios

    useEffect(() => {
        axios("https://news-scrapper-server.onrender.com/", {timeout: 20000})
            .then((response) => {
                console.log("Response data:", response.data); 
                setBigPosts(response.data.slice(0,2));
                setSmallPosts(response.data.slice(2));
            })
            .catch(error => {

                const errText = "Network error. Please check your internet connection or try again later."
                
                setErrMessage(errText)
                console.error("Error fetching data:", error.message);
            });
    }, []);

    if (!BigPosts) {
        if(errMessage){
            return <div className="body"><h1 className="err-text">{errMessage}</h1></div>
        }else{return <Spinner />;}
        
    } else {
        return (
            <div className="body">
               {/* big post */}

               
            <div className="big_post">
                {BigPosts.map(post => (
                    <BigCard key={post.id} 
                    topic={post.title}
                    img={post.imgUrl}
                    url={post.url} />
                ))}
                </div>

              {/* small post */}
              <div className="small_post">
                {smallPosts.map(post => (
                    <SmallCard key={post.id}
                      topic={post.title}
                      img={post.imgUrl}
                      url={post.url}/>
                ))}
                </div>
            </div>
        );
    }
};

export default Body;
