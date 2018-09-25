import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Submit from './Submit';
import $ from 'jquery';
//import "bootstrap/dist/css/bootstrap.css";

$(function() {
     
 
  $("#password_error_message").hide();
  $("#new_password_error_message").hide();
  $("#retype_password_error_message").hide();
  
  
  var error_password = false;
  var error_new_password = false;
  var error_retype_password = false;
  



  $("#form_password").focusout(function() {

      check_password();
      
  });

  $("#form_new_password").focusout(function() {

    check_new_password();
    
});

  $("#form_retype_password").focusout(function() {

      check_retype_password();
      
  });

  


  
  function check_password() {
  
      var password_length = $("#form_password").val().length;
      
      if(password_length < 8) {
          $("#password_error_message").html("* At least 8 characters");
          $("#password_error_message").show();
          error_password = true;
      } else {
          $("#password_error_message").hide();
      }
  
  }

  function check_new_password() {
  
    var password_length = $("#form_new_password").val().length;
    
    if(password_length < 8) {
        $("#new_password_error_message").html("* At least 8 characters");
        $("#new_password_error_message").show();
        error_new_password = true;
    } else {
        $("#password_error_message").hide();
    }

}


  function check_retype_password() {
  
      var password = $("#form_new_password").val();
      var retype_password = $("#form_retype_password").val();
      
      if(password !=  retype_password) {
          $("#retype_password_error_message").html("* Passwords don't match");
          $("#retype_password_error_message").show();
          error_retype_password = true;
      } else {
          $("#retype_password_error_message").hide();
      }
  
  }

  


  $("#show_hide_password a").on('click', function(event) {
      event.preventDefault();
      if($('#show_hide_password input').attr("type") == "text"){
          $('#show_hide_password input').attr('type', 'password');
          $('#show_hide_password i').addClass( "fa-eye-slash" );
          $('#show_hide_password i').removeClass( "fa-eye" );
      }
      else if($('#show_hide_password input').attr("type") == "password"){
          $('#show_hide_password input').attr('type', 'text');
          $('#show_hide_password i').removeClass( "fa-eye-slash" );
          $('#show_hide_password i').addClass( "fa-eye" );
      }
  });


  $("#registration_form").submit(function() {
      
      
      error_password = false;
      error_new_password = false;
      error_retype_password = false;
      
                  
      
      check_password();
      check_new_password();
      check_retype_password();
      

     
      
      if(error_password == false && error_new_password == false && error_retype_password == false()) {
          return true;
      } else {
          return false;   
      }

  });

});

class Change extends Component{
  render()
  {
    return(
      
      
    <Router>
    <div>
 
 <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand">EJYLE</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
      
        <li><Link to={'/Home'}>HOME</Link></li>
        
        <li><a href="#">CAREER-GUIDANCE</a></li>
        <li><a href="#">ABOUT-US</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      
      <ul class="nav navbar-nav navbar-right">
        
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span> LOGIN <span class="caret"></span></a>
          <ul class="dropdown-menu">
          <br/>
          <li><Link to={'/Next'}>Change password</Link></li>
          <br/>
          <li><Link to={'/Submit'}>Logout</Link></li>
          <br/>
          </ul>
          </li>
          </ul>
          </div>
          </div>
          </nav>
           <Switch>
              
                <Route exact path='/Submit' component={Submit}/>
                <Route exact path='/Home' component={Home}/>
           </Switch>
              
         </div>     
      </Router>
                
              
    );
  
    }
}
export default Change;
