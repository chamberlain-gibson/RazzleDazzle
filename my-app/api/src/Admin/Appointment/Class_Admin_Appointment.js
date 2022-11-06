class admin_appt {
    constructor(appt_key, appt_name, appt_date, appt_time, appt_difficulty,
        appt_desc, appt_pub_notes, appt_priv_notes, appt_size,
        appt_TID_1, appt_TID_2, appt_GID, appt_micro_trainers) {
        this.appt_key = appt_key;
        this.appt_name = appt_name;
        this.appt_date = appt_date;
        this.appt_time = appt_time;
        this.appt_difficulty = appt_difficulty;
        this.appt_desc = appt_desc;
        this.appt_pub_notes = appt_pub_notes;
        this.appt_priv_notes = appt_priv_notes;
        this.appt_size = appt_size;
        this.appt_TID_1 = appt_TID_1;
        this.appt_TID_2 = appt_TID_2;
        this.appt_GID = appt_GID;
        this.appt_micro_trainers = appt_micro_trainers;
    }

    // Getters, Updaters and Setters
    getName() {
        return this.appt_name;
    }

    setName(name) {
        this.appt_name = name;
    }

    getDate() {
        return this.appt_date;
    }

    setDate(date) {
        this.appt_date = date;
    }

    getTime() {
        return this.appt_time;
    }

    setTime(time) {
        this.appt_time = time;
    }

    getDifficulty() {
        return this.appt_difficulty;
    }

    setDifficulty(diff) {
        this.appt_difficulty = diff;
    }

    getDescription() {
        return this.appt_desc;
    }

    setDescription(desc) {
        this.appt_desc = desc;
    }

    getPublicNotes() {
        return this.appt_pub_notes;
    }

    setPublicNotes(pub_notes) {
        this.appt_pub_notes = pub_notes;
    }

    getPrivateNotes() {
        return this.appt_priv_notes;
    }

    setPrivateNotes(priv_notes) {
        this.appt_priv_notes = priv_notes;
    }

    getSize() {
        return this.appt_size;
    }

    setSize(size) {
        this.appt_size = size;
    }

    getTID1() {
        return this.appt_TID_1;
    }

    setTID1(tid_1) {
        this.appt_TID_1 = tid_1;
    }

    getTID2() {
        return this.appt_TID_2;
    }


    setTID2(tid_2) {
        this.appt_TID_2 = tid_2;

    }

    getGID() {
        return this.appt_GID;
    }

    setGID(gid) {
        this.appt_GID = gid;
    }

    getMicroTrainers() {
        return this.appt_micro_trainers;
    }
}

module.exports = {
    admin_appt: admin_appt
}