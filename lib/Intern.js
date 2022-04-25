class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getName() {
        console.log(`${this.name}`)
    }

    getId() {
        console.log(`${this.id}`)
    }

    getEmail() {
        console.log(`${this.email}`)
    }

    getGithub() {
        console.log(`${this.github}`)
    }

    getRole() {
        console.log(Intern)
        return Intern;
    }
}

module.exports = Intern;