import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./website/Pages/Home";
import About from "./website/Pages/About";
import Blog from "./website/Pages/Blog";
import Login from "./website/Pages/Login";
import Singup from "./website/Pages/Singup";
import Contact from "./website/Pages/Contact";
import Dashboard from "./admin/Pages/Dashboard";
import Add_artist from "./admin/Pages/Add_artist";
import Admin_contact from "./admin/Pages/Admin_contact";
import Admin_login from "./admin/Pages/Admin_login";
import Admin_signup from "./admin/Pages/Admin_signup";
import Manage_artist from "./admin/Pages/Manage_artist";
import Add_blog from "./admin/Pages/Add_blog";
import Manage_blog from "./admin/Pages/Manage_blog";
import Manage_contact from "./admin/Pages/Manage_contact";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin_profile from "./admin/Pages/Admin_profile";
import Profile from "./website/Pages/Profile";
import toast, { Toaster } from "react-hot-toast";
import Artist from "./website/Pages/Artist";
import Single_blog from "./website/Pages/Single_blog";


// const notify = () => toast('Here is your toast.');

function App() {
  return (
  <>

{/* <button onClick={notify}>Make me a toast</button> */}

  <Toaster/>
    <BrowserRouter>
      <Routes>

       {/* website */}

        <Route path="/" element={<><Home/></>}></Route>
        <Route path="/about" element={<><About/></>}></Route>
        <Route path="/artist" element={<><Artist/></>}></Route>
        <Route path="/contact" element={<><Contact/></>}></Route>
        <Route path="/blog" element={<><Blog/></>}></Route>
        <Route path="/login" element={<><Login/></>}></Route>
        <Route path="/singup" element={<><Singup/></>}></Route>
        <Route path="/Profile" element={<><Profile/></>}></Route>
        <Route path="/single_blog/:bid" element={<><Single_blog/></>}></Route>



        {/* admin */}

        <Route path="/dashboard" element={<><Dashboard/></>}></Route>
        <Route path="/add_artist" element={<><Add_artist/></>}></Route>
        <Route path="/manage_artist" element={<><Manage_artist/></>}></Route>
        {/* <Route path="/admin_contact" element={<><Admin_contact/></>}></Route> */}
        <Route path="/manage_contact" element={<><Manage_contact/></>}></Route>
        <Route path="/add_blog" element={<><Add_blog/></>}></Route>
        <Route path="/manage_blog" element={<><Manage_blog/></>}></Route>
        <Route path="/admin_login" element={<><Admin_login/></>}></Route>
        <Route path="/admin_signup" element={<><Admin_signup/></>}></Route>
        <Route path="/admin_profile" element={<><Admin_profile/></>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
