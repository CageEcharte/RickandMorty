import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {


    constructor(props) {
      super(props);

      this.state = {
        character: [],
        loading: false,

      };
    }

    componentDidMount() {
      this.setState({ loading: true });
        fetch('https://rickandmortyapi.com/api/episode/28')
        .then(response => response.json())
        .then(response => this.setState({ character: response, loading: false }));
    }


  render() {

    const {loading, character} = this.state;



       if (loading) {
           return <p>Loading ... </p>;
         }

if(character.characters){
  for(var i = 0; i < character.characters.length; i++){
    console.log(character.characters[i]);
  }
}


    return (
      <div>
        {character.name}
      </div>
    );


  }
}

export default Customers;
