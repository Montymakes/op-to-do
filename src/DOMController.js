import { agendaController } from "./agendaController";
import { formatISO } from "date-fns";

export class DOMController {
    agenda = new agendaController();
    display = document.getElementById('content');

    constructor() {}

    createHeader() {
        const header = document.createElement('header');
        const title = document.createElement('h1');
        title.textContent = "My To Do Lists";
        
        const username = document.createElement('p');
        username.id = "user"
        username.textContent = "Monty's Agenda";
        
        header.appendChild(title);
        header.appendChild(username);
        return header;
    }

    createNavbar() {
        const navbar = document.createElement('nav');
        navbar.id = "projects-nav";
        
        const ul = document.createElement('ul');
        ul.id = "projects-list";

        const projectNames = this.agenda.getProjectNames();
        const projectIDs = this.agenda.getProjectIDs();

        for (let index = 0; index < projectNames.length; index++) {
            const li = document.createElement('li');
            li.textContent = projectNames[index];
            li.id = projectIDs[index];
            li.classList.add('projects-nav-item');
            ul.appendChild(li);
        }

        navbar.appendChild(ul);
        return navbar;
    }

    createProjectControls(id) {
        const projectControls = document.createElement('section');
        projectControls.classList.add('project-controls');

        const title = document.createElement('h2');
        title.classList.add('project-title');
        title.textContent = this.agenda.getProjectName(id);
        projectControls.appendChild(title);
        
        projectControls.setAttribute('background-color', this.agenda.getProjectColor());

        return projectControls;
    }

    createTaskCheckBox(checked) {
        const complete = document.createElement('input');
        complete.type = "checkbox";
        complete.value = "complete";
        complete.checked = checked;
        complete.classList.add('task-complete');

        return complete;
    }

    createTaskTitle(txt) {
        const title = document.createElement('input');
        title.type = "text";
        title.name = "title";
        title.value = txt;
        return title;
    }

    createTaskNotes(txt) {
        const notes = document.createElement('input');
        notes.type = "text";
        notes.name = "notes";
        notes.value = txt;
        return notes;
    }

    createTaskDueDate(date) {
        const due = document.createElement('input');
        due.type = 'datetime-local';
        due.name = 'date';
        due.valueAsDate = new Date(date);
        return due;
    }

    createTaskPriority(num) {
        const div = document.createElement('div');
        div.classList.add('priority-control');
        const label = document.createElement('label');
        label.htmlFor = "priority";
        div.appendChild(label);
        const priority = document.createElement('select');
        priority.name = 'priority';
        priority.value = 'Set the priority';
        div.appendChild(priority);

        const low = document.createElement('option');
        low.innerText = "Low";
        low.value = '1'
        const medium = document.createElement('option');
        medium.innerText = 'Medium';
        medium.value = '2';
        const high = document.createElement('option');
        high.innerText = 'High';
        high.value = '3';

        priority.appendChild(low);
        priority.appendChild(medium);
        priority.appendChild(high);

        if (num === 1) low.selected = true;
        if (num === 2) medium.selected = true;
        if (num === 3) high.selected = true;

        return div;
    }

    createTask(task) {
        const taskObj = JSON.parse(task);
        const listItem = document.createElement('li');
        const form = document.createElement('form');
        form.name = taskObj.id;
        listItem.appendChild(form);
        const complete = this.createTaskCheckBox(taskObj.complete);
        const title = this.createTaskTitle(taskObj.title);
        const notes = this.createTaskNotes(taskObj.notes);
        const due = this.createTaskDueDate(taskObj.due);
        const priority = this.createTaskPriority(taskObj.priority);
        form.appendChild(complete);
        form.appendChild(title);
        form.appendChild(notes);
        form.appendChild(due);
        form.appendChild(priority);

        return listItem;
    }

    createTaskList(task, subtasks) {
        const taskList = document.createElement('ul');
        const taskObj = JSON.parse(task);
        const subtasksObj = JSON.parse(subtasks);

        for (const item of subtasksObj) {
            let newTask = 'tasks' in item ? this.createTaskList(JSON.stringify(item), JSON.stringify(item.tasks)) : this.createTask(JSON.stringify(item)); 
            taskList.appendChild(newTask);
        }

        if (taskObj.deletable === false) return taskList;

        const newTaskList = this.createTask(task);
        newTaskList.appendChild(taskList);

        return newTaskList;
    }

    createProjectTaskList(id) {
        const projectTasks = document.createElement('section');
        projectTasks.classList.add('project-tasks');
        const [name, tasks] = JSON.parse(this.agenda.getProjectTaskList(id));
        const defaultList = this.createTaskList(JSON.stringify(name), JSON.stringify(tasks));
        defaultList.classList.add('default-list');
        projectTasks.appendChild(defaultList);

        return projectTasks;
    }

    createProject(id) {
        const view = document.createElement('article');
        view.classList.add("project-view");

        view.appendChild(this.createProjectControls(id));
        view.appendChild(this.createProjectTaskList(id));

        return view;
    }

    displayHome() {
        this.agenda.createDummyContent();
        this.display.appendChild(this.createHeader());
        this.display.appendChild(this.createNavbar());
        const projectID = JSON.parse(this.agenda.getDefaultProject()).id;
        this.display.appendChild(this.createProjectTaskList(projectID));
    }
}
