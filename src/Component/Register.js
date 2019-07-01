import React,{Component} from 'react';
import browserHistory from '../Utils/browserHistory';
import './Register.css';

class Register extends Component{

    constructor(props){
        super(props);
        this.state={ firstname:'',lastname:'',username:'',password:'',
        firstnameA:'',lastnameA:'',user:'',pwd:'',array:[] 
        }
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit=(event)=>{
        debugger;
        
        let j=0;
        let reqobj={
            firstname1:this.state.firstname,
            lastname1:this.state.lastname,
            username1:this.state.username,
            password1:this.state.password 
        }
        let ary=this.state.array.push(reqobj)
        this.setState({ary});
        let fnamel=this.state.firstname.length, lnamel=this.state.lastname.length, usernamel=this.state.username.length, pwdl=this.state.password.length;
        let reg_user=/^[A-Za-z]{5,10}$/;
        let reg_pwd=/^[@#][A-Za-z0-9]{9,11}$/;
       
        if(fnamel===0) this.setState({ firstnameA:'Firstname is required'});
        else if(!reg_user.test(this.state.firstname)) this.setState({ firstnameA:'Invalid Firstname'});
        else j++; 
        if(lnamel===0) this.setState({lastnameA:'Lastname is required'});
        else if(!reg_user.test(this.state.lastname)) this.setState({lastnameA:'Invalid Lastname'}); 
        else j++;
        if(usernamel===0) this.setState({user:'Username is required'});
        else if(!reg_user.test(this.state.username)) this.setState({user:'Invalid Username'});
        else j++;
        if(pwdl===0) this.setState({pwd:'Password is required'});
        else if(!reg_pwd.test(this.state.password)) this.setState({pwd:'Invalid Password'});
        else j++;
        if(j>3) {
            browserHistory.push("home");
        }
    }
    render () {
        return(
            <div className="main">
                <div className="row">
                <div className="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
                <div className="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <h1 className="registerheading"><b>Register</b></h1> <br/> 
                  <label className="name"><b>First Name</b></label> <br/>
                  <input className="reginput" type="text" name='firstname' onChange={this.handleChange} ></input><br/>
                  <label className="name"><b>Last Name</b></label> <br/>
                  <input className="reginput" type="text" name='lastname' onChange={this.handleChange} ></input><br/>
                  <label className="name"><b>Username</b></label> <br/>
                  <input className="reginput" type="text" name='username' onChange={this.handleChange} ></input><br/>
                  <label className="name"><b>Password</b></label> <br/>
                  <input className="reginput" type="password"  name='password' onChange={this.handleChange}></input><br/>
                  <p className='red'>{this.state.pwd}</p>
                  <button className="registerbutton" onClick={this.handleSubmit}><b>Register</b></button> <label onClick={this.onHandleClick} className="cancel_link"><b>Cancel</b></label>
                </div>
                <div className="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
                </div>

            </div>
        );
    }
}
export default Register;