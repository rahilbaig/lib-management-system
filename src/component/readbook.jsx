import { useState } from "react";
import { useEffect } from "react";
import {useParams} from 'react';
const ReadBook = () => {
    let params=useParams()
    let [obj,setobj]=useState({})
    useEffect(()=>{
        let fetchdata= async ()=>{
           let response=await fetch(`http://localhost:4000/books/${params.id}`)
           let data= await response.json()
           setobj(data)
        }
        fetchdata()
    },[])
    
    return ( 
        <div className="readbook">
            <h1>{obj.title}</h1>
        </div>
     );
}
 
export default ReadBook;