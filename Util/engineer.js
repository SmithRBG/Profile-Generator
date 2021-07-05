class engineer {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return (`Name: ${this.name}`);
    }
    getId() {
        return (`Id: ${this.id}`);
    }
    getEmail() {
        return (`Email: ${this.email}`);
    }
    getRole() {
        return (`Engineer`);
    }
}

module.exports = Engineer;