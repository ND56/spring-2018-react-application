import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // app state
  state = {
    people: [
      { id: 'ada3', name: 'Max', age: 28 },
      { id: 'af2320', name: 'Nick', age: 28 },
      { id: 'ki37f', name: 'Em', age: 29 }
    ],
    showPeople: false
  }

  // event handlers
  nameChangedHandler = (event, id) => {
    // first find the index of the person you want to update
    const personIndex = this.state.people.findIndex(p => p.id === id)
    // make a shallow copy of the person you want to update before mutating;
    // each individual person is an object; i.e., a reference type.
    const person = {
      ...this.state.people[personIndex]
    }
    // edit that person
    person.name = event.target.value
    // make shallow copy of the people array to inject our updated person into
    const people = [...this.state.people]
    // inject the updated person
    people[personIndex] = person
    // finally edit state and set people array to updated array
    this.setState({ people: people })
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people]
    people.splice(personIndex, 1)
    this.setState({ people: people })
  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople
    this.setState({showPeople: !doesShow})
  }

  // Render Method
  render() {

    // styling objects
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    // Render helpers
    let people = null
    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
      buttonStyle.backgroundColor = 'red'
    }

    const classes = []
    if (this.state.people.length <= 2) {
      classes.push('red')
    }
    if (this.state.people.length <= 1) {
      classes.push('bold')
    }

    // Return JSX
    return (
      <div className="App">

        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>

        <button
          style={buttonStyle}
          onClick={this.togglePeopleHandler}>Toggle People</button>

        {people}

      </div>
    );
  }
}

export default App;
