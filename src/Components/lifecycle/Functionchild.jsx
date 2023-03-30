import React,{useEffect, useState} from 'react'


function Functionchild() {
    let timer;
    const  [count,setcount]=useState(1);

   useEffect((()=>{
    console.log("child componentdidmount")
   }),[]) 
useEffect(()=>{
    
    timer=setInterval(()=>{
        console.log("child componentdidupdate")
        setcount((pre)=> pre + 1)
    },1000);
    
    return()=>{
        console.log("child componentwillunmount")
        clearInterval (timer);
    }
},[])
// useEffect(()=>{
//     return()=>{
//         console.log("child componentwillunmount")
//         clearInterval (timer);
//     }
// },[])
  return (
    <div>
      <h2>hi..child function lifestyle {count}</h2>
    </div>
  )
}

export default Functionchild
