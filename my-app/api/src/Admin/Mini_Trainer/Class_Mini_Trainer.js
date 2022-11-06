/**
 * Mini-Trainer Class. Class consists of:
 * Trainer ID
 * Name
 * Address
 * Phone Number
 * Email Address
 * Emergency Contact Name
 * Emergency Contact Phone Number
 */
class mini_trainer {
    constructor(tr_id, tr_name, tr_addr, tr_phone, tr_email,
        tr_econ, tr_econ_phone, tr_admin) {
        this.tr_id = tr_id;
        this.tr_name = tr_name;
        this.tr_addr = tr_addr;
        this.tr_phone = tr_phone;
        this.tr_email = tr_email;
        this.tr_econ = tr_econ;
        this.tr_econ_phone = tr_econ_phone;
        this.tr_admin = tr_admin;
    }

    // Getters
    getID() {
        return this.tr_id;
    }

    getName() {
        return this.tr_name;
    }

    getAddress() {
        return this.tr_addr;
    }

    getPhone() {
        return this.tr_phone;
    }

    getEmail() {
        return this.tr_email;
    }

    getEmerContact() {
        return this.tr_econ;
    }

    getEmerContactPhone() {
        return this.tr_econ_phone;
    }

    getAdmin() {
        return this.tr_admin;
    }

    // Setter
    setAdmin(admin) {
        this.tr_admin = admin;
    }
}

module.exports = {
    mini_trainer: mini_trainer
}