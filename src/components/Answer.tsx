import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import commonStyles from '../styles/common.styles';
import {constants} from '../styles/constants';

export interface AnswerProps {
  title: string;
  disabled: boolean;
  correct: boolean;
  selected: boolean;
  matched: boolean;
  onPress: () => void;
}

function Answer({
  title,
  disabled,
  correct,
  selected,
  matched,
  onPress,
}: AnswerProps): React.ReactElement {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        disabled && styles.disabled,
        selected && styles.selected,
        matched && styles.matched,
        correct && styles.correct,
      ]}>
      <Text
        style={[
          commonStyles.header,
          {
            color: disabled ? constants.disabledColor : constants.fontColor,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: constants.fontColor,
    borderWidth: constants.borderWidth,
    borderRadius: constants.borderRadius,
    padding: 20,
  },
  disabled: {
    borderColor: constants.disabledColor,
  },
  correct: {
    borderColor: constants.correctColor,
  },
  matched: {
    borderColor: constants.correctColor,
  },
  selected: {
    borderColor: constants.selectedColor,
  },
});

export default Answer;
