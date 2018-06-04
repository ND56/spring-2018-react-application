import React, { Component } from 'react'

// if you wrap your components in a higher-order component like this, where you
// wrap the export statement of the component, your props get screwy
// so, you just need to pass on the existing props in here
// take advantage of ES6 operator; props is an object of key-value pairs
// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   )
// }

// in higher-order components that are functions that return components,
// in addition to function, you can also return a class-based component:
// difference with other stateful components is, as you can see, no name;
// it's an anonymous class; returning a class factory here

const withClass = (WrappedComponent, className) => {
  return class extends Component {
    render () {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default withClass
