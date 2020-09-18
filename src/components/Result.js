import React, { Component , useState } from 'react'
import { teacher, getExam } from './UserFunctions'
import jwt_decode from 'jwt-decode'
import excel from 'xlsx';

import Sidebar from "react-sidebar";

import shape from '../assets/images/Symbols.svg'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp';
import { Button, TextField, Grid } from '@material-ui/core';
import Interface from '../assets/images/interface.svg';
import FilterFramesIcon from '@material-ui/icons/FilterFrames';
import texts from '../assets/images/Text.svg'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import filt from '../assets/images/filt.svg'
import '../assets/css/teachers.css';
import Sort from '../assets/images/Sort1.svg';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SlidingPanel from 'react-sliding-side-panel';

import {OutTable, ExcelRenderer} from 'react-excel-renderer';



const drawerWidth = 240;
const Styles = theme => ({
  root: {
    '& > *': {
        margin: theme.spacing(0.5),
      },
  },
 
 
});



class Result extends Component {
    constructor(props) {
      super(props)
      this.state = {
        first_name: '',
        last_name: '',
        email: '',
        role: '',
        
        userId: null
      }
     
    }
     

      
   
  componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        const id = localStorage.userId
        this.setState({
          first_name: decoded.first_name,
          last_name: decoded.last_name,
          email: decoded.email,
          role: decoded.role,
          userId: id
        })
        
      }
      
    render() {
       
        const { classes, theme } = this.props;
        console.log("allExams", this.state.allExams)
        
        return (
            <div style={{display: "flex",}}>
              <div className="headers" style={{width: "100%", height: "60px", position: "fixed", background: "#35B4FF", zindex:"100", marginBottom: "30px"}}>
              <Button
    style={{ width: "200px", height:"60px", color:"white", fontSize: "20px", float: "right" ,display:"flex",justifyContent: "center", alignItems: "center" , fontFamily: "Roboto" }}
    onClick={() => {this.props.history.push(`/teacher`)
    this.forceUpdate()
  }}
    >
       <AddIcon />    Set Exam

    </Button>
    <Button
    style={{ width: "200px", height:"60px", color:"white", fontSize: "20px", float: "right" ,display:"flex",justifyContent: "safe center", alignItems: "center" , fontFamily: "Roboto" }}
    onClick={() => {this.props.history.push(`/result`)
    this.forceUpdate()
  }}
    >
       <AssignmentIcon/> Results

    </Button>
    <Button 
    style={{ width: "200px", height:"60px", color:"white", fontSize: "20px", float: "right" ,display:"flex",justifyContent: "center", cursor: "pointer", alignItems: "center" , fontFamily: "Roboto" }}
    onClick={() => {this.props.history.push(`/grading`)
    this.forceUpdate()
  }}
    >
       <AssessmentIcon/> Grading

    </Button>
              </div>

 
</div>



        )
}
}
    export default Result