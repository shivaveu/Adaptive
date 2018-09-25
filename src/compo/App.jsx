import React, { Component } from 'react';
import Reset from './Reset';
class App extends Component{
  render()
  {
    return(
    <div>
        
      <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">EJYLE</a>
              </div>
              <ul class="nav navbar-nav">
                <li ><a href="#"><b>HOME</b></a></li>
                <li><a href="#"><b>REGISTER</b></a></li>
                <li><a href="#"><b>LOGIN</b></a></li>
              </ul>
            </div>
      </nav>
        <Reset/>
    </div>
    );
  
    }
}
export default App;
