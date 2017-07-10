const Sequelize = require("sequelize");
const sql = require("../util/sql.js");
const User = require("./users.js");
const Photos = require("./photos.js");


const Likes = sql.define("like", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
});


// Likes.hasMany(Photos);

// Likes.hasOne(User);


module.exports = Likes;
