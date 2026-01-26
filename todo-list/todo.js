let todo = [];
let req = prompt("please enter the request");

while (true) {

    if (req === "quit") {
        console.log("quitting the app");
        break;
    }

    if (req === "list") {
        console.log("----------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------");

    } else if (req === "add") {
        let task = prompt("please enter the task");
        todo.push(task);
        console.log("task added");

    } else if (req === "delete") {
        let index = parseInt(prompt("please enter the index of the task to delete"));
        todo.splice(index, 1);
        console.log("task deleted");

    } else {
        console.log("invalid request");
    }

    req = prompt("please enter the request");
}


