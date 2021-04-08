const database = include('/databaseConnection');


function getAllRestaurants(callback) {
	let sqlQuery = "SELECT restaurant_id, name, description  FROM restaurant";
	database.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}




module.exports = {getAllRestaurants}
