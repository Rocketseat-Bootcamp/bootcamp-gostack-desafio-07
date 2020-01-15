import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #000;
  padding: 10px 20px;
  flex: 1;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex-grow: 0;
`;

export const ProductContainer = styled.View`
  background: #fff;
  padding: 10px;
  flex-direction: column;
`;

export const ProductInfo = styled.View`
  width: 100%;
  flex-direction: row;
`;
export const ProductDetail = styled.View`
  padding: 10px;
  flex: 1;
`;

export const ProductImg = styled.Image`
  width: 128px;
  height: 128px;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 15px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const RemoveProductButton = styled.TouchableOpacity``;

export const Options = styled.View`
  padding: 0;
  margin: 0;
  background: #dcdcdc;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionInfo = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
`;

export const Increment = styled.TouchableOpacity``;

export const AmountProduct = styled.Text`
  width: 40px;
  background: #fff;
  padding: 3px;
  margin: 0px 20px;
  border-radius: 10px;
  text-align: center;
`;

export const Decrement = styled.TouchableOpacity``;

export const PriceTotal = styled.Text`
  font-weight: bold;
  font-size: 17px;
`;

export const DetailsCart = styled.View`
  padding: 10px;
  flex-direction: column;
  background: #fff;
`;

export const Legend = styled.Text`
  text-align: center;
  color: #999;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const DetailCartPrice = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  margin-top: 10px;
`;

export const FinalizedButton = styled.TouchableOpacity`
  background: #7159c1;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FinalizedButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const EmptyContainer = styled.View`
  padding: 20px;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
