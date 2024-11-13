import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './Redux/CounterSlice'

function Counter() {

  const count = useSelector((state)=>state.counterReducer.count)
  const dispatch = useDispatch()
  const [amount,setAmount]=useState("")
  console.log(amount);

  const handleIncrement=()=>{
    if (amount=="") {
      alert("Please provide value")
    }
    else{
      dispatch(incrementByAmount(Number(amount)))
      setAmount("");
    }
  }
  
  return (
    <>
      <h1 className='text-danger fw-bolder text-center mt-5'>Counter Application</h1>
      <div className="container border mt-5 p-3 w-50" style={{backgroundColor:'black'}}>
        <h2 className='fw-bolder text-center mt-5' style={{fontSize:'50px', backgroundColor:'black', color:'yellow'}}>{count}</h2>
        <div className="d-flex justify-content-evenly align-items-center mt-5" style={{backgroundColor:'black'}}>
            <button className='btn btn-success'onClick={()=>dispatch(increment())}>Increment</button>
            <button className='btn btn-danger'onClick={()=>dispatch(reset())}>Reset</button>
            <button className='btn btn-info' onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
        <div className="d-flex mt-5 rounded-2">
            <input type="text" className='form-control' onChange={e=>setAmount(e.target.value)} placeholder='Enter amount to be incremented' value={amount||""}/>
            <button className='btn btn-primary ms-3'onClick={handleIncrement}>Increment Amount</button>
        </div>
      </div>

    </>
  )
}

export default Counter
