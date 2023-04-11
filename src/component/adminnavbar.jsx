import { Link } from "react-router-dom";
import '../styles/adminnavbar.css'
const AdminNavbar = () => {
    let links=[
        {likadm:"DashBoard",lik:"/admin/"},
        {likadm:"Add User",lik:"/admin/add-user"},
        {likadm:"Add Book",lik:"/admin/add-books"},
        {likadm:"Book List",lik:"/admin/book-list"},
        {likadm:"User List",lik:"/admin/user-list"}
    ]
    return ( 
        <div className="adminNavbar">
            <div className="adminnav">
                <Link to={"/"}>Admin</Link>
                <p > <u>admin@gmail.com</u> </p>
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
            <div className="logou">
                <hr style={{widows:"100%"}} /> <br />
                <a href="/admin-login">LOG OUT</a>
            </div>
        </div>
     );
}
 
export default AdminNavbar;