var {GraphQLNonNull, GraphQLString, GraphQLList} = require('graphql');
var ProfessorType = require('../queries/professorType');
var Professor = require('../../models/Professor');
const cloudinary = require('cloudinary')

const addProfessor = {
    type: ProfessorType,
    args: {
        name: {name: 'name', type: new GraphQLNonNull(GraphQLString)},
        email: {name: 'email', type: new GraphQLNonNull(GraphQLString)},
        photo: {name: 'photo', type: new GraphQLNonNull(GraphQLString)},
        researchAreas: {name: 'researchAreas', type: new GraphQLList(GraphQLNonNull(GraphQLString))},
        department: {name: 'department', type: new GraphQLNonNull(GraphQLString)},
        introduction: {name: 'introduction', type: new GraphQLNonNull(GraphQLString)},
    },
    resolve: async function (root, params) {
        try {
            const uploadResponse = await cloudinary.uploader.upload(params.photo, {});
            const data = {...params, photo: uploadResponse.secure_url}
            const uModel = new Professor(data);
            const newProfessor = await uModel.save();
            if(!newProfessor) {
                throw new Error(Error)
            }
            return newProfessor
        } catch (err) {
            throw new Error(err);

        }
        
    }
}

const editProfessor = {
    type: ProfessorType,
    args: {
        name: {name: 'name', type: new GraphQLNonNull(GraphQLString)},
        email: {name: 'email', type: new GraphQLNonNull(GraphQLString)},
        photo: {name: 'photo', type: new GraphQLNonNull(GraphQLString)},
        researchAreas: {name: 'researchAreas', type: new GraphQLList(GraphQLNonNull(GraphQLString))},
        department: {name: 'department', type: new GraphQLNonNull(GraphQLString)},
        introduction: {name: 'introduction', type: new GraphQLNonNull(GraphQLString)},
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, params) {
        try {
            const uploadResponse = await cloudinary.uploader.upload(params.photo, {});
            const data = {...params, photo: uploadResponse.secure_url}
            const editProfessor =  await  Professor.findOneAndUpdate(
                {"_id": params.id},
                { "$set":{...data}},
                {"new": true} //returns new document
            )
          if(!editProfessor) {
             throw new Error('Error');
          }
          return editProfessor
        } catch (err) {
            throw new Error('Error');
        }
    }
}
const deleteProfessor = {
    type: ProfessorType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, param) {
      const deletedProfessor =  await Professor.findByIdAndRemove(param.id)
      if(!deletedProfessor) {
         throw new Error('Error');
      }
      return deletedProfessor
    }
}

module.exports = {addProfessor, deleteProfessor, editProfessor}