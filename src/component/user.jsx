import '../styles/user.css'
import { Link } from 'react-router-dom';
const User = () => {
    return ( 
        <div className="user">
            <div className="us">
                <h1>USER LOGIN</h1>
            </div>
            <div className="frrm">
                <h3>SIGN IN</h3> <br />
                <input placeholder='Email' type="email" /> <br />
                <input placeholder='Password' type="password" />  <br />
                 <Link to="">LOGIN</Link> 
            </div>
        </div>
     );
}
 
export default User;