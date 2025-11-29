import { EMAIL_REGEXP } from "../utils/reg"

export const StringProperties = ['isEmail', 'isDate']
const keys = Object.keys(String.prototype)
const exist = keys.filter(key => StringProperties.includes(key))

if (exist.length == 0) {
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
}