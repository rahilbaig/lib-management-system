import { Route, Routes } from 'react-router-dom';
import '../styles/adminportal.css'
import AdminHome from './adminhome';
import BookList from './booklist';
import AdminNavbar from './adminnavbar';
const Adminportal = () => {
    return ( 
        <div className="adminportal">
         <AdminNavbar/>
           <Routes>
            <Route path='/' element={<AdminHome/>} />
            <Route path='book-list' element={<BookList/>} />
           </Routes>
        </div>
     );
}
 
export default Adminportal;