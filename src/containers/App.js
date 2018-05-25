import React, { Component } from 'react';
import classes from './App.css';
import People from '../components/People/People'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  // app state ******************
  // ****************************
  state = {
    people: [
      { id: 'ada3', name: 'Max', age: 28 },
      { id: 'af2320', name: 'Nick', age: 28 },
      { id: 'ki37f', name: 'Em', age: 29 }
    ],
    showPeople: false
  }

  // event handlers ***********************
  // **************************************
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

  // Render Method ***********************
  // *************************************
  render() {
    // Render helpers
    let people = null
    if (this.state.showPeople) {
      people = <People
        people={this.state.people}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    // Return JSX
    return (
      <div className={classes.App}>

        <Cockpit
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePeopleHandler} />
          
        {people}

      </div>
    );
  }
}

export default App;
