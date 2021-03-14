import React , {createContext,useState,useEffect} from 'react'
import axios from 'axios'


export const NewsContext = createContext();
export const NewsContextProvider = (props)=>{

    const [data, setData] = useState()
    const apiKey ="c86b0a5ac287411086363bc9a1aabe3c"

    useEffect (()=>{
        axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2021-03-12&sortBy=popularity&apiKey=${apiKey}`)
        .then(res=>setData(res.data) )
        .catch(err=> console.log(err));
    },[]    );
     return (
         <NewsContext.Provider value={{data}}>
             {props.children}
         </NewsContext.Provider>
     )
}
