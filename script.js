// Selecting elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create task item
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <div class="task-buttons">
      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  // Add task item to the list
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = "";

  // Add event listeners to buttons
  const completeButton = taskItem.querySelector(".complete-btn");
  const deleteButton = taskItem.querySelector(".delete-btn");

  completeButton.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  deleteButton.addEventListener("click", () => {
    taskItem.remove();
  });
}

// Event listener for add task button
addTaskButton.addEventListener("click", addTask);

// Add task by pressing "Enter"
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
