/** 
 * Micro trainer for drop down for assigning appointments to a trainer
 */
class micro_trainer {
    constructor(tr_ID, tr_name) {
        this.tr_ID = tr_ID;
        this.tr_name = tr_name;
    }

    // Getters
    getID() {
        return this.tr_ID;
    }

    getName() {
        return this.tr_name;
    }
}

module.exports = {
    micro_trainer: micro_trainer
}