const express = require('express');
const app = express();
const axios = require('axios');
var cors = require('cors');

app.use(cors());

app.get('/weather', (req, res) => {
  axios.get('https://samples.openweathermap.org/data/2.5/forecast', {
    params: {
      q: "M%C3%BCnchen,DE",
      appid: "b6907d289e10d714a6e88b30761fae22"
    }
  })
    .then(response => {
      // console.log(response);
      res.send({data: response.data});
    })
    .catch(error => {
      console.log(error)
    });
})

app.listen(8080, () => {
  console.log('listening on port 8080')
})

const https = require('https')
const options = {
  hostname: 'samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22',
  port: 443,
  method: 'GET'
}