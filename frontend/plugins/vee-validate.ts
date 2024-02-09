import {defineRule} from "vee-validate"


function isValidEmail(value: string) {
    return value && /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(value);
}

export default defineNuxtPlugin((nuxtApp) => {
    defineRule("required_email", (value: string) => {
        if(!value) {
            return "Required *"
        }
        if (isNaN(value)) {
            return "Invalid"
        }
        return true
    })
    defineRule("required", (value: any) => {
        if (validators.isEmptyString(value)) {
            return "Required"
        }
        return true
    })
    defineRule("email", (value: any) => {
        if (validators.isEmptyString(value)) {
            return true
        }
        if (!isValidEmail(value)) {
            return "invalid email address"
        }
        return true
    })
})