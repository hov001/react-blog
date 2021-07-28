import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthId: null,
    }

    this.isAuth = this.isAuth.bind(this)
  }

  isAuth(uid = null) {
    this.setState({
      isAuthId: uid,
    })
  }

  render() {
    const { isAuthId } = this.state

    return (
      <div className="App">
        <Router>
          <Navbar isAuth={this.isAuth} uid={isAuthId} />
          <Main isAuth={this.isAuth} uid={isAuthId} />
        </Router>
      </div>
    )
  }
}

export default App
