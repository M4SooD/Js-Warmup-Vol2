'use strict';
/* You are given an array of objects that represent events with a
performer and an event title that looks like this:
const events = [
 {
 performer: ‘Joe kelly',
 title: ‘Nirvana of 21'
 },
 {
 performer: ‘Misa Ro',
 tile: ‘Days Go By'
 }
]
Your job is to write two functions that takes the array
and returns an array of performers and titles:
getThePreformers(events) // [‘Joe kelly','Misa Ro']
getTheTitles(events) // ['Nirvana of 21','Days Go By']
Hints: You can use built-in Javascript to do the work!
*/
const events = [
    {
        performer: 'Joe kelly',
        title: 'Nirvana'
    },
    {
        performer: 'Misa Ro',
        title: 'Days'
    }
]

function getFields(input, field) {
    const output = [];
    for (let i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

const result =  getFields(events, 'performer')  
console.log(result)

module.exports = {getFields, events} ;

