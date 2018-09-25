import React, { Component } from 'react';
import {BrowserRouter ,Router,Link,Switch} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import axios from "axios";
import $ from 'jquery'; 




class Register extends Component {
  constructor(props)
  {
    super(props);
    this.state ={

      firstName: '',
    middleName:'',
    lastName:'',
    email:'',
    phone:'',
    password:'',
  
    redirectToNewPage: false
     
    }
}


  handleFirstChange = event => {
    this.setState({ firstName: event.target.value });
  
  }
  handleMiddleChange = event => {
    this.setState({ middleName: event.target.value });
  
  }
  
  handleLastChange = event => {
   
    this.setState({ lastName: event.target.value });
  }
  handleEmailChange = event => {
   
    this.setState({ email: event.target.value });
  }
  handlePhoneChange = event => {
   
    this.setState({ phone: event.target.value });
  }
  handlePasswordChange = event => {
   
    this.setState({ password: event.target.value });
  }
  
  
  
  
  handleSubmit = event => {
    event.preventDefault();
  
   
  
    axios.post(`http://localhost:8005/Adaptive/registration`, {
      
    firstName: this.state.firstName,
    middleName:this.state.middleName,
    lastName: this.state.lastName,
    email:this.state.email,
    phone:this.state.phone,
    password:this.state.password})
  
    
      .then(res => {
        console.log(res);
        
        if(res.data.status="200"){
          this.props.history.push('/login');
          alert("Registration Successful Click ok to Login ");
        }
    
     

      })
     
      .catch(function (error, res) {
        // only get error that gives 400, but not error msg here, res isn't here
        console.log(error);
        console.log("User is already existing with same Email ID please login");
        alert("User Is Already Existing With Same Email ID Please Login");
      });
  }
  




  

  render() { 
    return ( <div className="bod">
      <div class="container">
  <div class="row">
    <div class="col-md-3">
      
    </div>
    
    <div align="center" class="col-md-6">
    <br/>
    <br/>
    <div class="shadow-lg p-3 mb-5 bg-white rounded">
    <form onSubmit={this.handleSubmit}>
    <form class="form-signin">
    
       <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
       <h1 class="h3 mb-2 font-weight-normal" class="headi">User Registration</h1> <br/>

       <label for="inputLastname" class="sr-only">First Name</label>
       <input type="text" id="name" name="firstName" onChange={this.handleFirstChange} class="form-control"  placeholder="* FirstName" required />
       <span class="error_form" id="name_error_message"></span>

       <label for="inputUsername" class="sr-only">Middle Name</label><br/>
       <input type="text" id="form_username"  name="middleName" onChange={this.handleMiddleChange} class="form-control" placeholder=" MiddleName" />
     
      
       <label for="inputUsername" class="sr-only">Lastname Name</label><br/>
       <input type="text" id="form_lastname" name="lastName" onChange={this.handleLastChange} class="form-control" placeholder=" LastName" />
       

       <label for="inputEmail" class="sr-only">Email address</label><br/>
       <input type="text" name="email" onChange={this.handleEmailChange}  id="form_email" class="form-control" placeholder="* Email address" required autofocus/>
       <span class="error_form" id="email_error_message"></span>
<br/>
       <NumberFormat format="+91 ### ### ####" mask="_" id="phone" name="phone" onChange={this.handlePhoneChange} class="form-control" placeholder="* Phone Number" required autofocus/>
       <label for="phoneNumber" class="sr-only">Phone</label>

       <label for="inputPassword" class="sr-only">Password</label><br/>
       <input type="password" name="password" onChange={this.handlePasswordChange} id="form_password" class="form-control" placeholder="* Password" required />
       <span class="error_form" id="password_error_message"></span>

       <label for="inputFirstname" class="sr-only">Confirm Password</label><br/>
       <input type="password" id="retype_password" name="Cpassword" onChange={this.handlCpasswordChange} class="form-control" placeholder="* Confirm Password" required autofocus/>
       <span class="error_form" id="retypepassword_error_message"></span>
       
      

       
       <br/>
     
       
       
       <input type="submit" class="sbmt_btn" value="Create Account" />
<br/>
       
       <br/>

 <Link  to="/">Home</Link>

       <p class="mt-5 mb-3 text-muted"></p>
       </form>
     </form>   
         
   
  
   
   
    
    </div>
    </div>
    <div class="col-md-4">
      {/*side we can use the space later*/}
    </div>
  </div>
</div>
    
    </div> );
  }
}
 
export default Register;


