import React, { Fragment, useCallback, useEffect, useState } from 'react';
import sheetrock from 'sheetrock';
import _ from 'lodash';

import pokeballSvg from './pokeball.svg';
import useGlobalStyles from './useGlobalStyles';
import useStyles from './useStyles';

export default function Container() {
  const globalStyles = useGlobalStyles();
  const { className, styles } = useStyles();
  const [party, setParty] = useState([[], [], [], [], [], []]);

  const refreshData = useCallback(() => {
    sheetrock({
      url: 'https://docs.google.com/spreadsheets/d/1DCzg9CF0unmAl9Bl1zOoEbVqEo8nHPlbP7XV6MJGG20/edit#gid=1224681356',
      query: 'SELECT A, B, C, D, E, F WHERE A IS NOT NULL AND F IS NOT NULL ORDER BY A ASC',
      reset: true,
      callback: (error, options, response) => {
        if (!error) {
          const rows = _.get(response, 'raw.table.rows', [[], [], [], [], [], []]);
          const mappedRows = _.map(rows, (row) =>_.map(row.c, (cell) => (cell) ? cell.v : cell));

          setParty(mappedRows);
        } else {
          console.log(error);
        }
      }
    });
  }, [setParty]);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  console.log(party);

  return (
    <Fragment>
      <main className={ className }>
        { _.map(party, (row, i) => (
          <div key={ i } className={ className }>
            <img className={ className } src={ pokeballSvg } alt="" width="24" height="24" />
            <img className={ className } src={ `http://www.pkparaiso.com/imagenes/xy/sprites/animados/${_.lowerCase(row[5])}.gif` } alt="" width="24" height="24" />
          </div>
        )) }
      </main>

      { globalStyles }
      { styles }
    </Fragment>
  );
}
