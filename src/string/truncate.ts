
export const StringProperties = ['truncate']
const keys = Object.keys(String.prototype)
const exist = keys.filter(key => StringProperties.includes(key))

if (exist.length == 0) {

    Object.defineProperties(String.prototype, {
        'truncate': {
            value: function (length: number, end: string = '...') {
                let text = (this as string);
                return text = text.length > length ? text.substring(0, length) + end : text
            }
        },
    })
}