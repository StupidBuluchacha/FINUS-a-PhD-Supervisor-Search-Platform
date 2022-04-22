var { addProfessor, deleteProfessor, editProfessor} = require('./professorMutations');

/*
* We've 3 mutations endpoints:
1. To add a professor.
2. To edit a professor.
3. To delete a professor
* */

module.exports = {
    addProfessor, deleteProfessor, editProfessor
}