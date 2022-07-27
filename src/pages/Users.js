import React, {useState, useEffect} from 'react'

const Users = () => {
    const[users, setUsers] = useState([])
    const fetchUser = async() => {
        const res= await fetch("http://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        setUsers(data)
    }
    // useEffect(() => {
    //     fetch("http://jsonplaceholder.typicode.com/users")
    //     .then((respnse) => respnse.json())
    //     .then(users => setUsers(users))
    // }, [])
    useEffect(() => {
        fetchUser();
    }, [])
  return (
    <div>
       <h1>Hello, this is just a goal post</h1>
      {users.map((user) => {
        return(
            <h1 key={user.id}>{user.name}</h1>
        )
      })}
    </div>
  )
}

export default Users
