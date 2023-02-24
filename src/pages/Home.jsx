import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import { Container } from 'react-bootstrap'
import imgone from '../images/Component 1.svg'
import imgtwo from '../images/Property 1=Frame 2.svg'
import imgthree from '../images/Property 1=Frame 3.svg'




export default function Home() {
    
    
    const slider= [imgone, imgtwo, imgthree]
    const [counter, setCounter] = useState(0);
    setInterval(function() {
    counter === 3 ? setCounter (0) : setCounter (counter+1);

}, 60000);
  

return (
    <Container>
        <div className='mb-5'>
        <Navbar text1='New Task' text2='All Tasks'/>
        </div>
   
    <div className="container-xl mx-auto d-flex justify-content-between align-items-center px-2 py-5 mt-5 gap-5">
        <div className='py-5'>
            <h1 className='Manage' >Manage your task on</h1>
            <h1 className='Manage' style={{color:'#974FD0'}}>TaskDuty</h1>
            <h6 className='paragraph lh-1 fw-light mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit.
            Non tellus, sapien, morbi ante nunc euismod ac <br/> felis ac. 
            Massa et, at platea tempus duis non eget.<br/> 
            Hendrerit tortor fermentum bibendum mi nisl <br/>semper porttitor. 
            Nec accumsan.
            </h6>
            <button className='onclick mt-3 firstbutton mt-5'  style={{backgroundColor:'#974FD0', borderRadius: '8px', padding:'30px, 25px'}}>
            <a href="/AllTasks2"style={{textDecoration: 'none', color:'#FAF9FB',}} > Go to My Tasks</a></button>
        </div>
        <div>
          <img src={slider[counter]} alt= 'Sliding Images'/>
        </div>
    </div>
    </Container>

)}
