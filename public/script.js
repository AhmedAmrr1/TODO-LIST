document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form")
    const taskList = document.getElementById("task-list")
    const errorMessage = document.getElementById("error-message")
  
    // Fetch and render tasks
    fetchTasks()
  
    // Add task event listener
    taskForm.addEventListener("submit", addTask)
  
    function showError(message) {
      errorMessage.textContent = message
      errorMessage.style.display = "block"
      setTimeout(() => {
        errorMessage.style.display = "none"
      }, 5000)
    }
  
    async function fetchTasks() {
      try {
        const response = await fetch("/tasks")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const tasks = await response.json()
        renderTasks(tasks)
      } catch (error) {
        console.error("Error fetching tasks:", error)
        showError("Failed to fetch tasks. Please try again later.")
      }
    }
  
    async function addTask(e) {
      e.preventDefault()
      const title = document.getElementById("task-title").value
      const category = document.getElementById("task-category").value
      const priority = document.getElementById("task-priority").value
  
      try {
        const response = await fetch("/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, category, priority }),
        })
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
  
        const result = await response.json()
        renderTask(result.task)
        taskForm.reset()
      } catch (error) {
        console.error("Error adding task:", error)
        showError("Failed to add task. Please try again.")
      }
    }
  
    async function updateTask(id, updates) {
      try {
        const response = await fetch(`/tasks/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updates),
        })
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
  
        const result = await response.json()
        return result.updatedTask
      } catch (error) {
        console.error("Error updating task:", error)
        showError("Failed to update task. Please try again.")
      }
    }
  
    async function deleteTask(id) {
      try {
        const response = await fetch(`/tasks/${id}`, {
          method: "DELETE",
        })
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
  
        return true
      } catch (error) {
        console.error("Error deleting task:", error)
        showError("Failed to delete task. Please try again.")
        return false
      }
    }
  
    function renderTasks(tasks) {
      taskList.innerHTML = ""
      tasks.forEach(renderTask)
    }
  
    function renderTask(task) {
      const li = document.createElement("li")
      li.className = `task-item ${task.completed ? "completed" : ""}`
      li.innerHTML = `
              <span class="task-title">${task.title}</span>
              <div class="task-actions">
                  <button class="complete-btn">${task.completed ? "Undo" : "Complete"}</button>
                  <button class="delete-btn">Delete</button>
              </div>
          `
  
      const completeBtn = li.querySelector(".complete-btn")
      const deleteBtn = li.querySelector(".delete-btn")
  
      completeBtn.addEventListener("click", async () => {
        const updatedTask = await updateTask(task._id, { completed: !task.completed })
        if (updatedTask) {
          li.className = `task-item ${updatedTask.completed ? "completed" : ""}`
          completeBtn.textContent = updatedTask.completed ? "Undo" : "Complete"
        }
      })
  
      deleteBtn.addEventListener("click", async () => {
        const deleted = await deleteTask(task._id)
        if (deleted) {
          li.remove()
        }
      })
  
      taskList.appendChild(li)
    }
  })
  
  