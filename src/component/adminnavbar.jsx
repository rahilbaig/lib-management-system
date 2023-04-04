import { Link } from "react-router-dom";
const AdminNavbar = () => {
    let links=[
        {likadm:"DashBoard"},
        {likadm:"Add User"},
        {likadm:"Add Book"},
        {likadm:"Book List"},
        {likadm:"User List"}
    ]
    return ( 
        <div className="adminNavbar">
            <div className="adminnav">
                <h1>Admin</h1>
                <p>usermail</p>
            </div>
            <div className="lis">
                {
                    links.map((data)=>{
                        return(
                            <div className="zszs">
                                <Link>{data.likadm}</Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className="logo">
                <h3>LOG OUT</h3>
            </div>
        </div>
     );
}
 
export default AdminNavbar;