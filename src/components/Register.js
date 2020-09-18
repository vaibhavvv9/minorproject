import React, { Component } from 'react'
import { register } from './UserFunctions'
import back from '../assets/images/back.jpg'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      role: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="contain" >
        <div className="row" style={{width: "100%" , height: "100%" }}>
        <img src={back} alt="" style={{width: "100%",  zIndex: "-1", position: "absolute", height: "100%"}} />
        <div 
          style={{fontFamily: "Roboto", color: "black", fontSize: "40px", width: "100%"}}>
            Faciliating Online Examination with Automated Grading</div>
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h2 className="h3 mb-3 font-weight-normal" style={{marginLeft: "120px", marginTop: "10px", color: "black"}}>Register</h2>
              <div className="form-group" style={{display: "flex",marginTop: "-10px"}}>
              <label htmlFor="first_name" style={{color: "black", fontFamily: "cursive", fontSize:"20px",margin: "25px", marginTop: "25px" , float: "left"}}>First Name</label>
                <TextField
                  type="text"
                  variant="filled"
                  style={{margin:"15px 15px 15px 19px", float: "right"}}
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group" style={{display: "flex"}}>
              <label htmlFor="last_name" style={{color: "black", fontFamily: "cursive", fontSize:"20px",margin: "25px", marginTop: "35px" , float: "left"}}>Last name</label>
                <TextField
                id="filled-required"
                  type="text"
                  style={{margin:"15px", marginLeft: "30px"}}
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  variant="filled"
                  onChange={this.onChange}

                />
              </div>
              <div className="form-group" style={{display: "flex"}}>
              <label htmlFor="email" style={{color: "black", fontFamily: "cursive", fontSize:"20px",margin: "25px",  marginTop: "35px" ,float: "left"}}>Email </label>
                <TextField
                id="filled-required"
                  type="email"
                  style={{margin:"15px 15px 15px 73px"}}
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  variant="filled"
                  onChange={this.onChange}
                />
              </div> 
              <div className="form-group" style={{display: "flex"}}>
              <label htmlFor="password" style={{color: "black", fontFamily: "cursive", fontSize:"20px",margin: "25px",  marginTop: "35px" ,float: "left"}}>Password</label>
                <TextField
                id="filled-required"
                  type="password"
                  style={{margin:"15px 15px 15px 35px"}}
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                  variant="filled"
                />
              </div>
              <div className="form-group" style={{display: "flex"}}>
              <label htmlFor="role" style={{color: "black", fontFamily: "cursive", fontSize:"20px",margin: "25px", marginTop: "35px" , float: "left"}}>Role</label>
         
              <TextField
              id="filled-required"
                  type="text"
                  variant="filled"
                  style={{margin:"15px 15px 15px 80px"}}
                  className="form-control"
                  name="role"
                  placeholder="Student or Teacher"
                  value={this.state.role}
                  onChange={this.onChange}
                />
              </div>
              <Button
                type="submit"
                variant="contained" color="primary"
               style={{margin: "15px 15px 15px 125px", background: "#35B4FF"}}
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </Button>
            </form>
            <div style={{color: "black", fontFamily: "cursive", fontSize:"20px",margin: "0px", marginTop: "0px", marginLeft: "55px" ,}}> Already Have An Account ?</div>
              <Button
              onClick={() => window.location = "/login"}
                variant="contained" color="primary"
               style={{margin: "10px 15px 15px 125px", background: "#35B4FF"}}
                className="btn btn-lg btn-primary btn-block"
              >
                Login
              </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Register