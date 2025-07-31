import React, { createContext } from "react";
import Home from "../Home/Home";
 export const contextApiData=createContext()

function ContextApi(){
    return(
        <>
        <contextApiData.Provider value={"passing data from context api"}>
            <Home/>
        </contextApiData.Provider>
        </>
    )
}
export default ContextApi