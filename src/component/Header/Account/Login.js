
import React, { Component } from 'react';
import {BrowserRouter ,Router,Link,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import Register from './Register';
import { Script } from './script';
import $ from 'jquery'; 

class Login extends Component {
  state = { 
    email:'',
    password:'',
   }

   handleEmailChange = event => {
   
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = event => {
   
    this.setState({ password: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();
    var self=this;
  axios.post(`http://localhost:8005/Adaptive/login`, {
      
  
    email:this.state.email,
   
    password:this.state.password})
  
  

 
    .then(res => {
      console.log(res);
    
        if(res.data.status="200")
        {
      this.props.history.push('/change');
      alert("success")
      }
      })
      .catch(function (error, res) {
        // only get error that gives 400, but not error msg here, res isn't here
        console.log(error);
        console.log("Entered Email or password is invalid");
        alert("Entered Email or Password is Invalid");
      });
      
    }
  
  
  


  render() { 
    return (  <div>

   


    <div>
      <div class="container">
  <div class="row">
    <div class="col-sm-3">
      
    </div>
    
    <div align="center" class="col-sm-6">
    <br/>
    <br/>
    <div class="shadow-lg p-3 mb-5 bg-white rounded">
   
    <form onSubmit={this.handleSubmit}>
         <form align="center" class="form-signin">
        
        <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
        <h1 class="h3 mb-2 font-weight-normal"    class="headi">Login Page</h1> <br/>
        <label for="inputEmail" class="sr-only" >Email or Phone</label>
        <input type="text" name="email" onChange={this.handleEmailChange} class="form-control" id="form_email" placeholder="* Email or Phone" required autofocus/>
        <span class="error_form" id="email_error_message"></span>
        <br/>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" name="Password" onChange={this.handlePasswordChange} id="inputPassword" class="form-control" placeholder="* Password" required />
        <div class="checkbox mb-3">
        <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
        <br/>
       
        <a className="font-color" href="/reset"><h5>Forgot Password ?</h5></a>  
         
        </div>
        <button class="btn btn-primary" type="submit">Login</button>
        <br/>
        <a  href="/register"><h7>Register</h7></a>  
        

</form>
        
</form>
    </div>
    </div>
    <div class="col-sm-3">
      {/*side we can use the space later*/}
    </div>
  </div>
</div>
    
    </div>
    </div> );
  }
}
 
export default Login;

