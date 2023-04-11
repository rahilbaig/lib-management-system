import { useEffect, useState } from "react";
import '../styles/userlist.css'

const UserList = () => {

    let [lsitt,setlsitt]=useState([])

    useEffect(()=>{

        let fetchdata= async ()=>{
            let response= await fetch("http://localhost:4000/users")
            let data= await response.json()

            setlsitt(data)
        }
        fetchdata()
    },[])

    return ( 
        <div className="userlisr">
                {
                    lsitt.map((data)=>{
                       return(
                        <div className="gdd">
                            <h2>Name:{data.name}</h2>
                            <p>Id:{data.id}</p>
                            <p>Email:{data.email}</p>
                            <p>password:{data.password}</p>
                        </div>
                       )
                    })
                }
        </div>
     );
}
 
export default UserList;