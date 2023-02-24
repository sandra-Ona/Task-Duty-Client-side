import React from 'react'
import { Container } from 'react-bootstrap'
import img from '../images/Ellipse 1.svg'
import logo from '../images/Group 1.svg'




const navbar = ({text1, text2}) => {
  return (
    <Container>
      <div className="container-xl mx-auto d-flex justify-content-between align-items-center px-2 py-3">
      <div className='d-flex gap-2'>
       <img src= {logo}alt='logo'/>
       <h3><a href ='/' style={{textDecoration: 'none', color: 'black'}}>TaskDuty</a></h3>
      </div>
      <div className='d-flex justify-content-center gap-5'>
       <h4 ><a href='/NewTask' style={{textDecoration: 'none', color: 'black'}}>{text1}</a></h4>
       <h4><a href='/AllTasks2'style={{textDecoration: 'none', color: 'black'}}>{text2}</a></h4>
       <img src={img} alt='face'/>
      </div>
      </div>
    </Container>
  )
}

export default navbar