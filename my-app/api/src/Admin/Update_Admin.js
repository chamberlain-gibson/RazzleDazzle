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
let { admin_appt } = require("./Appointment/Class_Admin_Appointment");
let { mini_customer } = require("./Mini_Customer/Class_Mini_Customer");
let { mini_trainer } = require("./Mini_Trainer/Class_Mini_Trainer");
let { micro_trainer } = require("./Appointment/Micro_Trainer/Class_Micro_Trainer");
let { admin_news } = require("./News/Class_Admin_News");

var updateName = (admin_id) => {
    var name;
    con.query("SELECT Train_Name FROM Trainer WHERE TID = '" +
        admin_id + "';",
        function(err, result) {
            if (err) throw err;
            name = result[0].Train_Name;
        })
    return name;
}

var updateAddress = (admin_id) => {
    var address;
    con.query("SELECT Train_Address FROM Trainer WHERE TID = '" +
        admin_id + "';",
        function(err, result) {
            if (err) throw err;
            address = result[0].Train_Address;
        })
    return address;
}

var updatePhone = (admin_id) => {
    var phone;
    con.query("SELECT Train_Phone_Num FROM Trainer WHERE TID = '" +
        admin_id + "';",
        function(err, result) {
            if (err) throw err;
            phone = result[0].Train_Phone_Num;
        })
    return phone;
}

var updateEmail = (admin_id) => {
    var email;
    con.query("SELECT Train_Email_Addr FROM Trainer WHERE TID = '" +
        admin_id + "';",
        function(err, result) {
            if (err) throw err;
            email = result[0].Train_Email_Addr;
        })
    return email;
}

var updateEmerName = (admin_id) => {
    var emerName;
    con.query("SELECT Train_Emer_Name FROM Trainer WHERE TID = '" +
        admin_id + "';",
        function(err, result) {
            if (err) throw err;
            emerName = result[0].Train_Emer_Name;
        })
    return emerName;
}

var updateEmerPhone = (admin_id) => {
    var emerPhone;
    con.query("SELECT Train_Emer_Num FROM Trainer WHERE TID = '" +
        admin_id + "';",
        function(err, result) {
            if (err) throw err;
            emerPhone = result[0].Train_Emer_Num;
        })
    return emerPhone;
}

var updateCustomers = () => {
    var customers = [];
    con.query("SELECT * FROM Customer;",
        function(err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                customers.push(new mini_customer(result[i].CID, result[i].Cust_Name,
                    result[i].Cust_Address, result[i].Cust_Phone_Num,
                    result[i].Cust_Email_Addr, result[i].Cust_Emer_Name,
                    result[i].Cust_Emer_Num, result[i].Difficulty,
                    result[i].Phone_Notif));
            };
        });
    return customers;
}

var updateTrainers = () => {
    var trainers = [];
    con.query("SELECT TID, Train_Name, Train_Address, Train_Phone_Num, Train_Email_Addr, " +
        "Train_Emer_Name, Train_Emer_Num, Admin FROM Trainer;",
        function(err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                trainers.push(new mini_trainer(result[i].TID, result[i].Train_Name,
                    result[i].Train_Address, result[i].Train_Phone_Num,
                    result[i].Train_Email_Addr, result[i].Train_Emer_Name,
                    result[i].Train_Emer_Num, result[i].Admin));
            };
        });
    return trainers;
}

var updateCalendar = () => {
    var calendar = [];
    var micro_trainers = [];
    con.query("SELECT TID, Train_Name FROM Trainer;",
        function(err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                micro_trainers.push(new micro_trainer(result[i].TID, result[i].Train_Name));
            }
        })
    con.query("SELECT * FROM Appointment;", function(err, result) {
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            calendar.push(new admin_appt(result[i].Appt_Key, result[i].Appt_Name,
                result[i].Appt_Date, result[i].Appt_Time, result[i].Appt_Difficulty,
                result[i].Appt_Description, result[i].Appt_Public_Notes,
                result[i].Appt_Private_Notes, result[i].Appt_Size, result[i].Appt_TID_1,
                result[i].Appt_TID_2, result[i].Appt_GID, micro_trainers));
        };
    });
    return calendar;
}

var updateNews = () => {
    var admin_news_array = [];
    con.query("SELECT * FROM News;", function(err, result) {
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            admin_news_array.push(new admin_news(result[i].Key, result[i].IMG_Name,
                result[i].Title, result[i].Link, result[i].News_Description));
        }
    })

    while (admin_news_array.length > 5) {
        // Get lowest key
        var news_key;
        con.query("SELECT Key FROM News;", function(err, result) {
            if (err) throw err;
            news_key = result[0].Key;
        })

        // Delete lowest
        con.query("DELETE FROM News WHERE Key = " + news_key + ";",
            function(err) {
                if (err) throw err;
            })

        // Remake news array
        admin_news_array = [];
        con.query("SELECT * FROM News;", function(err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                admin_news_array.push(new admin_news(result[i].Key, result[i].IMG_Name,
                    result[i].Title, result[i].Link, result[i].News_Description));
            }
        })
    }
    return admin_news_array;
}

con.end();