import React, { useState } from 'react'
import './WelcomeUserForm.css';

const WelcomeUserForm = props => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.username) return

        props.addUser(user)
        setUser(initialFormState)
      }} ><br/>
      <label className="name">Name</label><br/>
      <input className="textbox"type="text" name="name" value={user.name} onChange={handleInputChange} /><br/>
      <label className="name">Username</label><br/>
      <input className="textbox"type="text" name="username" value={user.username} onChange={handleInputChange} /><br/><br/>
      <button  class="Addnewuserbutton">Add new user</button>
    </form>
  )
}

export default WelcomeUserForm;



