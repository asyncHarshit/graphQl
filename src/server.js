import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/schema.js";


async function startServer(){
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    const {url} = await startStandaloneServer(server,{
        listen : {port : 3000}
    })

    console.log(`server is ready at url ${url}`);
    
}

startServer();