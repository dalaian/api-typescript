import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// types
import { typeDefs } from './schema.js';

// resolvers
import { resolvers } from './resolvers.js';


const server = new ApolloServer({
    typeDefs,
    resolvers,
});


const { url } = await startStandaloneServer(server, {
listen: { port: 4001 },
});

console.log(`🚀  Server ready at: ${url}`);