import React from 'react'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom"

function RestCard({restarants}) {
  console.log(restarants);

  return (
    <div>
<Link to={`view/${restarants.id}`}style={{textDecoration:"none"}}>
 
<MDBCard className='mx-3 my-4 p-1' style={{height:"550px"}} >
      <MDBCardImage src={restarants.photograph} style={{height:"300px"}} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle  style={{height:"50px"}} className='text-white mt-1'>{restarants.name}</MDBCardTitle>

  
        <MDBCardText ><br></br>
<b className='text-white '>Location: </b>{restarants.address} 
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
</Link>



    </div>
  )
}

export default RestCard