'use strict';

const items = document.querySelector(".items");
const itemType = document.querySelector(".type__input");
const addBtn = document.querySelector(".footer__plus");

function addItem() {
    if (itemType.value === "") {
        itemType.focus();
        return;
    }

    const item = document.createElement("li");
    item.setAttribute("class", "item");

    const itemName = document.createElement("span");
    itemName.innerHTML = itemType.value;
    itemName.setAttribute("class", "item__name");

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "item__delete");

    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "far fa-trash-alt");

    deleteBtn.addEventListener("click", () => {
        items.removeChild(item);
        items.removeChild(itemDivider);
    });

    const itemDivider = document.createElement("div");
    itemDivider.setAttribute("class", "divider");

    deleteBtn.appendChild(deleteIcon);
    item.appendChild(itemName);
    item.appendChild(deleteBtn);
    items.appendChild(item);
    items.appendChild(itemDivider);

    itemType.value = "";
    itemType.focus();
}

addBtn.addEventListener("click", () => {
    addItem();
})

itemType.addEventListener("keyup", event => {
    if (event.key === "Enter") {
        addItem();
    }
})