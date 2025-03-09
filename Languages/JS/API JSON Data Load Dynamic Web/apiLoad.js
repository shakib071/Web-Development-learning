const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        showUser(data);
    })
}

const showUser = (users) => {
    // console.log(users);

    const userContainer = document.getElementById("users");
    for(let i=0;i<users.length; i++){
        const li = document.createElement('li');
        li.innerText = users[i].name;

        userContainer.appendChild(li);
    }
}