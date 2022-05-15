import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import { Table , Button} from 'reactstrap';



export default function Spells() {
 const [magia,setMagia] = useState([])
    
 
 
 useEffect(() => {
  getSpells()
 },[])


async function getSpells(){
    const {data} =  await  axios.get('https://9488e748.us-south.apigw.appdomain.cloud/api/v1/spells')

    const totalmagias = data.spells

     setMagia(totalmagias)
}

  return (
    <div>
     <h1>MAGIAS</h1>



     <Table bordered>
  <thead>
    <tr>
      <th>
        id
      </th>
      <th>
        name
      </th>
      <th>
       data da criação
      </th>

      <th>Acoes</th>
    </tr>
  </thead>
  <tbody>
  {magia.map((elemento,index) => (
   
         <tr key={index}>
            <td>{elemento.id}</td>
            <td>{elemento.name}</td>
            <td>{elemento.createdAt}</td>
            <td> <Button
    color="primary"
   >
    Abrir
  </Button>
  
  
  <Button
    color="danger"
    
  >
    Deletar
  </Button>
  
  
  </td>
         </tr>
         
     ))}


  </tbody>
</Table>


  
    




     
     

    


    </div>
  )
}
