import React, { Component } from 'react'
// import users from '../users'

import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class UserDetails extends Component {

  state = {
    userId: this.props.params.userId,
  }

  render() {
    return (
      <div>UserDetails</div>
    )
  }
}

export default withParams(UserDetails)
