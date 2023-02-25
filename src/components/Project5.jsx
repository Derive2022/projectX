import React, {useState ,useMemo } from 'react'

const Project5 = () => {

    const [number,setNumber] = useState(0)
    const [dark ,setDark] = useState(false)
    const doubleNumber = useMemo(() =>{
        slowFunction(number)
    },[number])
    
    const themeStyles = {
        backgroundColor:dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

  return (
    <div>
    <input  type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
    <button onClick={() => setDark(prevDark => !prevDark)}> change theme</button>
    <div style={themeStyles}> {doubleNumber}</div>
    </div>
  )
}

function slowFunction(num){
    console.log("calling Slow Function")
    for(let i=0; i<=10000000 ; i++)
    return num*2
}

export default Project5;