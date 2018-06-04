// import React from 'react'

const aux = (props) => props.children
// Max was demonstrating a second exception to the need
// to have a wrapping html root element; instead, you
// can create a "higher-order" component; i.e., just
// a component you wrap another component in;
// takeaway here is you want this one to Return
// props.children; Max was going to replace the wrapping
// div in the Cockpit element with this one.
// Note that the children of props here are the html
// elements that the Aux wraps around

export default aux
