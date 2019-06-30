import React, { useState,Fragment } from 'react';
import browserHistory from '../Utils/browserHistory'; 
import WelcomeUserTable from './WelcomeUserTable';
import WelcomeUserForm from './WelcomeUserForm';
import WelcomeEditForm from './WelcomeEditForm';
import './WelcomeUser.css';

const WelcomeUser = () => {
  const usersData = [
    
  ]
  const initialFormState = { id: null, name: '', username: '' }
  const [users, setUsers] = useState(usersData)
  const [ currentUser, setCurrentUser ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)


  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = id => {
    setEditing(false)
  
    setUsers(users.filter(user => user.id !== id))
  }
  
  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  
  const editRow = user => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
//     onHandleClick = () =>{
//     browserHistory.push('/login')
// }
  return (
    <div className="main">
      <div className="row">
      <div className="col-lg-2 col-xs-2 col-sm-2 col-md-2"></div>
        <div className="col-lg-4 col-xs-4 col-sm-4 col-md-4"><h1 className="reactapp"><b>React Application</b></h1><br/>
        {editing ? (
          <Fragment>
            <h2 className="edituser" ><b>Edit user</b></h2>
            <WelcomeEditForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser} />
          </Fragment>
        ) : (
          <Fragment>
            <h2 className="adduser"><b>Add user</b></h2>
            <WelcomeUserForm addUser={addUser} />
          </Fragment>
        )}
      </div>
      <div className=" col-lg-4 col-xs-4 col-sm-4 col-md-4">
        <h2 className="viewuser"><b>View users </b></h2>
        <WelcomeUserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
        <div className="col-lg-2 col-xs-2 col-sm-2 col-md-2"> <label className="logoutlink" ><b><a href="./home">Logout</a></b></label>
        
        </div>
      </div>
    </div>
  )
}
export default WelcomeUser;



