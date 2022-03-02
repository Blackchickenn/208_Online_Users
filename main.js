async function getUsers(){
    let response = await fetch ("users.json")
    let users = await response.json()
    return users
} 

function getUserDiv(user){
    return `
    
    <div class="my-online-user">
        <div class="user-name">${user.username}</div>
        <div class="user-online"></div>
    </div>
    
    
    `
}

getUsers().then(users => {
    let sampleUser = users[0]
    let userDiv = getUserDiv(sampleUser)

    document.body.innerHTML = `
    <main>
    <header>Header</header>
    <div class="first-page">
        <div class="my-online-users">
        ${users.map(user => getUserDiv(user)).join("")}
        </div>
        <div class="main-content">Main Content</div>
    </div>
    <footer>Footer</footer>
    </main>
    `
    
})