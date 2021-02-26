/* eslint-disable @typescript-eslint/no-explicit-any */
import { quizzes, questions, answers } from './data';


const resolvers = {
  Query: {
    quizzes: (): typeof quizzes => quizzes,
    questions: (root: any, args: { quizId: number; }): typeof questions => {
      return questions.filter(question => question.quizId === args.quizId);
    },
  },
  Quiz: {
    questions: (quiz: any): typeof questions => {
      return questions.filter(question => question.quizId === quiz.id);
    }
  },
  Question: {
    answers: (question: any): typeof answers => {
      return answers.filter(answer => answer.questionId === question.id);
    }
  }
};

export default resolvers;
