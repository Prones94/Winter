const full_months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Helper function to check if hour/second/minute is either over or under 10
const check = num => {
    num < 10 ? `0${num}` : `${num}`
}

class Date {
    constructor(...args) {
        this.date = new Date(...args)
        this.dVars = {
            'Y': this.year,
            'y': this.year % 100,
            'M': full_months[this.month],
            'm': months[this.months],
            'D': check(this.day),
            'd': this.day,
            'H': check(this.hour),
            'h': this.hour,
            'I': check(this.minute),
            'i': this.minute,
            'S': check(this.second),
            's': this.second
        }
    }

    /*
        ***************************** NOTE! ********************************
        Using the JS Getter get syntax to bind object property to a function    that will be called when that property is looked up

        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#:~:text=The%20get%20syntax%20binds%20an,that%20property%20is%20looked%20up.
    */

    // Year
    get year() { return this.date.getFullYear() }
    // Month
    get month() { return this.date.getMonth() }
    // Day
    get day() { return this.date.getDate() }
    // Hour
    get hour() { return this.date.getHours() }
    // Minute
    get minute() { return this.date.getMinutes() }
    //Second
    get second() { return this.date.getSeconds() }

    format(isString=''){
        if (!isString === '') {
            return `${this.year} ${full_months[this.month]} ${this.day}`
        } else {
            let i, string_length = isString.length;
            let time = "";
            for(i=0; i < string_length;i++){
                if(isString[i] in this.dVars){
                    time += this.dVars[isString[i]]
                } else {
                    time += isString[i]
                }
            }
            return time
        }
    }



}