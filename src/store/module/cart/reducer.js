import producer from 'immer';

export default function cart(state = [], action) {
  const ACTIONS = {
    '@cart/ADD_SUCCESS': () =>
      producer(state, draft => {
        const {product} = action;
        draft.push(product);
      }),
    '@cart/REMOVE': () =>
      producer(state, draft => {
        const index = draft.findIndex(p => p.id === action.id);
        if (index >= 0) {
          draft.splice(index, 1);
        }
      }),
    '@cart/UPDATE_AMOUNT_SUCCESS': () =>
      producer(state, draft => {
        const index = draft.findIndex(p => p.id === action.id);
        if (index >= 0) {
          draft[index].amount = Number(action.amount);
        }
      }),
  };

  return Object.keys(ACTIONS).indexOf(action.type) !== -1
    ? ACTIONS[action.type]()
    : state;
}
