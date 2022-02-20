const user = require("../services/user-services")

/**
 * Add a new user to the DB
 */
const createUser = (req, res, next) => {
    console.log(req.body);

    let username = req.body.username;

    user.createUser(username, (err, data) =>{
        if (err) {
            return next(err);
        }

        if (!data) {
            console.log("Missing `done()` argument");
            return next({ message: "Missing callback argument" });
        }

        return res.json({
            username: data.username,
            _id: data.id
        })
    })
};

/**
 * Get a list of all users (wip)
 */
const getUsers = (req,res, next) =>{

    user.getUsers((err,data) =>{
        if (err) {
            return next(err);
        }

        if (!data) {
            console.log("Missing `done()` argument");
            return next({ message: "Missing callback argument" });
        }

        res.json(data);
    })

 
}

module.exports = {
    createUser,
    getUsers
}
