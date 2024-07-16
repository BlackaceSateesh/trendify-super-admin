// validates email
export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/;
    if (!email) return "Email can't be empty.";
    if (!re.test(email)) return "Oops! We need a valid email address.";
    if (email.indexOf(" ") !== -1) return "Email cannot contain spaces.";
    return "";
}

// validates password
export function passwordValidator(password) {
    if (!password) return "Password can't be empty.";
    if (password.length < 6)
        return "Password must be at least 6 characters long.";
    return "";
}