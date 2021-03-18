import React from 'react';
import _ from 'lodash';

import useStyles from './useStyles';

export default function Pokemon({ className: parentClass, pokemon }) {
  const { className, styles } = useStyles();
  let customClass = className;
  let name = pokemon[5];
  let species = _.toLower(pokemon[5]);
  let shiny = '';

  if (pokemon[4]) {
    name = pokemon[4];
    species = _.toLower(pokemon[4]);
  }

  if (parentClass) customClass = `${parentClass} ${className}`
  if (pokemon[1]) shiny = '-shiny';
  if (pokemon[3]) name = pokemon[3];
  if (_.endsWith(species, '.')) species = _.replace(species, '.', '');

  species = _.replace(species, ' (', '-');
  species = _.replace(species, '♂', '_m');
  species = _.replace(species, '♀', '_f');
  species = _.replace(species, ' ', '_');
  species = _.replace(species, '’', '');
  species = _.replace(species, ')', '');

  return (
    <div className={ `${customClass} container` }>
      <div className={ `${className} sprite` }>
        <img className={ className } src={ `http://www.pkparaiso.com/imagenes/xy/sprites/animados${shiny}/${species}.gif` } alt="" />
      </div>

      <span className={ className }>{ name }</span>
      { styles }
    </div>
  );
}
