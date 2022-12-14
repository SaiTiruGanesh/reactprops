// import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
/*import StateExample from './StateExample'
import FuncProps from './FuncProps'
import Demo from './Demo'
import Events from './Events'
import JSX from './JSX'*/
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'

function App(){
  return(
    <div>
    {/*<JSX/>
   <Events/>
    <StateExample/>*/}

    {/* <Demo name="tiru"/>
    <FuncProps carname="rolls royce" year="1998"/>
    {<PropsExample name="ganesh" age="20"/>
    <PropsExample name="sai" age="10"/>
    {<p>Good Afternoon</p>
    <h1>Bahubali </h1>
    <ClassComponent/> 
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsan10V46TIs0_FpV4JsbNbngFU804GKn16uNH5D6Ulqx6-KiWghK7PwQG4WV-zhWGbg&usqp=CAU"width="50%"alt="bahubali"/>}}*/}
    <BrowserRouter>
    
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    )
}
export default App 