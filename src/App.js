
import React,{useState,useEffect} from 'react'

import './App.css';
import Counter from './components/counter';
import CounterValue from './components/counter-value';
import axios from 'axios';

const App=()=> {
  const [counter, setCounter] = useState(1);
  const [loading,setLoading]=useState(false);
  //FUNCTION TO SUBMIT COUNTER VALUE TO THE API
 const PutToApi=async(v)=>{
   try {
     setLoading(true);
     //PUTTING MY ROLL NUMBER
    const updatedCount={181080061:v};
    const response = await axios.put('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', updatedCount);
   } catch (error) {
     console.log(error)
   }
  setLoading(false);
 }

  
  const increment=()=>{
    PutToApi(+counter+1);
    setCounter(+counter+1);
    
  }
  const decrement=()=>{
    PutToApi(counter-1);
    setCounter(counter-1);
  }
  const updateCounter=(p)=>{
    setCounter(p);
  }
  return (
    <div className="main">
      <Counter counter={counter} increment={increment}  decrement={decrement} updateCounter={updateCounter} loading={loading} PutToApi={PutToApi}/>
      <CounterValue counter={counter}/>
    </div>
  );
}

export default App;
