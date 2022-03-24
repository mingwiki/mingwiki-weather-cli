#!/usr/bin/env node
const weather = require('mingwiki-weather')

weather.get(process.argv[2])
  .then(data => {
    // console.log(data)
    console.log('当前城市:' + data.result.location.city)
    console.log('邮编   :' + data.result.location.id)
    console.log('天气概况:')
    console.log(` *  ${data.result.now.text}`)
    console.log(` * 温度: ${data.result.now.temp} 摄氏度`)
    console.log(` * 体感温度: ${data.result.now.feels_like} 摄氏度`)
    console.log(` * 风向: ${data.result.now.wind_dir}`)
    console.log(` * 风强: ${data.result.now.wind_class}`)
  })
  .catch(err => console.log(err))
