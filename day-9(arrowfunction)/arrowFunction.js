// const square = function (x) {
//     return x * x
// }

// ------------------------------------------------

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));

// --------------------------------------------------------

// const event = {
//     name:'Birthday Party',
//     printGuestList: function() {
//         console.log('Guest list for ' + this.name)
//     }
// }

// event.printGuestList()

// --------------------------------------------------------

// const event = {
//   name: "Birthday Party",
//   printGuestList() {
//     console.log("Guest list for " + this.name);
//   },
// };

// event.printGuestList();

// --------------------------------------------------------

// const event = {
//   name: "Birthday Party",
//   guestList: ["Andrew", "Jen", "Mike"],
//   printGuestList() {
//     console.log("Guest list for " + this.name);
//     this.guestList.forEach(function (guest) {
//       console.log(guest + "is Attending" + this.name);
//     });
//   },
// };

// event.printGuestList();


// -------------------------DAY- 10(ARROW FUNCTION) ------------------- 


const tasks = {
  tasks:[{
    text:'Grocery shopping',
    completed:true
  },
  {
    text:'Clean Yard',
    completed:false
  },
  {
    text:'File Course',
    completed:false
  },
],
getTasksToDo(){
  const tasksToDo = this.tasks.filter((tasks) => {
    return tasks.completed === false
  })

  return tasksToDo
}
}

console.log(tasks.getTasksToDo())