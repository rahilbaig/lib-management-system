import { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom'
import '../styles/booklist.css'
const BookList = () => {
    let[books,setbooks]=useState([])
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response= await fetch("http://localhost:4000/books")
            let data= await response.json()
             setbooks(data)
        }
        fetchdata()
    },[])
    return ( 
        <div className="booklist">
            {
                books.map((data)=>{
                    return(
                        <div className="bookdata">
                            <Link to={`/admin/book-list/${data.id}`} ><img height="250px" width="250px" src={data.imageLink} alt="" /></Link>
                            
                                <h1>Title : {data.title}</h1>
                                <p>Author : {data.author}</p>
                                <p>Pages : {data.pages}</p>
                                <p>Year : {data.year}</p>
                           
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default BookList;