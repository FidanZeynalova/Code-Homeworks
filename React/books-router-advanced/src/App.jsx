import './App.css'
import {Routes, Route } from "react-router-dom";
import Home from "./pages/User/Home/Home";
import Books from "./pages/User/Books/Books";
import BookDetail from "./pages/User/BookDetail/BookDetail";
import Basket from "./pages/User/Basket/Basket";
import Favorites from "./pages/User/Favorites/Favorites";
import NotFound from "./pages/User/NotFound/NotFound";
import Dashboard from "./pages/Admin/Dasboard/Dashboard";
import EditBook from "./pages/Admin/EditBook/EditBook";
import AddBook from "./pages/Admin/AddBook/AddBook";
import AdminBookDetail from './pages/Admin/BookDetail/AdminBookDetail';
import AdminBooks from './pages/Admin/Books/AdminBooks';
import AdminNotFound from './pages/Admin/NotFound/AdminNotFound';
import AdminRoot from './pages/Admin/AdminRoot';
import UserRoot from './pages/User/UserRoot';

function App() {

  return (
    <>
      <Routes>
        {/*User-in Router */}
        <Route path="/" element = {<UserRoot/>}>
          <Route index element={<Home />} />
          <Route path="books">
            <Route index element={<Books />} />
            <Route path=":id" element={<BookDetail />} />
          </Route>
          <Route path="basket" element={<Basket />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/*Admin-in Router */}
        <Route path="/admin" element = {<AdminRoot  />}>
          <Route index element={<Dashboard />} />
          <Route path="books">
            <Route index element={<AdminBooks/>} />
            <Route path=":id" element={<AdminBookDetail/>} />
          </Route>
          <Route path="edit" element={<EditBook />} />
          <Route path="add" element={<AddBook />} />
          <Route path="*" element={<AdminNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
