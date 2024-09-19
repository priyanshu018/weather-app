const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

// const addNotes = function (title, body) {
//   const notes = loadNotes();
//   notes.push({
//     title: title,
//     body: body,
//   });
//   console.log(notes);
//   saveNotes(notes)
// };

const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

const removeNotes = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title != title;
  });

  // 2 task

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("no not found"));
  }
};

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));

  notes.forEach((note) => {
    console.log(notes.title);
  });
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title)

  if(note){
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  }else{
    console.log(chalk.red.inverse("Note not found"))
  }
}

// const addNotes = function (title, body) {
//   return "Your notes...";
// };

module.exports = { getNotes, addNotes, removeNotes, listNotes,readNotes };
