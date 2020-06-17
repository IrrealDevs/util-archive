class checkEmail {
    constructor(email){
        this.email = email;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)){ //That line checks email.
            return true
        }else{
            return false
        }
    }
}

/*I'm using it as class so u can use it easly*/

module.exports = checkEmail
