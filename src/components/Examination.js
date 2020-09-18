import React, { Component } from 'react'
import {  getExam } from './UserFunctions'
import jwt_decode from 'jwt-decode'
import Button from '@material-ui/core/Button';
import back from '../assets/images/back.jpg'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
class Examination extends Component {
    constructor(props) {
      super(props)
      this.state = {
        first_name: '',
        last_name: '',
        email: '',
        role: '',
              eid: null,
              ename: null,
              duration: null,
              marks: null,
              number: null,
        examcode: null,
        open: true,
        temp: null,
        examList: []
      }
      this.handleClose = this.handleClose.bind(this);
      this.handleClickOpen = this.handleClickOpen.bind(this);
    }
    handleClickOpen = () => {
      this.setState({ open: true});
    }
  
     handleClose = () => {
      this.setState({ open: false});
      console.log("Agreedis" , this.state.examcode);
    }
    componentDidMount() {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      var examcode = localStorage.getItem("examcode");
      this.setState({
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        email: decoded.email,
        role: decoded.role,
        examcode: examcode
      })
      getExam().then(res => {
        console.log("Exam list", res)
        this.setState({examList: res})
      })
    }
  
  
   
  
  
    render() {
      const { classes, theme } = this.props;
      
     // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
//         return (
//             <div>
//             {
//         this.state.examList.map((listEle, index )=> {
//          return(
//           listEle.eid===this.state.examcode?
//          <div>
//            <div style={{width: "100%", height: "60px", fontSize: "36px", fontFamily: "Roboto", textAlign: "center", marginBottom:"20px", fontWeight: "600"}}>
//              WELCOME TO {listEle.ename}  EXAM
//              </div>
//            {
//              listEle.rows.map((lr, ind) => {
// return (
//   <div>
//     <div 
//     className="Question" 
//     style={{width: "100%", height: "30px", border: "3px black", backgroundColor:"black", 
//     color: "white", textAlign: "center", fontSize: "20px", fontFamily: "Roboto", fontWeight: "500", borderRadius: "30px"}}>
//       {
//         listEle.rows[ind][0]
//       }
//       </div>
//       <List>
//       <ListItem>
//      <Button style={{width: "100%", height: "25px", fontSize: "18px", fontFamily: "roboto", fontWeight: "600"}}>
//        A.){listEle.rows[ind][1] }
//         </Button> 
//      <Button style={{width: "100%", height: "25px", fontSize: "18px", fontFamily: "roboto", fontWeight: "600"}}>
//        B.){listEle.rows[ind][2] }
//         </Button> 
//      <Button style={{width: "100%", height: "25px", fontSize: "18px", fontFamily: "roboto", fontWeight: "600"}}>
//        C.){listEle.rows[ind][3] } </Button> 
//      <Button style={{width: "100%", height: "25px", fontSize: "18px", fontFamily: "roboto", fontWeight: "600"}}>
//        D.){listEle.rows[ind][4] } </Button> 
    
//       </ListItem>
//       </List>
     
//     </div>
// )
//              }
//               ) 
//               }
//           }
// </div>
//            : 
//            <div>
//             { listEle.id}
//              </div>
//          )
//           }
//         )
//         }

          
  
//             </div>
//         )
return(
 <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center",}}>
   <img src={back} alt="" style={{width: "100%",   position: "fixed", zIndex: "-1" ,height: "100%"}} />
   <div style={{width: "950px", height: "100vh" , background: "white", position: "fixed", marginLeft: "-500px", overflowY: "scroll"}}>
    <div style={{ fontSize: "42px", fontFamily: "monospace", textAlign: "center", fontWeight: "600", paddingTop: "25px"}}>
      Welcome to the Computer Graphics Exam
    </div>
    <div style={{ fontSize: "30px", fontFamily: "monospace", textAlign: "center", fontWeight: "600", paddingTop: "25px"}}>
      Timer
      <br/>
      09:51 Minutes Left 
    </div>
    <div style={{ fontSize: "24px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "25px", paddingTop: "25px"}}>
      Ques 1 =>  The basic attributes of a straight line segment are
    </div>
    <div style={{ fontSize: "20px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "55px", paddingTop: "25px"}}>
      A.)  Type
    </div>
    <div style={{ fontSize: "20px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "55px", paddingTop: "25px"}}>
    B.)  Width
    </div>
    <div style={{ fontSize: "20px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "55px", paddingTop: "25px"}}>
    C.)  Color
    </div>
    <div style={{ fontSize: "20px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "55px", paddingTop: "25px"}}>
    D.)  None of The Above
    </div>
    <div style={{ fontSize: "24px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "25px", paddingTop: "25px"}}>
      Ques 2 =>  A dotted line can be displayed by generating
    </div>
    <div style={{ fontSize: "20px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "55px", paddingTop: "25px"}}>
      A.)  Very short dashes with spacing equal to and greater than dash size
    </div>
    <div style={{ fontSize: "20px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "55px", paddingTop: "25px"}}>
    B.)  Very long dashes with spacing equal to or greater than dash size
    </div>
    <div style={{ fontSize: "20px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "55px", paddingTop: "25px"}}>
    C.)  Very short dashes with spacing equal to and greater than dash size
    </div>
    <div style={{ fontSize: "20px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "55px", paddingTop: "25px"}}>
    D.)  Dots
    </div>
    <div style={{ fontSize: "24px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "25px", paddingTop: "25px"}}>
      Ques 3 =>  In an application program, to set line-type attributes the following statement is used.
    </div>
    <div style={{ fontSize: "20px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "55px", paddingTop: "25px"}}>
      A.)   SetLinetype(lt)
    </div>
    <div style={{ fontSize: "20px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "55px", paddingTop: "25px"}}>
    B.)   setLinetype(lt)
    </div>
    <div style={{ fontSize: "20px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "55px", paddingTop: "25px"}}>
    C.)  SETLINETYPE(lt)
    </div>
    <div style={{ fontSize: "20px", fontFamily: "Roboto", textAlign: "left", fontWeight: "500", paddingLeft: "55px", paddingTop: "25px"}}>
    D.) SETLINE(lt)
    </div>
    <Button
              onClick={() => window.location = "/student"}
                variant="contained" color="primary"
               style={{margin: "30px 15px 15px 325px",  background: "#35B4FF"}}
                className="btn btn-lg btn-primary btn-block"
              >
                Submit
              </Button>
   </div>
 </div>
)
    }
}
    export default Examination