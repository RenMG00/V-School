

const todoForm = document.todoform
const todoList = document.getElementById("todoList");
const addButton = document.getElementById("addButton");
const deleteButton = document.createElement("button");


const getTodo = () => {

    axios.get("https://api.vschool.io/RenGian/todo")
        .then(res => {
            console.log(res.data)
            printData(res.data)
        })
        .catch(err => console.log(err))
}

const putData = (obj, id) => {
    axios.put("https://api.vschool.io/RenGian/todo/" + id, obj)
        .then(response => {
            console.log("axios put " + id);
            console.log(response.data);
        }).catch(error => console.log(error));
}

const printData = (data) => {
    for (let i = 0; i < data.length; i++) {
        const todoTitle = document.createElement("h2");
        const todoDescription = document.createElement("p");
        const todoPrice = document.createElement("p");
        const todoImg = document.createElement("img");
        const checkBoxText = document.createElement("span");
        const checkBox = document.createElement("input");
        const updateButton = document.createElement("button");
        const deleteButton = document.createElement("button")

        todoTitle.textContent = data[i].title;
        todoDescription.textContent = data[i].description;
        todoPrice.textContent = data[i].price;
        todoImg.textContent = data[i].imgUrl;


        const updateDiv = document.createElement("div");
        const updateTitle = document.createElement("input");
        const updateDescription = document.createElement("input");
        const updatePrice = document.createElement("input");
        const updateImg = document.createElement("input");

        updateTitle.type = "text";
        updateTitle.placeholder = "Title";
        updateTitle.classList.add(data[i]._id);
        updateTitle.name = "titleUpdate";

        updateDescription.type = "text";
        updateDescription.placeholder = "Description";
        updateDescription.classList.add(data[i]._id);
        updateDescription.name = "descriptionUpdate";

        updatePrice.type = "text";
        updatePrice.placeholder = "Price";
        updatePrice.classList.add(data[i]._id);
        updatePrice.name = "priceUpdate";

        updateImg.type = "Img";
        updateImg.placeholder = "Img";
        updateImg.classList.add(data[i]._id);
        updateImg.name = "imgUpdate";


        deleteButton.textContent = "Delete";
        updateButton.textContent = "Update";
        checkBoxText.textContent = "Completed";
        checkBox.type = "checkbox";
        checkBox.id = data[i]._id;

        checkBox.addEventListener("click", e => {    
               
            if (checkBox.checked == true) {
                axios.put("https://api.vschool.io/RenGian/todo/" + data[i]._id, { completed: true })
                    .then(res => {
                        console.log("axios put " + data[i]._id);
                        console.log(res.data);
                        getTodo()
                    }).catch(error => {
                        console.log(error);
                    });
            }
        })

        deleteButton.addEventListener("click", e => {

            e.preventDefault();

            axios.delete("https://api.vschool.io/RenGian/todo/" + data[i]._id)
                .then(res => {
                    console.log(res.data)
                    getTodo();
                })
                .catch(err => console.log(err))
        })

        updateButton.addEventListener("click", e => {

            const updatedItems = document.getElementsByClassName(data[i]._id);
            const editTitle = updateTitle.value;
            const editDescription = updateDescription.value;
            const editPrice = updatePrice.value;
            const editImg = updateImg.value;

            const updateTodo = {
                title: data[i].title, price: data[i].price, description: data[i].description,
                imgUrl: data[i].imgUrl, completed: data[i].completed
            };
            const updateTodoID = data[i]._id;

            if (updateButton.textContent === "Save") {

                updateTodo.title = editTitle;
                updateTodo.description = editDescription;
                updateTodo.price = editPrice
                updateTodo.imgUrl = editImg;
                updateTodo.completed = document.getElementById(data[i]._id).checked;

                putData(updateTodo, updateTodoID);

                updateDiv.remove(updateTitle, updateDescription, updatePrice, updateImg);
                // updateTodo.title = "";
                // updateTodo.description = "";
                // updateTodo.price = "";
                // updateTodo.imgUrl = "";
            }


            if (updateButton.textContent === "Update") {
                updateButton.textContent = "Save";

                editTitle = data[i].title;
                editDescription = data[i].description;
                editPrice = data[i].price;
                editImg = data[i].imgUrl;
                document.getElementById(data[i]._id).checked = data[i].completed;
            }
        })
        updateDiv.append(updateTitle, updateDescription, updatePrice, updateImg);
        todoList.append(todoTitle, todoDescription, todoPrice, todoImg, checkBox, checkBoxText, updateButton, deleteButton);
        todoList.appendChild(updateDiv)
    }
}
todoForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }


    axios.post("https://api.vschool.io/RenGian/todo", newTodo)
        .then(res => {
            console.log(res.data)
            getTodo();
        })
        .catch(err => console.log(err))

    todoForm.title.value = "";
    todoForm.price.value = "";
    todoForm.description.value = "";
    todoForm.imgUrl.value = "";
})


getTodo();

