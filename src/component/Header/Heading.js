import React, { Component } from 'react';
import {BrowserRouter ,Route,Router,Link,Switch} from 'react-router-dom';
import ejylelogo from "./ejylelogo.png";
//import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import Login from "./Account/Login";
import About from './company/About';
import Home from "./company/Home";
import Register from "./Account/Register";
import Contact from './company/Contact';
import Change from '../../component/Header/Account/Change';
import Reset from './Account/Reset';



class Heading extends Component {
  constructor(props){
    super(props);
    this.state ={

      "IsAuthenticated":true,
     
    
    }
  }
  render() {
    return (
     <div >
        <div  class="shadow-sm p-0 mb-5 bg-white rounded">
      <nav  class="navbar navbar-expand-lg  navbar-light">
      
      <a class="navbar-brand"   href="/"> <img src={ejylelogo}   className="App-logo" alt="Ejyle logo" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button> 
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav  ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/"><h5>Home</h5></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/about"><h5>About</h5></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/contact"><h5>Contact</h5></a>
          </li>  
          {
            this.state.IsAuthenticated !== this. IsAuthenticated? (
            
          <li class="nav-item active">
            <a class="nav-link" href="/login"><h5>Login</h5></a>
          </li>    
           ): null}

           
        </ul>
      
      </div> 
      </nav>
      
      </div>

     
      
 <BrowserRouter>
<div>
<Route exact path="/" component={Home}/>
<Route exact path="/about" component={About}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/register" component={Register}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/reset" component={Reset}/>
<Route exact path="/change" component={Change}/>

</div>
</BrowserRouter>
   </div>
    );
  }
}

export default Heading;
