import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label for="">Initial Investment</label>
          <input
            id=""
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          ></input>
        </p>
        <p>
          <label for="">Annual Investment</label>
          <input
            id=""
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label for="">Expected Return</label>
          <input
            id=""
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          ></input>
        </p>
        <p>
          <label for="">Duration</label>
          <input
            id=""
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
