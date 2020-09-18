import React, { Component , useState } from 'react'
import { teacher, getExam } from './UserFunctions'
import jwt_decode from 'jwt-decode'
import excel from 'xlsx';

import Sidebar from "react-sidebar";
import back from '../assets/images/back.jpg'
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
import Divider from '@material-ui/core/Divider';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const drawerWidth = 240;
const Styles = theme => ({
  root: {
    '& > *': {
        margin: theme.spacing(0.5),
      },
  },
 
 
});



class Grading extends Component {
    constructor(props) {
      super(props)
      this.state = {
        first_name: '',
        last_name: '',
        email: '',
        role: '',
        cols: [],
        rows: [],
        grades: [],
        complex: [],
        complex1: [],
        complex2: [],
        rows1: [],
        cols1: [],
        rows2: [], 
        cols2: [],
        selectedFile: null,
        userId: null
      }
    //  this.onFileUpload = this.onFileUpload.bind(this);
    }
     
    
        fileHandler = (event) => {
          
          
          //just pass the fileObj as parameter
          var demoRows = [];
          ExcelRenderer(event.target.files[0], (err, resp) => {
            if(err){
              console.log(err);            
            }
            else{
            //  console.log("cols", resp.cols)
            //console.log("rows", resp.rows)
              demoRows = resp.rows
              this.setState({
                cols: resp.cols,
                rows: resp.rows
              });
            }
           var max=0;
            
                this.state.rows.map((list, index)=> {
                    if(list[1]!==undefined){
                  var copy=this.state.grades
                  var temp=list[1];
                  if(temp>max)
                  max=temp
                  copy.push({ rollnumber: list[0],
                marks: list[1]})
                this.setState({ grades : copy})
                    }
                }
                
                )
              console.log("grades 1st time check", this.state.grades)
                console.log("maximum ", max)
                
                const newFile = this.state.grades.map((grades) => {

                    return {...grades, relmarks: grades.marks*100/max};
                });
                this.setState({grades: newFile });
               this.state.grades.sort(function(a, b) {
                    return b.relmarks - a.relmarks;
                });
                const newFile1 = this.state.grades.map((grades) => {
                   if(grades.relmarks>=90)
                    return {...grades, Grading: "A" };
                   else if(grades.relmarks>=80)
                    return {...grades, Grading: "A-" };
                    else if(grades.relmarks>=68)
                    return {...grades, Grading: "B" };
                    else if(grades.relmarks>=55)
                    return {...grades, Grading: "B-" };
                    else if(grades.relmarks>=45)
                    return {...grades, Grading: "C" };
                    else if(grades.relmarks>=40)
                    return {...grades, Grading: "C-" };
                    else if(grades.relmarks>=35)
                    return {...grades, Grading: "D" };
                    else if(grades.relmarks>=30)
                    return {...grades, Grading: "E" };
                    else if(grades.relmarks<=30)
                    return {...grades, Grading: "F" };
                });
                this.setState({grades: newFile1 });

                this.state.grades.sort(function(a, b) {
                    var orderBool = a.rollnumber > b.rollnumber;
                    return orderBool ? 1 : 0;
                });
               console.log("grades", this.state.grades)
          });     
        }
      
