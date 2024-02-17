import React, {createContext,useState,useEffect} from "react";

import { FetchDATAFromAPI } from "../utils/API";


export const Context = createContext();

export const AppContext = (props) => {
    const[loading,setLoading] = useState(false);
    const[searchResult,setsearchResult] = useState([]);
    const[selectCategory,setselectCategory] = useState('New');
    const[mobileMenu,setmobileMenu] = useState(false);

    useEffect(()=> {
   fetchSelectedCategoryData(selectCategory)
    },[selectCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        FetchDATAFromAPI(`search/?q=${query}`).then(({contents})=>{
            console.log(contents)
            setsearchResult(contents)
            setLoading(false)
        })
    }

    return (
       <Context.Provider value={{
           loading,
           setLoading,
           searchResult,
           setselectCategory,
           selectCategory,
           mobileMenu,
           setmobileMenu,
       }}>

        {props.children}

       </Context.Provider> 
    )
}