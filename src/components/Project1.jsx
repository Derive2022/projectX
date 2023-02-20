import React,{useState,useEffect} from 'react'
import "../index.css";

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
    <div >
    <main>
      <h3 style={{color:"darkred",margin:30}}>Fetching user list using Async and Await</h3>
      
      <ul  className='containerFetch'>
        {user && user.length > 0 && user.map((userObj, index) => (
            <li className='dataFetch' key={userObj.id} >{userObj.name}</li>
          ))}
      </ul>
     
    </main>
</div>
  )
}

export default Project1