import { Link } from "react-router-dom";
import '../styles/usernavbar.css'
const UserNavbar = () => {
    let links=[
        {likadm:"Home",lik:"/user/"},
        {likadm:"Book List",lik:"/user/book-list"}
        
    ]
    return ( 
        <div className="usernavbar">
            <div className="usernav">
                <Link to={"/"}>User</Link>
                <p > <u>user@gmail.com</u> </p>
            </div>
            <div className="lis">
                {
                    links.map((data)=>{
                        return(
                            <div className="zszs">
                                <Link to={data.lik}>{data.likadm}</Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className="njnj">
                <hr style={{widows:"100%"}} /> <br />
                <a href="/user-login">LOG OUT</a>
            </div>
        </div>
     );
}
 
export default UserNavbar;