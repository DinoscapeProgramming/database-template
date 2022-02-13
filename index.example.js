const database = require('./database-template');
const settings = {
  file: './database.json.example'
}

database.add(settings.file, "Hello")
// adds an element called "Hello"

database.remove(settings.file, "World")
// removes an element called "World"

console.log(database.get(settings.file, 0))
// gets the element with position 1

console.log(database.all(settings.file))
// gets the whole database
