import React, { useContext } from "react";
import { contextApiData } from "../ContextApi/ContextApi";

function Home(){
    // importing context api data using usecontext
    const contextDataReceiving=useContext(contextApiData)
    
    console.log("check context data: ",contextDataReceiving)
    return(
        <>

        <h1>home page</h1>
        <h5>context api data:  {contextDataReceiving}</h5>
        </>
    )
}
export default Home