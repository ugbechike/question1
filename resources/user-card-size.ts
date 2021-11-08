
import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const productItemInWidthGridFn = () => {
  let size;
  switch (true) {
    case screenWidth <= 375:
      size = 175;
      break;
    case screenWidth <= 414: // iphone xs max
      size = 193;
      break;
    case screenWidth <= 450:
    case screenWidth <= 900:
    default:
      size = 175;
  }
  return size;
};



export const productItemInWidthGrid = productItemInWidthGridFn();
export const screenWithWithoutPadding = (screenWidth - 10) / 10;
console.log('----->>>', Math.round((screenWithWithoutPadding / (productItemInWidthGrid / 10 + productItemInWidthGrid)) * 10))

export const productItemPerRowGrid = Math.round((screenWithWithoutPadding / (productItemInWidthGrid / 10 + productItemInWidthGrid)) * 10);
