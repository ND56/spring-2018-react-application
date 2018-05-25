import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
    // Render helpers
    let btnClass = ''
    let people = null
    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            // Here we're wrapping our Person Component in our ErrorBoundary
            // Component so we can handle thrown errors
            // This is a higher-order Component; a Component we wrap others
            // in with the goal of handling errors they might throw
            // Need to move the key property to the outer-most element,
            // so need to move it to the ErrorBoundary Comnponent
            // NOTE: in production, you won't see the ErrorBoundary component,
            // but it will work in production. You shouldn't be wrapping
            // everything in these, just wrap code you think MIGHT fail
            // and you can't control that; good tool to show a custom error
            // message and not have the entire application fail
            return <ErrorBoundary key={person.id}>
              <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      )
      btnClass = classes.Red
    }

    // need to update how we refer to these classes; no longer strings
    const assignedClasses = []
    if (this.state.people.length <= 2) {
      assignedClasses.push( classes.red )
    }
    if (this.state.people.length <= 1) {
      assignedClasses.push( classes.bold )
    }

    // Return JSX
    return (
      <div className={classes.App}>

        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>

        <button
          className={btnClass}
          onClick={this.togglePeopleHandler}>Toggle People</button>

        {people}

      </div>
    );
  }
}

export default App;
