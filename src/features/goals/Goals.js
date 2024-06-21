import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoalEntries from "./components/GoalEntries";
import { addEntry } from "./goalsSlice";

const Goals = () => {
  const [newEntry, setNewEntry] = useState("");
  const { entries } = useSelector((state) => state.goals);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (newEntry === "") {
      return;
    }

    dispatch(addEntry(newEntry));
    setNewEntry("");
  };

  return (
    <>
      <div id="goals" className="surface">
        <h2>Career Goals:</h2>

        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            className="goals-input"
            value={newEntry}
            onChange={(e) => {
              setNewEntry(e.target.value);
            }}
            aria-label="New goal entry"
          />
        </form>
      </div>
      <GoalEntries entries={entries} />
    </>
  );
};

export default Goals;
