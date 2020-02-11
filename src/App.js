//import React from 'react';
import React, { Component } from 'react';
import './App.css';
import './Contact'
import Contact from './Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      error: null,
      isLoaded: false,
      items: []
     }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=5")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() { 
    return ( 
      <div className="App">
    
      <ul className="status">
          {this.state.items.map(item => (
            <li className={online ? "status-online":"status-offline"} key={item.name.first}>
              <Contact nom={item.name.first} url={item.picture.large} online={online}></Contact>
            </li>
          ))}
        </ul>
      </div>
     );
  }
}
 
export default App;




const nom="toto"
const url="https://placekitten.com/g/64/64"
const online="false"

