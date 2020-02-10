import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
 <div>
Nom: <p className="name">{this.props.nom}</p>
<div className={this.props.online ? "status status-online":"status status-ofline"}>
En ligne :<p className="status-text">{this.props.online ? 'est actuellement en ligne' : 'n’est pas en ligne'}</p>
</div>
<img className="avatar" src={this.props.url}/>

 </div>

          );
    }
}
 
export default Contact;
