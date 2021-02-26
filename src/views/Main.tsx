import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client';
import {Quizzes} from '../types/Quizzes';
import {GET_QUIZZES} from '../queries/queries';
import commonStyles from '../styles/common.styles';

function Main({navigation}: any): React.ReactElement {
  const {loading, error, data} = useQuery<Quizzes>(GET_QUIZZES);

  if (loading) {
    return <Text>LOADING</Text>;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (data) {
    return (
      <View style={[commonStyles.parentView, styles.container]}>
        <Text style={commonStyles.header}>TAKE FUN QUIZ</Text>
        {data.quizzes.map((quiz) => (
          <View key={quiz.title}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Quiz', {quiz})}>
              <Text style={commonStyles.header}>{quiz.title}</Text>
              <Text style={commonStyles.text}>{quiz.description}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }

  return <View style={commonStyles.parentView} />;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
  },
});

export default Main;
