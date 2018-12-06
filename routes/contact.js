// published modules
const router = require('express').Router()

// create transporter object used to send emails
const transporter = require('nodemailer').createTransport({
 service: 'gmail',
 auth: {
        user: 'guccipancakes1234@gmail.com',
        pass: 'account password'
    }
})

// render contact view
router.get('/', (req, res) => {
  res.render('contact.ejs', {isLoggedIn: req.user})
})

// use nodemailer to send the email
router.post('/sendEmail', (req, res) => {
  console.log('dookie',format(req.body))
  // transporter.sendMail(data[, callback])
  transporter.sendMail(format(req.body), (err, m) => {
    if (err) return console.log(err)
    console.log(m)
  })
  res.send('Email been sent muh')
})

// format the email
function format(info) {
  message = 'name: ' + info.name + '<br>' +
          '\nemail: ' + info.email + '<br>' +
          '\nmessage: ' + info.message
  mailOptions = {
    from: 'guccipancakes1234@gmail.com',
    to: 'guccipancakes1234@gmail.com',
    subject: 'Email From Smush Contact Page',
    html: message
  }
  return mailOptions
}
module.exports = {
  router: router
}
