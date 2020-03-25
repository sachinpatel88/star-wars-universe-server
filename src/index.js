const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers');
const StarWarsAPI = require('./star-wars-api');
const typeDefs = require('./type-defs');

const API_KEY = process.env.API_KEY;
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            starWarsAPI: new StarWarsAPI()
        };
    },
    // Ensure that subscriptions are disabled.
    subscriptions: false,
    ...(API_KEY && {
        engine: {
            apiKey: API_KEY
        }
    })
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
