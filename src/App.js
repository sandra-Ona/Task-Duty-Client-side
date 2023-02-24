import { Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import AllTasks from './pages/AllTasks'
import NewTask from './pages/NewTask'
import EditTasks from './pages/EditTasks'
import AllTasks2 from './pages/AllTasks2'

function App() {
 
  return (
    <>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AllTasks" element={<AllTasks/>}/>
      <Route path="/NewTask" element={<NewTask/>}/>
      {/* <Route path="/EditTasks" element={<EditTasks/>}/> */}
      <Route path="/AllTasks2" element={<AllTasks2/>}/>
      <Route path="/AllTasks2/:taskId" element={<EditTasks/>}/>
      {/* <Route path='/delete' element = {} /> */}
    </Routes>

    </>
  )
}


export default App;
