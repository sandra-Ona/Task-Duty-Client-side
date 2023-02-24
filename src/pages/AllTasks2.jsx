import React, {useState, useEffect} from 'react'
import Navbar from '../component/Navbar'
import { Container } from 'react-bootstrap'
import MediaCard from '../component/MediaCard'
import { useNavigate } from 'react-router-dom'


export default function AllTAsks2() {
  const url = "http://localhost:4000/api/v1/tasks"
  const [tasks, setTasks]= useState([]);
  const [isLoading, setLoading] = useState([true]);
  const fetchData = async () => {
   const res= await fetch (url);
    const data= await res.json();
    console.log(data);
    setTasks(data.tasks)
  };
  useEffect (() => {
    fetchData();
  }, []);

  const redirect = useNavigate()
  const handleDelete = (TaskId) => {
    const url = `http://localhost:4000/api/v1/tasks/${TaskId}`
    fetch(url, {
      method: 'DELETE',}).then(()=> {
        redirect('/')
      })

      
    
  }

  return (
 <Container>

     <div className='mb-5'>
        <Navbar text1='New Task'/>
        </div>

        <div className='mt-4 mb-5 d-flex justify-content-between align-items-center'>
        <div>
            <h1> My Tasks</h1>
        </div>
        <div>
             <h3 ><a href='/NewTask' style={{textDecoration: 'none', color: '#974FD0'}}>+ Add New Task</a></h3>
        </div>
        </div>

        {
          tasks.map((task)=>{
            const {_id, taskTitle, description, tag} = task
            return(
              <MediaCard handleDelete={handleDelete} key={_id} tags={tag} _id={_id} tagcolor='red' title={taskTitle} description={description}/>
            )
          })
        }
 </Container>
  )
}
