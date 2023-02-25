import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Project2 = () => {

  const [count,setCount] = useState(0)
  // const [isStart, setIsStart] = useState(false);


  // useEffect(() => {
  //   if (isStart) {
  //     const timer = setInterval(() => {
  //       if (count < 60) {
  //         setCount(count + 1)
  //       } else {
  //         setCount('Times up');
  //         clearInterval(timer);
  //       }
  //     }, 1000);
  //   }
  // }, [isStart]);



function increment (){
  setCount(count +10)
}
function reset (){
  setCount(count === 0)
}
function decrement (){
  setCount(count -100)
}

  return (
    <React.Fragment>
       <h2 style={{color:"darkred",margin:10}}>Counter</h2>
    <CssBaseline />
    <Container fixed>
      <Box sx={{ bgcolor: '#cfe8fc', height: '40vh' }}>
         
    <div className='counterEffect'>
     <div className='count1'>
        Count : {count}
        </div>
           <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
      
      </div>
      </Box>
    
      
      
      
   
    </Container>
  </React.Fragment>
  
  )
}

export default Project2