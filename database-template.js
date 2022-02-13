const fs = require('fs');

function hasElement(file, name) {
  return eval(fs.readFileSync(file, 'utf8')).includes(name)
}

function addElement(file, name) {
  if (!name) throw new Error("NO ELEMENT GIVEN");
  if (hasElement(file, name)) throw new Error("ELEMENT ALREADY EXISTS");
  let data = fs.readFileSync(file, 'utf8');
  data = eval(data)
  data.push(name)
  fs.writeFileSync(file, JSON.stringify(data), 'utf8')
}

function removeElement(file, name) {
  if (!name) throw new Error("NO ELEMENT GIVEN");
  let data = fs.readFileSync(file, 'utf8');
  data = eval(data)
  data = data.filter(item => item != name)
  fs.writeFileSync(file, JSON.stringify(data), 'utf8')
}

function getElement(file, id) {
  return eval(fs.readFileSync(file, 'utf8'))[id]
}

function getDatabase(file) {
  return eval(fs.readFileSync(file, 'utf8'))
}

module.exports = { addElement, removeElement, getElement, getDatabase, hasElement }
