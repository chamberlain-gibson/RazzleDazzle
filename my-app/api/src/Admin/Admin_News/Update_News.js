/**
 * Update the News Page from the Database 
 * Mysql connection
 * #chambs2theRescue 
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

let { admin_news } = require("./Login.js");

var admin_news_array = [];
con.query("UPDATE * FROM News;", function(err, result) {
    if (err) throw err;
    for (var i = 0; i < result.length; i++) {
        admin_news_array.push(new admin_news(result[i].Key, result[i].IMG_Name,
            result[i].Title, result[i].Link, result[i].News_Description));
    }
})

/**Update News*/
var updateImageName = (img_name) =>  {
    if (err) throw err;
    con.query("UPDATE IMG_Name FROM News WHERE Key = " + this.news_key + ";",
    function(err , result) {
        if (err) throw err;
        img_name = result[0].IMG_Name;
    })
return img_name;
}

var updateLink = (news_link) => {
    con.query("UPDATE Link FROM News WHERE Key = " + this.news_key + ";",
        function(err, result) {
            if (err) throw err;
            news_link = result[0].Link;
        })
   return news_link;
}

var updateNewsDescription(description) => {
    con.query("SELECT News_Description FROM News WHERE Key = " + this.news_key + ";",
        function(err, result) {
            if (err) throw err;
            description = result[0].News_Description;
        })
        return News_Description;
}

con.end();


