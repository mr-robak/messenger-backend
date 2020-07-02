const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String
    email: String!
    password: String!
    isLoggedin: Boolean!
    preferences: String!
    ### not sure about the below
    user_contacts: [User]
    chats: [Chat]
  }

  type Chat {
    id: ID!
    title: String!
    creatorId: ID!
    creator: User
    participants: [User]
    messages: [Message]
  }

  enum AllowedContentTypes {
    text
    image
    video
  }

  type Message {
    id: ID!
    senderId: ID!
    chatId: ID!
    content: String!
    contentType: AllowedContentTypes!
  }

  type Contacts {
    userId: ID!
    contacts: [User]
  }

  type ChatUsers {
    chatId: ID!
    users: [User]
  }

  type Query {
    user(id: Int!): User
    users: [User]
    chat(id: ID!): Chat
    chats(userId: ID!): [Chat]
    contacts(userId: ID!): [User]
    chat_users(chat: ID!): [User]
    messages(chatId: ID!): [Message]
    getCompleteChat(id: ID!): Chat
  }

  type Mutation {
    sendMessage(
      senderId: ID!
      chatId: ID!
      content: String!
      contentType: AllowedContentTypes!
    ): Message
    #createChat - adding users, messages
    createChat(title: String!, creatorId: ID!, chatters: [ID!]): Chat!
    # createGroupChat(title: String!, creatorID: ID!, contacts: [Users]!)
  }
`;

module.exports = typeDefs;
