import {Link} from "react-router-dom"

const Home = () => {
    {/* Landing page */}
    return ( 
        <div className="home">
            <h1>Login As.....!</h1>
            <Link to="/admin-login">Admin Login</Link>
            <Link to="/user-login"> User Login </Link>
        </div>
     );
}
 
export default Home;