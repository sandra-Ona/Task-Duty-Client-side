import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'

export default function DeleteButton({handleDelete, _id}) {

  return (
    <div>
        <button onClick={()=> handleDelete(_id)} className='mt-3'  style={{backgroundColor:'#FAF9FB', borderRadius: '8px', padding:'50px, 25px'}}>
       <RiDeleteBin6Line/> Delete</button>
    </div>
  )
}
