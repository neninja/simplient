import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import parse from './utils/configParser';

type Requisition = {
  url: string;
  method: string;
};

type OriginalConfig = {
  baseUrl: string;
  routes: Requisition[];
};

declare const config: OriginalConfig;

ReactDOM.render(
  <React.StrictMode>
    <App config={parse(config)} />
  </React.StrictMode>,
  document.getElementById('root'),
);
