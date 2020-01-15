import styled from 'styled-components/native';
import {darken} from 'polished';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #000;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ProductContainer = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
  margin-top: 10px;
  border-radius: 5px;
`;

export const ProductImg = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 32px;
  background: #eee;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 17px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const AddProductButton = styled(RectButton)`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const TextAddProductButton = styled.Text`
  font-weight: bold;
  color: #fff;
  margin-left: 20px;
`;

export const Amount = styled.View`
  padding: 10px 15px;
  background: rgba(0, 0, 0, 0.1);
  flex-direction: row;
`;

export const AmountProduct = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 5px;
`;
