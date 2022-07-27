import React from 'react'

const Home = () => {
  return (
    <section >
        <h1>PwC Tech Talent BootCamp</h1>
        <h1>Add User</h1>
        <div className="msg"></div>
        
      <ul id="users"></ul>
      <p>The objective of the bootcamp is to develop analytical and software development/engineering 
        capabilities required to tackle complex business problems,by leveraging PwC’s essential 8 
        technologies to address growing issues and harness emerging opportunities across Africa.</p>
        <div className="content">
          <img src = "assets/benefit.svg" width = "500" height= "300"/>
          </div>
          <div>
        <h2>Bootcamp benefits</h2>
        <ul className="items">
          <li className="item">Employment contract for participants with exceptional performance</li>
          <li className="item">An opportunity to be placed in PwC's pool of software engineering professionals for future engagements</li>
          <li className="item">An opportunity to acquire high demand technical skills and become readily employable.</li>
          <li className="item">Stipends that cover basic expenses during the program.</li>
        </ul>
          </div>
         <h3>Services offered by PwC</h3>
         <ul> 
             <li>Corporate Auditing</li>
             <li>Auditing Software Solutions</li>
             <li>Project Management</li>
             <li>Software Training</li>
         </ul>
         {/* <link rel="stylesheet" href="style.css"> */}
    </section>
  )
}

export default Home
