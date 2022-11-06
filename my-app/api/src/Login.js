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
let { customer_appt } = require("./Customer/Appointments/Class_Customer_Appointment");
let { trainer_appt } = require("./Trainer/Appointments/Class_Trainer_Appointment");
let { mini_customer } = require("./Admin/Mini_Customer/Class_Mini_Customer");
let { mini_trainer } = require("./Admin/Mini_Trainer/Class_Mini_Trainer");
let { admin_appt } = require("./Admin/Appointment/Class_Admin_Appointment");
let { admin_news } = require("./Admin/News/Class_Admin_News");

/**
 * Customer Class. Class consists of:
 * Customer ID
 * Name
 * Address
 * Phone Number
 * Email Address
 * Emergency Contact Name
 * Emergency Contact Phone Number
 * Phone Notifications (Y/N)
 * Calendar
 */
class customer {
    // Constructor
    constructor(customer_id) {
        // Get key at creation
        this.customer_id = customer_id;

        // Query simple values from Database
        con.query("SELECT Cust_Name, Cust_Address, Cust_Phone_Num, Cust_Email_Addr, Cust_Emer_Name, " +
            "Cust_Emer_Num, Difficulty, Phone_Notif FROM Customer WHERE CID = " +
            this.customer_id + ";",
            function(err, result) {
                if (err) throw err;
                this.cust_name = result[0].Cust_Name;
                this.address = result[0].Cust_Address;
                this.phone = result[0].Cust_Phone_Num;
                this.email = result[0].Cust_Email_Addr;
                this.emer_name = result[0].Cust_Emer_Name;
                this.emer_num = result[0].Cust_Emer_Num;
                this.difficulty = result[0].Difficulty;
                this.phone_notif = result[0].Phone_Notif;
            });

        // Get array of appointments (calendar) starting with reservations
        var calendar = [];
        con.query("SELECT Appt_Key, Appt_Name, Appt_Date, Appt_Time, Appt_Description, Appt_Public_Notes, " +
            "Appt_Size FROM Appointment " +
            "INNER JOIN Customer_Group ON Appointment.Appt_GID = Customer_Group.GID " +
            "WHERE Customer_Group.CID_1 = " + this.customer_id + " " +
            "OR Customer_Group.CID_2 = " + this.customer_id + " " +
            "OR Customer_Group.CID_3 = " + this.customer_id + " " +
            "OR Customer_Group.CID_4 = " + this.customer_id + ";",
            function(err, result) {
                if (err) throw err;
                for (var i = 0; i < result.length; i++) {
                    calendar.push(new customer_appt(result[i].Appt_Key, result[i].Appt_Name,
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
            "WHERE Customer_Group.CID_1 != " + this.customer_id + " " +
            "AND Customer_Group.CID_2 != " + this.customer_id + " " +
            "AND Customer_Group.CID_3 != " + this.customer_id + " " +
            "AND Customer_Group.CID_4 != " + this.customer_id + " " +
            "AND Appt_Size > 0 " +
            "AND Appt_Date > '" + curr_date + "';",
            function(err, result) {
                if (err) throw err;
                for (var i = 0; i < result.length; i++) {
                    calendar.push(new customer_appt(result[i].Appt_Key, result[i].Appt_Name,
                        result[i].Appt_Date, result[i].Appt_Time, result[i].Appt_Description,
                        result[i].Appt_Public_Notes, result[i].Appt_Size, false));
                };
            });

    }

    // Getters and setters
    getName() {
        return this.cust_name;
    }

    setName(name) {
        this.cust_name = name;
    }

    getAddress() {
        return this.address;
    }

    setAddress(addr) {
        this.address = addr;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone_num) {
        this.phone = phone_num;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email_addr) {
        this.email = email_addr;
    }

    getEmerName() {
        return this.emer_name;
    }

    setEmerName(name) {
        this.emer_name = name;
    }

    getEmerPhone() {
        return this.emer_num;
    }

    setEmerPhone(phone_num) {
        this.emer_num = phone_num;
    }

    getNotifications() {
        return this.phone_notif;
    }

    setNotifications(notif) {
        this.phone_notif = notif;

    }

    getCalendar() {
        return this.calendar;
    }

    setCalendar(calendar) {
        this.calendar = calendar;
    }
}

/** 
 * Trainer Class. Class consists of:
 * Int              ID
 * String           Name
 * String           Address
 * String           Phone
 * String           Email
 * String           Emergency Contact
 * String           Emergency Number
 * trainer_appt[]
 */
class trainer {
    // Constructor
    constructor(trainer_id) {
        // Get key at creation
        this.trainer_id = trainer_id;

        // Query simple values from database
        con.query("SELECT Train_Name, Train_Address, Train_Phone_Num, Train_Email_Addr, Train_Emer_Name, " +
            "Train_Emer_Num FROM Trainer WHERE TID = " + this.trainer_id,
            function(err, result) {
                if (err) throw err;
                this.trainer_name = result[0].Train_Name;
                this.address = result[0].Train_Address;
                this.phone = result[0].Train_Phone_Num;
                this.email = result[0].Train_Email_Addr;
                this.emer_name = result[0].Train_Emer_Name;
                this.emer_num = result[0].Train_Emer_Num;
            });

        // Get all appointments where Trainer is assigned
        var assigned_calendar = [];
        con.query("SELECT Appt_Key, Appt_Name, Appt_Date, Appt_Time, Appt_Difficulty, Appt_Description, " +
            "Appt_Public_Notes, Appt_Private_Notes, Appt_Size FROM Appointment " +
            "WHERE Appt_TID_1 = " + this.trainer_id + " " +
            "OR Appt_TID_2 = " + this.trainer_id + ";",
            function(err, result) {
                if (err) throw err;
                for (var i = 0; i < result.length; i++) {
                    assigned_calendar.push(new trainer_appt(result[i].Appt_Key,
                        result[i].Appt_Name, result[i].Appt_Date, result[i].Appt_Time,
                        result[i].Appt_Description, result[i].Appt_Public_Notes,
                        result[i].Appt_Private_Notes));
                };
            });
    }

    // Getters and setters
    getName() {
        return this.trainer_name;
    }

    setName(name) {
        this.trainer_name = name;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getEmerName() {
        return this.emer_name;
    }

    setEmerName(name) {
        this.emer_name = name;
    }

    getEmerPhone() {
        return this.emer_num;
    }

    setEmerPhone(phone) {
        this.emer_num = phone;

    }

    getCalendar() {
        return this.assigned_calendar;
    }

    setCalendar(calendar) {
        this.assigned_calendar = calendar;
    }
}

class admin {
    constructor(admin_id) {
        this.admin_id = admin_id;

        // Get simple values
        con.query("SELECT Train_Name, Train_Address, Train_Phone_Num, Train_Email_Addr, Train_Emer_Name, " +
            "Train_Emer_Num FROM Trainer WHERE TID = " + this.admin_id + ";",
            function(err, result) {
                if (err) throw err;
                this.admin_name = result[0].Train_Name;
                this.address = result[0].Train_Address;
                this.phone = result[0].Train_Phone_Num;
                this.email = result[0].Train_Email_Addr;
                this.emer_name = result[0].Train_Emer_Name;
                this.emer_num = result[0].Train_Emer_Num;
            });

        // Get Mini-Customer List
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

        // Get Mini-Trainer List
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

        // Get Micro-Trainer List
        var micro_trainers = [];
        con.query("SELECT TID, Train_Name FROM Trainer;",
            function(err, result) {
                if (err) throw err;
                for (var i = 0; i < result.length; i++) {
                    micro_trainers.push(new micro_trainer(result[i].TID, result[i].Train_Name));
                }
            })

        // Get All Appointments
        var calendar = [];
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

        // Get All News
        var admin_news_array = [];
        con.query("SELECT * FROM News;", function(err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                admin_news_array.push(new admin_news(result[i].Key, result[i].IMG_Name,
                    result[i].Title, result[i].Link, result[i].News_Description));
            }
        })
    }

    // Getters and setters
    getName() {
        return this.trainer_name;
    }

    setName(name) {
        this.admin_name = name;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getEmerName() {
        return this.emer_name;
    }

    setEmerName(name) {
        this.emer_name = name;
    }

    getEmerPhone() {
        return this.emer_num;
    }

    setEmerPhone(phone) {
        this.emer_num = phone;
    }

    getCalendar() {
        return this.calendar;
    }
}

// TODO: Change login? We need a way to return that the user is cust, trainer, or admin
// Add getType to classes? Call user.getType() after generation to get type then load?

var login = (email, passwrd) => {
    var CID = null;
    var TID = null;
    var administrator;
    var user;
    con.query("SELECT * FROM Login WHERE Email = '" + email + "' " +
        "AND Log_Password = '" + passwrd + "';",
        function(err, result) {
            if (err) throw err;

            // If login values match
            if (result[0] != null) {
                // If Customer
                if (result[0].CID = !null) {
                    CID = result[0].CID;
                }

                // If Trainer
                else if (result[0].TID != null) {
                    TID = result[0].TID;
                };
            };
        });
    if (CID != null) {
        user = new customer(CID);
    } else {
        con.query("SELECT Admin FROM Trainer WHERE TID = " + TID + ";",
            function(err, result) {
                if (err) throw err;
                administrator = result[0].Admin;
            });
        if (administrator) user = new admin(TID);
        else user = new trainer(TID);
    }

    return user;
}