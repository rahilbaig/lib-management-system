import { useRef } from 'react';
import '../styles/adduser.css'
import { useNavigate } from 'react-router-dom';
const Adduser = () => {
    let navigate=useNavigate()

    let name=useRef(null)
    let email=useRef(null)
    let password=useRef(null)

    let submit=(e)=>{
        e.preventDefault()
        let data={
            name:name.current.value,
            email:email.current.value,
            password:password.current.value
        }
        fetch("http://localhost:4000/users",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        alert("User Added")
        navigate("/admin")
    }
    return ( 
       <div className="abbbb">
         <div className="adduser">
            <h1>Add User</h1>
            <div className="use">
                <form className='useee' onSubmit={submit} action="">
                    <input ref={name} placeholder="Name" type="text" />
                    <input ref={email} placeholder="Email" type="email" />
                    <input ref={password} placeholder="password" type="password" />
                    <button onClick={submit} >Add User</button>
                </form>
            </div>
        </div>
       </div>
     );
}
 
export default Adduser;