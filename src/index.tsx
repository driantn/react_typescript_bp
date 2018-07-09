import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'base/stores';

import App from './App';

declare global {
  interface Window { store: any; }
}

const store = configureStore();
store.subscribe(() => { window.store = store.getState(); });

render(
  <Provider store={store}>
   <App message="World" />
  </Provider>,
  document.getElementById('app'),
);
