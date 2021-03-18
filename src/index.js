import React from 'react';
import { render } from 'react-dom';
import 'core-js';

import Container from './components/Container';
import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();

if (module.hot) module.hot.accept();
