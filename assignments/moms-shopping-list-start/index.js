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

    const label = document.createElement("label");
    const editButton = document.createElement("button")
    editButton.textContent = "Edit"
    editButton.style.margin = "2px"
    listDiv.appendChild(editButton)

    editButton.addEventListener("click", updateAndSave)

    function updateAndSave() {
        
        var list = this.parentNode;
        var updatedInput = document.querySelector("input");
        const updatedItem = updatedInput.value
        updatedInput.textContent = updatedItem
        var label = list.querySelector("label");
        var containsClass = list.classList.contains("editMode");
        //If class of the parent is .editmode
        if (containsClass) {
            //switch to .editmode
            //label becomes the inputs value.
            label.textContent = updatedInput.value;
        } else {
            updatedInput.value = label.textContent;
        }
        //toggle .editmode on the parent.
        list.classList.toggle("editMode");
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