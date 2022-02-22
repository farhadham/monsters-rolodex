import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // constructor runs first before anything gets called
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      //makes it array
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    //we want to do something right after we setState, we can add function for the other input
    this.setState({ searchField: e.target.value });
  };

  render() {
    //Creating a copy of original state
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        {/* Just a presentational component that styles the input and then it takes any functionality it might need in it handleChange propert*/}
        <SearchBox
          placeholder="search monsters"
          //basically now onChange = (e) => ...
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
