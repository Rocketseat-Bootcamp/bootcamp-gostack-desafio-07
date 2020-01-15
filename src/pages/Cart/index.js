import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as action from '../../store/module/cart/actions';
import {Container} from './styles';
import {formatPrice} from '../../utils/format';

function Cart() {
  return <Container />;
}

const mapStateToProps = state => ({
  cart: state.cart.map(p => ({
    ...p,
    subPrice: formatPrice(p.price * p.amount),
  })),

  totalPrice: formatPrice(
    state.cart.reduce((total, p) => total + p.price * p.amount, 0)
  ),
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
