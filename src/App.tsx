import React from 'react';
import words from './wordList.json';
import { Hangman, CorrectLetters, Keyboard } from './components';

const getWord = () => words[Math.floor(Math.random() * words.length)];

const App = () => {
  const [guessed, setGuessed] = React.useState<string[]>([]);
  const [answer, setAnswer] = React.useState<string>(getWord());

  const incorrectLetters = guessed.filter(letter => !answer.includes(letter));

  const addGuessedLetter = (letter: string) => {
    if (guessed.includes(letter) || isWinner || isLoser) return;

    setGuessed([...guessed, letter]);
  };

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = answer.split('').every(letter => guessed.includes(letter));

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!e.key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(e.key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessed]);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;

      e.preventDefault();
      setGuessed([]);
      setAnswer(getWord());
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  });

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontSize: '2rem',
          textAlign: 'center',
        }}
      >
        {!isWinner && !isLoser && 'Use your mouse or keyboard to make a guess!'}
        {isWinner && 'Winner! Press Enter to play again!'}
        {isLoser && 'Nice try! Press Enter to play again!'}
      </div>
      <Hangman guessCount={incorrectLetters.length} />
      <CorrectLetters guessed={guessed} answer={answer} reveal={isLoser} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessed.filter(letter => answer.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
};

export default App;
