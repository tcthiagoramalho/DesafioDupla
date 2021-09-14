/// <reference types ="cypress"/>

import loginPage from "../pageobjects/loginPage"

const user = require('../../fixtures/users.json')
const login = new loginPage

class loginDeUsuarios {

    userthiagoT() {
        const password = user.thiago.senha
        const nameUser = user.thiago.nameUser

        login.preencherDadosDeLogin(nameUser, password)
        login.signIn()
        login.validaUserLogado(nameUser)
    }

    userTcAlteraSenha() {
        const nameUser = user.alteraSenha.nameUser
        const password = user.alteraSenha.senhaAtual

        login.preencherDadosDeLogin(nameUser, password)
        login.signIn()
        login.validaUserLogado(nameUser)
    }
}

export default loginDeUsuarios