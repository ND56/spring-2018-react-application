import React, { Component } from 'react'
import Person from './Person/Person'

class People extends Component {

  // CREATION LIFECYCLE HOOK DEMO **********
  // ***************************************

  constructor(props) {
    super(props)
    console.log('[People.js] Inside Constructor', props)
    // say we want to create a reference to the last person we're creating
    this.lastPersonRef = React.createRef()
  }

  componentWillMount() {
    console.log('[People.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[People.js] Inside componentDidMount()')
  }

  // UPDATE LIFECYCLE HOOK DEMO: PROPS CHANGE **********
  // ***************************************************

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE People.js] Inside componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE People.js] Inside shouldComponentUpdate', nextProps, nextState)
    return nextProps.people !== this.props.people
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE People.js] Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[UPDATE People.js] Inside componentDidUpdate')
    // now we're using a method on the Person element that was referenced
    // here in the People component
    this.lastPersonRef.current.focus()
  }

  render () {
    console.log('[People.js] Inside render()')
    return this.props.people.map((person, index) => {
        return <Person
          click={() => this.props.clicked(index)}
          position={index}
          name={person.name}
          age={person.age}
          key={person.id}
          // authenticated={this.props.isAuthenticated}
          // ^ can get rid of this because we switched to passing global state
          // with context
          forwardedRef={this.lastPersonRef}
          changed={(event) => this.props.changed(event, person.id)} />
      })
  }

}

export default People
