import {StyleSheet} from 'react-native';
import {constants} from './constants';

const commonStyles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: constants.bgColor,
    justifyContent: 'space-between',
    padding: 20,
  },
  text: {
    color: constants.fontColor,
    fontSize: constants.textFontSize,
    fontWeight: constants.textFontWeight,
    textAlign: 'center',
  },
  header: {
    color: constants.fontColor,
    fontSize: constants.headerFontSize,
    fontWeight: constants.headerFontWeight,
    textAlign: 'center',
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderWidth: constants.borderWidth,
    borderColor: constants.fontColor,
    borderRadius: constants.borderRadius,
  },
});

export default commonStyles;
