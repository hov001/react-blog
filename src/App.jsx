import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthId: window.localStorage.getItem('userId'),
      firstName: window.localStorage.getItem('firstName'),
    }

    this.isAuth = this.isAuth.bind(this)
  }

  isAuth(uid = null, firstName) {
    this.setState({
      isAuthId: uid,
      firstName,
    })
  }

  render() {
    const { isAuthId, firstName } = this.state

    return (
      <div className="App">
        <Router>
          <Navbar isAuth={this.isAuth} uid={isAuthId} name={firstName} />
          <Main isAuth={this.isAuth} uid={isAuthId} />
        </Router>
      </div>
    )
  }
}

export default App
