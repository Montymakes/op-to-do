import { uid } from 'uid';
class Task {
    #title;
    #description;
    #dueDate;
    #isComplete;
    #priority;
    #uid = uid(16);

    constructor(title, description, dueDate, priority) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }

    //Accessors
    get title() {
        return this.#title;
    }

    get notes() {
        return this.#description;
    }

    get due() {
        return this.#dueDate;
    }

    get complete() {
        return this.#isComplete;
    }

    get priority() {
        return this.#priority;
    }

    get id() {
        return this.#uid;
    }

    get length() {
        return 1;
    }

    //Setters
    set title(str) {
        this.#title = str;
    }

    set notes(str) {
        this.#description = str;
    }

    set due(dayDue) {
        this.#dueDate = dayDue;
    }

    set priority(lvl) {
        this.#priority = lvl;
    }

    set complete(bool) {
        this.#isComplete = bool;
    }

    set id(id) {
        this.#uid = id;
    }

    //Methods 
    toJSON() {
        return {
            title: this.#title,
            notes: this.#description,
            due: this.#dueDate,
            complete: this.#isComplete,
            priority: this.#priority,
            id: this.#uid,
        }
    }

}

class TaskList {
    #title;
    #description;
    #dueDate;
    #isComplete;
    #priority;
    #uid = uid(16);
    #tasks = [];
    #deletable = true;

    constructor(title, description, dueDate, priority) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }

    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                if (index >= this.#tasks.length) {
                    return { done: true };
                }
                return { value: this.tasks[index++], done: false };
            },
        };
    }

    //Accessors
    get title() {
        return this.#title;
    }

    get notes() {
        return this.#description;
    }

    get due() {
        return this.#dueDate;
    }

    get priority() {
        return this.#priority;
    }

    get complete() {
        return this.#isComplete;
    }

    get id() {
        return this.#uid;
    }

    get length() {
        return this.#tasks.length;
    }

    get deletable() {
        return this.#deletable;
    }

    get tasks() {
        return this.#tasks;
    }
    //Setters
    set title(str) {
        this.#title = str;
    }

    set notes(str) {
        this.#description = str;
    }

    set due(dayDue) {
        this.#dueDate = dayDue;
    }

    set priority(lvl) {
        this.#priority = lvl;
    }

    set complete(bool) {
        this.#isComplete = bool;
    }

    set id(id) {
        this.#uid = id;
    }

    set deletable(bool) {
        this.#deletable = bool;
    }

    //Methods
    add(task) {
        this.#tasks.push(task);
    }

    toJSON() {

        return {
            title: this.#title,
            notes: this.#description,
            due: this.#dueDate,
            complete: this.#isComplete,
            priority: this.#priority,
            id: this.#uid,
            deletable: this.#deletable,
            tasks: this.#tasks,
        }
    }
}

class Project {
    #color = 'yellow';
    #head = new TaskList('', '', null, null);
    #deletable = true;
    #uid = uid(16);

    constructor(title) {
        this.title = title;
        this.#head.deletable = false;
    }

    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                if (index >= this.#head.tasks.length) {
                    return { done: true };
                }
                return { value: this.#head.tasks[index++], done: false };
            },
        };
    }

    //Accessors
    get head() {
        return this.#head;
    }

    get color() {
        return this.#color;
    }

    get length() {
        total = 0;
        for (const obj of this.#head) {
            total += size.length;
        }
        return this.#head.length - 1;
    }

    get deletable() {
        return this.#deletable;
    }

    get id() {
        return this.#uid;
    }

    //Setters
    set color(name) {
        this.#color = name;
    }

    set deletable(bool) {
        this.#deletable = bool;
    }

    set id(id) {
        this.#uid = id;
    }

    //Methods
    add(task) {
        this.#head.add(task);
    }

    toJSON() {
        return {
            title: this.title,
            color: this.#color,
            head: this.#head,
            deletable: this.#deletable,
            id: this.#uid,
        }
    }

}

class Agenda {
    #projects = [];
    #defaultProject = new Project('Inbox');

    constructor() {
        this.#defaultProject.deletable = false;
        this.add(this.#defaultProject);
    }

    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                if (index >= this.#projects.tasks.length) {
                    return { done: true };
                }
                return { value: this.#projects.tasks[index++], done: false };
            },
        };
    }

    //Accessors
    get default() {
        return this.#defaultProject;
    }

    get length() {
        return this.#projects.length;
    }

    get projects() {
        return this.#projects;
    }

    //Setters
    set projects(list) {
        this.#projects = list;
    }

    //Methods
    add(project) {
        this.#projects.push(project);
    }

    remove(project) {
        const target = this.find(project);
        if (this.find(target)) {
            if (target.deletable) this.#projects = this.#projects.filter(id => target.id !== id);
            return target;
        }
        return null;
    }

    find(id) {
        const target = this.#projects.find(obj => obj.id === id);
        return target;
    }
}

export { Task, TaskList, Project, Agenda };