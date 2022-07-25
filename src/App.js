import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Card from './components/Card';
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contactus from './pages/Contactus';
import Applicationform from './pages/Applicationform';
import Gallery from './pages/Gallery';
import Studentdata from './pages/Studentdata';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';


function App() {
  const StudentDetails = [
  {
    id: 1,
    name: "Oluwakemi",
    state: "Texas",
    stack: "FullStack",
    descripiton: "I am an Engineer"
  },
  {
    id: 2,
    name: "James",
    state: "Sangotedo",
    stack: "BackEnd",
    descripiton: "I have a big head"
  },
  {
    id: 3,
    name: "Ruke",
    state: "Ikeja",
    stack: "FrontEnd",
    descripiton: "I am resilient"
  },
  {
    id: 4,
    name: "Fisayo",
    state: "Berger",
    stack: "FrontEnd",
    descripiton: "I know my stuff"
  },
  {
    id: 5,
    name: "Funmi",
    state: "Magodo",
    stack: "Mobile",
    descripiton: "I am successful"
  },
  {
    id: 6,
    name: "Chuks",
    state: "Ogun",
    stack: "BackEnd",
    descripiton: "I am proud"
  }
  ]
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>

     
      {/* <h2> Welcome to Pwc React Application</h2>
      <Welcome/> 
     {StudentData.map(student => {
      return (
        <Card key={student.id} name= {student.name} state={student.state} stack={student.stack} Description={student.descripiton}/>
      )
        
      })} */}
      
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/applicationform' element={<Applicationform/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/studentData' element={<Studentdata studentDetails= {StudentDetails}/>}/>
      
      {/* <Applicationform/> */}
      {/* <Studentdata/> */}
      {/* <Gallery/> */}


    
      </Routes>
      <Footer/>
      </BrowserRouter>
      </div>
   
  );
}

export default App;
