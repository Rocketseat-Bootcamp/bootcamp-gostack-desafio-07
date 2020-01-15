import {call, select, put, all, takeLatest} from 'redux-saga/effects';

import api from '../../../services/api';
// import history from '../../../services/history';
import {formatPrice} from '../../../utils/format';
import {addToCartSuccess, updateAmountSuccess} from './actions';

function* addToCart({id}) {
  const productExist = yield select(state => state.cart.find(p => p.id == id));

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;
  const currentAmount = productExist ? productExist.amount : null;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    return;
  }

  if (productExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
  // history.push('/carrinho');
}

function* updateAmount({id, amount}) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
