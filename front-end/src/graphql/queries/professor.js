import {
  gql
} from '@apollo/client';

export const GET_PROFESSORS = gql `
query Query {
    professors {
        name
        email
        photo
        researchAreas
        introduction
        department
        _id
      }
  }
  `;

export const GET_PROFESSOR = gql `
query professor($id: String!) {
  professor(id: $id) {
    name
    email
    photo
    researchAreas
    department
    introduction
    _id
  }
}
`;

export const GET_RECOMMENDATION = gql `
query recommendations( $researchAreas: [String!],  $department: String!, $keyword: String!) {
  recommendations(researchAreas: $researchAreas, department: $department, keyword: $keyword) {
    name
    email
    photo
    researchAreas
    department
    introduction
    _id
  }
}
`;