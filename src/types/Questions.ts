/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Questions
// ====================================================

export interface Questions_questions_answers {
  __typename: "Answer";
  id: number;
  title: string;
  points: number;
}

export interface Questions_questions {
  __typename: "Question";
  id: number;
  title: string;
  answers: Questions_questions_answers[];
}

export interface Questions {
  questions: Questions_questions[];
}

export interface QuestionsVariables {
  quizId?: number | null;
}
