import React, { useState, useEffect } from 'react';
 import './WelcomeEditForm.css';
const WelcomeEditForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }
  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}>
      <label >Name</label><br/>
      <input className=" textbox" type="text" name="name" value={user.name} onChange={handleInputChange} /><br/>
      <label>Username</label><br/>
      <input className=" textbox" type="text" name="username" value={user.username} onChange={handleInputChange} /><br/><br/>
      <button class="updateuserbutton">Update user</button>
      <button class="cancelbutton" onClick={() => props.setEditing(false)} >
        Cancel
      </button>
    </form>
  )
}

export default WelcomeEditForm;