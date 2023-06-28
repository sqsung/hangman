import React from 'react';
import { BODY_PARTS } from '../constants';

interface HangmanProps {
  guessCount: number;
}

const Hangman = ({ guessCount }: HangmanProps) => {
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PARTS.slice(0, guessCount)}
      <div style={{ height: '50px', width: '10px', background: 'black', position: 'absolute', top: 0, right: 0 }}></div>
      <div style={{ height: '10px', width: '200px', background: 'black', marginLeft: '120px' }}></div>
      <div style={{ height: '400px', width: '10px', background: 'black', marginLeft: '120px' }}></div>
      <div style={{ height: '10px', width: '250px', background: 'black' }}></div>
    </div>
  );
};

export default Hangman;
