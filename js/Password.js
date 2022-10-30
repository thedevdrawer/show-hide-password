class Password {
    constructor(passwordDiv) {
        this.passwordDiv = document.querySelector(passwordDiv)
        this.passwordField = this.passwordDiv.querySelector("input")
        this.toggle = this.passwordDiv.querySelector("span")
        this.toggle.addEventListener("click", this.showHide.bind(this, this.passwordField, this.toggle))
    }
    showHide(passwordField, toggle) {
        if(passwordField.type == 'password') {
            passwordField.setAttribute("type", "text")
            toggle.style.backgroundImage = "url('/img/hide.svg')"
        }else{
            passwordField.setAttribute("type", "password")
            toggle.style.backgroundImage = "url('/img/show.svg')"
        }
    }
}