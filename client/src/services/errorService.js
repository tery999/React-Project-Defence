export const registerFormError = (inputs) => {
    console.log(inputs);
    const returnedErrors = {};
    if (!inputs.email.trim()) {
        returnedErrors.email = "Please enter an email"
    } else if ( inputs.email.length < 5) {
        returnedErrors.email = "Email must be atleast 5 characters long"
    }
    if ( !inputs.password.trim() || inputs.password.trim().length < 3) {
        returnedErrors.password = "Password must be atleast 4 characters long"
    }
    if (inputs.password !== inputs.repassword) {
        returnedErrors.repassword = "Passwords not matching!"
    }
    console.log(returnedErrors);
    return returnedErrors;
}