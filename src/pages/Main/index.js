import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import {formatPrice} from '../../utils/format';

import {
  Container,
  List,
  ProductContainer,
  ProductImg,
  Title,
  Price,
  AddProductButton,
  TextAddProductButton,
  Amount,
  AmountProduct,
} from './styles';
export default class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(item => ({
      ...item,
      priceFormatted: formatPrice(item.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct = id => {
    const {addToCartRequest} = this.props;
    addToCartRequest(id);
  };

  render() {
    const {amount} = this.props;
    const {products} = this.state;
    return (
      <Container>
        <List
          data={products}
          keyExtractor={product => product.id}
          renderItem={({item}) => (
            <ProductContainer>
              <ProductImg source={{uri: item.image}} />
              <Title>{item.title}</Title>
              <Price>{item.priceFormatted}</Price>
              <AddProductButton onPress={() => this.handleAddProduct(product)}>
                <Amount>
                  <Icon name="add-shopping-cart" size={20} color="#FFF" />
                  <AmountProduct> 0 </AmountProduct>
                </Amount>
                {/* <Amount>{amount[item.id] || 0}</Amount> */}
                <TextAddProductButton>
                  ADICIONAR AO CARRINHO
                </TextAddProductButton>
              </AddProductButton>
            </ProductContainer>
          )}
        />
      </Container>
    );
  }
}
