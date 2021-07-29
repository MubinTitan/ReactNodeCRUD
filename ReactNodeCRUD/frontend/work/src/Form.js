
import logo from './logo.svg';
import {Button} from 'react-bootstrap'
import React, { Component } from 'react'
import InputGroupWithExtras from 'react-bootstrap/esm/InputGroup';
import axios from 'axios';

class Form extends Component {

    //   constructor() {
    //     super();
    //     this.state = {
    //       topicBox: null,
    //       payloadBox: null
    //     };
        
    //     this.publish = this.publish.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    //   }
      
    //   handleChange({ target }) {
    //     this.setState({
    //       [target.name]: target.value
    //     });
    //   }
    
    //   publish() {
    //     console.log( this.state.topicBox, this.state.payloadBox );
    //   }
      
    //   render() {
    //     return <div>
    //       <input 
    //         type="text" 
    //         name="topicBox" 
    //         placeholder="Enter topic here..." 
    //         value={ this.state.topicBox }
    //         onChange={ this.handleChange } 
    //       />
          
    //       <input 
    //         type="text" 
    //         name="payloadBox" 
    //         placeholder="Enter payload here..."
    //         value={ this.state.payloadBox } 
    //         onChange={ this.handleChange } 
    //       />
          
    //       <button value="Send" onClick={ this.publish }>Publish</button>
    //     </div>
    //   }
    constructor(props) {
      super(props);
      this.state = {name: '',
                    address : ''
                    };
  
      // this.handleChange = this.handleChange.bind(this);

      // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange({ target }) {
    //     this.setState({
    //       [target.name]: target.value
    //     });
    //   }
  //   handlenameChange = event => {
  //     this.setState({name: event.target.value});
  //   }
  
  //  handleaddressChange = event => {
  //     this.setState({address: event.target.value});
  //   }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


    handleSubmit(event) {
      const { name, address } = this.state;
    
        const Data = {
            name,
            address
        };
    //   var user = {

    //     name: this.state.name, 
    //     address: this.state.address
    // }

    axios
          .post('http://localhost:4000/add', Data)
          .then(() => 
          console.log('data Created'))
          .catch(err => {
            console.error(err);
          });

          this.refs.form.reset();
      };


      // console.log(this.state)
      // event.preventDefault();
      // fetch('http://localhost:4000/add', {
      //    method: 'Post',
      //    headers: {'Content-Type':'application/json'},
      //    body: JSON.stringify(
      //       Data

      //    )
      // });
    // }

  
    render() {
      const { classes } = this.props;
    const { name,address} = this.state;

    
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name: 
              <input type="text" name="name" onChange={this.handleinputChange} />
            </label>
            <p>Address : <input type="text" name="address" id="address" onChange={this.handleinputChange}></input> </p>
            <input type="submit" value="Submit" />
          </form>
          {/* <h1>{this.props.name}</h1> */}
        </>
      );
    }
  }



export default Form;

