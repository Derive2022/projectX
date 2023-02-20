import React, { useState } from 'react'

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
    <>
    <h2 style={{color:"darkred",margin:30}}>Counter</h2>
    <div className='counterEffect'>
      <div className='count1'>
        Counter : {count}
      </div>
      
      
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
      
      </>
  )
}

export default Project2