import React from 'react'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

export default function MediaCard({tags,tagColor, title, description, handleDelete, _id }) {
  return (
    <div className='mb-3'style={{border:'2px solid black', borderRadius:'8px'}}>
    <div className='box d-flex mx-3 justify-content-between align-items-center'>
    <div><p  className={tags ==='urgent'? 'red': 'green'} style={{color:{tagColor}}}>{tags}</p></div>
    <div className='d-flex gap-3'>
    <EditButton  _id = {_id} />
    <DeleteButton handleDelete = {handleDelete} _id = {_id}/>
    </div>
    </div>
    <hr/>
    <div className='mx-3 mb-3'>
       <h4 >{title}</h4>
       <p style={{fontfamily:'Signika Negative',fontweight:'400',fontsize:'24px',lineheight:'30px',color:'#737171'}}>{description}</p>
   </div>
   </div>
   
   
  )
}
