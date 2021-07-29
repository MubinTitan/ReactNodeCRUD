
import axios from 'axios';
import { render } from 'ejs';
import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import Editform from './Editform';
import {Link, useHistory, } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

function Fetchdata(props){

    const [data, setData] = useState([])
	
    useEffect(() => {
        axios
      .get('http://localhost:4000/')
      .then(res => {
        console.log(res.data + "done.....");
        setData(res.data);
      })

      },[data]);

      function deleteItem(a){
        axios
        .delete(`http://localhost:4000/delete/${a}`)
        .then(res => {
          console.log(a)
      })};


	//   const history = createHistory({forceRefresh:true});
    //   function editItem(al){
    //     alert(al)
    //     axios
	// 	.get(`http://localhost:4000/edit/${al}`)
	// 	// history.push(`/edit/${al}`)
    //   }
        return (
            <>
                {/* {data.email} */}
                <Table border="2">
                    <thead>
                        <tr>
                        {/* <th>id</th> */}
                        <th>Id</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>phone_no</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                {data.map( data => {
                    return (
                    <tr >
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone_no}</td>
                    <td><button><Link to={{pathname:`/edit/${data.id}`}}>Edit</Link></button></td>
                    <td><button onClick={() => {deleteItem(data.id)}}>Delete</button></td> 
                    </tr>
                    )
})             }
                    </tbody>
                </Table>
            </>
        )
    }

export default Fetchdata;


// useEffect(async () => {
//     axios
//       .get('http://localhost:4000/data')
//       .then(res => {
//         console.log(res.data + "done.....");
//         setData(res.data);
//       })
//   });

 


//   return (
//     <>

//       <center>
//         <h1 style={{ textAlign: "center" }}>Your Data</h1>
        
//         {/* <div class="wrap">
//           <div class="search">
//             <input type="text" class="searchTerm" id="input_text" placeholder="Search for..." onChange={event => {setSearch(event.target.value)}}></input>
//             <button type="submit" class="searchButton">
//               <i class="fa fa-search"></i>
//             </button>
//           </div>
//         </div> */}
        
//         {/* <input
//           placeholder="Search for..."
//           onChange={event => {setSearch(event.target.value)}}
//         /> */}


//         <table>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//             {/* <th>Message</th> */}
//             {/* <th colSpan="2">Operations</th> */}
//           </tr>
//           {/* {/ <h2> { this.state.ourdata.map(d => <li>{d.Name}</li>)}</h2> /} */}

//           {data.map((data, index) => {
//             return (

//               <tr key={index}>
//                 <td>{data.name}</td>
//                 <td>{data.email}</td>
//                 <td>{data.phone_no}</td>
//                 {/* <td>{data.Message}</td>
//                 <td><button >Edit</button></td> */}
//                 {/* <td><button  onClick={() => {deleteItem(data.id) }}>Delete</button></td> */}
//               </tr>



//             );
//           })}
//         </table>
//       </center>
//     </>


//   );

