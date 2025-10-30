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
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectsSection.appendChild(projectElement);
    });
}

// Function to display tasks
function displayTasks() {
    const tasksSection = document.getElementById('tasks');
    tasksSection.innerHTML = '<h2>Tasks</h2>';
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.innerHTML = `
            <h3>${task.name}</h3>
            <p>Status: ${task.status}</p>
        `;
        tasksSection.appendChild(taskElement);
    });
}

// Initial display
displayProjects();
displayTasks();
