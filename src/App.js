import React, { useState } from 'react';
import './style.css';
import emojis1 from './emojis.js';

const emojis = Object.keys(emojis1);

export default function App() {
  const [meaning, setMeaning] = useState('');
  const handleOnChange = e => {
    let userEmoji = e.target.value;

    let meaning = emojis1[userEmoji];
    console.log(meaning);

    if (meaning === undefined) {
      setMeaning('We do not have this emoji in our database');
    } else {
      setMeaning(meaning);
    }
  };

  const handleClick = emoji => {
    let meaning = emojis1[emoji];
    console.log(meaning);
    setMeaning(meaning);
  };
  return (
    <div className="container">
      <h1>Feel the Emojis</h1>
      <h4>Understand the emoji's meaning</h4>
      <small>Enter the emoji</small>
      <input className="inputArea" onChange={handleOnChange} />
      <div className="meaning">{meaning}</div>

      <h4>Choose from below</h4>
      {emojis.map(emoji => {
        return (
          <span onClick={() => handleClick(emoji)} className="emojis">
            {emoji}
          </span>
        );
      })}

      <small>
        *either enter the emoji in input field or choose from given emojis
      </small>
    </div>
  );
}
