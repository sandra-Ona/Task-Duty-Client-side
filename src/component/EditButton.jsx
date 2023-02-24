import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {Link } from 'react-router-dom'
export default function EditButton({_id}) {
  return (
    <div>
      <Link style={{textDecoration: 'none', color:'#FAF9FB',}} to ={`/AllTasks2/${_id}`}>
        <button className='onclick mt-3'  style={{backgroundColor:'#974FD0', borderRadius: '8px', padding:'30px, 25px'}}>
       <BiEdit/> Edit</button>

      </Link>
    </div>
  )
}
