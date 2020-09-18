import React, { Component } from 'react'

import jwt_decode from 'jwt-decode'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import front from '../assets/images/back.jpg'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
class Student extends Component {
    constructor(props) {
      super(props)
      this.state = {
        first_name: '',
        last_name: '',
        email: '',
        role: '',
        examcode: null,
      }
      this.onChange = this.onChange.bind(this)
 

    }
    onChange(e) {
      
       this.setState({ [e.target.name]: e.target.value })
     }
    
    
    componentDidMount() {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      this.setState({
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        email: decoded.email,
        role: decoded.role
      })
      
    }
  
  
   
  
  
    render() {
      const { classes, theme } = this.props;
        return (
          <div className="container">
          <div className="row" style={{ width: "100%", height: "100%"}}>
          <img src={front} alt="" style={{width: "100%", zIndex: "-1", position: "absolute", height: "100%"}} />
            <div className="col-md-6 mt-5 mx-auto" style={{display: "flex",  alignItems: "center"}}>
            
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="" style={{color: "white", fontFamily: "sans-serif", fontSize:"28px", marginLeft: "70px"}}>Enter The Exam Code</h1>
                <div className="form-group">
                <label htmlFor="email" style={{color: "white", fontFamily: "cursive", fontSize:"20px",margin: "15px",  marginTop: "35px" ,float: "left"}}>Enter the Exam Code </label>
                  <TextField
             
                    id="filled-required"
                    type="text"
                    className="form-control"
                    name="examcode"
                    style={{margin: "25px", float: "left" }}
                    placeholder="Enter Exam Code"
                    value={this.state.examcode}
                    onChange={this.onChange}
                   // variant="filled"
   
                  />
                </div>
               
                
                <Button
                  type="submit"
                  variant="contained" 
                  color="primary"
                  style={{margin: "15px 15px 15px 125px", background: "#35B4FF"}}
                  onClick={()=> {
                    localStorage.setItem("examcode", this.state.examcode)
                    this.props.history.push(`/examination`)
                  }}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
        )
    }
}
    export default Student