import React, { Component } from 'react'
import { login } from './UserFunctions'
import front from '../assets/images/front.jpg'
import back from '../assets/images/back.jpg'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      role: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
   // console.log(this.state[e.target.name])
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state.email,this.state.password,this.state.role)
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password,
      role:this.state.role,
    }

    login(user).then(res => {
      if (res) {
       if(this.state.role==="Student")
        this.props.history.push(`/student`)
        else if (this.state.role==="Teacher")
        this.props.history.push(`/teacher`)
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{ width: "100%", height: "100%"}}>
        <img src={back} alt="" style={{width: "100%", zIndex: "-1", position: "absolute", height: "100%"}} />
        <div 
          style={{fontFamily: "Roboto", color: "black", fontSize: "40px", width: "100%"}}>
            Faciliating Online Examination with Automated Grading</div>
          <div className="col-md-6 mt-5 mx-auto" style={{display: "flex",  alignItems: "center"}}>
          
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="" style={{color: "black", fontFamily: "sans-serif", fontSize:"28px", marginLeft: "70px"}}>Please sign in</h1>
              <div className="form-group">
              <label htmlFor="email" style={{color: "black", fontFamily: "cursive", fontSize:"20px",margin: "15px",  marginTop: "35px" ,float: "left"}}>Email </label>
                <TextField
           
                  id="filled-required"
                  type="email"
                  className="form-control"
                  name="email"
                  style={{margin: "25px 25px 25px 62px", }}
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                  variant="filled"
 
                />
                
              </div>
              <div className="form-group">
              <label htmlFor="password" style={{color: "black", fontFamily: "cursive", fontSize:"20px",margin: "15px",  marginTop: "35px" ,float: "left"}}>Password</label>
                <TextField
          id="outlined-password-input"
                  type="password"
                  className="form-control"
                  autoComplete="current-password"
                  variant="filled"
                  name="password"
                  style={{margin: "25px ", float: "left"  }}
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                
              </div>
              <div className="form-group">
              <label htmlFor="role" style={{color: "black", fontFamily: "cursive", fontSize:"20px",margin: "15px", marginTop: "35px" , float: "left"}}>Role</label>
                <TextField
                  id="outlined-password-input"
                  type="text"
                  variant="filled"
                  className="form-control"
                  name="role"
                  style={{margin: "25px 25px 25px 70px", float: "left" }}
                  placeholder="Student or Teacher"
                  value={this.state.role}
                  onChange={this.onChange}
                />
                
              </div>
              <Button
                type="submit"
                variant="contained" color="primary"
               style={{margin: "15px 15px 15px 125px", background: "#35B4FF", color: "black"}}
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </Button>
              <div style={{color: "black", fontFamily: "cursive", fontSize:"20px",margin: "15px", marginLeft: "35px" ,}}> Dont't Have An Account ?</div>
              <Button
              onClick={() => window.location = "/register"}
                variant="contained" color="primary"
               style={{margin: "15px 15px 15px 125px", background: "#35B4FF", color: "black"}}
                className="btn btn-lg btn-primary btn-block"
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login