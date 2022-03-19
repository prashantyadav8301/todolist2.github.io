let add = document.getElementById("add");
let todocontainer = document.getElementById("todocontainer");
let input = document.getElementById("input");

add.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = input.value;
    todocontainer.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
        // paragraph.addEventListener('click', function () {
        //     paragraph.style.textDecoration = "none";
        // });
        paragraph.addEventListener('click', function () {
            todocontainer.removeChild(paragraph);
        });

    });
});