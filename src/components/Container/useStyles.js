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
      height: 176px;

      > div.badges {
        flex: 1 1 100%;
        display: flex;
        justify-content: space-between;

        > img {
          object-fit: contain;
          max-width: 48px;
          max-height: 48px;
          filter: grayscale(1);
          opacity: 0.5;
          transition : filter 0.2s, opacity 0.2s;

          &[data-obtained="true"] {
            filter: grayscale(0);
            opacity: 1;
          }
        }
      }
    }
  `;
};

export default useStyles;
