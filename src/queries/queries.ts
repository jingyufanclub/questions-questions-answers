import {gql} from '@apollo/client';

export const GET_QUIZZES = gql`
  query Quizzes {
    quizzes {
      id
      title
      description
      imageSrc
    }
  }
`;

export const GET_QUESTIONS = gql`
  query Questions($quizId: Int) {
    questions(quizId: $quizId) {
      id
      title
      answers {
        id
        title
        points
      }
    }
  }
`;
