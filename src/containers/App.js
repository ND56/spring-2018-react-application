import React, { Component } from 'react';
import classes from './App.css';
import People from '../components/People/People'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux'
// lower case because not a functional component
import withClass from '../hoc/withClass'

class App extends Component {

  // CREATION LIFECYCLE HOOK DEMO **********
  // ***************************************

  constructor(props) {
    super(props)
    console.log('[App.js] Inside Constructor', props)
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }

  // UPDATE LIFECYCLE HOOK DEMO: STATE CHANGE **********
  // ***************************************************

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState)
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate')
  }


  // app state ******************
  // ****************************
  state = {
    people: [
      { id: 'ada3', name: 'Max', age: 28 },
      { id: 'af2320', name: 'Nick', age: 28 },
      { id: 'ki37f', name: 'Em', age: 29 }
    ],
    showPeople: false,
    toggleClicked: 0
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
    this.setState( (prevState, props) => {
      return {
        showPeople: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  // Render Method ***********************
  // *************************************
  render() {
    console.log('[App.js] Inside render()')
    console.log(React.version)
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
      <Aux>
        <Cockpit
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePeopleHandler}
          appTitle={this.props.title} />

        {people}
      </Aux>
    );
  }
}

// don't wrap JSX in this because it's not a component; wrap your App in the
// function at the export
export default withClass(App, classes.App);
