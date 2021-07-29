// import axios from 'axios';
// import React,{useState} from 'react'
// import { useHistory,useParams } from 'react-router-dom';

// function Editform() {
//     const { id } = useParams();

//     const [Values, setValues] = useState({
//         name:'',
//         email:'',
//         phone_no:'',
//     })
//     const submit = (e) =>{
//         e.preventDefault();
//         axios
//         .post('http://localhost:4000/edit',Values)
//         .then(() => {
//             console.log('data Created')
//             setValues({
//                 name:'',
//                 email:'',
//                 phone_no:'',
//             })
//         }
//        )
//     console.log(Values)
//     }
//     const handle = (e) =>{
//         setValues({
//             ...Values,
//             [e.target.name]: e.target.value
//           });
//     }
//     return (
       
//             <>
//                     <h1>Edit Page</h1>

//                     <form  onSubmit={submit}>
//                         <input type="text" name="name" value={Values.name} onChange={handle} placeholder="Enter Name"/><br/>
//                         <input type="text" name="email" value={Values.email} onChange={handle} placeholder="Enter Email"/><br/>
//                         <input type="text" name="phone_no" value={Values.phone_no} onChange={handle} placeholder="Enter phone_no" /><br/><br/>
//                         <button type="submit" >Submit</button>
//                     </form>
//             </>
//     )
// }

// export default Editform;



import React, { useState, useEffect } from "react";
import axios from "axios";
// require("history")
import { useHistory, useParams } from "react-router-dom";
 
const Editform = () => {
   
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
  
 
  const [user ,setUser] = useState({
      name:"",
      email:"",
      phone_no:"",
  })
 
 
  const { name, email, phone_no } = user;
 
  const onInputChange = e => {
    setUser({ ...user,[e.target.name]: e.target.value });
  };
 
  useEffect(() => {
    loadUser();
  }, []);
 
   
  const updateEmployee = async e => {
      console.log(user)
    e.preventDefault();
    await axios.post(`http://localhost:4000/update/${id}`, user);
    history.push("/");
  };
 
  const loadUser =  () => {
    fetch(`http://localhost:4000/edit/${id}`,{
            method: "GET",
          })
            .then((response) => response.json())
            .then((result) => {
                console.log(result[0].name);
        setUser({
                    id: id,
                    update: true,
                    name: result[0].name,
                    email: result[0].email,
                    phone_no: result[0].phone_no, 
                });
            })
            .catch((error) => console.log("error", error));
  };
 
  return (
    <div className="container">
     <div className="row mt-4"> 
      <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
        <h4 className="text-center mb-4">Edit A user</h4>
       
          <h5 className="text-success">user ID : {user.id} </h5>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Description"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Description"
              name="phone_no"
              value={phone_no}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button onClick={updateEmployee} className="btn btn-secondary btn-block">Update Employee</button>
       
       </div>
      </div> 
    </div>
  );
};
 
export default Editform;