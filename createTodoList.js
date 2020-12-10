const fs = require('fs')
const moment = require('moment')

const todoList = [
    {
        text: 'Select Book',
        date: moment('10.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
        id: 1,
        done: true
    },
    {
        text: 'PLace Order',
  date: moment('19.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
  id: 2,
  done: true
    },

    {
        text: 'Confirm Address',
  date: moment('21.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
  id: 3,
  done: false
    },
    {
        text: 'Recieve Parcel',
  date: moment('30.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
  id: 4,
  done: true
    }  
  ]

  const json = JSON.stringify(todoList)
  
  fs.writeFileSync('todo.json', json)