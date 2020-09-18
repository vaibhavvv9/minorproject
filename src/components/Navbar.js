import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, TextField, Grid } from '@material-ui/core';
class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
        <div>
     <Button style={{zIndex: "2", position: "absolute"}}>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </Button>
        <Button>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </Button>
        </div>
    )

    const userLink = (
      <div className="navbar-nav">
        <Button className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </Button>
        <Button className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </Button>
      </div>
    )

    return (
<div>
    <div className="header" style={{width: "100%",height: " 60px", background: "#000066"}}>
       <div className="">

       </div>
        </div>
       
        </div>
    )
  }
}

export default withRouter(Landing)