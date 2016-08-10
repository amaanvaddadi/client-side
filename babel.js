'use strict';

const xhr = require('xhr')
const greeting = require('./views/greeting.hbs')
const endpoint = 'https://api.wheretheiss.at/v1/satellites/25544';

export const satnav = () => {
xhr.get(endpoint, (err, data) => {
  if (err) {
    console.error(err)
  }
  const satData = JSON.parse(data.body);
    console.log(satData)

  const target = document.querySelector('#satNav')
    target.innerHTML = greeting({name: satData.name})

  const clickButton = document.querySelector('#add');
  clickButton.addEventListener('click', (display) => {
      const divTarget = document.querySelector('#satNav')
      divTarget.innerHTML = greeting({id: satData.id,latitude: satData.latitude, longitude: satData.longitude})

    })

})
}
