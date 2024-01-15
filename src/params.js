import {Dimensions} from 'react-native';
import {levels} from './levels';

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, // Proporção do painel superior na tela
  difficultLevel: levels.easy.value,
  getColumnsAmount() {
    const width = Dimensions.get('window').width;
    return Math.floor(width / this.blockSize);
  },
  getRowsAmount() {
    const totalHeight = Dimensions.get('window').height;
    const boardHeight = totalHeight * (1 - this.headerRatio);
    return Math.floor(boardHeight / this.blockSize);
  },
};

export default params;
