import $ from 'jquery'; 
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import React, { Component}  from 'react';


$(function() {
	 
	$("#name_error_message").hide();
	$("#username_error_message").hide();
	$("#password_error_message").hide();
	$("#retypepassword_error_message").hide();
	$("#email_error_message").hide();

	var error_name=false;	
	var error_username = false;
	var error_password = false;
	var errorretype_password = false;
	var error_email = false;


	$("#name").focusout(function() { 

		check_name();
		
	});



	$("#form_username").focusout(function() {

		check_username();
		
	});

	$("#form_password").focusout(function() {

		check_password();
		
	});

	$("#retype_password").focusout(function() {

		check_retype_password();
		
	});

	$("#form_email").focusout(function() {

		check_email();
		
	});


	function check_name() {
		
		var pattern = new RegExp(/[a-zA-Z.-]+[a-zA-Z]/);

		
		if(pattern.test($("#name").val())) {
			$("#name_error_message").hide();
		
		} else {
			
			$("#name_error_message").html("* Only characters");
			$("#name_error_message").show();
			
			error_name = true;
			

		}
	
	}




	function check_username() {
	
		var username_length = $("#form_username").val().length;
		
		if(username_length < 5 || username_length > 20) {
			$("#username_error_message").html("* Should be between 5-20 characters");
			$("#username_error_message").show();
			error_username = true;
		} else {
			$("#username_error_message").hide();
		}
	
	}

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

	function check_retype_password() {
	
		var password = $("#form_password").val();
		var retype_password = $("#retype_password").val();
		
		if(password !=  retype_password) {
			$("#retypepassword_error_message").html("* Passwords don't match");
			$("#retypepassword_error_message").show();
			errorretype_password = true;
		} else {
			$("#retypepassword_error_message").hide();
		}
	
	}

	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#form_email").val())) {
			$("#email_error_message").hide();
		} else {
			$("#email_error_message").html("* Invalid email address");
			$("#email_error_message").show();
			error_email = true;
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
		
		error_name = false;
		error_username = false;
		error_password = false;
		errorretype_password = false;
		error_email = false;
					
		check_name();
		check_username();
		check_password();
		check_retype_password();
		check_email();

		
		
		if(error_name = false && error_username == false && error_password == false && errorretype_password == false && error_email == false) {
			return true;
		} else {
			return false;	
		}

	});

});
