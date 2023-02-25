import React,{useState,useEffect} from 'react'
import "../index.css";
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'username', headerName: 'Username', width: 500 },
  { field: 'name', headerName: 'Name', width: 600 },
  { field: 'email', headerName: 'Email', width: 600 }
]


const Project1 = () => {
    const [user, setUser] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      return setUser(data);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
   
//     <div >
//     <main>
//       <h3 style={{color:"darkred",margin:30}}>Fetching user list using Async and Await</h3>
      
//       <ul  className='containerFetch'>
//         {user && user.length > 0 && user.map((userObj, index) => (
//             <li className='dataFetch' key={userObj.id} >{userObj.name}</li>
           
//           ))}
//       </ul>
     
//     </main>
// </div>


<div style={{ height: 700, width: '100%' }}>
  <h3 style={{color:"darkmagenta",marginTop:"2rem"}}>Fetching API Data using Async and Await and Material UI Design</h3>
     <DataGrid
       rows={user}
       columns={columns}
       pageSize={10}
     />
   </div>

  )
}

export default Project1