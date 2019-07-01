import React,{Component} from 'react';
import {connect} from 'react-redux';
import {LOGIN,CANCEL} from  '../Actions/Action';
import browserHistory from "../Utils/browserHistory"
import './Home.css';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = { username: '',Password:'',usernamerequired:'', pre:''
        }
    }
    handleChange=(event)=> {
        
        this.setState({[event.target.name]: event.target.value});
       
        }
        handleSubmit1=(event)=> {
            browserHistory.push("/reg");
        }
        handleSubmit=(event)=> {
           
            if(this.state.username.length===0 && this.state.Password.length===0)
            {
                this.setState({usernamerequired:  "Enter valid name",pre:"Enter valid apassword"})
           
            }
            else if(this.state.username.length===0 )
            {
                this.setState({usernamerequired:"username required"})
                return true;
            }  
            
            else if (this.state.Password.length===0)
            {
                this.setState({pre:"password requierd"})
                return true;
            }
            else
            {
                browserHistory.push("/welcome");
            }
        }
           render () {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
                    <div className="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                        <h1 className="heading"><b>Login</b></h1> <br/>
                        <form>
                           <label className="name"><b>Username</b></label><br/>
                            <input className="textbox" type="text" name="username" onChange={this.handleChange}></input>
                            <label className="usernameprint">{this.state.usernamerequired}</label><br></br>
                            
                            <label className="name"><b>Password</b></label><br/>

                            <input className="textbox" type="email" name="Password" onChange={this.handleChange}></input>
                            
                            <label className="passwordprint">{this.state.pre}</label><br/><br/>
                        </form>
                            <button  className="button" onClick={this.handleSubmit}> Login </button>
                            <button  className="registerlink1" onClick={this.handleSubmit1}> Register </button>
                            
                    </div>
                    <div className="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
                </div>
            </div>
        );
    }
}
export default Home;





// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {LOGIN} from '../Actions/Action';
// import browserHistory from '../Utils/browserHistory'; 

// class Home extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             username:'',
//             password:'',
//             user:'',
//             pwd:'' 
//         }
//     }
//     handleChange=(e)=>{
//         this.setState({[e.target.name]:e.target.value});
//     }
//     register=()=>{
//         browserHistory.push('reg');
//     }
//     login=()=>{
//         let reg_user=/^[A-Za-z0-9]{2,10}$/;
//         let reg_pwd=/^[@#][A-Za-z0-9]{7,13}$/;
//         let usernamel=this.state.username.length, pwdl=this.state.password.length;
//         let temp=0;
        
//         if(usernamel===0)this.setState({user:'Username is required'});
//         else if(!reg_user.test(this.state.username)) this.setState({user:'Invalid Username'});
//         else temp++;

//         if(pwdl===0){this.setState({pwd:'Password is required'});}
//         else if(!reg_pwd.test(this.state.password)){this.setState({pwd:'Invalid Password'});}
//         else temp++;
        
//         if(temp>1){ 
//             browserHistory.push('welcome');
          
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <div className="row">
//                     <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
//                     <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
//                         <h2>{this.props.regmsg}</h2>
//                         <h1 className="head">Login</h1>
//                         <label className="lable" id='uname'>Username</label><br/>
//                         <input className="inpt" type='text' name='username' onChange={this.handleChange}></input><br/>
//                         <p className='red'>{this.state.user}</p>
//                         <label className="lable" id='pwd'>Password</label><br/>
//                         <input className="inpt" type='password' name='password' onChange={this.handleChange}></input><br/>
//                         <p className='red'>{this.state.pwd}</p>
//                         <button className="btn_reg" onClick={this.login}>Login</button>
//                         <label className="link" onClick={this.register}>Register</label>
//                     </div>
//                     <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
//                 </div>
//             </div>
//         );
//     }
// }
// const mapStateToprops=(state)=>{
//     const {loginmsg}=state.Register_reducer;
//     const {regmsg}=state.Register_reducer;
//     return {loginmsg,regmsg};
// };

// export default connect(mapStateToprops, {LOGIN})(Home);