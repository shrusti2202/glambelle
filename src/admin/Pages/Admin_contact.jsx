// import React, { useEffect, useState } from 'react'
// import Menubar from '../Components/Menubar'
// import Footer from '../Components/Footer'
// import axios from 'axios';
// import { toast } from 'react-toastify';

// function Admin_contact() {
    
  
//   const [formvalue, setFormvalue] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     comment: ""
//     });

//   const getform = (e) => {
//     setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
//     console.log(formvalue);
//   }

//   const validation = () => {
//     var result = true;
//     if (formvalue.name === "") {
//       toast.error("Name is required");
//       result = false;
//       return false;
//     }
//     if (formvalue.email === "") {
//       toast.error("Email is required");
//       result = false;
//       return false;
//     }
//     if (formvalue.mobile === "") {
//       toast.error("Mobile is required");
//       result = false;
//       return false;
//     }
//     if (formvalue.comment === "") {
//       toast.error("Comment is required");
//       result = false;
//       return false;
//     }
//     return result;
//   };

//   const submithandel = async (e) => {
//     e.preventDefault(); // stop page reload 
//     if (validation()){
//     const res = await axios.post(`https://beaidal.com/create_contacts.php`, formvalue);
//     //console.log(res);
//     if (res.status == 200) {
//       setFormvalue({ ...formvalue, name: "", email: "", mobile: "", comment: "" });
//       toast.success(res.data.message);
//       return false;
//     }
//   }
// };
//   return (
//     <div>
//       <Menubar />
//       <div className="content-wrapper container" style={{ marginTop: '100px' }}>
//         <div className="container">
//           <div className="row pad-botm">
//             <div className="col-md-12">
//               <h1 className="header-line">Contact with Admin</h1>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-12 col-sm-12 col-xs-12">
//               <div className="panel panel-info">
//                 <div className="panel-heading">
//                   Contact
//                 </div>
//                 <div className="panel-body">
//                   <form role="form" action="" method='post' onSubmit={submithandel}>
//                     <div className="form-group">
//                       <label> Name</label>
//                       <input className="form-control" type="text" name='name' value={formvalue.name} onChange={getform} />
//                     </div>
//                     <div className="form-group">
//                       <label>Email</label>
//                       <input className="form-control" type="email" name='email' value={formvalue.email} onChange={getform}/>
//                     </div>
//                     <div className="form-group">
//                       <label>Number</label>
//                       <input className="form-control" type="number" name='mobile' value={formvalue.mobile} onChange={getform} />
//                     </div>
//                     <div className="form-group">
//                       <label>Comment</label>
//                       <input className="form-control" type="text" name='comment' value={formvalue.comment} onChange={getform} />
//                     </div>

//                     <button type="submit" className="btn btn-info">Submit </button>
//                   </form>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Admin_contact