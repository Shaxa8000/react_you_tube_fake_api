import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import './index.css';
import Context from './context';

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

