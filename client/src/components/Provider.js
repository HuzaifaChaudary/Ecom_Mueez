// /components/Provider.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store'; // Assuming you have a Redux store setup

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
