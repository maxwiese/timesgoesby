# timesgoesby
libary for better times in javascript

## Usage
clone or download this repository

move it in your projekt directory

add file in your .html file

```
<script src="./timesgoesby.js"></script>
```
now you can use it in your javascript code

## Exampels
```
let time = new Time(/*optional timezone: +2*/);

//now
console.log(time.now());

//use another seperator
console.log(time.now("/"))

//you can also use no seperator
console.log(time.now(""))

// use raw dates (without filling zeros)
console.log(":", true)

```

## Available functions
* ` .now(/*optional: seperator(string), isRaw(boolean)*/) `
* ` .format(['h', 'm', 's'], /*optional: seperator(string)*/) `
* ` .toTimeString(/*optional: Hour(int), Minute(int), Second(int))*/) `

## Available variables
* ` hours, minutes, seconds` (returns int)
* ` rawHours, rawMinutes, rawSeconds` (returns int, without filling zeros)
* ` sHours, sMinutes, sSeconds` (returns String)
* ` sRawHours, sRawMinutes, sRawSeconds` (returns String, without filling zeros)
