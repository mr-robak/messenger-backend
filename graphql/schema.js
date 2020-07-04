const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String
    email: String!
    password: String!
    isLoggedin: Boolean!
    preferences: String
    ### not sure about the below
    user_contacts: [User]
    chats: [Chat]
    messages: [Message]
  }

  type Chat {
    id: Int!
    title: String!
    creatorId: Int!
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
    id: Int!
    senderId: Int!
    chatId: Int!
    content: String!
    contentType: AllowedContentTypes!
  }

  type Contacts {
    userId: Int!
    contacts: [User]
  }

  type ChatUsers {
    chatId: Int!
    users: [User]
  }

  type Query {
    user(id: Int!): User
    users: [User]
    chat(id: Int!): Chat
    chats(userId: Int!): [Chat]
    contacts(userId: Int!): [User]
    chat_users(chat: Int!): [User]
    messages(chatId: Int!): [Message]
    getCompleteChat(id: Int!): Chat
  }

  type Mutation {
    sendMessage(
      senderId: Int!
      chatId: Int!
      content: String!
      contentType: AllowedContentTypes!
    ): Message
    #createChat - adding users, messages
    createChat(title: String!, creatorId: Int!, chatters: [Int!]): Chat!
    # createGroupChat(title: String!, creatorID: Int!, contacts: [Users]!)
  }
`;

module.exports = typeDefs;
