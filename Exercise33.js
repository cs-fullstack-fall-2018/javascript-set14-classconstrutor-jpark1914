class ToDo{
    constructor(name, dueDate, list){
        this.name = name;
        this.dueDate = dueDate;
        this.list = list;

    }

    printToDo(){
        alert(this.name+ " " + this.dueDate + " " +  this.list)
    }
    printToDoList(){
        alert(this.list)
    }

}

function main(){
    newToDoList =new ToDo("Kenn", "Next Week", ["Do the dishes", "Wash your clothes"]);

    newToDoList.printToDoList();

}

main();