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

export const addProductValidation = (inputs) => {
    console.log(inputs);
    const returnedErrors = {};
    if (!inputs.name.trim()) {
        returnedErrors.name = "Name cannot be blank"
    }
    if ( !inputs.category.trim()) {
        returnedErrors.category = "Please add a category"
    }
    if (!inputs.price.trim()) {
        returnedErrors.price = "Please add a price"
    }

    if (!inputs.condition.trim()) {
        returnedErrors.condition = "Select item condition"
    }
    console.log(returnedErrors);
    return returnedErrors;
}