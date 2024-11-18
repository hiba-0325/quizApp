import React, { useState } from "react";

function TrackForm({ addExpense }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [dicribtion, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) return;

    const newExpense = {
      id:Date.now(),
      amount: parseFloat(amount),
      category,
      dicribtion,
    };
    addExpense(newExpense);
    setAmount("");
    setCategory("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={{ handleSubmit }}>
        <h1>ADD NEW EXPENSE</h1>

        <input
          type="text"
          placeholder="amoubnt"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="catogary"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="discribtion"
          value={dicribtion}
          onChange={(e = setDescription(e.target.value))}
        />

        <button type="submit ">ADD EXPENSE</button>
      </form>
    </div>
  );
}

export default TrackForm;
