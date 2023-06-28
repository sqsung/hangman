import React from 'react';

const CorrectLetters = () => {
  const word = 'test';
  const guessedLetters = ['t'];

  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {word.split('').map((letter, idx) => (
        <span
          key={idx}
          style={{
            borderBottom: '.1em solid black',
          }}
        >
          <span
            style={{
              visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default CorrectLetters;
