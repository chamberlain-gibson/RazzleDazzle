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

setName = (name, appt_key) => {
    con.query("UPDATE Appointment SET Appt_Name = '" + name +
        "' WHERE Appt_Key = " + appt_key + ";",
        function(err) {
            if (err) throw err;
        });
}

setDate = (date, appt_key) => {
    con.query("UPDATE Appointment SET Appt_Date = '" + date +
        "' WHERE Appt_Key = " + appt_key + ";",
        function(err) {
            if (err) throw err;
        })
}

setTime = (time, appt_key) => {
    con.query("UPDATE Appointment SET Appt_Time = '" + time +
        "' WHERE Appt_Key = " + appt_key + ";",
        function(err) {
            if (err) throw err;
        })
}

setDifficulty = (diff, appt_key) => {
    con.query("UPDATE Appointment SET Appt_Difficulty = '" + diff +
        "' WHERE Appt_Key = " + appt_key + ";",
        function(err) {
            if (err) throw err;
        })
}

setDescription = (desc, appt_key) => {
    con.query("UPDATE Appointment SET Appt_Description = '" + desc +
        "' WHERE Appt_Key = " + appt_key + ";",
        function(err) {
            if (err) throw err;
        })
}

setPublicNotes = (pub_notes, appt_key) => {
    con.query("UPDATE Appointment SET Appt_Public_Notes = '" + pub_notes +
        "' WHERE Appt_Key = " + appt_key + ";",
        function(err) {
            if (err) throw err;
        })
}

setPrivateNotes = (priv_notes, appt_key) => {
    con.query("UPDATE Appointment SET Appt_Private_Notes = '" + priv_notes +
        "' WHERE Appt_Key = " + appt_key + ";",
        function(err) {
            if (err) throw err;
        })
}

setSize = (size, appt_key) => {
    con.query("UPDATE Appointment SET Appt_Size = '" + size +
        "' WHERE Appt_Key = " + appt_key + ";",
        function(err) {
            if (err) throw err;
        })
}

setTID1 = (tid_1, appt_key) => {
    con.query("UPDATE Appointment SET Appt_TID_1 = '" + tid_1 +
        "' WHERE Appt_Key = " + appt_key + ";",
        function(err) {
            if (err) throw err;
        })
}

setTID2 = (tid_2, appt_key) => {
    con.query("UPDATE Appointment SET Appt_TID_2 = '" + tid_2 +
        "' WHERE Appt_Key = " + appt_key + ";",
        function(err) {
            if (err) throw err;
        })
}

setGID = (gid, appt_key) => {
    con.query("UPDATE Appointment SET Appt_GID = '" + gid +
        "' WHERE Appt_Key = " + appt_key + ";",
        function(err) {
            if (err) throw err;
        })
}

con.end();