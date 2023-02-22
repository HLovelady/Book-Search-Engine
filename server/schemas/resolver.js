const { Book, User } = require('../models');

const resolvers = {
   Query: {
      me: {
        // code to find ur USer --> Request to our DATAbase
        // const userData = User.find()  --> Just use regular MONGOOSE methods
        // return data
      }
  //     tech: async () => {
  //       return Tech.find({});
  //    }
  //     matchups: async (parent, { _id }) => {
  //       const params = _id ? { _id } : {};
  //       return Matchup.find(params);
  //     },
  },
   Mutation: {
      addUser: async(parent, args, context) => {
        console.log(args); //  --> { username: "", email: "", password: "" }
        // args example here (username: String!, email: String!, password: String!)
        const newUser = await User.create(args);
        const token = "";

        return { token, newUser }
      } 
//     createMatchup: async (parent, args) => {
//       const matchup = await Matchup.create(args);
//       return matchup;
//     },
//     createVote: async (parent, { _id, techNum }) => {
//       const vote = await Matchup.findOneAndUpdate(
//         { _id },
//         { $inc: { [`tech${techNum}_votes`]: 1 } },
//         { new: true }
//       );
//       return book;
//     },
  },
};

module.exports = resolvers;