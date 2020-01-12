const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'xuxant02@gmail.com',
        subject: 'Welcome to the Task Manager App',
        text: `Welcome to the app, ${name}. Let me know how you get along with tha app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'xuxant02@gmail.com',
        subject: 'Sorry to see you Go!',
        text: `GoodBye, ${name}. Hope to see you soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}