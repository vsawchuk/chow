import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <AppWithNavigationState />
    </Provider>
  );
};

export default App;
