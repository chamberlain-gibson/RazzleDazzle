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

deleteNews = (news_key) => {
    con.query("DELETE FROM News WHERE Key = " + news_key + ";",
        function(err) {
            if (err) throw err;
        })
}

con.end();