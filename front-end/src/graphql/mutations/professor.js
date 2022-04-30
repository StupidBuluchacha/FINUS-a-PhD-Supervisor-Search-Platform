import { gql } from '@apollo/client';

export const ADD_PROFESSOR = gql`
mutation addProfessor($name: String!, $researchAreas: [String!], $photo: String!, $email: String!, $department: String!, $introduction: String!) {
  addProfessor(name: $name, photo: $photo,researchAreas: $researchAreas, email: $email, department: $department, introduction: $introduction) {
    _id
  }
}
`;

export const ADD_PROFESSORS = gql`
mutation addProfessors($professorsList: [Object!]) {
  addProfessors(professorsList: $professorsList) {
    _id
  }
}
`;

export const EDIT_PROFESSOR = gql`
mutation editProfessor($id: String!, $name: String!, $researchAreas: [String!], $photo: String!, $email: String!, $department: String!, $introduction: String!) {
  editProfessor(id: $id, name: $name, photo: $photo,researchAreas: $researchAreas, email: $email, department: $department, introduction: $introduction) {
    _id
  }
}
`;

export const DELETE_PROFESSOR = gql`
mutation deleteProfessor($id: String!) {
  deleteProfessor(id: $id) {
    _id
  }
}
`;