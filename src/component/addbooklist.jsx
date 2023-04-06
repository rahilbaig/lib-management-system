import { useRef } from 'react';
import '../styles/addbooks.css'
const Addbooks = () => {
  let title=useRef(null)
  let author=useRef(null)
  let description=useRef(null)
  let imageLink=useRef(null)


  let submit=(e)=>{
        e.preventDefault()
        let data={
          title:title.current.value,
          author:author.current.value,
          description:description.current.value,
          imageLink:imageLink.current.value
        }
    fetch("http://localhost:4000/books",{
    method:'Post',
    headers:{'context-type':'application/JSON'},
    body:JSON.stringify(data)
  })
  }

  
    return ( 
       <div className="ljk">
         <div className="addbooks">
            <h1>Add Books</h1>
            <div className="books">
                <form onSubmit={submit} className='bnbn' action="">
                <input ref={title} placeholder="Title" type="text" />
                <input ref={author} placeholder="Author" type="text" />
                <input ref={description} placeholder="description" type="text" />
                <input ref={imageLink} placeholder="imageLink" type="text" />
                <button>Add Books</button>
                </form>
            </div>
        </div>
       </div>
     );
}
 
export default Addbooks;