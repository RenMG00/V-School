const form = document["addItem"]

// Submit event

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const addedItem = form.title.value
    form.title.value = "";

    const list = document.getElementById("list")
    const listDiv = document.createElement("div")
    list.appendChild(listDiv)
    const listItem = document.createElement("li")
    listItem.textContent = addedItem
    listDiv.prepend(addedItem)

    const editButton = document.createElement("button")
    editButton.textContent = "Edit"
    editButton.style.margin = "2px"
    listDiv.appendChild(editButton)

    editButton.addEventListener("click", updateAndSave)

    function updateAndSave() {
        
        var listItem = this.parentNode;
        var editInput = listItem.querySelector("input");
        editInput.textContent = updatedItem

        var containsClass = listItem.classList.contains("editMode");
        
        //If class of the parent is .editmode
        if (containsClass) {
            //switch to .editmode
            //label becomes the inputs value.
            updatedItem.textContent = editInput.value;
        } else {
            editInput.value = addedItem.textContent;
        }
        //toggle .editmode on the parent.
        listItem.classList.toggle("editMode");
    }

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.classList.add("delete");
    deleteButton.style.margin = "2px"
    listDiv.append(deleteButton)


    deleteButton.addEventListener("click", deleteAfterClick);

    function deleteAfterClick(e) {
    list.removeChild(e.target.parentElement);
}
})