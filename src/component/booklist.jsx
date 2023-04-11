import { useState } from "react";
import { useEffect } from "react";
import '../styles/booklist.css'
import { useLocation ,useNavigate} from "react-router-dom";
const BookList = () => {
    let location=useLocation()
    let navigate=useNavigate()

    console.log(location.pathname);
    
    let[books,setbooks]=useState([])
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response= await fetch("http://localhost:4000/books")
            let data= await response.json()
             setbooks(data)
        }
        fetchdata()
    },[books])
    let DeleteBook=(id)=>{
        fetch(`http://localhost:4000/books/${id}`,{
            method:'DELETE'
            })
        }
    let readbook=(id)=>{
        if(location.pathname=="/admin/book-list"){
            navigate(`/admin/book-list/${id}`)
        }
        else{
            navigate(`/user/book-list/${id}`)
        }
    }
    return ( 
        <div className="booklist">
            {
                books.map((data)=>{
                    return(
                        <div className="bookdata">
                            <img height="250px" width="250px" src={data.imageLink} alt="" />
                                <h1>Title : {data.title}</h1>
                                <p>Author : {data.author}</p>
                                <p>Pages : {data.pages}</p>
                                <p>Year : {data.year}</p>
                                <button  onClick={()=>readbook(data.id)}>Read Book</button>
                                {location.pathname=='/admin/book-list' && <button onClick={()=>DeleteBook(data.id)} >Delete</button>}
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default BookList;