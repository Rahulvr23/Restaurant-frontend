import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestCard from './RestCard';
function AllRest() {
  //api fetch
  const base_url='https://restaurant-back-end-2ca9.onrender.com/restaurants'
  const[AllRestData,setAllRestData]=useState([])//to hold array of restaurant data
  const fetchDaata=async()=>{
const result=await axios.get(base_url)
console.log(result.data);
setAllRestData(result.data)
  }
  console.log(AllRestData)
  useEffect(()=>{
    fetchDaata()
  },[])
  return (
    <div>
    
<Row>
 
  {
    AllRestData.map(item=>(
      <Col sm={12} md={6} lg={4} xl={3} className='p-5'>
<RestCard restarants={item}/>


      </Col>
    ))
  }
</Row>
    </div>
  )
}

export default AllRest