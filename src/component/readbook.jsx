import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/readbook.css'
const ReadBook = () => {
    let [obj,setobj]=useState("")

    let abcd=useParams()
    
    useEffect(()=>{
        let fetchdata= async ()=>{
           let response=await fetch(`http://localhost:4000/books/${abcd.id}`)
           let data= await response.json()
           setobj(data)
        }
        fetchdata()
    },[])
    return ( 
        <div className="readbook">
            <h2 style={{textAlign:"center"}}>Book Details</h2>
            <h2>Title:-{obj.title}</h2>
            <h2>Author Of The Book:-{obj.author}</h2>
            <h2>Number Of Pages:-{obj.pages}</h2>
            <h2>Year Of Publish:-{obj.year}</h2>
            <p>{obj.description}</p>

        </div>
     );
}
 
export default ReadBook;