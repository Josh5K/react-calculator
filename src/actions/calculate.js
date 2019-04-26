import Big from "big.js";

class Calculate {

    /**
     * Takes the current value and the next value
     * and performs the passed operation.
     */
    checkOperator = (numberOne, numberTwo, operation) => {
        const one = Big(numberOne || "0");
        const two = Big(numberTwo || "0");
        let total = null;

        if (operation === "+") {
            total = one.plus(two).toString();
        }
        if (operation === "-") {
            total = one.minus(two).toString();
        }
        if (operation === "x") {
            total = one.times(two).toString();
        }
        if (operation === "÷") {
            if (two === "0") {
                total =  two;
            } else {
                total = one.div(two).toString();
            }
        }
        if(total === null) throw Error(`Unknown operation '${operation}'`);
        return total;
    }

    /**
     * Creates a default state object to clear
     * the calculator component.
    */
    clear = () => {
        return {
            total: null,
            next: null,
            operation: null,
        };
    }

    /**
     * Filters the buttonName to prevent incorrect
     * values from attempting to be calculated.
     */
    filterKeys = (buttonName) => {
        let temp = buttonName;
        let operators = ["x", "+", "-", "/", "=", "%", "AC", "+/-"]

        if(temp === "Enter") {
            temp = "=";
        }
        else if(operators.indexOf(temp) === -1 && isNaN(temp)) {
            temp = null;
        }
        return temp;
    }
    /**
     * Performs a number of checks to determine the
     * new State.
     */
    getNewState = (obj, buttonName) => {

        let newState = null;
        buttonName = this.filterKeys(buttonName);

        //Failed the filtering proccess.
        if(buttonName === null) {
            newState = {}
        }
        else if (buttonName === "AC") {
            newState = this.clear();
        }
        else if (this.isNumber(buttonName)) {
            if (buttonName === "0" && obj.next === "0") {
                newState = {};
            }
            else if (obj.operation) {
                if (obj.next) {
                    newState = { next: obj.next + buttonName };
                }
                else {
                    newState = { next: buttonName };
                }
            }
            else if (obj.next) {
                newState = {
                    next: obj.next + buttonName,
                    total: null,
                };
            }
            else {
                newState = {
                    next: buttonName,
                    total: null,
                };
            }
        }
        else if (buttonName === "%") {
            if (obj.operation && obj.next) {
                const result = this.checkOperator(obj.total, obj.next, obj.operation);
                newState = {
                    total: Big(result)
                    .div(Big("100"))
                    .toString(),
                    next: null,
                    operation: null,
                };
            }
            else if (obj.next) {
                newState = {
                    next: Big(obj.next)
                    .div(Big("100"))
                    .toString(),
                };
            }
            else {
                newState = {};
            }
        }
        else if (buttonName === ".") {
            if (obj.next) {
                // Ignores multiple decimal inputs
                if (obj.next.includes(".")) {
                    newState = {};
                }
                else {
                    newState = { next: obj.next + "." };
                }
            }
            else {
                newState = { next: "0." };
            }
        }
        else if (buttonName === "=") {
            if (obj.next && obj.operation) {
                newState = {
                    total: this.checkOperator(obj.total, obj.next, obj.operation),
                    next: null,
                    operation: null,
                };
            } else {
                newState = {};
            }
        }
        else if (buttonName === "+/-") {
            if (obj.next) {
                newState = { next: (-1 * parseFloat(obj.next)).toString() };
            }
            else if (obj.total) {
                newState = { total: (-1 * parseFloat(obj.total)).toString() };
            }
            else {
                newState = {};
            }
        }
        //Replaces operation if there is no Next.
        else if(obj.operation && !obj.next) {
            newState = {
                operation: buttonName,
            };
        }
        // User pressed an operation button and there is an existing operation and next.
        else if (obj.operation) {
            newState = {
                total: this.checkOperator(obj.total, obj.next, obj.operation),
                next: null,
                operation: buttonName,
            };
        }
        else {
            // No previous total value. Save operation and save next as total.
            newState = {
                total: obj.next,
                next: null,
                operation: buttonName,
            };
        }
        return newState;
    }

    /**
     * Checks if the argument is a number.
     */
    isNumber = (number) => {
        return /[0-9]+/.test(number);
    }
}

export default new Calculate();
