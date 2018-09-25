import $ from 'jquery'; 
import "bootstrap/dist/css/bootstrap.css";

$(function() {
     
 
    $("#change_password_error_message").hide();
    $("#change_new_password_error_message").hide();
    $("#change_retype_password_error_message").hide();
    
    
    var error_change_password = false;
    var error_change_new_password = false;
    var error_change_retype_password = false;
    
  
  
  
    $("#form_change_password").focusout(function() {
  
        check_change_password();
        
    });
  
    $("#form_change_new_password").focusout(function() {
  
      check_change_new_password();
      
  });
  
    $("#form_change_retype_password").focusout(function() {
  
        check_change_retype_password();
        
    });
  
    
  
  
    
    function check_change_password() {
    
        var changepassword_length = $("#form_change_password").val().length;
        
        if(changepassword_length < 8) {
            $("#change_password_error_message").html("* At least 8 characters");
            $("#change_password_error_message").show();
            error_change_password = true;
        } else {
            $("#change_password_error_message").hide();
        }
    
    }
  
    function check_change_new_password() {
    
      var changepassword_length = $("#form_change_new_password").val().length;
      
      if(changepassword_length < 8) {
          $("#change_new_password_error_message").html("* At least 9 characters");
          $("#change_new_password_error_message").show();
          error_change_new_password = true;
      } else {
          $("#change_password_error_message").hide();
      }
  
  }
  
  
    function check_change_retype_password() {
    
        var changepassword = $("#form_change_new_password").val();
        var changeretype_password = $("#form_change_retype_password").val();
        
        if(changepassword !=  changeretype_password) {
            $("#change_retype_password_error_message").html("* Passwo don't match");
            $("#change_retype_password_error_message").show();
            error_change_retype_password = true;
        } else {
            $("#change_retype_password_error_message").hide();
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
  
  
    $("#change_password_registration_form").submit(function() {
        
        
      error_change_password = false;
        error_change_new_password = false;
        error_change_retype_password = false;
        
                    
        
        check_change_password();
        check_change_new_password();
        check_change_retype_password();
        
  
       
        
        if(error_change_password == false && error_change_new_password == false && error_change_retype_password == false()) {
            return true;
        } else {
            return false;   
        }
  
    });
  
  });
  