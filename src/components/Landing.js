import React, { Component } from 'react'
import front from '../assets/images/front.jpg'
import back from '../assets/images/back.jpg'
import Button from '@material-ui/core/Button';
class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
          <img src={back} alt="" style={{width: "100%", zIndex: "-1", position: "absolute", height: "100%"}} />
          <div 
          style={{fontFamily: "Roboto", color: "black", fontSize: "80px", width: "320px",paddingTop: "80px", paddingLeft: "120px",display: "flex"}}>
            Faciliating Online Examination with Automated Grading</div>
          <Button variant="contained" color="primary" style={{width: "120px" , margin: "15px 15px 15px 140px" ,background: "#35B4FF" , color: "black"}} onClick={() => window.location = "/login"}>
  Log In
</Button>
<Button variant="contained" color="primary" style={{width: "120px" , margin: "15px 15px 15px 15px",background: "#35B4FF", color: "black"}}  onClick={() => window.location = "/register"}>
 Register
</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing