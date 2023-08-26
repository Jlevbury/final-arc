const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            const userData = await User.findOne({})
            .select('-__v -password')
            .populate('games');
            return userData;
        },
        users: async () => {
            return User.find().populate('games');
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                console.log('User not found!');
                throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
                console.log('Incorrect password!');
                throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
        },    
        addGameDEV: async (parent, { userId, rawgId, name, image, rating }, context) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { games: { rawgId, name, image, rating }}},
                { new: true, runValidators: true }
            );
        },
        addGame: async (parent, { rawgId, name, image, rating }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { games: { rawgId, name, image, rating }}},
                    { new: true, runValidators: true }
                );
            }
        },
    },
};

module.exports = resolvers;