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

setImageURL = (imgName, news_key) => {
    con.query("UPDATE News SET IMG_Name = '" + imgName + "' WHERE KEY = " +
        news_key + ";",
        function(err) {
            if (err) throw err;
        })
}

setTitle = (news_title, news_key) => {
    con.query("UPDATE News SET Title = '" + news_title + "' WHERE KEY = " +
        news_key + ";",
        function(err) {
            if (err) throw err;
        })
}

setLink = (news_link, news_key) => {
    con.query("UPDATE News SET Link = '" + news_link + "' WHERE KEY = " +
        news_key + ";",
        function(err) {
            if (err) throw err;
        })
}

setNewsDescription = (description, news_key) => {
    con.query("UPDATE News SET IMG_Name = '" + description + "' WHERE KEY = " +
        news_key + ";",
        function(err) {
            if (err) throw err;
        })
}

con.end();