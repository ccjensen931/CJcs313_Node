const pool = require('../../general_modules/dbConnect.js');

module.exports = function getPerson(user_id, res) {
    // let sql = 'SELECT * FROM ta10_person WHERE person_id = $1';
    // let values = [user_id];

    const query = {
        // give the query a unique name
        name: 'fetch-person',
        text: 'SELECT * FROM ta10_person WHERE person_id = $1',
        values: [user_id]
      }

    pool.query(query, function(err, result) {
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