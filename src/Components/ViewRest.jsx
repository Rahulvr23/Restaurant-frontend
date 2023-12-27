import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';
import { useParams } from 'react-router-dom'
import Col from 'react-bootstrap/esm/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOP from './RestOP';
import RestReview from './RestReview';

function ViewRest() {

  const[restDetails,setRestDetails]=useState({})
  console.log(restDetails);
  const {id}=useParams()
  console.log(id);//oject=>id=3
  //api call to get details of the pirticular restaurant using path parameter
  const base_url='https://restaurant-back-end-2ca9.onrender.com/restaurants'
  const fetchRest=async()=>{
    const result=await axios.get(`${base_url}/${id}`)
    console.log(result.data.name);
    const full=result.data
    console.log(full.address);
    setRestDetails(full)
  }
  useEffect(()=>{
    fetchRest()
  },[])
  return (
    <div>
      <Row className='p-5' >
      <Col  ><img src={restDetails.photograph} style={{width:"500px",height:"500px"}} alt="" srcset="" /></Col>
      <Col className='m-5 ' sm={12} lg={6}><h1>{restDetails.name}</h1>

<ListGroup style={{width:"550px"}} >

      <ListGroup.Item disabled>{restDetails.name}</ListGroup.Item>
      <ListGroup.Item>Address: {restDetails.address}</ListGroup.Item>
      <ListGroup.Item>Neighborhood: {restDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine type: {restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item><RestOP op={restDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><RestReview review={restDetails.reviews}/></ListGroup.Item>
    </ListGroup>
</Col>
       
      </Row>
    </div>
  )
}

export default  ViewRest