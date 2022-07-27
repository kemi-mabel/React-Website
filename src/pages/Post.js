import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
    const[posts, setPosts] = useState([])

    
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json()) // convert to array
        .then(posts => setPosts(posts)) // set your data
    }, [])
  return (
    <div className='homeContainer'>
      <h1>Hello, this is just a goal post</h1>
      <div className='grid'>
      {posts.map((post) => {
        return(
          <div className='post-card'>
            <h2>{post.id} {post.title} </h2>
            <p>{post.body.slice(0, 40)}...<Link to={`/singleblogpage/${post.id}`}> <a> Read More </a></Link></p>
           </div>
        )
      })}
      </div>
    </div>
  )
}

export default Post
