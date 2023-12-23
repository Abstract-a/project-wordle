import { useState } from 'react';
import '../styles.css';

const GuessInput = () => {
  const [guess, setGuess] = useState({ guess: '' });

  function handleChange(e) {
    setGuess({ ...guess, guess: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(guess);
    setGuess({ guess: '' });
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess">Enter a Guess</label>
        <input
          type="text"
          name="guess"
          id="guess-input"
          onChange={handleChange}
          value={guess.guess}
        />
      </form>
    </>
  );
};

export default GuessInput;
