// Variables for connection
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

CreateAccount = (cust_name, cust_address, cust_phone_num, cust_email_addr, cust_password) => {
    if (cust_address == "") cust_address = null;
    if (cust_phone_num == "") cust_phone_num = null;
    con.query("INSERT INTO Customer (Cust_Name, Cust_Address, Cust_Phone_Num, " +
        "Cust_Email_Addr) VALUES ('" + cust_name + "', '" + cust_address + "', '" +
        cust_phone_num + "', '" + cust_email_addr + "');",
        function(err) {
            if (err) throw err;
        });

    // Get CID
    var cid;
    con.query("SELECT CID FROM Customer WHERE Cust_Email_Addr = '" + cust_email_addr +
        "';",
        function(err, result) {
            if (err) throw err;
            cid = result[0].CID;
        })

    con.query("INSERT INTO Login (Email, Log_Password, CID) VALUES ('" +
        cust_email_addr + "', '" + cust_password + "', '" + cid + "');",
        function(err) {
            if (err) throw err;
        })

}

con.end();