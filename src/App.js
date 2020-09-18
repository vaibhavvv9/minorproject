import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Student from './components/Student'
import Teacher from './components/Teacher'
import Grading from './components/Grading'
import Result from './components/Result'
import Examination from './components/Examination'
class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="App">
        
         
          <Route exact path="/" component={Landing} />
          <div className="container">
          <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/student" component={Student} />
            <Route exact path="/teacher" component={Teacher} />
            <Route exact path="/grading" component={Grading} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/examination" component={Examination} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App