import React, { Fragment, useCallback, useEffect, useState } from 'react';
import sheetrock from 'sheetrock';
import _ from 'lodash';

import Pokemon from '../Pokemon';
import useGlobalStyles from '../../useGlobalStyles';
import useStyles from './useStyles';

export default function Container() {
  const globalStyles = useGlobalStyles();
  const { className, styles } = useStyles();
  const [party, setParty] = useState([[]]);

  const getParty = useCallback(() => {
    sheetrock({
      url: 'https://docs.google.com/spreadsheets/d/1DCzg9CF0unmAl9Bl1zOoEbVqEo8nHPlbP7XV6MJGG20/edit#gid=1224681356',
      query: 'SELECT A, B, C, D, E, F WHERE A IS NOT NULL AND F IS NOT NULL AND C = FALSE ORDER BY A ASC',
      reset: true,
      callback: (error, options, response) => {
        if (!error) {
          const rows = _.get(response, 'raw.table.rows', [[]]);
          const mappedRows = _.map(rows, (row) =>_.map(row.c, (cell) => (cell) ? cell.v : cell));
          const length = mappedRows.length;

          if (length < 6) {

            mappedRows.length = 6;
            mappedRows.fill([], length, 6);
          }

          setParty(mappedRows);
        } else {
          console.log(error);
        }

        setTimeout(getParty, 10000);
      }
    });
  }, [setParty]);

  useEffect(() => {
    getParty();
  }, [getParty]);

  return (
    <Fragment>
      <main className={ className }>
        { _.map(party, (row, i) => <Pokemon key={ i } className={ className } pokemon={ row } />) }
      </main>

      { globalStyles }
      { styles }
    </Fragment>
  );
}
