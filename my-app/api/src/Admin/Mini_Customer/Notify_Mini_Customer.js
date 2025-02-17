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
const { nodemailer, transporter, emailAppt, textAppt } = require('../../Notifications');
let { mini_customer } = require("./Class_Mini_Customer")

sendNotifications = (mini_customers, title, notification) => {
    for (var i = 0; i < mini_customers.length; i++) {
        emailAppt(mini_customers[i].getEmail(), title, notification);
    }

    // Send texts
    for (var i = 0; i < mini_customers.length; i++) {
        if (mini_customers[i].getNotifications()) {
            textAppt(mini_customers[i].getPhone(), notification);
        }
    }
}

con.end();