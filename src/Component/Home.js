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
                this.setState({usernamerequired:  "User name must required",pre:"Password must required"})
           
            }
            else if(this.state.username.length===0 )
            {
                this.setState({usernamerequired:"User name must required"})
                return true;
            }  
            
            else if (this.state.Password.length===0)
            {
                this.setState({pre:"Password must required"})
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
                            <input className="textbox" type="text" name="username" onChange={this.handleChange}></input><label>{this.state.usernamerequired}</label><br></br>
                            <label className="name"><b>Password</b></label><br/>
                            <input className="textbox" type="email" name="Password" onChange={this.handleChange}></input><label>{this.state.pre}</label><br/><br/>
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