import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'; 
import { SearchBox } from './components/search-box/search-box.component';
import Pokedex from './pokedex.json'
import './App.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      monsters: Pokedex,
      searchField: ''
    };
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({monsters: users}));
  // }

  handleChange = e => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.english.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1> Pocket Monsters Roledex </h1>
        <SearchBox
          placeholder='search monsters' 
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters}> 
        {
        this.state.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name.english} </h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
