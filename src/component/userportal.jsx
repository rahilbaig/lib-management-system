import '../styles/userportal.css'
import { Routes,Route } from 'react-router-dom';
import BookList from './booklist';
import AdminHome from './adminhome';
import UserNavbar from './usernavbar';
import ReadBook from './readbook';
const Userportal = () => {
    return ( 
        <div className="userportal">
            <UserNavbar/>
            <Routes>
            <Route path='/' element={<AdminHome/>} />
            <Route path='/book-list' element={<BookList/>} />
            <Route path='/book-list/:id' element={<ReadBook/>} />
            </Routes>
        </div>
     );
}
 
export default Userportal;