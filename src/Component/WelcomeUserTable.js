import React from 'react';
import './WelcomeUserTable.css';

const WelcomeUserTable = props => (
    <table cellpadding="10px" cellspacing="0px" class="name1">
      <thead>
        <tr>
       
          <th className="names"><b>Name</b></th>
          <th><b>Username</b></th>
          <th><b>Actions</b></th>
         
        </tr>
      </thead>
      <tbody >
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr className="tab" key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button onClick={() => {props.editRow(user)}} className="editbutton" >Edit</button>
                <button onClick={() => props.deleteUser(user.id)} className="deletebutton">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}> No users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
  export default WelcomeUserTable;


  