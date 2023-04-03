import '../styles/admin.css'
import { Link } from 'react-router-dom';
const Admin = () => {
    return ( 
        <div className="admin">
           <div className="adm">
                <h1>ADMIN LOGIN</h1>
           </div>
           <div className="frm">
           <form action="">
            <h3>SIGN IN</h3>
                <input placeholder="User name" type="email" /> <br />
                <input placeholder="Password" type="password" /> <br />
                <Link to="">LOGIN</Link>
            </form>
           </div>
        </div>
     );
}
 
export default Admin;