import { useRef } from 'react';
import '../styles/admin.css'
import { useNavigate } from 'react-router-dom';
const Admin = () => {

    let navigate=useNavigate()
    let email=useRef(null)
    let password=useRef(null)

    let adminlogin=(e)=>{
        e.preventDefault()
        if(email.current.value=="admin@gmail.com" && password.current.value==12345){
            navigate("/admin")
            alert("succssfully loged in")
        }
        else{
            alert("Invalid Credentials")
        }
    }

    return ( 
        <div className="admin">
           <div className="adm">
                <h1>ADMIN LOGIN</h1>
           </div>
           <div className="frm">
           <form action="" onSubmit={adminlogin}>
            <h3>SIGN IN</h3>
                <input ref={email} required placeholder="User name" type="email" /> <br />
                <input ref={password} required placeholder="Password" type="password" /> <br />
                <button>LOGIN</button>
            </form>
           </div>
        </div>
     );
}
 
export default Admin;