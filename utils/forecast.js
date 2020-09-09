const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=5f6ab250dceddfe833338f5c2fc9c44a&query=' + longitude +','+ latitude + '&units=f'
    request ({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to location service', undefined)

        }else if (body.error){
            callback('Unable to find the location', undefined)
        }else {
    
            callback(undefined, body.current.weather_descriptions[0] + ' . It is  currently ' + body.current.temperature + ' degress out. This is a ' + body.current.precip + ' % Chance of rain')

        }
    })

}
module.exports = forecast