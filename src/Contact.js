import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         
         }
    }

   

    render() { 
        return (
 <div className="Contact" >
<p className="name">{this.props.nom}</p>
<br></br>
<img className="avatar" src={this.props.url}/>
<div className={this.props.online ? "status status-online":"status status-ofline"}>
<p className="status-text">{this.props.online ? 'en ligne' : 'n’est pas en ligne'}</p>
</div>

 </div>

          );
    }
}
 
export default Contact;
