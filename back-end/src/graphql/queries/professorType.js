
const { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');
const ProfessorType = new GraphQLObjectType({
    name: 'ProfessorType',
    description: "This represent a professor",
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        photo: {type: new GraphQLNonNull(GraphQLString)},
        researchAreas: {type: new GraphQLList(GraphQLNonNull(GraphQLString))},
        department: {type: new GraphQLNonNull(GraphQLString)},
        introduction: {type: new GraphQLNonNull(GraphQLString)},
    })
});

module.exports = ProfessorType;