import React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux' ;
import AlbumReducer from './Store/Reducers/Album';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import AlbumNavigator from './Navigation/AlbumNavigator'

const rootReducer = combineReducers({
  albums : AlbumReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store = {store}>
      <AlbumNavigator/>
    </Provider>
  );
}


