import thunk from 'redux-thunk';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import dataReducer, {
  DataState,
  DATA_INITIAL_STATE,
} from './data';

export const INITIAL_APP_STATE = {
  data: DATA_INITIAL_STATE,
};

export interface AppState {
  data: DataState;
}

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

export interface Action { type?: string; payload?: Object; }
export interface Dispatch { (params: Action): any; }
export interface GetState { (): AppState; }

export default function configureStore(initialState: AppState = INITIAL_APP_STATE) {
  const composeEnhancers = (
    (typeof window !== 'undefined') &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) || compose;

  const reducers = {
    data: dataReducer,
  };

  const store = createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
}
