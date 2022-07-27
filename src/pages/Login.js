import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if(email && password) {
      navigate("/home")
    } else{
      alert("Fill in all details")
    }
    console.log(email, password)
  }
  
  return (
    <section className="container">
      <form id="my-form" onSubmit={handleSubmit}>
        <h1>Add User</h1>
        <div className="msg"></div>
        <div>
          <label htmlFor="email">Email:</label>
          <input value={email} type="text" id="email" onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input type="text" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        </div>
        <input className="btn" type="submit" value="Submit"/>
      </form>

      <ul id="users"></ul>

      {/* <ul className="items">
        <li className="item">Item 1</li>
        <li className="item">Item 2</li>
        <li className="item">Item 3</li>
      </ul> */}
    </section> 
  )
}

export default Login
