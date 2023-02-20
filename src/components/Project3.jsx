import React , {useState} from 'react';
import "../index.css";

const Project3 = () => {
  const [name,setName] =useState("")
  const[email,setEmail] =useState("")
  const[list,setList] = useState([])

  

  const handleSubmit = (e) =>{
 e.preventDefault()
console.log(name,email)
const date={name,email}
if(name&&email){
setList((ls) =>[...ls,date])
setName("")
setEmail("")
}
  }

  const handleClear = (index) =>{
list.splice(index,1)
setList([...list])
  }

  return (
    <div className='todos'>
        <h4>Ashish's Todos</h4>
       <form onSubmit={handleSubmit}>
       <input type="text"  placeholder='TODO Inventory 1' value={name} onChange={(e) => setName(e.target.value)}/>
       <input type="text"  placeholder='TODO Inventory 2' value={email} onChange={(e) => setEmail(e.target.value)}/>
       <button style={{color:"black",backgroundColor:"orange",borderRadius:"10px"}}>Submit</button> 
       </form>
       {
        list.map((a,i) =><div>   
            <li className='displayContainer'>
            <h5 style={{color:"brown"}}>{i+1} :</h5>
          
            <h5 style={{color:"red"}}> A : </h5>
            <h5>" {a.name} "</h5>
            <h5 style={{color:"red"}}>B :</h5>
            <h5> " {a.email} "</h5>
            <button style={{color:"white",backgroundColor:"green",borderRadius:"10px"}} onClick={() =>handleClear(i)}>Clear Todo</button>    
             
            </li>
        </div>)
       }
    </div>
  )
}

export default Project3