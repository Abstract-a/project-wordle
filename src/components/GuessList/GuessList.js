import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessList({ guesses }) {
  const myList = range(0, NUM_OF_GUESSES_ALLOWED);
  myList.splice(0, guesses.length, ...guesses);

  return (
    <div className="guess-results">
      {myList.map((guess, index) => (
        <Guess word={guess} key={index} />
      ))}
    </div>
  );
}

export default GuessList;
