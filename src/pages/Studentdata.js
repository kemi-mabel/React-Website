import React from 'react'
import Card from '../components/Card'
const Studentdata = (props) => {
  return (
    <section class="container">
    <h1>PwC Student Data</h1>
    {props.studentDetails.map(student => {
      return (
        <Card key={student.id} name= {student.name} state={student.state} stack={student.stack} Description={student.descripiton}/>
      )
        
      })}
</section> 
  )
}

export default Studentdata
