import React from 'react'
import Header from './components/header/header.component'

class NavigationBar extends React.Component {

  endSession = () => {
    this.props.logout()
  }

  render() {
    return (
        <Header title="Establishments Crud" ref={this.myHeader}>
            <span className="user-name">
                {this.props.userData?.user}
            </span>
            <button className="btn btn-primary" onClick={e => this.endSession()}>
                Logout
            </button>
        </Header>
    )
  }
}

export default NavigationBar