import { gql } from 'apollo-server';

const typeDefs = gql`
  type Quiz {
    id: Int!
    title: String!
    imageSrc: String!
    description: String!
    questions: [Question]!
  }

  type Question {
    id: Int!
    quizId: Int!
    title: String!
    answers: [Answer!]!
  }

  type Answer {
    id: Int!
    questionId: Int!
    title: String!
    points: Int!
  }

  type Query {
    quizzes: [Quiz!]!
    questions(quizId: Int): [Question!]!
  }
`;

export default typeDefs;