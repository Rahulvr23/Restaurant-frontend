import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  
function Header() {
  return (
    <div>

<MDBNavbar style={{background:"	#353935"}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
<b style={{color:"white"}}> <i class="fa-solid fa-utensils mx-3 "></i>
          
          Finnjävel Salon</b> 
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>    
    </div>
  )
}

export default Header