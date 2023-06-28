import React from 'react';
import { KEYS } from '../constants';
import styles from '../Keyboard.module.css';

interface KeyboardProps {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessLetter: (letter: string) => void;
}

const Keyboard = ({ disabled = false, activeLetters, inactiveLetters, addGuessLetter }: KeyboardProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem',
      }}
    >
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key);
        const inactive = inactiveLetters.includes(key);

        return (
          <button
            onClick={() => addGuessLetter(key)}
            className={`${styles.button} ${isActive ? styles.active : ''}  ${inactive ? styles.inactive : ''}`}
            key={key}
            disabled={inactive || isActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
