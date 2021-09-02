/// <reference types ="cypress"/>

import loginPage from "../pageobjects/loginPage"

const login = new loginPage

class loginDeUsuarios {

    userthiagoT() {
        const nameUser = "thiagoT"
        const password = "Tc12345"

        login.preencherDadosDeLogin(nameUser, password)
        login.signIn()
        login.validaUserLogado(nameUser)
    }
}

export default loginDeUsuarios