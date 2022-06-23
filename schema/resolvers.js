import UserList from "../DummyData";
import lodash from 'lodash'

const resolvers = {
    Query: {
        users:() =>{
            return UserList;
        },
        user:(parent, args) => {
     const id =  args.id
     const user = lodash.find(UserList, { id: Number(id) })
     return user;
},
},
}
export default resolvers;