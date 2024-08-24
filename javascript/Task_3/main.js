const apiUrl = "https://jsonplaceholder.typicode.com/todos";
const ulList = document.querySelector("#todosList");

function fetchFiveFirstTodoApi(apiUrl) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((todosList) => {
        let fiveFirstTodos = todosList.slice(0, 5);

        fiveFirstTodos = fiveFirstTodos.sort(() => Math.random() - 0.5);

        fiveFirstTodos.slice(0, 5).forEach((todo) => {
            const li = document.createElement("li");

            li.textContent = todo.title;

            ulList.appendChild(li);
          });
          
      return ;
    });
}

fetchFiveFirstTodoApi(apiUrl);