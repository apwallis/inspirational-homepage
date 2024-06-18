import React from "react";
import GoalEntry from "./GoalEntry";

const JournalEntries = ({ entries }) => {
  

  return (
    <div className="surface">
      <ul className="entries-list">
        {entries.map(({ text, isDone }, index) => (
          <li
            key={text}
            className={`surface-blue surface-styles ${
              isDone ? "entry-done" : ""
            }`}
          >
            <GoalEntry id={index} isDone={isDone}>
              {text}
            </GoalEntry>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JournalEntries;
