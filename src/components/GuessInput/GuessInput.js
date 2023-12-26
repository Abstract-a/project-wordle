import { useState } from 'react';
import '../../styles.css';
import GuessList from '../GuessList';

const GuessInput = ({ handleSub }) => {
  const [guess, setGuess] = useState('');

  function handleChange(e) {
    setGuess(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ guess });
    handleSub(guess);

    setGuess('');
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter a Guess</label>
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
