import { EMAIL_REGEXP } from "../utils/reg"



Object.defineProperties(String.prototype, {
    'isEmail': {
        get() {
            
            return EMAIL_REGEXP.test(this)
        }
    },
    'isDate': {
        get() {
            return !isNaN(Date.parse(this))
        }
    }
})

