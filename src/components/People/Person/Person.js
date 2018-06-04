import React, { Component } from 'react';
import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'

class Person extends Component {

  // CREATION LIFECYCLE HOOK DEMO **********
  // ***************************************

  constructor(props) {
    super(props)
    console.log('[Person.js] Inside Constructor', props)
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()')
  }

render () {
  console.log('[Person.js] Inside render()')
  return (
    <Aux>
      <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
      <p>{this.props.children}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name} />
    </Aux>
  )
}

}

// There may be times where you want to add validators for your props; so,
// e.g., you might want to ensure that the age prop that is received is a number
// and the name prop is a string, etc. We use a third-party package for that
// called: "prop-types" --> npm install prop-types

export default withClass(Person, classes.Person)
