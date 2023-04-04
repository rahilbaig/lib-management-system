import { useRef } from 'react';
import '../styles/user.css'
const User = () => {

    let email=useRef(null)
    let password=useRef(null)

    let submit=(e)=>{
        e.preventDefault()
        let data={
        email:email.current.value,
        password:password.current.value
        }
        console.log(data)
    }

    return ( 
        <div className="user">
            <div className="us">
                <h1>USER LOGIN</h1>
            </div>
            <div className="frrm">
                <form action="" onSubmit={submit}>
                <h3>SIGN IN</h3> <br />
                <input ref={email} placeholder='Email' type="email" /> <br />
                <input ref={password} placeholder='Password' type="password" />  <br />
                 <button>LOGIN</button> 
                 </form>
            </div>
        </div>
     );
}
 
export default User;