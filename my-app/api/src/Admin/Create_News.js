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

createNews = (news_name, news_title, news_link, description) => {
    con.query("INSERT INTO News (IMG_Name, Title, Link, News_Description) VALUES ('" +
        news_name + "', '" + news_title + "', '" + news_link + "', '" + description +
        "');",
        function(err) {
            if (err) throw err;
        });
}

con.end();