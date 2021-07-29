import axios from 'axios';
import React,{useState} from 'react'
import Fetchdata from './Fetchdata';
// import {Link} from "react-router-dom";


function Insertform() {
    const [Values, setValues] = useState({
        name:'',
        email:'',
        phone_no:'',
    })
    const submit = (e) =>{
        e.preventDefault();
        axios
        .post('http://localhost:4000/save',Values)
        .then(() => {
            console.log('data Created')
            setValues({
                name:'',
                email:'',
                phone_no:'',
            })
        }
       )
    console.log(Values)
    }

    const handle = (e) =>{
        setValues({
            ...Values,
            [e.target.name]: e.target.value
           
          });
    }

    return (

            <>
                <h1>Register Page</h1>
                <form  onSubmit={submit}>
                    <input type="text" name="name" value={Values.name} onChange={handle} placeholder="Enter Name"/><br/>
                    <input type="text" name="email" value={Values.email} onChange={handle} placeholder="Enter Email"/><br/>
                    <input type="text" name="phone_no" value={Values.phone_no} onChange={handle} placeholder="Enter phone_no" /><br/><br/>
                    <button type="submit">Submit</button>
                </form>
                <Fetchdata /> 
            </>
       
    )
}

export default Insertform;
