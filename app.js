// Selecionando os elementos
const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Função para adicionar tarefa
function addTodo() {
  const task = input.value.trim(); // Remove espaços no início e no fim
  if (task === "") {
    alert("Digite uma tarefa!");
    return;
  }

  // Criando os elementos da tarefa
  const li = document.createElement("li");
  li.textContent = task;

  // Botão de deletar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Excluir";
  deleteBtn.classList.add("delete-btn");

  // Adicionando evento ao botão de deletar
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Adicionando o botão e a tarefa à lista
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  // Limpando o campo de input
  input.value = "";
}

// Evento de clique no botão "Adicionar"
addButton.addEventListener("click", addTodo);

// Evento para pressionar Enter
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});