// Sample data
let projects = [
    { id: 1, name: 'Project Alpha', description: 'This is the first project.', deadline: '2023-11-15', budget: 10000 },
    { id: 2, name: 'Project Beta', description: 'This is the second project.', deadline: '2023-12-15', budget: 20000 }
];

let financials = [
    { projectId: 1, budget: 10000, expenses: 4500 },
    { projectId: 2, budget: 20000, expenses: 8000 }
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
            <p>Deadline: ${project.deadline}</p>
            <p>Budget: $${project.budget}</p>
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


// Function to display financials
function displayFinancials() {
    const financialsSection = document.getElementById('financials');
    financialsSection.innerHTML = '<h2>Financials</h2>';
    const financialsContainer = document.createElement('div');
    financialsContainer.className = 'financials-container';
    financials.forEach(finance => {
        const project = projects.find(p => p.id === finance.projectId);
        const financeElement = document.createElement('div');
        financeElement.className = 'finance-item';
        financeElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>Budget: $${finance.budget}</p>
            <p>Expenses: $${finance.expenses}</p>
        `;
        financialsContainer.appendChild(financeElement);
    });
    financialsSection.appendChild(financialsContainer);
}

// Initial display
displayProjects();
displayTasks();
displayFinancials();

// Modal functionality
const modal = document.getElementById('project-modal');
const createProjectBtn = document.getElementById('create-project-btn');
const closeBtn = document.querySelector('.close-btn');
const createProjectForm = document.getElementById('create-project-form');

createProjectBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

createProjectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const projectName = document.getElementById('project-name').value;
    const projectDescription = document.getElementById('project-description').value;
    const projectDeadline = document.getElementById('project-deadline').value;
    const projectBudget = document.getElementById('project-budget').value;
    const newProject = {
        id: projects.length + 1,
        name: projectName,
        description: projectDescription,
        deadline: projectDeadline,
        budget: projectBudget
    };
    projects.push(newProject);
    financials.push({ projectId: newProject.id, budget: projectBudget, expenses: 0 });
    displayProjects();
    displayFinancials();
    modal.style.display = 'none';
    createProjectForm.reset();
});
