import React, { Component } from 'react';
import './customers.css';

class EpisodetwentyFive extends Component {


  constructor(props) {
    super(props);

    this.state = {
      character: [],
      loading: false,
      characters: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://rickandmortyapi.com/api/episode/25')
      .then(response => response.json())
      .then(response => {
        const arr = []
        response.characters.map(data => {
         arr.push(fetch(data))
        })
        return Promise.all(arr)
      })
      .then(res => {
        const arr = []
        res.map(d => {
          arr.push(d.json())
        })
        return Promise.all(arr)
      })
      .then(characters => {
        this.setState({ characters, loading: false }, () => {
          console.log(this.state.characters)
        })
      })
  }


  render() {

    const { loading, characters } = this.state;



    if (loading) {
      return <p>Loading ... </p>;
    }

    // if (character.characters) {
    //   for (var i = 0; i < character.characters.length; i++) {
    //     // console.log(character.characters[i]);
    //   }
    // }


    return (
      <div class="container">
      {characters.map(({ name, status, species, image })=> {
        return(
          <div class="row">
          <img className="image" src={ image } />
          <div> Name: {name} </div>
          <div> Status: {status}</div>
          <div> Species: {species}</div>
          <div> Episode: </div>
          <div className="sodeName1"> Vindicators 3: The Return of Worldender</div>
          </div>
        )
      })}

      </div>
    );


  }
}

export default EpisodetwentyFive;
