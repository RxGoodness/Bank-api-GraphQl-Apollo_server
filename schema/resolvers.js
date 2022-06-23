import {UserList, MovieList} from "../DummyData";
import lodash from 'lodash'

const resolvers = {
    Query: {
        //USER RESOLVERS
        users:() =>{
            return UserList;
        },
        user:(parent, args) => {
     const id =  args.id
     const user = lodash.find(UserList, { id: Number(id) })
     return user;
},

//MOVIE RESOLVERS
     movies: () => {
            return MovieList; },

     movie:(parent, args) => {
        const name =  args.name
        const movie = lodash.find(MovieList, { name: name })
        return movie;
    }

},
}
export default resolvers;