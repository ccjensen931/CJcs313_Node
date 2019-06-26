const pool = require('../../general_modules/dbConnect.js');

module.exports = function getPerson(user_id, res) {
    var sql = "SELECT * FROM ta10_person";

    pool.query(sql, function(err, result) {
        // If an error occurred...
        if (err) {
            console.log("Error in query: ")
            console.log(err);
        }

        // Log this to the console for debugging purposes.
        console.log("Back from DB with result:");
        console.log(result.rows);

        res.send(result.rows);
    });
};