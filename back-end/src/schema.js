const { GraphQLObjectType,GraphQLSchema } = require('graphql');
const mutation = require('./graphql/mutations/index')
const RootQueryType = require('./graphql/queries/index')

const FinusAppSchema = new GraphQLSchema({
    query: RootQueryType,
   mutation: new GraphQLObjectType({
       name: 'Mutation',
       fields: mutation
   })
});


module.exports = FinusAppSchema;