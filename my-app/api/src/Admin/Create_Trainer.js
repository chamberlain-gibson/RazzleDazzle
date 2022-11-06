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

createTrainer = (tr_name, tr_addr, tr_phone, tr_email, tr_econ, tr_enum) => {
    // If any values are empty set null;
    if (tr_addr == '') tr_addr = null;
    if (tr_econ == '') tr_econ = null;
    if (tr_enum == '') tr_enum = null;

    // Insert into Trainer table
    con.query("INSERT INTO Trainer (Train_Name, Train_Address, Train_Phone_Num, Train_Email_Addr, Train_Emer_Name, Train_Emer_Num) VALUES ('" +
        tr_name + "', '" + tr_addr + "', '" + tr_phone + "', " + tr_email + "', '" + tr_econ + "', '" + tr_enum + "');",
        function(err) {
            if (err) throw err;
        })

    // Get TID
    var TID;
    con.query("SELECT TID FROM Trainer WHERE Train_Name = " +
        tr_name + ";",
        function(err, result) {
            if (err) throw err;
            TID = result[0].TID;
        })

    // Update Login
    con.query("INSERT INTO Login (Email, Log_Password, TID) VALUES ('" +
        tr_email + "', 'P@ssw0rd', " + TID + ");",
        function(err) {
            if (err) throw err;
        })
}

con.end();