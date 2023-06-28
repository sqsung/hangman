import React from 'react';
import words from './wordList.json';
import { Hangman, CorrectLetters, Keyboard } from './components';

const App = () => {
  const [guessed, setGuessed] = React.useState<string[]>([]);
  const [answer, setAnswer] = React.useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)];
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
        Lose Win
      </div>
      <Hangman />
      <CorrectLetters />
      <Keyboard />
    </div>
  );
};

export default App;
