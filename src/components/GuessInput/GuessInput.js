import { useState } from 'react';
import '../../styles.css';

const GuessInput = () => {
  const [guess, setGuess] = useState('');

  function handleChange(e) {
    setGuess(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ guess });
    setGuess('');
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess">Enter a Guess</label>
        <input
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
