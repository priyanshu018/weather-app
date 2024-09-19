// -------------------------DAY - 1 ------------------- 
// part1

// const name = "Andrew"
// console.log(name)


// part 2

// const name = require("./utils.js");
// console.log(name)

// part 3

// const add = require("./utils.js");
// const sum = add(4,-2);
// console.log(sum)

// part 4


// const getNotes = require('./notes.js')

// const msg = getNotes()

// console.log(msg)

// -------------------------DAY - 2 ------------------- 

// part 1 

// const validator = require("validator");

// console.log(validator.isEmail("andrew@gamil.com"))
// console.log(validator.isURL('https://google.com'))


// -------------------------DAY - 3 ------------------- 

// import chalk from "chalk";
// console.log(chalk.blue('Hello world!'));


// -------------------------DAY - 4 ------------------- 

// -------------------------DAY - 5  ------------------- 

// console.log(process.argv)

// -------------------------DAY - 6 ------------------- 

// yargs.version('1.1.0')

// Create add Command
// yargs.command({
//     command:'add',
//     describe:'Add a new note',
//     handler:function(){
//         console.log('Adding a new note:')
//     }
// })

// Create remove Command
// yargs.command({
//     command:'remove',
//     describe:'remove a  note',
//     handler:function(){
//         console.log('Removing the note:')
//     }
// })


// Create list Command
// yargs.command({
//     command:'list',
//     describe:'list your   note',
//     handler:function(){
//         notes.listNodes()
//     }
// })

// Create read Command
// yargs.command({
//     command:'read',
//     describe:'read a note',
//     handler:function(){
//         console.log('Reading a notes:')
//     }
// })

// Add title in it 
// yargs.command({
//     command:'add',
//     describe:'add a new note',
//     builder:{
//         title:{
//             describe:"Note title",
//             demandOption:true,
//             type:"string"
//         }
//     },
//     handler:function(){
//         console.log('Title:')
//     }
// })


// yargs.command({
//     command:'add',
//     describe:'add a new note',
//     builder:{
//         title:{
//             describe:"Note title",
//             demandOption:true,
//             type:"string"
//         }
//     },
//     handler:function(argv){
//         console.log('Title:',argv.title)
//     }
// })


// console.log(yargs.ardv)



// -------------------------DAY - 7 ------------------- 

// worked on JSON

// -------------------------DAY - 8 ------------------- 

// const notes = require('./day-8(notes-app)/notes');
// const yargs = require('yargs')
// // create a command 

// yargs.command({
//     command:'add',
//     describe:'add a new note',
//     builder:{
//         title:{
//             describe:"Note title",
//             demandOption:true,
//             type:"string"
//         },
//         body:{
//             describe:"Note Body",
//             demandOption:true,
//             type:"string"
//         }
//     },
//     handler:function(argv){
//         notes.addNotes(argv.title,argv.body);
//     }
// })


// -------------------------DAY - 9 ------------------- 

// const notes = require('./day-8(notes-app)/notes');
// const yargs = require('yargs')
// // create a command 

// yargs.command({
//     command:'remove',
//     describe:'Remove a note',
//     builder:{
//         title:{
//             describe:"Note title",
//             demandOption:true,
//             type:"string"
//         }
//     },
//     handler:function(argv){
//        notes.removeNotes(argv.title)
//     }
// })

// create read command

// yargs.command({
//     command:'read',
//     describe:'Read a note',
//     builder:{
//         title:{
//             describe:"Note title",
//             demandOption:true,
//             type:"string"
//         }
//     },
//     handler:function(argv){
//       notes.readNote(argv.title)
//     }
// })

// -------------------------DAY- 9(ARROW FUNCTION) ------------------- 

// arrowFunction.js file
//  day-10 in same file 


