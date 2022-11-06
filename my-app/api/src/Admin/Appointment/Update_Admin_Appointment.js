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
let { micro_trainer } = require("./Micro_Trainer/Class_Micro_Trainer");

var updateName = (appt_key) => {
    var name;
    con.query("SELECT Appt_Name FROM Appointment WHERE Appt_Key = " +
        appt_key + ";",
        function(err, result) {
            if (err) throw err;
            name = result[0].Appt_Name;
        })
    return name;
}

var updateDate = (appt_key) => {
    var date;
    con.query("SELECT Appt_Date FROM Appointment WHERE Appt_Key = " +
        appt_key + ";",
        function(err, result) {
            if (err) throw err;
            date = result[0].Appt_Date;
        })
    return date;
}

var updateTime = (appt_key) => {
    var time;
    con.query("SELECT Appt_Time FROM Appointment WHERE Appt_Key = " +
        appt_key + ";",
        function(err, result) {
            if (err) throw err;
            time = result[0].Appt_Date;
        })
    return time;
}

var updateDifficulty = (appt_key) => {
    var diff;
    con.query("SELECT Appt_Difficulty FROM Appointment WHERE Appt_Key = " +
        appt_key + ";",
        function(err, result) {
            if (err) throw err;
            diff = result[0].Appt_Difficulty;
        })
    return diff;
}

var updateDescription = (appt_key) => {
    var desc;
    con.query("SELECT Appt_Description FROM Appointment WHERE Appt_Key = " +
        appt_key + ";",
        function(err, result) {
            if (err) throw err;
            desc = result[0].Appt_Description;
        })
    return desc;
}

var updatePublicNotes = (appt_key) => {
    var pub_notes;
    con.query("SELECT Appt_Public_Notes FROM Appointment WHERE Appt_Key = " +
        appt_key + ";",
        function(err, result) {
            if (err) throw err;
            pub_notes = result[0].Appt_Public_Notes;
        })
    return pub_notes;
}

var updatePrivateNotes = (appt_key) => {
    var priv_notes;
    con.query("SELECT Appt_Private_Notes FROM Appointment WHERE Appt_Key = " +
        appt_key + ";",
        function(err, result) {
            if (err) throw err;
            priv_notes = result[0].Appt_Private_Notes;
        })
    return priv_notes;
}

var updateSize = (appt_key) => {
    var size;
    con.query("SELECT Appt_Size FROM Appointment WHERE Appt_Key = " +
        appt_key + ";",
        function(err, result) {
            if (err) throw err;
            size = result[0].Appt_Size;
        })
    return size;
}

var updateTID1 = (appt_key) => {
    var tid_1;
    con.query("SELECT Appt_TID_1 FROM Appointment WHERE Appt_Key = " +
        appt_key + ";",
        function(err, result) {
            if (err) throw err;
            tid_1 = result[0].Appt_TID_1;
        })
    return tid_1;
}

var updateTID2 = (appt_key) => {
    var tid_2;
    con.query("SELECT Appt_TID_2 FROM Appointment WHERE Appt_Key = " +
        appt_key + ";",
        function(err, result) {
            if (err) throw err;
            tid_1 = result[0].Appt_TID_2;
        })
    return tid_2;
}

var updateGID = (appt_key) => {
    var gid;
    con.query("SELECT Appt_GID FROM Appointment WHERE Appt_Key = '" +
        appt_key + "';",
        function(err, result) {
            if (err) throw err;
            gid = result[0].Appt_GID;
        })
    return gid;
}

var updateMicroTrainers = () => {
    var micro_trainers = [];
    con.query("SELECT TID, Train_Name FROM Trainer;",
        function(err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                micro_trainers.push(new micro_trainer(result[i].TID, result[i].Train_Name));
            }
        })
    return trainers;
}

con.end();