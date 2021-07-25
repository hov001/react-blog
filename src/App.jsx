import React from 'react'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<SignIn />*/}
      <SignUp />
    </div>
  )
}

export default App
