import React from 'react'

const ApplicationForm = () => {
  return (
    <section className="container">
          <h1>Applicaton Form</h1>
        <form id="my-form">
            
            <p>Fill in the form correctly</p>
            
            <label htmlFor="firstname"><b>First Name</b></label>
            <input type="text" placeholder="Enter First Name" name="firstname" id="firstname" required/><br/>
    
            <label htmlFor="lastname"><b>Second Name</b></label>
            <input type="text" placeholder="Enter Last name" name="lastname" id="lastname" required/><br/>
    
            <label htmlFor="age"><b>Age</b></label>
            <input type="text" placeholder="Enter Age" name="age" id="age" required/><br/>
            <label htmlFor="gender"><b>Gender</b></label>
            <input name="gender" type="radio" className="gender" id="male" value="male"/> Male   
            <input name="gender" type="radio" className="gender" id="female" value="female"/> Female
     
            <label htmlFor="State"><b>State</b></label>
            <select name="state" id="state" required>
                <option value="anambra" id="anambra" checked>Anambra</option>
                <option value="ogun" id="ogun">Ogun</option>
                <option value="osun" id="osun">Osun</option>
                <option value="edo" id="edo">Edo</option>
                <option value="abuja" id="abuja">Abuja</option>
                <option value="adamawa"id="adamawa">Adamawa</option>
                <option value="ondo">Ondo</option>
                <option value="abia">Abia</option>
                <option value="akwaIbom">Akwa Ibom</option>
                <option value="bauchi">Bauchi</option>
            </select><br/>
            
            <div className="msg">
            <div id ="course">
                <input type="checkbox" name="courses" id="python" value="python"/><br/>
                <label htmlFor="datascience"><b>Python</b></label>
                <input type="checkbox" name="courses" id="datascience" value="datascience"/><br/> 
                <label htmlFor="datascience"><b>Data Science</b></label>
                <input type="checkbox" name="courses" id="javascript" value="javascript" /><br/>
                 <label htmlFor="javascript"><b>Javascript</b></label>
                <input type="checkbox" name="courses" id="agile" value="agile"/><br/>
                <label htmlFor="agile"><b>Agile Methodology</b></label>
                <input type="checkbox" name="courses" id="c#" value="c#"/><br/>
             <label htmlFor="c#"><b>C#</b></label>
            <input type="checkbox" name="courses" id="design"value="design"/><br/>
             <label htmlFor="design"><b>Javascript</b></label>    
            </div>
           </div>
            <input className ="btn" type="submit" value="Submit"/> 
          
        </form>
        <ul id="tracks"></ul>
        </section>
  )
}

export default ApplicationForm
