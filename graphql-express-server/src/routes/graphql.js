var graphqlHTTP = require('express-graphql')
var graphql = require('graphql');

var fakeDatabase = {
	'a': {
		id: 'a',
		name: 'alice',
	},
	'b': {
		id: 'b',
		name: 'bob',
	},
};

var userType = new graphql.GraphQLObjectType({
	name: 'User',
	fields: {
		id: { type: graphql.GraphQLString },
		name: { type: graphql.GraphQLString },
	}
});

// Define the Query type
var queryType = new graphql.GraphQLObjectType({
	name: 'Query',
	fields: {
		user: {
			type: userType,
			// `args` describes the arguments that the `user` query accepts
			args: {
				id: { type: graphql.GraphQLString }
			},
			resolve: (_, { id }) => {
				return fakeDatabase[id];
			}
		}
	}
});

var mutationType = new graphql.GraphQLObjectType({
	name: 'Mutate',
	fields: {
		user: {
			type: userType,
			// `args` describes the arguments that the `user` query accepts
			args: {
				name: { type: graphql.GraphQLString },
				nickName: { type: graphql.GraphQLString },
			},
			resolve: (_, { name, nickName }) => {
				return fakeDatabase[name] = {id: name, name: name, nickName: nickName};
			}
		}
	}
});

var schema = new graphql.GraphQLSchema({ 
	query: queryType,
	mutation: mutationType
});

module.exports = graphqlHTTP({
	schema: schema,
	graphiql: true,
})