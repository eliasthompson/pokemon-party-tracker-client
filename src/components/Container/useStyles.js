import React from 'react'; // eslint-disable-line no-unused-vars
import { resolve } from 'styled-jsx/css';

const useStyles = () => {
  return resolve`
    main {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      overflow: hidden;
      background-color: black;
      width: 466px;
      height: 128px;
    }
  `;
};

export default useStyles;
