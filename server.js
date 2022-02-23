const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");

//routes
const user = require("./routes/user-route")
const exercise = require("./routes/exercise-route")

require('dotenv').config()

//mongo connection
let mongoose;
try {
	mongoose = require("mongoose");
} catch (e) {
	console.log(e);
}
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
app.get("/is-mongoose-ok", function (req, res) {
	if (mongoose) {
		res.json({ isMongooseOk: !!mongoose.connection.readyState });
	} else {
		res.json({ isMongooseOk: false });
	}
});

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

//user 
app.use("/api", user);
app.use("/api", exercise);



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
