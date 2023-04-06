import '../styles/adduser.css'
const Adduser = () => {
    return ( 
       <div className="abbbb">
         <div className="adduser">
            <h1>Add User</h1>
            <div className="use">
                <form className='useee' action="">
                    <input placeholder="Name" type="text" />
                    <input placeholder="Email" type="email" />
                    <input placeholder="Contact" type="tel" />
                    <button>Add User</button>
                </form>
            </div>
        </div>
       </div>
     );
}
 
export default Adduser;