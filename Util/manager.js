class manager {
    constructor(name, id, email, office) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
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
    getOffice() {
        return (`Office: ${this.office}`);
    }
    getRole() {
        return (`Manager`);
    }
}

module.exports = manager;