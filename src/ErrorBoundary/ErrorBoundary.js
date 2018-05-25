import React, { Component } from 'react'

class ErrorBoundary extends Component {
state = {
  hasError: false,
  errorMessage: ''
}

// this property is a method that will receive errors if
// they occur; these params are passed into this component
// autiomatically by React
componentDidCatch = (error, info) => {
  // executed whenever a component wrapped in this
  // throws an error
  this.setState({ hasError: true, errorMessage: error })
}

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>
    } else {
      // when accessing props in a component that extends
      // Component, you need to include the "this"
      // "this.props.children" is whatever we wrap
      // inside of our ErrorBoundary Component
      // So this is our default case; but if we get an error
      // our other one will fire.
      return this.props.children
    }
  }
}

export default ErrorBoundary
