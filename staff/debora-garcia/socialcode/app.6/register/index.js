if (logic.isUserLoggedIn()) // Llamamos a esta funcion para comprobar si esta logeado no deje ir a la pagina de registro, de esta manera desde home no se puede acceder a la pgina de registro
    location.href = "../home"

const view = new Component(document.body)

view.addClass("View")

const title = new Heading(1)
title.setText("New account!")



const registerForm = new RegisterForm
registerForm.onRegisterSubmit((email, username, password, passwordRepeat) => {
//de esta manera le pasamos todos los parametros que recibimos de la funcion onRegisterSubmit
    try {
        logic.registerUser(email, username, password, passwordRepeat)
       
        registerForm.clear()

        registerForm.setFeedback("Registration successful!", "success")

        setTimeout(() => location.href = "../login", 3000)
    } catch (error) {
        if (error instanceof ContentError)
            registerForm.setFeedback(error.message + " please, correct it")
        else if (error instanceof MatchError)
            registerForm.setFeedback(error.message + " please, retype them")
        else if (error instanceof DuplicityError)
            registerForm.setFeedback(error.message + " please, enter a new one ")
        else
            registerForm.setFeedback("sorry, there was an error, please try later")
    }
})

const loginLink = new Link
loginLink.setText("Login")

loginLink.onClick(event => {
    event.preventDefault()
    setTimeout(() => location.href = "../login", 1000)
})


view.add(title)
view.add(registerForm)
view.add(loginLink)
