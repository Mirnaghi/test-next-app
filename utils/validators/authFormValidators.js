export function mailValidator(mail) {
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(mail.match(mailFormat)) {
        return true
    }

    return false
}

export function confirmPassword(password, confirmPassword) {
    return password === confirmPassword
}