const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql');
const Professor = require('../../models/Professor')
const ProfessorType = require('./professorType')

const expertiseAreas = [
  'Algorithms & Theory',
  'Artificial Intelligence',
  'Computational Biology',
  'Computational Social Science',
  'Data Science & Business Analytics',
  'Database',
  'Digital Transformation, Platforms & Innovations',
  'Fintech',
  'Healthcare Informatics',
  'Intelligent Systems',
  'Media',
  'Programming Languages & Software Engineering',
  'Security',
  'Systems & Networking'
]


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    professors: {
      type: new GraphQLList(ProfessorType),
      resolve() {
        return Professor.find({});
      }
    },
    professor: {
      type: ProfessorType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parentValue, {
        id
      }) {
        return Professor.findById(id);
      }
    },
    recommendations: {
     type: new GraphQLList(ProfessorType),
      args: {
        department: {
          type: (GraphQLString)
        },
        keyword: {
          type: (GraphQLString)
        },
        researchAreas: {
          name: 'researchAreas',
          type: GraphQLList((GraphQLString))
        },
      },
      resolve: async function (root, param) {
        const query = [
          { introduction: { $regex: `.*(${param.keyword}).*`, $options: 'i' } },
          { researchAreas: { $in : param.researchAreas.toString() === 'All Areas' ? [...expertiseAreas] : [...param.researchAreas] } },
          { department: param.department === 'both' ? {$in: ['Computer Science', 'Information Systems and Analytics']} : param.department },
        ];
        const professors = await Professor.find({
          $and: query 
        });
        return professors

      }
    },
  })
});


module.exports = RootQuery;


