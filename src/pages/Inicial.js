  
import React, { Component } from 'react'; 
import { Link, withRouter } from "react-router-dom"; 
 
class Inicial extends Component {
  
  constructor() {
    super();
    this.state = {}; 
  }

  componentDidMount(){
    
  }

  render() {
    
    return (
      <div>
        <p>@douglasabnovato</p>
      </div>
    );
  }
}

export default withRouter(Inicial);