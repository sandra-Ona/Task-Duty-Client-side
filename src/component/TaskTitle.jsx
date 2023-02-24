import React, {useState, useEffect} from 'react'
import { Container} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

export default function TaskTitle({Text1, Text2}) {
  const [taskTitle, setTaskTitle]= useState('');
  const [tag, setTag]= useState('');
  const [description, setDescription]= useState('');

  const url='http://localhost:4000/api/v1/tasks';

  const redirect = useNavigate();


  const createTask= async (e) => {
    e.preventDefault();
    const res= await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({taskTitle, tag, description})
    });

  const data =await res.json();
  console.log(data)
  redirect ('/AllTasks2')
  }
  return (
    <Container>
      <form onSubmit={createTask}>
    <div className='g-5 w-100'>
            <label htmlFor="title"  className='fs-5 fw-1'>{Text1}</label><br />
            <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder='Type your Task' id='title' name='title' className='form, boxa' required/><br />
            
        </div>

        <div className='g-5 w-100'>
        <label htmlFor="description" className='fs-5 fw-1 mt-3'>{Text2}</label><br />
            <input type="description" value={description}onChange={(e) => setDescription(e.target.value)} placeholder='Briefly describe your task' id='title' name='title' className='form1, boxb' required/><br />
           
        </div>

        <div className='g-5 w-100'>
            <label htmlFor="tags" className='mt-3'>Tags</label><br />
           <select value={tag} onChange={(e) => setDescription(e.target.value)} className='mt-4' style={{width: '100%', padding:'10px'}}>
            <option value='urgent'>urgent</option>
            <option value='important'>important</option>
            <option value='severe'>severe</option>
           </select>
            
            
            
         
            <button className='mt-3 form-button buttona' type='submit'>Done</button>
        </div>
        </form>
        
    </Container>
  )
};
