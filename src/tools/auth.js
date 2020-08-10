import { decorate, action, observable } from "mobx"

export class Auth {
    isAuth = !! window.localStorage.getItem('access-token')

    setToken = token => {
        window.localStorage.getItem('access-token', token)
        this.isAuth = true
    }
    delToken = () => {
        window.localStorage.clear()
        this.isAuth = false
    }
}
decorate(Auth, {
    isAuth: observable,
    setToken: action,
    delToken: action
})