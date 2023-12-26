import React, { useState } from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleSubmit(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput handleSub={handleSubmit} />
    </>
  );
}

export default Game;
// theme Dark horizon
