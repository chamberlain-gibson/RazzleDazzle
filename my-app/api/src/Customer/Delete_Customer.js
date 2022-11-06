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

/**
 * Imports
 */
const { setReserved } = require("./Set_Customer_Appointment");

deleteUser = (customer_id, calendar) => {
    con.query("UPDATE Login SET Decomission = 1 WHERE CID = " +
        customer_id + ";",
        function(err) {
            if (err) throw err;
        });

    // Get today's date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var curr_date = yyyy + '-' + mm + '-' + dd;

    // Unreserve from all appointments after today
    for (var i = 0; i < calendar.length; i++) {
        if (calendar[i].getDate() > curr_date) {
            setReserved(false, calendar[i].getApptKey(), customer_id);
        }
    }
}

con.end();