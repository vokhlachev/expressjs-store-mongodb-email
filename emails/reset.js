const keys = require('../keys')

module.exports = function(email, token) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Reset access',
        html: `
        <h1>Did you forgot your password?</h1>
        <p>If not - ignore this message</p>
        <p>If yes - click this link below:</p>
        <p><a href="${keys.BASE_URL}/auth/password/${token}">Reset access</a></p>
            <hr />
        <a href="${keys.BASE_URL}">Courses store</a>
        `
    }
}

