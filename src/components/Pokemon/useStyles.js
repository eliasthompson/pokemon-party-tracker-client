import React from 'react'; // eslint-disable-line no-unused-vars
import { resolve } from 'styled-jsx/css';

import pokeballSvg from '../../svgs/pokeball.svg';

const useStyles = () => {
  return resolve`
    div.container {
      flex: 1 1 33.3333%;
      display: flex;
      align-items: center;
      height: 64px;

      > div.sprite {
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent url("${pokeballSvg}") center/75% no-repeat;
        width: 64px;

        > img {
          object-fit: contain;
          max-width: 64px;
          max-height: 64px;
        }
      }

      > span {
        flex: 1;
        word-break: break-word;
      }
    }
  `;
};

export default useStyles;
