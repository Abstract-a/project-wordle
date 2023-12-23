import { useState } from 'react';
import '../../styles.css';
import GuessList from '../GuessList';

const GuessInput = () => {
  const [guess, setGuess] = useState('');
  const [guessId, setGuessId] = useState(0);
  const [guessList, setGuessList] = useState([]);

  function handleChange(e) {
    setGuess(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ guess });
    setGuessList([...guessList, { guess: guess, id: guessId }]);
    setGuessId(guessId + 1);
    setGuess('');
  }

  return (
    <>
      <GuessList guesses={guessList} />
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess">Enter a Guess</label>
        <input
          required
          pattern="\w{5,5}"
          title="the word has 5 letters"
          type="text"
          name="guess"
          id="guess-input"
          onChange={handleChange}
          value={guess}
        />
      </form>
    </>
  );
};

export default GuessInput;
