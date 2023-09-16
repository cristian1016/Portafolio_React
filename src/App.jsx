import { Home } from './components/Home/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Project } from './components/Project/Project'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element= {<Home></Home>}></Route>
      <Route path='/projects' element= {<Project></Project>}></Route>
      <Route path='/contact' element= {<Contact></Contact>}></Route>
      <Route path='*' element= {<NotFound></NotFound>}></Route>
    </Routes>
    </>
  
  )
}

export default App