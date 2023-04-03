import {Link} from "react-router-dom"
import '../styles/home.css'
const Home = () => {
    {/* Landing page */}
    return ( 
        <div className="home">
           <div className="hh">
           <h1>Login As.....!</h1>
            <Link to="/admin-login">Admin Login</Link>
            <Link to="/user-login"> User Login </Link>
           </div>
        </div>
     );
}
 
export default Home;