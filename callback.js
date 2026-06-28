function greet(name,callback){

    console.log("Hello",name);

    callback();
}

function bye(){
    console.log("Good Bye");
}

greet("Anshika",bye);