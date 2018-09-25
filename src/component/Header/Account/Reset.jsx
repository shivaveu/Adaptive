import $ from 'jquery'; 
import React  from 'react';
//import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

$(function() {
     
    
    $("#forgot_email_error_message").hide();

    
    var forgot_error_email = false;


    
    $("#forgot_form_email").focusout(function() {

        check_forgot_email();
        
    });


   

    function check_forgot_email() {

        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    
        if(pattern.test($("#forgot_form_email").val())) {
            $("#forgot_email_error_message").hide();
        } else {
            $("#forgot_email_error_message").html("* Invalid email address");
            $("#forgot_email_error_message").show();
            forgot_error_email = true;
        }
    
    }



    $("#forgot_registration_form").submit(function() {
        
          
        forgot_error_email = false;
                    
        
        check_forgot_email();

       
        
        if(forgot_error_email == false) {
            return true;
        } else {
            return false;   
        }

    });

});


class Reset extends React.Component {



 state = { 
    email:'',
   
   }

   handleEmailChange = event => {
   
    this.setState({ email: event.target.value });
  }

 


  handleSubmit = event => {
    event.preventDefault();
    
  axios.post(`http://localhost:8005/Adaptive/forgot`, {
      
  
    email:this.state.email,
   
   })
  
  

 
    .then(res => {
      console.log(res);
      
      if(res.data.status="200")
      {
      this.props.history.push('/login');
      alert("Your password has been sent to registered Email Address")
      }
      })
      .catch(function (error, res) {
        // only get error that gives 400, but not error msg here, res isn't here
        console.log(error);
        console.log("Not a registered Email Address");
      alert("Not a registered Email Address");
      });
    }
  
  
  


  

  render() {
    return (

        <div class="container">
        <div class="row">
          <div class="col-sm-3">
        {/* left side space*/}
          </div>
          <div align="center" class="col-sm-6">
          <br/>
          <br/>
          <br/>
          <br/>
          <div>
          <div class="shadow-lg p-3 mb-5 bg-white rounded">
          <form onSubmit={this.handleSubmit}>
           <form class="form-signin">
              <br/>
              
               <h><b>RESET PASSWORD</b></h>
            <br/>
            <br/>
            <p>We can help you reset your password using email address linked to your account.</p>
            
                  <input type="text" name="email" onChange={this.handleEmailChange} id="forgot_form_email" class="form-control"   required/>
                  <span class="error_form" id="forgot_email_error_message"></span>
                
            <br/>
            <br/>
                    <button class="btn btn-primary" type="submit">Reset</button>
            <br/>
            <br/>
            
            </form>
            </form>
            </div>
           </div>
          </div>
          <div class="col-sm-3">
           {/*  Right space*/}
          </div>
        </div>
      </div>
      
    );
  }
}


  export default Reset;