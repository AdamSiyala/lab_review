const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "be56f9500fec1f",
	password: "a714e96d",
	database: "heroku_ada301d6c216c5f",
	multipleStatements: false
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Add00m!02",
	database: "lab_review",
	multipleStatements: false
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		