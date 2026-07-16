// get
async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    console.log(users);
}

getUsers();

async function createUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "John",
                age: 25
            })
        }
    );

    const data = await response.json();

    console.log(data);
}

createUser();