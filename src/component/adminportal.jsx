import { Route, Routes } from 'react-router-dom';
import '../styles/adminportal.css'
import AdminHome from './adminhome';
import BookList from './booklist';
import AdminNavbar from './adminnavbar';
import Adduser from './adduser';
import Addbooks from './addbooklist';
import ReadBook from './readbook';
const Adminportal = () => {
    return ( 
        <div className="adminportal">
         <AdminNavbar/>
           <Routes>
            <Route path='/' element={<AdminHome/>} />
            <Route path='book-list' element={<BookList/>} />
            <Route path='add-user' element={<Adduser/>} />
            <Route path='add-books' element={<Addbooks/>}/>
            <Route path='/book-list/:id' element={<ReadBook/>} />
           </Routes>
        </div>
     );
}
 
export default Adminportal;