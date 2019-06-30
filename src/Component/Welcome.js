import React,{ useState, Fragment} from 'react';
import WelcomeForm from './WelcomeForm';
import WelcomeTable from './WelcomeTable';
import WelcomeEdit from './WelcomeEdit';

const Welcome = () =>{
    const usersData =[]
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
return (
    <div className="main">
      <div className="row">
      <div className="col-lg-2 col-xs-2 col-sm-2 col-md-2"></div>
        <div className="col-lg-4 col-xs-4 col-sm-4 col-md-4">
        <h1 className="font1">React Application</h1>
        {editing ? (
          <Fragment>
            <h2 >Edit user</h2>
            <WelcomeEdit
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h2 className="adduserheading">Add user</h2>
            <WelcomeForm addUser={addUser} />
          </Fragment>
        )}
      </div>
      
      <div className=" col-lg-4 col-xs-4 col-sm-4 col-md-4">
        <h2 className="viewuser">View users</h2>
        <WelcomeTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
        <div className=" col-lg-2 col-xs-2 col-sm-2 col-md-2">
            <label className="welcomelogoutlink"><b>Logout</b></label>
        </div>
      </div>
    </div>
  )
}
export default Welcome;

