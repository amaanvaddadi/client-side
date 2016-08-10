'use strict';

const xhr = require('xhr')
const greeting = require('./views/greeting.hbs')
const endpoint = 'https://api.wheretheiss.at/v1/satellites';
import { satnav } from './babel'

satnav()

// babel()

xhr.get(endpoint, (err, data) => {
  if (err) {
    console.error(err)
  }
  const satData = JSON.parse(data.body);
    console.log(satData)

  const target = document.querySelector('#nameData')
    target.innerHTML = greeting({name: satData[0].name})

  // const clickButton = document.querySelector('#add');
  // clickButton.addEventListener('click', (display) => {
  //     const divTarget = document.querySelector('#clickData')
  //     divTarget.innerHTML = greeting({name: satData[0].name, id: satData[0].id})
  //
  //   })

})
