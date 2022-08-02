//graphql-yoga 서버 생성
const { GraphQLServer } = require('graphql-yoga');

const messages = [];

const typeDefs = `
    type Message{
        id: ID!
        user: String!
        content: String!
    }

    type Query {
        messages: [Messages!]
    }
`;

const resolvers = {
    Query: {
        messages: () => messages,
    }
}

const server = new GraphQLServer({typeDefs, resolvers});
server.start(({port}) => { //콜백과 일부가 port인 함수를 사용한다, 어떤 포트에서 시작되었는지 알려줄 것
    console.log(`Server on http://localhost:${port}/`);
});