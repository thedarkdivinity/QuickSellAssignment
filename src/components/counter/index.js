import axios from 'axios';
import React,{useState,useEffect} from 'react'

import './style.css'

const Counter = ({counter,increment,decrement,updateCounter,loading,PutToApi}) => {
  
  
 
  const [maxVal,setMaxVal]=useState(10000);
  const[disabIncrement,SetDisabIncrement]=useState(false);
  useEffect(()=>{
   fetchCount();
  },[])
  const fetchCount=async()=>{
    try {
      
      const initCount= await axios.get('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json')
      console.log(initCount)
      if(initCount.data!==null)
      {
        updateCounter(initCount.data)
      }
      
    } catch (error) {
      console.log(error)
    }
   
  }
  const handleIncrementClicks=()=>{ 
    
    if(counter<maxVal)
    {
        increment()
    }
      
  }
  
  const handleDecrementClicks=()=>{ 
      
    if(counter > 0){ 
      decrement()
    } 
    

  }
  
  return (
    <>
   
   
    <div className="dashedBox">
    
      <div className="counter">
    
      
        <button onClick={handleDecrementClicks} class="sub"> - </button>
        
       
        
        <input style={{
            background:"#f8e9e9",
            width:"60px",
            color:"#a54946",
            fontWeight:"bold",
            textAlign:"center",
            
        }} value={counter} type="number"  max={maxVal} onChange={(e)=>{
            updateCounter(e.target.value)
            
          

           
            if(e.target.value>=maxVal)
            {
              SetDisabIncrement(true);
            }
            else{
              SetDisabIncrement(false);
            }
            if(e.target.value>=1 && e.target.value<=maxVal)
            {
              PutToApi(e.target.value)
            }
           
        }} />
      
        <button onClick={handleIncrementClicks} class="add" disabled={counter === maxVal||disabIncrement }> + </button>
      
        </div>
        {loading===true && <span><p>Saving counter value</p><span className="lds-ring"><div></div><div></div><div></div><div></div></span></span>}
      </div>
     
    </>
  );
}

export default Counter