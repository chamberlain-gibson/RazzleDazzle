const express = require('express');
const app = express();
app.listen('3000');

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
})

/**
 * Imports
 */
let { customer_appt } = require("./Appointments/Class_Customer_Appointment");

/**
 * Updaters for Customer class
 */
app.get('/updateCustomerName', (req, res) => {
    var name;
    con.query("SELECT Cust_Name FROM Customer WHERE CID = '" +
        req.body.customer_id + "';",
        function(err, result) {
            if (err) throw err;
            name = result[0].Cust_Name;
            res.json(name);
        })
});

app.get('/updateCustomerAddress', (req, res) => {
    var addr;
    con.query("SELECT Cust_Address FROM Customer WHERE CID = '" +
        req.body.customer_id + "';",
        function(err, result) {
            if (err) throw err;
            addr = result[0].Cust_Address;
            res.json(addr);
        })
})

app.get('/updateCustomerPhone', (req, res) => {
    var phone_num;
    con.query("SELECT Cust_Phone_Num FROM Customer WHERE CID = '" +
        req.body.customer_id + "';",
        function(err, result) {
            if (err) throw err;
            phone_num = result[0].Cust_Phone_Num;
            res.json(phone_num)
        })
})

app.get('/updateCustomerEmail', (req, res) => {
    var email_addr;
    con.query("SELECT Cust_Email_Addr FROM Customer WHERE CID = '" +
        req.body.customer_id + "';",
        function(err, result) {
            if (err) throw err;
            email_addr = result[0].Cust_Email_Addr;
            res.json(email_addr);
        })
})

app.get('/updateCustomerEmerName', (req, res) => {
    var name;
    con.query("SELECT Cust_Emer_Name FROM Customer WHERE CID = '" +
        req.body.customer_id + "';",
        function(err, result) {
            if (err) throw err;
            name = result[0].Cust_Emer_Name;
            res.json(name);
        })
})

app.get('/updateCustomerEmerPhone', (req, res) => {
    var phone_num;
    con.query("SELECT Cust_Emer_Num FROM Customer WHERE CID = '" +
        req.body.customer_id + "';",
        function(err, result) {
            if (err) throw err;
            phone_num = result[0].Cust_Emer_Num;
            res.json(phone_num);
        })
})

app.get('/updateCustomerNotifications', (req, res) => {
    var notif;
    con.query("SELECT Phone_Notif FROM Customer WHERE CID = '" +
        req.body.customer_id + "';",
        function(err, result) {
            if (err) throw err;
            notif = result[0].Phone_Notif;
            res.json(notif);
        })
})

app.get('/updateCustomerCalendar', (req, res) => {
    var calendar = [];
    con.query("SELECT Appt_Key, Appt_Name, Appt_Date, Appt_Time, Appt_Description, Appt_Public_Notes, " +
        "Appt_Size FROM Appointment " +
        "INNER JOIN Customer_Group ON Appointment.Appt_GID = Customer_Group.GID " +
        "WHERE Customer_Group.CID_1 = " + req.body.customer_id + " " +
        "OR Customer_Group.CID_2 = " + req.body.customer_id + " " +
        "OR Customer_Group.CID_3 = " + req.body.customer_id + " " +
        "OR Customer_Group.CID_4 = " + req.body.customer_id + ";",
        function(err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                calendar.push(new customer_appt(req.body.customer_id, result[i].Appt_Key, result[i].Appt_Name,
                    result[i].Appt_Date, result[i].Appt_Time, result[i].Appt_Description,
                    result[i].Appt_Public_Notes, result[i].Appt_Size, true));
            };
        });

    // Current Date String
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var curr_date = yyyy + '-' + mm + '-' + dd;

    // Add on appointments available for reservation
    con.query("SELECT Appt_Key, Appt_Name, Appt_Date, Appt_Time, Appt_Description, Appt_Public_Notes, " +
        "Appt_Size FROM Appointment " +
        "INNER JOIN Customer_Group ON Appointment.Appt_GID = Customer_Group.GID " +
        "WHERE Customer_Group.CID_1 != " + req.body.customer_id + " " +
        "AND Customer_Group.CID_2 != " + req.body.customer_id + " " +
        "AND Customer_Group.CID_3 != " + req.body.customer_id + " " +
        "AND Customer_Group.CID_4 != " + req.body.customer_id + " " +
        "AND Appt_Size > 0 " +
        "AND Appt_Date > '" + curr_date + "';",
        function(err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                calendar.push(new customer_appt(body, result[i].Appt_Key, result[i].Appt_Name,
                    result[i].Appt_Date, result[i].Appt_Time, result[i].Appt_Description,
                    result[i].Appt_Public_Notes, result[i].Appt_Size, false));
            };
            res.json(calendar);
        })
})