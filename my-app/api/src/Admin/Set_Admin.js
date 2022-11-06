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

setName = (name, admin_id) => {
    con.query("UPDATE Trainer SET Train_Name = '" + name +
        "' WHERE TID = " + admin_id + ";",
        function(err) {
            if (err) throw err;
        });
}

setAddress = (address, admin_id) => {
    con.query("UPDATE Trainer SET Train_Address = '" + address +
        "' WHERE TID = " + admin_id + ";",
        function(err) {
            if (err) throw err;
        });
}

setPhone = (phone, admin_id) => {
    con.query("UPDATE Trainer SET Train_Phone_Number = '" + phone +
        "' WHERE TID = " + admin_id + ";",
        function(err) {
            if (err) throw err;
        });
}

setEmail = (email, admin_id) => {
    con.query("UPDATE Trainer SET Train_Email_Addr = '" + email +
        "' WHERE TID = " + admin_id + ";",
        function(err) {
            if (err) throw err;
        });
}

setEmerName = (name, admin_id) => {
    con.query("UPDATE Trainer SET Train_Emer_Name = '" + name +
        "' WHERE TID = " + admin_id + ";",
        function(err) {
            if (err) throw err;
        });
}

setEmerPhone = (phone, admin_id) => {
    con.query("UPDATE Trainer SET Train_Emer_Num = '" + phone +
        "' WHERE TID = " + admin_id + ";",
        function(err) {
            if (err) throw err;
        });
}

con.end();