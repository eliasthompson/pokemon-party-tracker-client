import React from 'react';
import { resolve } from 'styled-jsx/css';

const useStyles = () => {
  return resolve`
    main {
      background-color: black;
      width: 466px;
      height: 120px;
    }
  `;
};

export default useStyles;
