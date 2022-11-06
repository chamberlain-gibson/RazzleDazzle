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
let { mini_trainer } = require("./Class_Mini_Trainer")

sendNotifications = (mini_trainers, title, notification) => {
    for (var i = 0; i < mini_trainers.length; i++) {
        emailAppt(mini_trainers[i].getEmail(), title, notification);
        textAppt(mini_trainers[i].getPhone(), notification);
    }
}


con.end();