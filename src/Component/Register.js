import React,{Component} from 'react';
import {connect} from 'react-redux';
import './Register.css';

class Register extends Component{
    render () {
        return(
            <div className="main">
                <div className="row">
                <div className="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
                <div className="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <h1 className="registerheading"><b>Register</b></h1> <br/> 
                  <label className="name"><b>First Name</b></label> <br/>
                  <input className="reginput" type="text" name="firstname" ></input><br/>
                  <label className="name"><b>Lastt Name</b></label> <br/>
                  <input className="reginput" type="text" name="lasttname" ></input><br/>
                  <label className="name"><b>Username</b></label> <br/>
                  <input className="reginput" type="text" name="username" ></input><br/>
                  <label className="name"><b>Password</b></label> <br/>
                  <input className="reginput" type="password" name="password" ></input><br/>
                  <button className="registerbutton" onClick={this.onHandleClick}><b>Register</b></button> <label onClick={this.onHandleClick} className="cancel_link"><b>Cancel</b></label>
                </div>
                <div className="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
                </div>

            </div>
        );
    }
}
export default Register;