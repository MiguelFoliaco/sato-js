

/**
 * Function responsible for defining number getters, with validations to check whether or not the getter exists in the prototype.
 * @author SatoJS
 * @param name 
 * @param getter Function that returns the value 
 */
export function defineNumberGetter(name: string, getter: any) {
    const desc = Object.getOwnPropertyDescriptor(Number.prototype, name);

    if (!desc) {
        Object.defineProperty(Number.prototype, name, {
            configurable: true,
            enumerable: true,
            get: getter
        });
    }
}

/**
 * Function responsible for defining string  getters, with validations to check whether or not the getter exists in the prototype.
 * @author SatoJS
 * @param name 
 * @param getter Function that returns the value 
 */
export function defineStringGetter(name: string, getter: any) {
    const desc = Object.getOwnPropertyDescriptor(String.prototype, name);

    if (!desc) {
        Object.defineProperty(String.prototype, name, {
            configurable: true,
            enumerable: true,
            get: getter
        });
    }
}
