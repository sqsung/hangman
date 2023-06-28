import React from 'react';

interface CorrectLettersProps {
  guessed: string[];
  answer: string;
  reveal?: boolean;
}

const CorrectLetters = ({ guessed, answer, reveal = false }: CorrectLettersProps) => {
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
      {answer.split('').map((letter, idx) => (
        <span
          key={idx}
          style={{
            borderBottom: '.1em solid black',
          }}
        >
          <span
            style={{
              visibility: guessed.includes(letter) || reveal ? 'visible' : 'hidden',
              color: !guessed.includes(letter) && reveal ? 'red' : 'black',
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
