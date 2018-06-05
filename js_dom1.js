function appendList(array, id) {
    for (let i = 0; i < array.length; i++) {
        const e = document.createElement("li")
        e.innerHTML = array[i];
        document.getElementById(id).appendChild(e);
    }
};

function superAppend(array, element, id) {
    for (let i = 0; i < array.length; i++) {
        const e = document.createElement(element);
        e.interHTML = array[i];
        document.getElementById(id).appendChild(e);
    }
};

const students = ["Jeff", "Jenny", "Javier", "Joslyn", "Joe", "Jane", "Django"];
const targetId = "main";

appendList(students, targetId);
superAppend(students, "h1", "target");