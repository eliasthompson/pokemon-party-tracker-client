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
      /* background-color: black; */
      width: 466px;
      height: 176px;

      > div.badges {
        flex: 1 1 100%;
        display: flex;
        justify-content: space-between;
        height: 48px;
        transition: height 0.2s;

        > img {
          object-fit: contain;
          max-width: 48px;
          max-height: 48px;
          filter: grayscale(1);
          opacity: 0.5;
          transform: scale(1);
          transition: filter 0.2s, opacity 0.2s, transform 0.2s;

          &[data-obtained="true"] {
            filter: grayscale(0);
            opacity: 1;
            transform: scale(1.25);
          }
        }

        &.beaten {
          height: 0px;
        }
      }

      > span.hall-of-fame {
        flex: 1 1 100%;
        display: flex;
        justify-content: center;
        text-align: center;
        overflow: hidden;
        height: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
        white-space: nowrap;
        transition: height 0.2s, margin-top 0.2s, margin-bottom 0.2s;

        &.beaten {
          height: 19px;
          margin-top: 14px;
          margin-bottom: 13px;
        }

        &::before, &::after {
          margin: auto 12px;
          width: 100%;
          height: 0px;
          border: 1px solid #ffffff;
          content: '';
        }
      }
    }
  `;
};

export default useStyles;
