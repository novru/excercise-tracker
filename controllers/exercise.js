const ExerciseService = require("../services/exercise-services");
const UserService = require("../services/user-services");

const addExercise = async (req, res, next) => {
	console.log(req.body);
	console.log(new Date().toDateString());

	try {
		let userId = req.body[":_id"] || {};

		const user = await UserService.getUserById(userId);
		if (user == undefined) return res.status(500).json({ error: "user not found" });

		console.log(user);

		let exerciseObj = {
			userId: user.id,
			userName: user.username,
			date: req.body.date || new Date(),
			duration: req.body.duration,
			description: req.body.description,
		};

		const exercise = await ExerciseService.addExercise(exerciseObj);

		console.log(exercise);

		return res.json({
			_id: exercise.id,
			username: exercise.userName,
			date: new Date(exercise.date).toDateString(),
			duration: exercise.duration,
			description: exercise.description,
		});
	} catch (error) {
		return res.status(500).json(error);
	}

	//res.status(500).json({asd:1});
};

const getExercisesLog = async (req, res, next) => {
	try {
        //console.log(req.params);
        console.log(req.query);
		let userId = req.params._id;
		const user = await UserService.getUserById(userId);
		if (user == undefined) return res.status(500).json({ error: "user not found" });

        let query = {
            from: new Date(req.query.from) || new Date(0),
            to: new Date(req.query.to)|| new Date(),
            limit: parseInt(req.query.limit) || 0
        }

        //console.log(query);

		const exerciseLogs = await ExerciseService.findExcisesLog(user.id, query);

		const exerciseParsed = exerciseLogs.map((d) => {
			return {
				description: d.description,
				duration: d.duration,
				date: new Date(d.date).toDateString(),
			};
		});

		res.json({
			username: user.username,
			count: exerciseLogs.length,
			_id: user.id,
			log: [exerciseParsed],
		});
	} catch (error) {
		return res.status(500).json(error);
	}
};

module.exports = {
	addExercise,
	getExercisesLog,
};
