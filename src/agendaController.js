import * as agenda from "./agenda";

export class agendaController {
    myAgenda = new agenda.Agenda();

    constructor() {}

    addProject(title) {
        const project = new agenda.Project(title);
        this.myAgenda.add(project);
        return project;
    }

    addTaskToProject(project, task) {
        const taskObj = JSON.parse(task);
        const target = this.myAgenda.find(JSON.parse(project).id);
        const item = new agenda.Task(taskObj.title, taskObj.notes, taskObj.due, taskObj.priority);
        target.add(item);
        return task;
    };

    getProjectNames() {
        const projectList = this.myAgenda.projects;
        const projectNames = [];
        for (const proj of projectList) {
            projectNames.push(proj.title);
        }
        return projectNames;
    }

    getDefaultProject() {
        return JSON.stringify(this.myAgenda.default);
    }

    getProjectIDs() {
        const projectList = this.myAgenda.projects;
        const projectIDs = [];
        for (const proj of projectList) {
            projectIDs.push(proj.id);
        }
        return projectIDs;
    }

    getProjectName(id) {
        return this.myAgenda.find(id).title;
    }

    getProjectColor(id) {
        return this.myAgenda.find(id).color;
    }
    
    getProjectTaskList(id) {
        const tasks = this.myAgenda.find(id).head.tasks;
        const list = this.myAgenda.find(id).head;
        return JSON.stringify([list, tasks]);
    }

    createDummyContent() {
        const inboxTask = new agenda.Task('Take an improv class','To be more like my aunt.', new Date(2026,11,12,2,3), 1);
        const inboxTask2 = new agenda.Task('Make a family photo album', 'For me, Alicia, Chiyo, and Yuca.', new Date(2015,7,9,1,45), 2);
        const inboxTask3 = new agenda.Task('Create a new technology', 'To get rich obviously', new Date(2033,12,31,10,34), 3);
        this.addTaskToProject(this.getDefaultProject(), JSON.stringify(inboxTask));
        this.addTaskToProject(this.getDefaultProject(), JSON.stringify(inboxTask2));
        this.addTaskToProject(this.getDefaultProject(), JSON.stringify(inboxTask3));

        const choresTaskList = new agenda.TaskList('Deep clean the bathroom', '', new Date(2030,10,12,3,4), 2);
        const step1 = new agenda.Task('Bleach the bathtub', '', null, 2);
        const step2 = new agenda.Task('Bleach the toliet', '', null, 2);
        const step3 = new agenda.Task('Clean the sink', '', null, 2);
        const step4 = new agenda.Task('Sweep and mop the floor', null, 2);
        choresTaskList.add(step1);
        choresTaskList.add(step2);
        choresTaskList.add(step3);
        choresTaskList.add(step4);

        const fixTheFridge = new agenda.Task('Fix the fridge', '',  new Date(2030,10,12,13,4), 1);

        const chores = this.addProject("Chores");
        this.addTaskToProject(JSON.stringify(chores), JSON.stringify(fixTheFridge));
        this.addTaskToProject(JSON.stringify(chores), JSON.stringify(choresTaskList));
    };
}