const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const filterItem = document.querySelector(`.filter`)

function onAddItemsSubmit(e) {
    e.preventDefault();

    // validate value
    const newItem = itemInput.value;
    if (newItem === "") {
        alert(`Enter the value`);
        return;
    }

    itemInput.value = '';
    addItemToDom(newItem);
    addItemToLocalStorage(newItem);
    clearUI();
}


// createbutton with icon appended
function createbutton(classes) {
    const button = document.createElement('button');
    button.setAttribute("class", classes);
    const icon = createIcon("fa-solid fa-xmark")
    button.appendChild(icon)
    return button;
}

// create icon 
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.setAttribute("class", classes);
    return icon;
}

// Add item to DOM
function addItemToDom(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    //append button     
    const button = createbutton("remove-item btn-link text-red");
    li.appendChild(button);

    // append to dom
    itemList.appendChild(li);
}

// Add item to local storage
function addItemToLocalStorage(item) {
    let localStore;
    if (localStorage.getItem("items") == null) {
        localStore = [];
    }
    else {
        // convert json to string
        localStore = JSON.parse(localStorage.getItem("items"))
    }
    localStore.push(item);
    // add into local storage & desserialize
    localStorage.setItem("items", JSON.stringify(localStore))
}

// remove-items
function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        if (confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
    clearUI();
}

// clear all items
function clearAllItem(e) {
    // itemList.innerHTML = " ";
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    clearUI()
}

// Filter the list
function filterlist(e) {
    const items = itemList.querySelectorAll(`li`);
    const text = e.target.value.toLowerCase();


    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        }
        else {
            item.style.display = 'none';
        }
    })
}

// remove clearall filter when items are not avaiable.
function clearUI() {
    const itemli = itemList.querySelectorAll(`li`)
    // check items are present in list
    if (itemli.length === 0) {
        clearBtn.style.display = 'none';
        filterItem.style.display = 'none';
    }
    else {
        clearBtn.style.display = 'block';
        filterItem.style.display = 'block';
    }
}


itemForm.addEventListener('submit', onAddItemsSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearAllItem);
filterItem.addEventListener('input', filterlist);
clearUI();