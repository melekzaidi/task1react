import React, { useState } from 'react'
import "./UserInput.css"
export default function UserInput(props) {
    
  const initialinput={'current-savings':1000,'yearly-contribution':1200,'expected-return':7,'duration':10}
  const [userinput,setuserinput]=  useState(initialinput)
  
  const submitHandler=(e)=>{
    e.preventDefault();
    props.onCalculate(userinput);
  }
  const resetHandler=(e)=>{
    e.preventDefault();
  }
  const inputchaneHandler=(input,value)=>{
setuserinput((prevInput)=>{return{...prevInput,[input]:value}})
  }
  return (
    <div>
       <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input value={userinput['current-savings']} onChange={(event)=>inputchaneHandler('current-savings',event.target.value)} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input value={userinput['yearly-contribution']} type="number" id="yearly-contribution" onChange={(event)=>inputchaneHandler('yearly-contribution',event.target.value)}  />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input value={userinput['expected-return']} type="number" id="expected-return" onChange={(event)=>inputchaneHandler('expected-return',event.target.value)} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={userinput['duration']} onChange={(event)=>inputchaneHandler('duration',event.target.value)} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  )
}
