import UserList from "../DummyData";

const resolvers = {
    Query: {
        users() {
            return UserList;
        }
}
}
export default resolvers;