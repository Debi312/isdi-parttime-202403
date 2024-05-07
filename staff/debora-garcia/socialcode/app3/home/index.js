if (!logic.isUserLoggedIn())// si no ha hecho login no te deje acceder al juego
    location.href = "../login"

const view = new Component(document.body)
view.addClass("View")

const header = new Component("header")
header.addClass("Header")

const userName = logic.getUserName()

const userNameTitle = new Heading(3)
userNameTitle.setText(userName)

header.add(userNameTitle)

//añadimos todo al header
view.add(header)


const logoutButton = new Button
logoutButton.setText("Logout")
logoutButton.addClass("logoutButton")

logoutButton.onClick(() => {
    logic.logoutUser()

    location.href = "../login"
})

header.add(logoutButton)

const main = new Component("main")
view.add(main)

const postList = new Component("section")
main.add(postList)


const posts =logic.getPosts()

posts.forEach(post => {
    const newPost = new Post(post)
    postList.add(newPost)

}) 


const footer = new Component("footer")
footer.addClass("Footer")

const addPostButton = new Button
addPostButton.setText("+")
addPostButton.addClass("PostButton")



footer.add(addPostButton)
view.add(footer)



