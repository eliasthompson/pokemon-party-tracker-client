import React, { Fragment, useCallback, useEffect, useState } from 'react';
import sheetrock from 'sheetrock';
import _ from 'lodash';

import Pokemon from '../Pokemon';
import bugBadgeIcon from '../../images/bug-badge.png';
import cliffBadgeIcon from '../../images/cliff-badge.png';
import fairyBadgeIcon from '../../images/fairy-badge.png';
import icebergBadgeIcon from '../../images/iceberg-badge.png';
import plantBadgeIcon from '../../images/plant-badge.png';
import psychicBadgeIcon from '../../images/psychic-badge.png';
import rumbleBadgeIcon from '../../images/rumble-badge.png';
import useGlobalStyles from '../../useGlobalStyles';
import useStyles from './useStyles';
import voltageBadgeIcon from '../../images/voltage-badge.png';

export default function Container() {
  const globalStyles = useGlobalStyles();
  const { className, styles } = useStyles();
  const [badges, setBadges] = useState([[]]);
  const [party, setParty] = useState([[]]);
  let beatenClass = '';

  const getSheetData = useCallback(() => {
    sheetrock({
      url: 'https://docs.google.com/spreadsheets/d/1DCzg9CF0unmAl9Bl1zOoEbVqEo8nHPlbP7XV6MJGG20/edit#gid=1224681356',
      query: 'SELECT A, B, C, D, E, F WHERE A IS NOT NULL AND E != "--" AND F IS NOT NULL ORDER BY A ASC',
      reset: true,
      callback: (partyError, partyOptions, partyResponse) => {
        if (!partyError) {
          const rows = _.get(partyResponse, 'raw.table.rows', [[]]);
          const mappedRows = _.map(rows, row => _.map(row.c, cell => (cell) ? cell.v : cell));
          const length = mappedRows.length;

          mappedRows.length = 6;

          if (length < 6) mappedRows.fill([], length, 6);

          setParty(mappedRows);
        } else {
          console.log(partyError);
        }

        sheetrock({
          url: 'https://docs.google.com/spreadsheets/d/1DCzg9CF0unmAl9Bl1zOoEbVqEo8nHPlbP7XV6MJGG20/edit#gid=631468007',
          query: 'SELECT C WHERE A = TRUE',
          reset: true,
          callback: (badgesError, badgesOptions, badgesResponse) => {
            if (!badgesError) {
              const rows = _.get(badgesResponse, 'raw.table.rows', [[]]);
              console.log('rows:', rows);
              const mappedRows = _.map(rows, row => _.map(row.c, cell => cell.v));

              console.log(mappedRows);

              setBadges(mappedRows);
            } else {
              console.log(badgesError);
            }
          }
        });
      }
    });

    setTimeout(getSheetData, 10000);
  }, [setBadges, setParty]);

  if (badges[8]) beatenClass = ' beaten';

  useEffect(() => {
    getSheetData();
  }, [getSheetData]);

  return (
    <Fragment>
      <main className={ className }>
        <span className={ `${className} hall-of-fame${beatenClass}` }>Hall of Fame</span>
        { _.map(party, (row, i) => <Pokemon key={ i } className={ className } pokemon={ row } />) }

        <div className={ `${className} badges${beatenClass}` }>
          <img className={ className } src={ bugBadgeIcon } alt="" data-obtained={ badges[0] } />
          <img className={ className } src={ cliffBadgeIcon } alt="" data-obtained={ badges[2] } />
          <img className={ className } src={ rumbleBadgeIcon } alt="" data-obtained={ badges[3] } />
          <img className={ className } src={ plantBadgeIcon } alt="" data-obtained={ badges[4] } />
          <img className={ className } src={ voltageBadgeIcon } alt="" data-obtained={ badges[1] } />
          <img className={ className } src={ fairyBadgeIcon } alt="" data-obtained={ badges[5] } />
          <img className={ className } src={ psychicBadgeIcon } alt="" data-obtained={ badges[6] } />
          <img className={ className } src={ icebergBadgeIcon } alt="" data-obtained={ badges[7] } />
        </div>
      </main>

      { globalStyles }
      { styles }
    </Fragment>
  );
}
