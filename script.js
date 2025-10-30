// Sample data
let projects = [
    { id: 1, name: 'Project Alpha', description: 'This is the first project.' },
    { id: 2, name: 'Project Beta', description: 'This is the second project.' }
];

let tasks = [
    { id: 1, projectId: 1, name: 'Task 1 for Alpha', status: 'In Progress' },
    { id: 2, projectId: 1, name: 'Task 2 for Alpha', status: 'Completed' },
    { id: 3, projectId: 2, name: 'Task 1 for Beta', status: 'Not Started' }
];

// Function to display projects
function displayProjects() {
    const projectsSection = document.getElementById('projects');
    projectsSection.innerHTML = '<h2>Projects</h2>';
    const projectsContainer = document.createElement('div');
    projectsContainer.className = 'projects-container';
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectElement);
    });
    projectsSection.appendChild(projectsContainer);
}

// Function to display tasks
function displayTasks() {
    const tasksSection = document.getElementById('tasks');
    tasksSection.innerHTML = '<h2>Tasks</h2>';
    const tasksContainer = document.createElement('div');
    tasksContainer.className = 'tasks-container';
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <h3>${task.name}</h3>
            <p>Status: ${task.status}</p>
        `;
        tasksContainer.appendChild(taskElement);
    });
    tasksSection.appendChild(tasksContainer);
}

// Initial display
displayProjects();
displayTasks();
