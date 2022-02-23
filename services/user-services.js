const UserModel = require("../models/user-model");

const createUser = (userName, done) => {
	let user = new UserModel({ username: userName });

	user.save((err, data) => {
		if (err) return console.log(err);
		done(null, data);
	});
};

const getUsers = (done) => {
	UserModel.find({}, (err, data) => {
		if (err) return console.error(err);
		done(null, data);
	});
};

const  getUserById = async (userId, done) => {
    try {
        const singleUserResponse =  await UserModel.findById({_id: userId});
        return singleUserResponse;
    } catch (error) {
        console.log(`User not found. ${error}`)
        //return error
    }

	// UserModel.findById({ _id: userId }, (err, data) => {
	// 	if (err) return console.log(err);
	// 	done(null, data);
	// });
};

module.exports = {
	createUser,
	getUsers,
    getUserById
};
