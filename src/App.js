
import Header from "./components/Header.js/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultTable/ResultTable";
import { useState } from "react";
function App() {
  const [userInput,setuserInput]=useState(null);
  const yearlyData = []; // per-year results

  const calculateHandler = (userInput) => {
    setuserInput(userInput);
console.log(yearlyData.length)
    if(userInput){
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...


    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }}}


  return (
    <div>
    <Header/>
     <UserInput onCalculate={calculateHandler}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
{!userInput && <p>No investement calculated yet.</p>}
{userInput && <ResultTable data={yearlyData} initialinvestement={userInput["current-savings"]}/>}
    </div>
  );
}

export default App;
