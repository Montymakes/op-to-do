import * as agenda from "./agenda";

export class User {
    agenda = new agenda.Agenda();
    constructor(name) {
        this.name = name;
    }
}

