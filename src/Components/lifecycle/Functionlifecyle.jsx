import React,{useEffect,useState} from 'react'
import Functionchild from './Functionchild';

function Functionlifecyle() {
    const[name,setname] =useState("name");
    const[age,setage] =useState("age");
    const[show,setshow] =useState("show");
    const[count,setcount]=useState(1)

    useEffect(()=>{
        console.log("mounting-phase=>componentDidMount")
    },[]);
    useEffect(()=>{
        console.log("componentDidupdate",count)
    },[count]);


  return (
    
    <div>
      <h1>Halo... {name} ,{age} years old
      counter:{count}</h1>
      <button onClick={()=>setname("saranya")}>update name</button>
      <button onClick={()=> setage("20")}>update age</button>
      <button onClick={()=>setshow(!show)}>show/hide</button>
      <button onClick={()=> setcount(pre=>(pre)+1)}>count</button>
      {show? <Functionchild/>: null}
    </div>
  )
}

export default Functionlifecyle
