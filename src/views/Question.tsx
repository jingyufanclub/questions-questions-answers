import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client';
import Answer from '../components/Answer';
import {GET_QUESTIONS} from '../queries/queries';
import {
  Questions,
  QuestionsVariables,
  Questions_questions_answers,
} from '../types/Questions';
import commonStyles from '../styles/common.styles';
import {constants} from '../styles/constants';

function Question({route, navigation}: any): React.ReactElement {
  const {quizId} = route.params;
  const {loading, error, data} = useQuery<Questions, QuestionsVariables>(
    GET_QUESTIONS,
    {
      variables: {quizId},
    },
  );
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [matchedAnswerId, setMatchedAnswerId] = useState<number | null>(null);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  if (loading) {
    return <Text>LOADING</Text>;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (data) {
    const question = data.questions[currentQuestion];

    const handleAnswer = (answer: Questions_questions_answers) => {
      setAnswered(true);
      setScore(score + answer.points);
      setMatchedAnswerId(answer.points === 1 ? answer.id : null);
      setSelectedAnswerId(answer.id);
    };

    const handleNextQuestion = () => {
      if (currentQuestion + 1 === data.questions.length) {
        navigation.navigate('Result', {score});
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setAnswered(false);
        setMatchedAnswerId(null);
        setSelectedAnswerId(null);
      }
    };

    return (
      <View style={commonStyles.parentView}>
        <Text style={commonStyles.header}>{question.title}</Text>
        {question.answers.map((answer) => (
          <Answer
            key={answer.id}
            onPress={() => handleAnswer(answer)}
            disabled={answered}
            correct={answered && answer.points === 1}
            selected={answer.id === selectedAnswerId}
            matched={answer.id === matchedAnswerId}
            title={answer.title}
          />
        ))}
        <TouchableOpacity onPress={handleNextQuestion} disabled={!answered}>
          <Text style={[commonStyles.text, !answered && styles.disabled]}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <View style={commonStyles.parentView} />;
}

const styles = StyleSheet.create({
  disabled: {
    color: constants.disabledColor,
  },
});

export default Question;
