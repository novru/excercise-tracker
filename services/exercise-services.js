const ExerciseModel = require("../models/exercise-model");

const addExercise = async (exerciseOjb, done) => {
	try {
		let exercise = {
			userId: exerciseOjb.userId,
			userName: exerciseOjb.userName,
			date: exerciseOjb.date,
			duration: exerciseOjb.duration,
			description: exerciseOjb.description,
		};

		const response = await new ExerciseModel(exercise).save();

		return response;
	} catch (error) {
		console.log(error);
	}
};

const findExcisesLog = async (userId, query) => {

	try {
		const response = await ExerciseModel.find({
			userId: userId,
			date: {
				$gte: query.from, //greater than(from)
				$lt: query.to, //lesser than (to)
			},
		})
			.select("-_id description duration date")
			.limit(query.limit);

		return response;
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	addExercise,
	findExcisesLog,
};
