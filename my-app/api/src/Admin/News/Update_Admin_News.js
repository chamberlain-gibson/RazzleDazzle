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

var updateImageURL = (news_key) => {
    var imgName;
    con.query("SELECT IMG_Name FROM News WHERE Key = " + news_key + ";",
        function(err, result) {
            if (err) throw err;
            imgName = result[0].IMG_Name;
        })
    return imgName;
}

var updateTitle = (news_key) => {
    var news_title;
    con.query("SELECT Title FROM News WHERE Key = " + news_key + ";",
        function(err, result) {
            if (err) throw err;
            news_title = result[0].Title;
        })
    return news_title;
}

var updateLink = (news_key) => {
    var news_link;
    con.query("SELECT Link FROM News WHERE Key = " + news_key + ";",
        function(err, result) {
            if (err) throw err;
            news_link = result[0].Link;
        })
    return news_link;
}

var updateDescription = (news_key) => {
    var description;
    con.query("SELECT News_Description FROM News WHERE Key = " + news_key + ";",
        function(err, result) {
            if (err) throw err;
            description = result[0].News_Description;
        })
    return description;
}

con.end();