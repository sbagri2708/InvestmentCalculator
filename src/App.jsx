import Header from "./component/Header";
import UserInput from "./component/UserInput";
import { useState } from "react";
import Result from "./component/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((preUserInput) => {
      const updatedUserInput = {
        ...preUserInput,
        [inputIdentifier]: +newValue,
      };
      return updatedUserInput;
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid && <Result input={userInput} />}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
