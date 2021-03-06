const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type Event {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
    creator: User!
}

type User {
    _id: ID!
    password: String
    email: String!
    createdEvents: [Event!]
}

type Booking {
    _id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String! 
}

type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
}

input UserInput {
    password: String!
    email: String!
}

input EventInput {
    title: String!
    description: String!
    price: Float!
    date: String!
}

type RootQuery {
    events: [Event!]!
    users: [User!]!
    bookings: [Booking!]!
    login(email:String!, password:String!):AuthData!
}

type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    bookEvent(eventId: ID!): Booking!
    deleteEvent(eventId: ID!): Event
    cancelBooking(bookingId: ID!): Event!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)