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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';



const drawerWidth = 240;
const Styles = theme => ({
  root: {
    '& > *': {
        margin: theme.spacing(0.5),
      },
  },
 
 
});



class Teacher extends Component {
    constructor(props) {
      super(props)
      this.state = {
        first_name: '',
        last_name: '',
        email: '',
        role: '',
        cols: null,
        rows: [],
        search: "",
        tempid: null,
        tempname: null,
       
            eid: null,
            ename: null,
            duration: null,
            marks: null,
            number: null,
            
        
        optionGroup: 1,
        sidebarOpen: false,
        selectedFile: null,
        errors: {},
        allExams: [],
        userId: null
      }
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.onFileUpload = this.onFileUpload.bind(this);
      //this.onChange = this.onChange.bind(this);
    }
    // onChange(e) {
    //   // console.log(this.state[e.target.name])
    //    this.state.exam.eid (e.target.value) 
    //  }
    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }
   

    handleChange=name=>e=> {
      console.log([e.target.name],e.target.value)
      this.setState({ exam : {
        [name]: e.target.value
      }
      })
    }
    handleChange1(e) {
      console.log([e.target.name],e.target.value)
      this.setState({ exam : {
        [e.target.name]: e.target.value
      }
      })
    }
    onFileChange = event => { 
    this.setState({ selectedFile: event.target.files[0] });  
    }; 
    fileHandler = (event) => {
      
      
      //just pass the fileObj as parameter
      var demoRows = [];
      ExcelRenderer(event.target.files[0], (err, resp) => {
        if(err){
          console.log(err);            
        }
        else{
          console.log("cols", resp.cols)
          console.log("rows", resp.rows)
          demoRows = resp.rows
          this.setState({
            cols: resp.cols,
            rows: resp.rows
          });
        }
      });     
    }
    onFileUpload = () => {

    var newExam ={
      eid: this.state.eid,
      ename:   this.state.ename,
      marks: this.state.marks,
      duration: this.state.duration,
      number: this.state.number,
      rows: this.state.rows,
      userId: this.state.userId
    }
    console.log("Teacher", newExam)
    teacher(newExam).then(res => {
      console.log(newExam)
      this.forceUpdate();
    })
    
  
    };
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
        getExam(id).then(res => {
          console.log("res", res)
          if(res) {
            this.setState({allExams: res})
          }
        })
      }
      
    render() {
       
        const { classes, theme } = this.props;
        console.log("allExams", this.state.allExams)
        
        return (
            <div style={{display: "flex",}}>
              <div className="headers" style={{width: "100%", height: "60px", position: "fixed", background: "#35B4FF", zindex:"100", marginBottom: "30px"}}>
              <Button
    style={{ width: "200px", height:"60px", color:"black", fontSize: "20px", float: "left" ,display:"flex",justifyContent: "center", alignItems: "center" , fontFamily: "Roboto" }}
    onClick={() => {this.props.history.push(`/teacher`)
    this.forceUpdate()
  }}
    >
       <AddIcon />    Set Exam

    </Button>
    <Button
    style={{ width: "200px", height:"60px", color:"black", fontSize: "20px", float: "left" ,display:"flex",justifyContent: "safe center", alignItems: "center" , fontFamily: "Roboto" }}
    onClick={() => {this.props.history.push(`/result`)
    this.forceUpdate()
  }}
    >
       <AssignmentIcon/> Results

    </Button>
    <Button 
    style={{ width: "200px", height:"60px", color:"black", fontSize: "20px", float: "left" ,display:"flex",justifyContent: "center", cursor: "pointer", alignItems: "center" , fontFamily: "Roboto" }}
    onClick={() => {this.props.history.push(`/grading`)
    this.forceUpdate()
  }}
    >
       <AssessmentIcon/> Grading

    </Button>
    <Button 
    style={{ width: "200px", height:"60px", color:"black", fontSize: "20px", float: "Right" ,display:"flex",justifyContent: "center", cursor: "pointer", alignItems: "center" , fontFamily: "Roboto" }}
    onClick={() => {this.props.history.push(`/`)
    this.forceUpdate()
  }}
    >
       <ExitToAppIcon/> Log Out

    </Button>
              </div>

{
  this.state.optionGroup === 1 ?
<div style={{width: "100%", backgroundColor: "rgb(241,241,241)", marginTop: "60px"}}>
<div style = {{ width: "100%",height: "36px", marginTop: "22px", fontSize: "14px"}}>
      <div className="filticon" style={{display:"flex",alignItems: "center",justifyContent: "center",float:"left", width: "40px",height: "40px" ,background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: "0px 8px 20px #A4A4A421",borderRadius: "2px",color:"#8782D9"}}>
        <img src={filt} alt="filt" />
      </div>
          <div className="search" style={{float: "left"}}>
            <div className="searchicons" style={{float: "left", color: "#8782D9", backgroundColor: "white"}}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search here.."
              style={{float: "left", backgroundColor: "white",height: "40px", width: "200px", borderRadius: "40pxpx"}}
              classes={{
                // root: classes.inputRoot,
                // input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
      
      
          <Button   
                className="bt6" 
                variant="contained"
                style={{cursor: "pointer", margin: "5px 15px 5px 15px", color: "black", width: "150px", backgroundColor: "#35B4FF"}}
                onClick={this.onFileUpload} >
                  Create New
          </Button>
   
     
      </div>
      <div 
      style={{width: "100%", height: "70px", display: "flex", margin: "20px"}}
      >
         
        
         
          <TextField 
              style={{margin: "10px", float: "left"}} 
              id="outlined-basic-required" 
              name="eid" 
              label="UID" 
              variant="outlined" 
              onChange={(event)=>{ this.state.eid=event.target.value }} 
          />
          <TextField 
              style={{margin: "10px",float: "left"}} 
              id="outlined-basic-required" 
              name="ename" 
              label="Name" 
              variant="outlined"  
              onChange={(event)=>{ this.state.ename=event.target.value }}
          />
          <TextField 
              style={{margin: "10px",float: "left"}} 
              id="outlined-basic-required" 
              name="duration" 
              label="Duration" 
              variant="outlined" 
              onChange={(event)=>{ this.state.duration=event.target.value }}
           />
          <TextField
              style={{margin: "10px", float: "left"}}
              id="outlined-basic" 
              name="marks" 
              label="Marks" 
              variant="outlined"  
              onChange={(event)=>{ this.state.marks=event.target.value }}
          />
          <TextField 
              style={{margin: "10px",float: "left"}} 
              id="outlined-basic" 
              name="number" 
              label="Number of Question" 
              variant="outlined" 
              onChange={(event)=>{ this.state.number=event.target.value }}
          />
          <div> 
            <div > 
                <input type="file" 
                name="selectedFile "
                style={{margin: "25px",  height: "40px"}}
                onChange={this.fileHandler.bind(this)} /> 
                
            </div> 
          
        </div> 

       
        </div>
      <div style={{
          width: "100%",
          height: "inherit",
          marginTop: "25px",
          backgroundColor: "#FFFFFF",
          marginLeft: "10px",
        }}>
          <div style={{
            paddingTop: "11px",
            height: "42px",
          }}>
            <Grid conatiner style={{  display: "flex" }}>
              <Grid item xs={1} sm={1} md={1}>
                <div className="checks" style={{ marginTop: "-13px" }}>
                  <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />

                </div>
              </Grid>
              <Grid item xs={1} sm={1} md={2}>
                <div className="id">
                  Index <img src={Sort} alt="sort" />
                </div>
              </Grid>
              <Grid item xs={1} sm={1} md={2}>
                <div className="id">
                  ID <img src={Sort} alt="sort" />
                </div>
              </Grid>
              <Grid item xs={1} sm={1} md={2}>
                <div className="status" >
                  Name <img src={Sort} alt="sort" />
                </div>
              </Grid>
              <Grid item xs={1} sm={1} md={2}>
                <div className="ban" style={{ marginLeft: "15px" }}>
                  Duration <img src={Sort} alt="sort" />
                </div>
              </Grid>
              <Grid item xs={1} sm={1} md={2}>
                <div className="cron">
                  Marks<img src={Sort} alt="sort" />
                </div>
              </Grid>
              <Grid item xs={1} sm={1} md={2}>
                <div className="combo" style={{ marginLeft: "15px" }}>
                  Number of Question <img src={Sort} alt="sort" />
                </div>
              </Grid>
               
            </Grid>
            
            {
            this.state.allExams.map((listEle, index )=> {
             // console.log("listEle", listEle)
              return (
                <div style={{ height: "96px", backgroundColor: "#F5F5F9", marginTop: "2.5px",marginBottom: "15px" }} >
                  <Grid conatiner style={{ display: "flex" }} >
                    <Grid item xs={1} sm={1} md={1}>
                      <div className="checks">

                        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />

                      </div>
                    </Grid>
                    <Grid item xs={1} sm={1} md={2}>
                      <div className="id1" style={{ }}>
                        {index+1}
                      </div>
                    </Grid>
                    <Grid item xs={1} sm={1} md={2}>
                      <div className="status1">
                        {listEle.eid}
                      </div>
                    </Grid>
                    <Grid item xs={1} sm={1} md={2}>
                      <div className="food" style={{ marginLeft: "15px" }}>
                        {listEle.ename}
                      </div>
                    </Grid>
                    <Grid item xs={1} sm={1} md={2}>
                      <div className="food">
{listEle.duration} minutes
                      </div>
                    </Grid>
                    <Grid item xs={1} sm={1} md={2}>
                      <div className="food" style={{ marginLeft: "15px" }}>
{listEle.marks}
                      </div>
                    </Grid>
                    <Grid item xs={1} sm={1} md={2}>
                      <div className="food" style={{ marginLeft: "15px",textAlign: "center" }}>
{listEle.number} Questions
                      </div>
                    </Grid>
                 </Grid>
                </div>
              )
            })
          }
          </div>
          
                </div>
             
        </div>
   : this.state.optionGroup === 2 ? 
   <div style={{width: "100%", height: "100vh", backgroundColor: "rgb(241,241,241)",float:"right" }}>
  div 2
                
           </div>
      : 
      this.state.optionGroup === 3 ?  
      <div style={{width: "100%", height: "100vh", backgroundColor: "rgb(241,241,241)",float:"right" }}>
        null
        </div> 
        : null
    }    
</div>



        )
}
}
    export default Teacher