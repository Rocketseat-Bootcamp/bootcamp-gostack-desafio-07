import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as action from '../../store/module/cart/actions';
import {formatPrice} from '../../utils/format';

import {
  Container,
  ProductList,
  ProductInfo,
  ProductContainer,
  ProductDetail,
  ProductImg,
  Title,
  Info,
  Price,
  RemoveProductButton,
  Options,
  OptionInfo,
  Increment,
  AmountProduct,
  Decrement,
  PriceTotal,
  DetailsCart,
  Legend,
  DetailCartPrice,
  FinalizedButton,
  FinalizedButtonText,
  EmptyContainer,
  EmptyText,
} from './styles';

function handleRemoveProduct(id) {}

function Cart({cart, totalPrice, removeFromCart, updateAmountRequest}) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.length ? (
        <>
          <ProductList
            data={cart}
            keyExtractor={cart => cart.id}
            renderItem={({item}) => (
              <ProductContainer>
                <ProductInfo>
                  <ProductImg source={{uri: item.image}} />
                  <ProductDetail>
                    <Title>{item.title}</Title>
                    <Info>
                      <Price>{item.priceFormatted}</Price>
                      <RemoveProductButton
                        onPress={() => removeFromCart(item.id)}>
                        <Icon name="cancel" size={25} color="#7159c1" />
                      </RemoveProductButton>
                    </Info>
                  </ProductDetail>
                </ProductInfo>
                <Options>
                  <OptionInfo>
                    <Decrement onPress={() => decrement(item)}>
                      <Icon
                        name="remove-circle-outline"
                        size={25}
                        color="#7159c1"
                      />
                    </Decrement>
                    <AmountProduct>{item.amount}</AmountProduct>
                    <Increment onPress={() => increment(item)}>
                      <Icon
                        name="add-circle-outline"
                        size={25}
                        color="#7159c1"
                      />
                    </Increment>
                  </OptionInfo>
                  <PriceTotal>{item.subPrice}</PriceTotal>
                </Options>
              </ProductContainer>
            )}
          />
          <DetailsCart>
            <Legend>TOTAL</Legend>
            <DetailCartPrice>{totalPrice}</DetailCartPrice>
            <FinalizedButton>
              <FinalizedButtonText>FINALIZAR COMPRA</FinalizedButtonText>
            </FinalizedButton>
          </DetailsCart>
        </>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
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
