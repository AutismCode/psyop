import React from 'react';
import './MatrixRain.css';

const MatrixRain = () => {
  const columns = 20;

  const generateMatrixColumns = () => {
    const cols = [];
    for (let i = 0; i < columns; i++) {
      cols.push(
        <div key={i} className="matrix-column">
          {generateMatrixCharacters()}
        </div>
      );
    }
    return cols;
  };

  const generateMatrixCharacters = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const columnLength = 30;
    const randomChars = [];

    for (let i = 0; i < columnLength; i++) {
      randomChars.push(chars[Math.floor(Math.random() * chars.length)]);
    }

    return randomChars.join('');
  };

  return (
    <div className="matrix-rain" aria-hidden="true">
      {generateMatrixColumns()}
    </div>
  );
};

export default MatrixRain;
