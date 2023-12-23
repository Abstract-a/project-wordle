import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guess({ word }) {
  return (
    <div className="guess-result">
      <p className="guess">
        {range(5).map((num) => (
          <span className="cell" key={num}>
            {word ? word[num] : undefined}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Guess;
