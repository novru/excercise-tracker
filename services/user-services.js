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

module.exports = {
	createUser,
    getUsers
};
