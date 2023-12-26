import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ word, answer }) {
  const result = word ? checkGuess(word, answer) : undefined;

  console.log(result);
  return (
    <div className="guess-result">
      <p className="guess">
        {range(5).map((num) => (
          <span className={`cell ${word && result[num].status}`} key={num}>
            {word ? word[num] : undefined}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Guess;
