import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../component/Navbar'
import {FaAngleLeft} from 'react-icons/fa'
import TaskTitle from '../component/TaskTitle'



export default function NewTask() {
  
  
  return (
  <Container>
    <div className='mb-5'>
        <Navbar text2='All Tasks'/>
        </div>
        <hr/>
        <div>
            <h1><a href='/AllTasks2'style={{textDecoration: 'none', color: 'Black'}}><FaAngleLeft/> </a>New Task</h1>           
        </div>
        

        
        <div className='mb-5'>
          <TaskTitle Text1='Task Title' Text2='Description'/>
        </div>
        
  </Container>
  )
}
