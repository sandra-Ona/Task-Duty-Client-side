// import React, {useState, useEffect} from 'react'
// import { Container} from 'react-bootstrap'

// function Description({Text1}) {
 
//   const [description, setDescription]= useState('');
  
//   const url='http://localhost:4000/api/v1/tasks';
//   const createTask= async () => {
//     const res= await fetch(url, {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({description})
//     })
//     const data=await res.json();
//     console.log(data)
//   }

//   return (
//     <Container>
//     <div className='g-5 w-100'>
//         <form action="">
//         <label for="description" className='fs-5 fw-1 mt-3'>{Text1}</label><br />
//             <input type="description" value={description}onChange={(e) => setDescription(e.target.value)} placeholder='Briefly describe your task' id='title' name='title' className='form1, boxb' required/><br />
//             </form>
//         </div>
        
//     </Container>
//   )
// }

// export default Description