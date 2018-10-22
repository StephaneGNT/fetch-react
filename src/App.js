import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GenerateQuote from './GenerateQuote.jsx'
import DisplayQuote from './DisplayQuote.jsx'

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      quote:{
        quote:"Click to get a quote",
        character:"",
        image:"http://images.critictoo.com/wp-content/uploads/2016/11/The-Simpsons-Saison-30.jpg",
      }
    };

  }

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          quote: data[0],
        });
    });
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
            <GenerateQuote
              getNewQuote={() =>  this.getQuote()}
            />
            <DisplayQuote  
              quote={this.state.quote}  
            />
        </div>
      </div>
    );
  }
}

export default App;