        fileHandler1 = (event) => {
          
          
          
          var demoRows = [];
          ExcelRenderer(event.target.files[0], (err, resp) => {
            if(err){
              console.log(err);            
            }
            else{
           
              demoRows = resp.rows
              this.setState({
                cols1: resp.cols,
                rows1: resp.rows
              });
            }
           
            
                this.state.rows1.map((list, index)=> {
                    if(list[1]!==undefined){
                  var copy=this.state.complex1
                  
                  
                  copy.push({ rollnumber: list[0],
                supmarks: list[1],
                panel1: list[2],
                panel2: list[3],
                panel3: list[4],
                totmarks: list[1]+((list[2]+list[3]+list[4])/3)
              })
                this.setState({ complex1 : copy})
                    }
                }
                
                )
                var max1=0
                this.state.complex1.map((list) => {
                  var temp1=list.totmarks;
                  if(temp1>max1)
                  max1=temp1
                })
              
                console.log("maximum1" ,max1)
                
                const newFile2 = this.state.complex1.map((complex1) => {

                    return {...complex1, relmarks: complex1.totmarks*100/max1};
                });
                this.setState({complex1: newFile2 });
              //  this.state.complex.sort(function(a, b) {
              //       return b.totmarks- a.totmarks;
              //   });
           
                

               console.log("complex1", this.state.complex1)
          });     
        }
        fileHandler2 = (event) => {
          
          
          
          var demoRows = [];
          ExcelRenderer(event.target.files[0], (err, resp) => {
            if(err){
              console.log(err);            
            }
            else{
           
              demoRows = resp.rows
              this.setState({
                cols2: resp.cols,
                rows2: resp.rows
              });
            }
           
            
                this.state.rows2.map((list, index)=> {
                    if(list[1]!==undefined){
                  var copy=this.state.complex2
                  
                  
                  copy.push({ rollnumber: list[0],
                supmarks: list[1],
                panel1: list[2],
                panel2: list[3],
                panel3: list[4],
                totmarks: list[1]+((list[2]+list[3]+list[4])/3)
              })
                this.setState({ complex2 : copy})
                    }
                }
                
                )
                var max2=0
                this.state.complex2.map((list) => {
                  var temp2=list.totmarks;
                  if(temp2>max2)
                  max2=temp2
                })
              
                console.log("maximum1" ,max2)
                
                const newFile2 = this.state.complex2.map((complex2) => {

                    return {...complex2, relmarks: complex2.totmarks*100/max2};
                });
                this.setState({complex2: newFile2 });
           
               console.log("complex2", this.state.complex2)
               Array.prototype.push.apply(this.state.complex1,this.state.complex2)
               console.log("complex", this.state.complex1)
          });     
        }
        // results = () => {
        //   ;
        //   console.log("complex", this.state.complex)
        // }
   
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
        //console.log("allExams", this.state.grades)
    
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
              </div> <div style={{width : "100%", height: "100vh", }}>
                 <img src={back} alt="bg"
                 style={{width: "100%", height: "100vh", position: "fixed", zIndex: "-1"}} />
                 <div style={{fontFamily: "Roboto", color: "black", fontSize: "24px", width: "350px",paddingTop: "80px", paddingLeft: "120px",display: "flex"}}> 
                 Enter the File for Simple Grading</div>
              <div>
                 <input type="file" 
                name="selectedFile "
                style={{margin: "25px 25px 25px 180px",  height: "40px"}}
                onChange={this.fileHandler.bind(this)} /> 
           </div>
            
            {
                this.state.rows.length ? 
            <table id="emp" class="table"
            style={{ textAlign: "center"}}>  

                                        <thead>  

                                                <tr>  

                                                        <th>Roll Number</th>  

                                                        <th >Marks</th>  
                                                      {/* <th>Realative Marks</th>   */}

                                                        <th>Grade</th>  

                                                 </tr>  

                                        </thead>  
                                        <tbody>            
                                             
                                             {  

                                                this.state.grades.map((p, index) => {  

                                                   return     <tr key={index}>  

                                                                <td style={{width: "180px"}}>  

                                                                        {p.rollnumber}  

                                                                </td>  

                                                                <td  style={{width: "90px"}}>{p.marks}</td>  

                                                                {/* <td >{p.relmarks}</td>   */}

                                                                <td style={{width: "90px"}}>{p.Grading}</td>  


                                                        </tr>  

                                                })  

                                        }  

  

                                        </tbody>  
                                        </table>
                                     : null}   <div>  
<div style={{fontFamily: "Roboto", wdith: "600px", color: "black", fontSize: "24px",  paddingLeft: "120px",display: "flex"}}> 
                 Please Click Below Button to Export Your Graded Result</div>
                                        <ReactHTMLTableToExcel  

                                                className="btn btn-info"  
                                                table="emp"  
                                                filename="ReportExcel"  
                                                sheet="Sheet"  
                                                buttonText="Export Result"  
                                                style={{marginLeft: "180px"  }}/>  

                                </div>  
                                <div style={{fontFamily: "Roboto", color: "black", fontSize: "24px", width: "350px",paddingTop: "80px", paddingLeft: "120px",display: "flex"}}> 
                 Enter the File for Complex Grading</div>
                 <div>
                <input class="custom-file-input" type="file" 
                name="selectedFile "
                style={{margin: "25px 25px 25px 180px",  height: "40px"}}
                onChange={this.fileHandler1.bind(this)} /> 
                </div>
                <div>
                 <input type="file" 
                name="selectedFile "
                style={{margin: "15px 25px 25px 180px",  height: "40px"}}
                onChange={this.fileHandler2.bind(this)} /> 
                </div>
                <div style={{fontFamily: "Roboto", wdith: "600px", color: "black", fontSize: "24px",  paddingLeft: "120px",display: "flex"}}> 
                 Please Click Below Button to Export Your Complex Graded Result</div>
                <ReactHTMLTableToExcel  

className="btn btn-info"  
table="emp"  
filename="ReportExcel"  
sheet="Sheet"  
buttonText="Export Result"  
style={{marginLeft: "180px"  }}/>  
            </div>
{/*               
           
             <Button variant="filled" color="primary"
             onClick={Array.prototype.push.apply(this.state.complex1,this.state.complex2)}>Result</Button> */}
           
         
</div>



        )
}
}
    export default Grading