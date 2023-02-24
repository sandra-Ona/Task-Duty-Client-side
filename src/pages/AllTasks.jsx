import React from 'react'
import Navbar from '../component/Navbar'
import { Container } from 'react-bootstrap'
import {BiEdit} from 'react-icons/bi'
import {RiDeleteBin6Line} from 'react-icons/ri'

export default function Pagetwo() {
  return (
    <Container>
          <div className='mb-5'>
        <Navbar text1='New Task'/>
        </div>
        <hr/>
        <div className='mt-4 mb-5 d-flex justify-content-between align-items-center'>
        <div>
            <h1> My Tasks</h1>
        </div>
        <div>
             <h3 ><a href='/NewTask' style={{textDecoration: 'none', color: '#974FD0'}}>+ Add New Task</a></h3>
        </div>
        </div>
        <div className='mt-5 para'>

         <div className='box d-flex mx-3 justify-content-between align-items-center'>
         <div><p className='mt-3'style={{color:'red'}}>Urgent</p></div>
         <div className='d-flex gap-3'>
         <button className='onclick mt-3'  style={{backgroundColor:'#974FD0', borderRadius: '8px', padding:'30px, 25px'}}>
            <a href="./EditTasks"style={{textDecoration: 'none', color:'#FAF9FB',}} ><BiEdit/> Edit</a></button>
            <button className='onclick mt-3'  style={{backgroundColor:'#FAF9FB', borderRadius: '8px', padding:'50px, 25px'}}>
            <a href="./DeleteTasks"style={{textDecoration: 'none', color:'#974FD0',}} ><RiDeleteBin6Line/> Delete</a></button>
         </div>
         </div>
         <hr/>
         <div className='mx-3'>
            <h4>FinTech Website Update</h4>
            <p className='text'>Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit.
                met quis nibh posuere non tempor.
               Erat mattis<br></br> gravida pulvinar nibh 
               aliquam faucibus et magna. Interdum
               eu tempus ultricies cras neque mi. 
               Eget tellus<br></br> suspendisse et viverra.</p>
        </div>
        </div>
        


        <div className='mt-5 para'>
         <div className='box d-flex mx-3 justify-content-between align-items-center'>
         <div><p className='mt-3' style={{color:'green'}}>Important</p></div>
         <div className='d-flex gap-3'>
         <button className='onclick mt-3'  style={{backgroundColor:'#974FD0', borderRadius: '8px', padding:'30px, 25px'}}>
            <a href="./EditTasks"style={{textDecoration: 'none', color:'#FAF9FB',}} ><BiEdit/> Edit</a></button>
            <button className='onclick mt-3'  style={{backgroundColor:'#FAF9FB', borderRadius: '8px', padding:'50px, 25px'}}>
            <a href="./DeleteTasks"style={{textDecoration: 'none', color:'#974FD0',}} ><RiDeleteBin6Line/> Delete</a></button>
         </div>
         </div>
         <hr/>
         <div className='mx-3'>
            <h4>Agro Website Update</h4>
            <p className='text'>Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit.
                met quis nibh posuere non tempor.
               Erat mattis<br></br> gravida pulvinar nibh 
               aliquam faucibus et magna. Interdum
               eu tempus ultricies cras neque mi. 
               Eget tellus<br></br> suspendisse et viverra.</p>
        </div>
        </div>
        

        <div className='mt-5 para'>
         <div className='box d-flex mx-3 justify-content-between align-items-center'>
         <div><p className='mt-3' style={{color:'red'}}>Urgent</p></div>
         <div className='d-flex gap-3'>
         <button className='onclick mt-3'  style={{backgroundColor:'#974FD0', borderRadius: '8px', padding:'30px, 25px'}}>
            <a href="./EditTasks"style={{textDecoration: 'none', color:'#FAF9FB',}} ><BiEdit/> Edit</a></button>
            <button className='onclick mt-3'  style={{backgroundColor:'#FAF9FB', borderRadius: '8px', padding:'50px, 25px'}}>
            <a href="./DeleteTasks"style={{textDecoration: 'none', color:'#974FD0',}} ><RiDeleteBin6Line/> Delete</a></button>
         </div>
         </div>
         <hr/>
         <div className='mx-3'>
            <h4 >FinTech Website Update</h4>
            <p className='text'>Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit.
                met quis nibh posuere non tempor.
               Erat mattis<br></br> gravida pulvinar nibh 
               aliquam faucibus et magna. Interdum
               eu tempus ultricies cras neque mi. 
               Eget tellus<br></br> suspendisse et viverra.</p>
        </div>
        </div>
        

        <div className='mt-5 para'>
         <div className='box d-flex mx-3 justify-content-between align-items-center'>
         <div><p className='mt-3' style={{color:'green'}}>Important</p></div>
         <div className='d-flex gap-3'>
         <button className='onclick mt-3'  style={{backgroundColor:'#974FD0', borderRadius: '8px', padding:'30px, 25px'}}>
            <a href="./EditTasks"style={{textDecoration: 'none', color:'#FAF9FB',}} ><BiEdit/> Edit</a></button>
            <button className='onclick mt-3'  style={{backgroundColor:'#FAF9FB', borderRadius: '8px', padding:'50px, 25px'}}>
            <a href="./DeleteTasks"style={{textDecoration: 'none', color:'#974FD0',}} ><RiDeleteBin6Line/> Delete</a></button>
         </div>
         </div>
         <hr/>
         <div className='mx-3'>
            <h4>Agro Website Update</h4>
            <p className='text'>Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit.
                met quis nibh posuere non tempor.
               Erat mattis<br></br> gravida pulvinar nibh 
               aliquam faucibus et magna. Interdum
               eu tempus ultricies cras neque mi. 
               Eget tellus<br></br> suspendisse et viverra.</p>
        </div>
        </div>
        
    </Container>
  )
 
}
