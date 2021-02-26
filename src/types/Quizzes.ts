/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Quizzes
// ====================================================

export interface Quizzes_quizzes {
  __typename: "Quiz";
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

export interface Quizzes {
  quizzes: Quizzes_quizzes[];
}
