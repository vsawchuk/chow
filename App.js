import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

const App = () => (
  <Provider store={createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
  )}>
    <AppWithNavigationState />
  </Provider>
);

export default App;
