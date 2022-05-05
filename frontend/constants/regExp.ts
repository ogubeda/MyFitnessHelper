const regUsername: RegExp = new RegExp("^[A-Za-z0-9_]{3,15}$")
const regEmail: RegExp = new RegExp("^[a-z0-9_.]{3,15}@[a-z]{2,15}.[a-z]{2,4}$")
const regPassword: RegExp = new RegExp('^[A-Za-z0-9_.#\/*+-]{8,24}$')

export const testUsername = (value: string) => {
    return regUsername.test(value)
} //end_testUsername

export const testEmail = (value: string) => {
    return regEmail.test(value)
} //end_testEmail

export const testPassword = (value: string) => {
    return regPassword.test(value)
} //end_testPassword
