import React from 'react';
import classes from './Person.css'

const person = (props) => {
  // example code to throw an error if we know something could go wrong but
  // it's out of our control; will throw to our ErrorBoundary component
  // because we wrap our Person component inside the ErrorBoundary component.
  const rnd = Math.random()

  if (rnd > .7) {
    throw new Error('Something went wrong')
  }

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person
