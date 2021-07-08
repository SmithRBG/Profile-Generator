class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
    getGithub() {
        return (`Github: ${this.github}`);
    }
    getRole() {
        return (`Engineer`);
    }
}

module.exports = Engineer;