import { Action, Dispatch } from 'base/stores';

export const DATA_ITEMS = 'data/items';

export interface DataState {
  items: Array<Object>;
}

export const DATA_INITIAL_STATE = {
  items: [],
};

export default function reducer(
  state: DataState = DATA_INITIAL_STATE,
  action: Action = {},
) {
  switch (action.type) {
    case DATA_ITEMS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function dataItems(items: Array<Object>) {
  return { type: DATA_ITEMS, payload: { items } };
}
