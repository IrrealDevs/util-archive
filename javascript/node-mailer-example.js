const nodemailer = require("node-mailer")
const config = require("../config.json")

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "Imtestemail@gmail.com",
      pass: "ImPasSw@Rd123"
    }
})

/*I'm using it as class for running this code on admin panel etc.*/

class mail extends transporter{
    constructor(email, title, content){
        this.title = title
        this.email = email
        this.content = content
     return  transporter.sendMail({
            to:this.email,
            subject: this.title,
            content: this.content
        })
    }
}

module.exports = mail
