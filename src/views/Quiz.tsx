import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import commonStyles from '../styles/common.styles';
import {Quizzes_quizzes} from '../types/Quizzes';

function Question({route, navigation}: any): React.ReactElement {
  const quiz = route.params.quiz as Quizzes_quizzes;

  return (
    <View style={commonStyles.parentView}>
      <Text style={commonStyles.header}>{quiz.title}</Text>
      <Image source={{uri: quiz.imageSrc}} style={[commonStyles.image]} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Question', {quizId: quiz.id})}>
        <Text style={commonStyles.text}>BEGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Question;
