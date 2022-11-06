/**
 * Mysql connection
 */
var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "108.213.201.29",
    user: "root",
    password: "RazzleDazzle1!",
    database: "Horse_Site",
    insecureAuth: true,
    connectTimeout: 30000
});

con.connect(function(err) {
    if (err) throw err;
});

setAdmin = (admin, trainer_id) => {
    con.query("UPDATE Trainer SET Admin = " + admin + " " +
        "WHERE TID = " + trainer_id + ";",
        function(err) {
            if (err) throw err;
        });
}

con.end();