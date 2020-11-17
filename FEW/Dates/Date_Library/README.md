# Date Library
![GitHub release (latest by date)](https://img.shields.io/github/v/release/Prones94/Winter)

NPM link:https://www.npmjs.com/package/iro494

## What is it?
A library to more easily access Date functions, such as:
    - Return date, month, year, hour, minutes and seconds
    - Print dates in the given format
        Elaborated Year, Month, Day, Hour, Minute, Second
        - 'Y' -> Full year (i.e. 2020)
        - 'M' -> Full month (i.e. August)
        - 'D' -> Full day (i.e. 01, 02,03, etc...)
        - 'H' -> Full hour (i.e. 09, 10, 11, 12, 01, etc...)
        - 'I' -> Full minute (i.e. 10,11,12,13, etc....)
        - 'S' -> Full second (i.e. 40, 41, 42, 43, 44)

        Shortened year, month, day, hour, minute, second
        - 'y' -> Prefix year (i.e. 20)
        - 'm' -> Prefix month (i.e. Jan, Feb)
        - 'd' -> Prefix day (i.e. 1,2,3,4,5)
        - 'h' -> Prefix hour (i.e. 10,11,12,1)
        - 'i' -> Prefix minutes (i.e. 8,9,10,11)
        - 's' -> Prefix seconds (i.e. 4,5,6,7,8)

        ```javascript
        // Making a date => (year, month, day, hour, minute, second)
        const date = new Date(2019, 2, 10, 9,25,59)
        console.log(date.format())           // 2019 March 10
        console.log(date.format('y/m/d'))    // 19/Mar/10
        console.log(date.format('h:i:s'))    // 9:25:59
        ```

    - Time Difference

        ```javascript
        const date = new Date()
        console.log(date.when())
        ```


