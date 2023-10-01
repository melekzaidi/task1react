import React from 'react'
import './ResultTable.css'
 function ResultTable(props) {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          {props.data.map((yeardata)=>{
             <tr>
             <td>{yeardata.year}</td>
             <td>{yeardata.savingsEndOfYear}</td>
             <td>{yeardata.yearlyInterest }</td>
             <td>{yeardata.savingsEndOfYear-props.initialinvestement-yeardata.yearlyContribution*yeardata.year}</td>
             <td>{props.initialinvestement+yeardata.yearlyContribution*yeardata.year}</td>
           </tr>
          })}
         

        </tbody>
      </table>
    </div>
  )
}
export default ResultTable