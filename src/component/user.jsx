import { useNavigate } from 'react-router-dom';
import '../styles/user.css'
const User = () => {

    let navigate=useNavigate()

    let submit=(e)=>{
        navigate("/user")
    }

    return ( 
        <div className="user">
            <div className="us">
                <h1>USER LOGIN</h1>
            </div>
            <div className="frrm">
                <form action="" onSubmit={submit}>
                <h3>SIGN IN</h3> <br />
                <input placeholder='Email' type="email" /> <br />
                <input placeholder='Password' type="password" />  <br />
                 <button>LOGIN</button> 
                 </form>
            </div>
        </div>
     );
}
 
export default User;