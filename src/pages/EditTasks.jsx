import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../component/Navbar'
import {FaAngleLeft} from 'react-icons/fa'
import Tagedit from '../component/Tagedit'

export default function EditTasks({ _id}) {
  return (
    <Container>
    <div className='mb-5'>
        <Navbar text2='All Tasks'/>
        </div>
        <hr/>
        <div className='mb-5'>
            <h1><a href='/AllTasks2'style={{textDecoration: 'none', color: 'Black'}}><FaAngleLeft/> </a>Edit Task</h1>           
        </div>
        <div className='mb-3'>
       <Tagedit />
        </div>
  </Container>
  )
}
