import React from 'react'
import classes from './Cockpit.css'
// import Aux from '../../hoc/Aux'

const cockpit = (props) => {
  const assignedClasses = []
  let btnClass = ''

  if (props.showPeople) {
    btnClass = classes.Red
  }
  if (props.people.length <= 2) {
    assignedClasses.push( classes.red )
  }
  if (props.people.length <= 1) {
    assignedClasses.push( classes.bold )
  }

  return (
    // <Aux>
      <div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>

        <button
          className={btnClass}
          onClick={props.clicked}>Toggle People</button>
      </div>
    // </Aux>
  )
}

export default cockpit
