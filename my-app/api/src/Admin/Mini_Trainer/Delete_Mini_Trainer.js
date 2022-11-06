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

deleteUser = (trainer_id) => {
    var email;
    con.query("SELECT Train_Email_Addr FROM Trainer WHERE TID = " + trainer_id +
        ";",
        function(err, result) {
            if (err) throw err;
            email = result[0].Train_Email_Addr;
        })
    con.query("UPDATE Login SET Decomissioned = 1 WHERE Email = " +
        email + ";",
        function(err) {
            if (err) throw err;
        })
    con.query("UPDATE Appointment SET Appt_TID_1 = NULL WHERE Appt_TID_1 = " +
        trainer_id + ";",
        function(err) {
            if (err) throw err;
        })
    con.query("UPDATE Appointment SET Appt_TID_2 = NULL WHERE Appt_TID_2 = " +
        trainer_id + ";",
        function(err) {
            if (err) throw err;
        })
}

con.end();