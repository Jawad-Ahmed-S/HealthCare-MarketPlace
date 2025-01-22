"use client";
import { useState,createContext, useContext } from "react";
 

const SearchContext = createContext();

export const useSearchQuery=()=>{
return useContext(SearchContext);
}

export const SearchProvider=({children})=>{
    const [search,setSearch]=useState("");
    return(
        <SearchContext.Provider value={{search,setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}