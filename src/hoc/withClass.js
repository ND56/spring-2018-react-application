import React, { Component } from 'react'

const withClass = (WrappedComponent, className) => {
  return class extends Component {
    render () {
      return (
        <div className={className}>
          {/* When you have a higher-order component, the reference won't
          be automatically passed with you pass props, you have to
          manually pass the reference like this */}
          <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
        </div>
      )
    }
  }
}

export default withClass
