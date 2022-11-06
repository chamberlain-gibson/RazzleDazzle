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

var getPhoneNumbers = (appt_key) => {
    var gid;
    con.query("SELECT Appt_GID FROM Appointment WHERE Appt_Key = " + appt_key +
        ";",
        function(err, result) {
            if (err) throw err;
            gid = result[0].Appt_GID;
        })

    // Get all CID's
    var CID_1, CID_2, CID_3, CID_4;
    con.query("SELECT CID_1, CID_2, CID_3, CID_4 FROM Customer_Group WHERE GID = " +
        gid + ";",
        function(err, result) {
            if (err) throw err;
            CID_1 = result[0].CID_1;
            CID_2 = result[0].CID_2;
            CID_3 = result[0].CID_3;
            CID_4 = result[0].CID_4;
        })

    // Get Phone Numbers
    var phone = [];
    con.query("SELECT Cust_Phone_Num, Phone_Notif FROM Customer INNER JOIN Customer_Group " +
        "ON CID = Customer_Group.CID_1 WHERE Customer_Group.GID = " + gid + ";",
        function(err, result) {
            if (err) throw err;
            var pNumber = result[0].Cust_Phone_Num.match(/\d/g) + "";
            if (result[0].Phone_Notif) phone.push(pNumber);
        })

    if (CID_2 != null) {
        con.query("SELECT Cust_Phone_Num, Phone_Notif FROM Customer INNER JOIN Customer_Group " +
            "ON CID = Customer_Group.CID_2 WHERE Customer_Group.GID = " + gid + ";",
            function(err, result) {
                if (err) throw err;
                var pNumber = result[0].Cust_Phone_Num.match(/\d/g) + "";
                if (result[0].Phone_Notif) phone.push(pNumber);
            })
    }

    if (CID_3 != null) {
        con.query("SELECT Cust_Phone_Num, Phone_Notif FROM Customer INNER JOIN Customer_Group " +
            "ON CID = Customer_Group.CID_3 WHERE Customer_Group.GID = " + gid + ";",
            function(err, result) {
                if (err) throw err;
                var pNumber = result[0].Cust_Phone_Num.match(/\d/g) + "";
                if (result[0].Phone_Notif) phone.push(pNumber);
            })
    }

    if (CID_4 != null) {
        con.query("SELECT Cust_Phone_Num, Phone_Notif FROM Customer INNER JOIN Customer_Group " +
            "ON CID = Customer_Group.CID_4 WHERE Customer_Group.GID = " + gid + ";",
            function(err, result) {
                if (err) throw err;
                var pNumber = result[0].Cust_Phone_Num.match(/\d/g) + "";
                if (result[0].Phone_Notif) phone.push(pNumber);
            })
    }

    return phone;
}

var getEmails = (appt_key) => {
    var gid;
    con.query("SELECT Appt_GID FROM Appointment WHERE Appt_Key = " + appt_key +
        ";",
        function(err, result) {
            if (err) throw err;
            gid = result[0].Appt_GID;
        })

    // Get all CID's
    var CID_1, CID_2, CID_3, CID_4;
    con.query("SELECT CID_1, CID_2, CID_3, CID_4 FROM Customer_Group WHERE GID = " +
        gid + ";",
        function(err, result) {
            if (err) throw err;
            CID_1 = result[0].CID_1;
            CID_2 = result[0].CID_2;
            CID_3 = result[0].CID_3;
            CID_4 = result[0].CID_4;
        })

    var emails = [];
    con.query("SELECT Cust_Email_Addr FROM Customer INNER JOIN Customer_Group " +
        "ON CID = Customer_Group.CID_1 WHERE Customer_Group.GID = " + gid + ";",
        function(err, result) {
            if (err) throw err;
            emails.push(result[0].Cust_Phone_Num);
        })

    if (CID_2 != null) {
        con.query("SELECT Cust_Email_Addr FROM Customer INNER JOIN Customer_Group " +
            "ON CID = Customer_Group.CID_2 WHERE Customer_Group.GID = " + gid + ";",
            function(err, result) {
                if (err) throw err;
                emails.push(result[0].Cust_Phone_Num);
            })
    }

    if (CID_3 != null) {
        con.query("SELECT Cust_Email_Addr FROM Customer INNER JOIN Customer_Group " +
            "ON CID = Customer_Group.CID_3 WHERE Customer_Group.GID = " + gid + ";",
            function(err, result) {
                if (err) throw err;
                emails.push(result[0].Cust_Phone_Num);
            })
    }

    if (CID_4 != null) {
        con.query("SELECT Cust_Email_Addr FROM Customer INNER JOIN Customer_Group " +
            "ON CID = Customer_Group.CID_4 WHERE Customer_Group.GID = " + this.gid + ";",
            function(err, result) {
                if (err) throw err;
                emails.push(result[0].Cust_Phone_Num);
            })
    }

    return emails;
}

sendNotifications = (appt_key, title, notification) => {
    var emails = getEmails(appt_key);
    for (var i = 0; i < emails.length; i++) {
        emailAppt(emails[i], title, notification);
    }

    // Send texts
    var phone = getPhoneNumbers(appt_key);
    for (var i = 0; i < phone.length; i++) {
        textAppt(phone[i], notification);
    }
}

con.close();